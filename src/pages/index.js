import Head from "next/head"
import PostCard from "../components/PostCard"
import PostWidget from "../components/PostWidget"
import Categories from "../components/Categories"
import {getPost} from "../services"
// const posts = [
//   {title: "Post 1", excerpt: "post-1"},
//   {title: "Post 2", excerpt: "post-2"},
//   {title: "Post 3", excerpt: "post-3"},
// ]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg-col-span-8 col-span-1">
        {posts.map((post)=>(
          <PostCard key={post.title} post={post}/>
        ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className = "lg:sticky lg:top-8">
            <PostWidget />
            <Categories />
         </div>
        </div>
      </div>

      </div>
  )
}