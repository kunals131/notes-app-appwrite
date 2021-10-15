import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dropdown from '../Dropdown/dropdown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { display } from '@mui/system';
import { deleteNote, editNote } from '../../appwrite/database.appwrite';
import './card.scss'
import { refreshPage } from '../../utils/utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
      xs : '70%',
      sm : '50%'
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height : 'auto',
  display : 'flex',
  flexDirection : 'column',

};

const fieldStyle = {
    marginTop : '1rem',
}

const CardStyle = {
    maxWidth : {
        xs : 250,
        sm : 340
    },
}


export default function ActionAreaCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title,setTitle] = React.useState(props.title);
    const[body,setBody] = React.useState(props.content);

    const handleChange = ()=>{
      console.log(props.noteId)
      const data = {
        "title" : title,
        "content" : body, 
      }
      editNote(props.noteId,data).then(res=>{
        console.log(res)
        handleClose()
      },err=>alert(err));

    }
    const handleDelete = ()=>{
      deleteNote(props.noteId).then(res=>{
        console.log(res)
        handleClose();
        refreshPage();
      })
    }
  
  return (
    <div>
    <Card sx={CardStyle}>
      <CardActionArea onClick={handleOpen}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography  variant="body2" color="text.secondary" >
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <TextField label="Title" fullWidth value={title} onChange={(event)=>setTitle(event.target.value)} color="primary" focused />
        <TextField
          id="outlined-multiline-static"
          sx = {fieldStyle}
          label="Note"
          fullWidth
          onChange={(event)=>setBody(event.target.value)}
          multiline={true}
          rows={10}
          defaultValue={body}
        />
        <Dropdown {...props} title={title}></Dropdown>
        <div className="Buttons">
        <Button sx ={fieldStyle} variant="contained" onClick={handleChange}>Save</Button>
        <Button sx={fieldStyle} variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}