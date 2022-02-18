import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Just your average code enjoyer</p>
        <p>
          <a href="https://nextjs.org/learn"> Next.js docs</a>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
