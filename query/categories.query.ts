export const CATEGORIES_QUERY = `
    query MyQuery {
        categories{
            nodes {
                id
                name
                slug
            }
            pageInfo{
                endCursor
            }
        }
    }
`;
