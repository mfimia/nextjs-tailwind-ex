import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

// nextjs method. returns props that components can consume. takes in params from name of this file "[]"
// runs at build time
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

// nextjs method. returns object that generates dynamic paths
// runs at build time
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    // paths not included will return 404
    // if set to true, nextjs will serv a "fallback" version of the page
    fallback: false,
  };
};

// component. consumes post data and has generated dynamic route
const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
