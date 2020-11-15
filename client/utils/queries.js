import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
    me {
        _id
        firstName
        lastName
        email
        reviews {
            _id
            review
            author
        }
    }
}
`;