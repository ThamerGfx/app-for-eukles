export const getAllUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "GET_ALL_USERS_SUCCESS",
          payload: res,
        });
        return res;
      })
      .catch((err) => console.log("error fetching users: ", err));
  };
};

export const getUserAlbums = (userItem) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userItem.id}/albums`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "GET_USER_ALBUMS_SUCCESS",
          payload: res,
        });
        return res;
      })
      .catch((err) => console.log("error fetching user albums: ", err));
  };
};

export const getAlbumImages = (albumItem) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumItem.id}/photos`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "GET_ALBUM_DETAILS_SUCCESS",
          payload: res,
        });
        return res;
      })
      .catch((err) => console.log("error fetching album details: ", err));
  };
};

export const selectItemUser = (itemUser) => {
  return {
    type: "SELECT_USER_ITEM",
    itemUser
  }
}

export const selectItemAlbum = (itemAlbum) => {
  return {
    type: "SELECT_ALBUM_ITEM",
    itemAlbum
  }
}