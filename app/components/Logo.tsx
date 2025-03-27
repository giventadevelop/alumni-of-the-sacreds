import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="The Sacreds Alumni Logo"
      width={250}
      height={200}
      priority
    />
  );
}