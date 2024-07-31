import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>実装してね</p>
      <Link href="/dog">dog detail</Link>
    </div>
  );
}
