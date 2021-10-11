export const HOMEPAGE_QUERY = `query MyQuery {
  neighbours {
    nodes {
      id
      title
      quartier {
        archives
        nomQuartier
        galleriePhotos {
          id
          link
          sourceUrl
        }
      }
    }
  }
}`;

export const NEIGHBOURS_FILTERED = `
query FilteredNeighbour($id: ID!) {
  neighbour(id: $id) {
    id
    title
    quartier {
      nomQuartier
      archives
      galleriePhotos {
          id
          link
          sourceUrl
        }
        }
    }
}
`
export const HOMEPAGE_POSTS_QUERY = `query MyQuery {
   posts (last: 5) {
    nodes {
    id
    title
    modified
    content
      post_thumbnail {
        thumbnail {
          sourceUrl
        }
      }
    }
  }
}`;


export const POSTS_FILTERED = `
query FilteredNeighbour($id: ID!) {
  post(id: $id) {

    id
    title
    date
    content
      post_thumbnail {
        thumbnail {
          sourceUrl
        }
      }
    }

}
`

