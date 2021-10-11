export const GALLERYQUERY = `
query Gallery {
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
