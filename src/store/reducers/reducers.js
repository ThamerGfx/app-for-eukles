const initState = {
  allUsers: [],
  userAlbums: [],
  albumImages: [],
  userData: {},
  albumData: {},
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_SUCCESS":
      return {
        ...state,
        allUsers: action.payload,
      };
    case "GET_USER_ALBUMS_SUCCESS":
      return {
        ...state,
        userAlbums: action.payload,
      };
    case "GET_ALBUM_DETAILS_SUCCESS":
      return {
        ...state,
        albumImages: action.payload,
      };
    case "SELECT_USER_ITEM":
      return {
        ...state,
        userData: action.itemUser,
      };
    case "SELECT_ALBUM_ITEM":
      return {
        ...state,
        albumData: action.itemAlbum,
      };
      default: 
      return state;
  }
  // if (action.type === "GET_ALL_USERS_SUCCESS"){
  //   return {
  //     ...state,
  //     allUsers: action.payload,
  //   }
  // }
  // if (action.type === "GET_USER_ALBUMS_SUCCESS"){
  //   return {
  //     ...state,
  //     userAlbums: action.payload,
  //   }
  // }
  // if (action.type === "GET_ALBUM_DETAILS_SUCCESS"){
  //   return {
  //     ...state,
  //     albumDetails: action.payload,
  //   }
  // }
  // if (action.type === "SELECT_USER_ITEM") {
  //   return {
  //     ...state,
  //     userData: action.itemUser
  //   }
  // }
  // if (action.type === "SELECT_ALBUM_ITEM") {
  //   return {
  //     ...state,
  //     albumData: action.itemAlbum
  //   }
  // }
  // return state;
};

export default usersReducer;
