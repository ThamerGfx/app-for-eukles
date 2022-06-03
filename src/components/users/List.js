import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import ListUserAlbums from "../albums/ListUserAlbums";

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUserAlbums } from "../../store/actions/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function List() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [userToAlbum, setUserToAlbum] = React.useState({});

  const handleClickOpen = (userItem) => {
    setOpen(true);
    setUserToAlbum(userItem);
    dispatch(getUserAlbums(userItem));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const usersReducer = useSelector((state) => state.usersReducer);
  const { allUsers } = usersReducer;

  useEffect(() => {
    dispatch(getAllUsers());
  });

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <ListUserAlbums
          open={open}
          handleClose={handleClose}
          userToAlbum={userToAlbum}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">UserName</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phone</StyledTableCell>
                <StyledTableCell align="center">Website</StyledTableCell>
                <StyledTableCell align="center">Company</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Show Albums</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.email}</StyledTableCell>
                  <StyledTableCell align="center">{item.phone}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.website}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.company.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.address.street} {item.address.suite}{" "}
                    {item.address.city} {item.address.zipcode}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton onClick={() => handleClickOpen(item)}>
                      <VisibilityTwoToneIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
