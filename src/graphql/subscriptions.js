/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
