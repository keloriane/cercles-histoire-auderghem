export const HOME_ARCHIVES_QUERY = `query QueryArchive {
 archiveNeighbours {
    nodes {
      id
      archive_details {
        contenu
        description
        titre
        preview {
          sourceUrl
        }
      }
    }
  }
}
`;
