import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { getAlbumImages, selectItemUser, selectItemAlbum } from '../../store/actions/actions'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, userToAlbum }) {

  const usersReducer = useSelector((state) => state.usersReducer);
  const { userAlbums } = usersReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShow = (albumItem) => {
    dispatch(getAlbumImages(albumItem))
    dispatch(selectItemUser(userToAlbum))
    dispatch(selectItemAlbum(albumItem))
    navigate("/albums/photos");
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Voici les albums de <b>{userToAlbum.name}</b>
        </DialogTitle>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {userAlbums.map((album) => (
            <ListItemButton onClick={() => handleShow(album)}>
              <ListItemText key={album.id} primary={album.title} />
            </ListItemButton>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
