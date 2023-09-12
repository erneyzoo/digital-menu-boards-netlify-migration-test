import { gql } from '@apollo/client';

export const CREATE_REWARD_MUTATION = gql`
  mutation MemberReward($microSiteId: String!) {
    createMemberReward(microSiteId: $microSiteId) {
      success
      message
      reward {
        id
        memberId
        prizeTypeId
        couponHash
        couponExpiry
        redeemed
        redeemedDate
        title
        description
        imageUrl
      }
    }
  }
`;
