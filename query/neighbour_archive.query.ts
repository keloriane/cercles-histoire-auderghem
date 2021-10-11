export const NEIGHBOUR_ARCHIVE_QUERY = `
query MyQuery ($id: ID!) {
    neighbour(id: $id) {
        id
        quartier{
            imagePrincipale{
                sourceUrl
            }
            description
            nomQuartier
            archives
        }
    }
}
`;
