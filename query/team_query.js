export const TEAM_QUERY = `
query MyQuery {
  teams {
    nodes {
      team {
        nom
        photoDeProfile {
          mediaItemUrl
        }
        prenom
        description
      }
    }
  }
}
`
