'use client';

import { useEffect, useState } from 'react';
import {
  AdminListSearchCombobox,
  type ListSearchComboboxProps,
} from '@/components/admin/AdminListSearchCombobox';

const inputClassName =
  'mh-typeahead-input w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-16 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500';

export function PublicListSearchCombobox<T>(props: ListSearchComboboxProps<T>) {
  return (
    <AdminListSearchCombobox
      {...props}
      rootClassName="mh-typeahead relative min-w-0 flex-1"
      inputClassName={props.inputClassName ?? inputClassName}
    />
  );
}

type ListingSearchProps<T> = ListSearchComboboxProps<T> & {
  label: string;
};

export function PublicListingSearch<T>({ label, ...props }: ListingSearchProps<T>) {
  const [draft, setDraft] = useState(props.committedValue);

  useEffect(() => {
    setDraft(props.committedValue);
  }, [props.committedValue]);

  return (
    <form
      className="mh-events-search mb-8 flex flex-col gap-3 sm:flex-row sm:items-start"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        props.onCommit(draft.trim());
      }}
    >
      <label htmlFor={props.inputId} className="sr-only">
        {label}
      </label>
      <PublicListSearchCombobox
        {...props}
        onInputChange={(value) => {
          setDraft(value);
          props.onInputChange?.(value);
        }}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Search
        </button>
        <button
          type="button"
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => props.onCommit('')}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
