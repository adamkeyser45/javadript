import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                email
                password
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String! ) {
    addUser(firstName: $firstName , lastName: $lastName , email: $email, password: $password ) {
            token
            user {
                _id
                firstName
                lastName
                email
                password
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation addReview($review: String!) {
        addReview(review: $review) {
            _id
            review
            author
        }
    }
`;