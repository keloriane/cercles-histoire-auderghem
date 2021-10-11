export const NEIGHBOURS_HEADERS_FILTERS = `query HeaderFilter {
  neighbours {
    nodes {
        id
      quartier {
        nomQuartier
        archives
        galleriePhotos {
          sourceUrl
        }
      }
    }
  }
}
`;
export const NEIGHBOURS_HEADERS_DEFAULT = `query HeaderFilter {
  neighbours (first:1) {
    nodes {
        id
      quartier {
        nomQuartier
        archives
        galleriePhotos {
          sourceUrl
        }
      }
    }
  }
}
`;
