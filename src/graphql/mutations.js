/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      portfolioReturns
      brokerage
      groups {
        id
        name
        memberCount
        members {
          id
          username
          firstName
          lastName
          bio
          image
          portfolioReturns
          brokerage
          createdAt
          updatedAt
        }
        posts {
          type
          id
          content
          owner
          timestamp
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      portfolioReturns
      brokerage
      groups {
        id
        name
        memberCount
        members {
          id
          username
          firstName
          lastName
          bio
          image
          portfolioReturns
          brokerage
          createdAt
          updatedAt
        }
        posts {
          type
          id
          content
          owner
          timestamp
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      portfolioReturns
      brokerage
      groups {
        id
        name
        memberCount
        members {
          id
          username
          firstName
          lastName
          bio
          image
          portfolioReturns
          brokerage
          createdAt
          updatedAt
        }
        posts {
          type
          id
          content
          owner
          timestamp
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      memberCount
      members {
        id
        username
        firstName
        lastName
        bio
        image
        portfolioReturns
        brokerage
        groups {
          id
          name
          memberCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      posts {
        type
        id
        content
        owner
        timestamp
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      memberCount
      members {
        id
        username
        firstName
        lastName
        bio
        image
        portfolioReturns
        brokerage
        groups {
          id
          name
          memberCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      posts {
        type
        id
        content
        owner
        timestamp
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      memberCount
      members {
        id
        username
        firstName
        lastName
        bio
        image
        portfolioReturns
        brokerage
        groups {
          id
          name
          memberCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      posts {
        type
        id
        content
        owner
        timestamp
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
