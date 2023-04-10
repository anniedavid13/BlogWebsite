import React from 'react';
import { useRouter } from 'next/router';

// import { PostDetail, Categories, PostWidget, 
//     Author, Comments, CommentsForm } from '../../components';
 
import { getPosts, getPostDetails } from '../../services';
import CommentForm from '../../components/CommentForm';
import PostDetail from '../../components/PostDetail';
import Categories from '../../components/Categories';
import PostWidget from '../../components/PostWidget';
import Author from '../../components/Author';
import Comments from '../../components/Comments';
// import { AdjacentPosts } from '../../sections';

const PostDetails = () => {
  return(
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className= " col-span-a lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentForm /> 
          <Comments />
          </div>
          <div className= " col-span-1 lg:col-span-4">
          <div className= " relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
       </div>
    </div>   
  )
}

export default PostDetails;

export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}