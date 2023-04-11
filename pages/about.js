import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyWebClass.org | About</title>
      </Head>
      <div>
        <h1>About</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </div>
    </>
  );
}