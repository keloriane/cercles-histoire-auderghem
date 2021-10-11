export const CATEGORIES_FETCH_MORE_QUERY = `
    query categoriesFetchMoreQuery ($list:[String!], $cursor: String, $first: Int) {
        mediaItems(first:$first, after: $cursor, where: {taxQuery: {taxArray: [
            {
                terms: $list,
                taxonomy: CATEGORY
                operator: IN
                field: NAME
            }]
        }}){
            edges{
                node{
                    id
                    title
                    sourceUrl
                    categories{
                        nodes{
                            name
                        }
                    }
                }

            }
            pageInfo{
                 hasNextPage
                 endCursor
            }
        }
    }
`;
