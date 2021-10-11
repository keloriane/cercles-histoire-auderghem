export const POST_QUERY = `
query Post($id: ID!) {
  post(id: $id){
    title
    content
  }
}
`;

export const POSTS_QUERY = `
query AllPosts($cursor: String, $first: Int) {
  posts(first: $first, after: $cursor) {
    edges {
      node {
        id
        content
        title
        post_thumbnail{
          thumbnail{
            sourceUrl
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

`;
