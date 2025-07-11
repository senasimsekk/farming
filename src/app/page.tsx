'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Tohum Dikme Oyunu</h1>
      <button onClick={() => router.push('/signin')}>Sign In</button>
      <p>Hesabın yok mu?</p>
      <button onClick={() => router.push('/signup')}>Sign Up</button>
    </div>
  );
}