import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            firstName
            lastName
            email
            reviews {
                review
                author
            }
        }
    }
`;

export const QUERY_REVIEWS = gql`
    query {
        reviews {
            review
            author
        }
    }
`;