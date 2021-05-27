import { gql } from '@apollo/client';

// We disable linting for local fields because there is no way to add them to
// the fetched schema.
// https://github.com/apollographql/eslint-plugin-graphql/issues/99
/* eslint-disable graphql/template-strings */
/**
 * Local query. GQL support is not available as of today.
 *
 * Once available, we can change the query to match the schema.
 */
const GET_GIFT_OPTIONS = gql`
    query getGiftOptions($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            include_gift_receipt @client
            include_printed_card @client
            local_gift_message @client
        }
    }
`;
/* eslint-enable graphql/template-strings */

export default {
    queries: {
        getGiftOptionsQuery: GET_GIFT_OPTIONS
    }
};
