import { request, gql} from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          slug
          title
          excerpt
          categories {
            name
            slug
          }
          featuredImage {
            url
          }
        }
      }
    }
  }
  `;
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}