export const GALLERYFILTERS = `
query MyQuery($list:[String!]) {
  category(id: $list) {
    name
    mediaItems {
      nodes {
        mediaItemUrl
        sourceUrl
      }
    }
  }
}
`;
export const GALLERYALL = `
query allIds {
  categories {
    nodes {
      id
    }
  }
}
`;
