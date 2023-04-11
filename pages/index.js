import Head from 'next/head';
import Navbar from '../components/Navbar';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Our mission is to create a community of people committed to helping students
            of all ages and backgrounds succeed in the modern software industry by providing
            educational opportunities and a practical, hands-on learning experience
        </p>
        <p>
         {' '}
          <a href="/about">About</a>
        </p>
      </section>
    </Layout>
  );
}