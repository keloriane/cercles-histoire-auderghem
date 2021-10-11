export const SINGLE_QUERY = `
query QueryArchive($id: ID!) {
  archiveNeighbour(id: $id) {
    archive_details {
      contenu
      description
      titre
    }
  }
}
`;
