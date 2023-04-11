import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>MyWebClass.org | About</title>
      </Head>
      <div>
        <h1>About</h1>
        <h2>
          <a href="./">← Back to home</a>
        </h2>
      </div>
    </>
  );
}