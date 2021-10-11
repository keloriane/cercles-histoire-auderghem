export const NEIGHBOUR_GALLERY_QUERY = `
query MyQuery ($id: ID!) {
    neighbour(id: $id) {
        id
        quartier{
            imagePrincipale{
                sourceUrl
            }
            nomQuartier
            description
            galleriePhotos{
                sourceUrl
            }
        }
    }
}
`;
