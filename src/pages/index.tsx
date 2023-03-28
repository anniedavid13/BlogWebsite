import Head from "next/head"

const posts = [
  {title: "Post 1", excerpt: "post-1"},
  {title: "Post 2", excerpt: "post-2"},
  {title: "Post 3", excerpt: "post-3"},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-pink-700">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post,index)=>(
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
      </div>
  )
}