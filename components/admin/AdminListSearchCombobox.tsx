'use client';

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';

export const SUGGESTION_LIMIT = 20;
const DEBOUNCE_MS = 280;

export type ListSearchComboboxProps<T> = {
  items: readonly T[];
  committedValue: string;
  onCommit: (value: string) => void;
  onInputChange?: (value: string) => void;
  getSearchFields: (item: T) => ReadonlyArray<string | number | null | undefined>;
  getCommitValue: (item: T) => string;
  formatPrimary: (item: T) => string;
  formatSecondary?: (item: T) => string;
  getKey: (item: T) => string;
  placeholder: string;
  inputId?: string;
  inputClassName?: string;
  rootClassName?: string;
};

export function matchesQuery(
  fields: ReadonlyArray<string | number | null | undefined>,
  query: string,
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((value) => String(value ?? '').toLowerCase().includes(q));
}

function filterLocally<T>(
  items: readonly T[],
  query: string,
  getSearchFields: (item: T) => ReadonlyArray<string | number | null | undefined>,
): T[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...items];
  return items.filter((item) => matchesQuery(getSearchFields(item), q));
}

export function AdminListSearchCombobox<T>({
  items,
  committedValue,
  onCommit,
  onInputChange,
  getSearchFields,
  getCommitValue,
  formatPrimary,
  formatSecondary,
  getKey,
  placeholder,
  inputId,
  inputClassName,
  rootClassName,
}: ListSearchComboboxProps<T>) {
  const reactId = useId();
  const listboxId = `${inputId ?? reactId}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef(getSearchFields);
  fieldsRef.current = getSearchFields;
  const arrowedRef = useRef(false);

  const [inputValue, setInputValue] = useState(committedValue);
  const [open, setOpen] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(committedValue);
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    setInputValue(committedValue);
    setDebouncedQuery(committedValue);
  }, [committedValue]);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(inputValue), DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    arrowedRef.current = false;
    setHighlight(-1);
  }, [debouncedQuery]);

  const matched = useMemo(
    () => filterLocally(items, debouncedQuery, (item) => fieldsRef.current(item)),
    [items, debouncedQuery],
  );
  const suggestions = matched.slice(0, SUGGESTION_LIMIT);
  const hasMore = matched.length > SUGGESTION_LIMIT;

  useEffect(() => {
    if (!open) return;
    const onDocumentMouseDown = (event: globalThis.MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => document.removeEventListener('mousedown', onDocumentMouseDown);
  }, [open]);

  const commit = (value: string) => {
    const next = value.trim();
    setInputValue(next);
    setOpen(false);
    onInputChange?.(next);
    onCommit(next);
  };

  const keepFocus = (event: MouseEvent) => {
    event.preventDefault();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      arrowedRef.current = true;
      setHighlight((current) => {
        const next = current + 1;
        return next >= suggestions.length ? 0 : next;
      });
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      arrowedRef.current = true;
      setHighlight((current) => {
        if (suggestions.length === 0) return -1;
        if (current <= 0) return suggestions.length - 1;
        return current - 1;
      });
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const immediate = filterLocally(items, inputValue, (item) => fieldsRef.current(item));
      const highlighted = arrowedRef.current ? suggestions[highlight] : undefined;
      if (highlighted) {
        commit(getCommitValue(highlighted));
        return;
      }
      const only = immediate.length === 1 ? immediate[0] : undefined;
      if (only) {
        commit(getCommitValue(only));
        return;
      }
      commit(inputValue);
    }
  };

  const activeOptionId = highlight >= 0 ? `${listboxId}-option-${highlight}` : undefined;

  return (
    <div ref={containerRef} className={rootClassName ?? 'relative min-w-0 flex-1'}>
      <input
        id={inputId}
        type="text"
        role="combobox"
        className={inputClassName}
        value={inputValue}
        placeholder={placeholder}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={open ? activeOptionId : undefined}
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          const next = event.target.value;
          if (!next.trim()) {
            commit('');
            return;
          }
          setInputValue(next);
          onInputChange?.(next);
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
      />
      {inputValue ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-lg leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          aria-label="Clear search"
          onMouseDown={keepFocus}
          onClick={() => commit('')}
        >
          ×
        </button>
      ) : null}
      {open ? (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-1 max-h-80 overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          {suggestions.length === 0 ? (
            <p className="px-3 py-2 text-sm text-gray-500">No matches</p>
          ) : (
            suggestions.map((item, index) => {
              const secondary = formatSecondary?.(item);
              return (
                <button
                  key={getKey(item)}
                  id={`${listboxId}-option-${index}`}
                  type="button"
                  role="option"
                  aria-selected={index === highlight}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-blue-50 ${index === highlight ? 'bg-blue-50' : ''}`}
                  onMouseDown={keepFocus}
                  onMouseEnter={() => setHighlight(index)}
                  onClick={() => commit(getCommitValue(item))}
                >
                  <span className="block font-medium text-gray-900">{formatPrimary(item)}</span>
                  {secondary ? <span className="block text-xs text-gray-500">{secondary}</span> : null}
                </button>
              );
            })
          )}
          {hasMore ? (
            <button
              type="button"
              className="block w-full border-t border-gray-100 px-3 py-2 text-left text-sm font-medium text-blue-700 hover:bg-blue-50"
              onMouseDown={keepFocus}
              onClick={() => commit(inputValue)}
            >
              Click Enter for more
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
