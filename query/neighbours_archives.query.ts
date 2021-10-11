export const Neighbours_archivesQuery = `query NeighboursList {
  neighbours {
    nodes {
      quartier {
        nomQuartier
        galleriePhotos {
          sourceUrl
        }
      }
    }
  }
}`;

export const ARCHIVES_FETCH_MORE_QUERY = `
 query AllArchives($cursor: String, $first: Int) {
  archiveNeighbours(first: $first, after: $cursor) {
    edges {
      node {
        id
        title
        archive_details {
          preview {
            sourceUrl
          }
          contenu
          description
          titre
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
