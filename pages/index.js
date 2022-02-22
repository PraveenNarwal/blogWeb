import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
];

export default function Home() {
  return (
    <div className="container mx-auto mb-8  px-10">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticy relatve top-8"></div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
