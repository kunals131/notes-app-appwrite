import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dropdown from "../Dropdown/dropdown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
// import { display } from "@mui/system";
import { createNote} from "../../appwrite/database.appwrite";
import { reloadNotesContainer } from "../notesContainer/notesContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "60%",
    sm: "50%",
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "auto",
  display: "flex",
  flexDirection: "column",
};

const fieldStyle = {
  marginTop: "1rem",
};


export default function NewCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSave = () => {
    const data = {
      title: title,
      content: body,
      user: props.user,
      category: (props.category===0)?"no-category":props.category,

    };
    createNote(data).then(
      (res) => {
        console.log(res);
        handleClose();
        reloadNotesContainer();
      },
      (err) => console.log(err)
    );
  };

  return (
    <div>
      <Button {...props} onClick={handleOpen} variant="contained">
        {props.children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            color="primary"
            focused
          />
          <TextField
            id="outlined-multiline-static"
            sx={fieldStyle}
            label="Note"
            fullWidth
            multiline={true}
            onChange={(event) => setBody(event.target.value)}

            rows={10}
            defaultValue={body}
          />

          <Button sx={fieldStyle} variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
