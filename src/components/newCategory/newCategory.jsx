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
import { createCategory } from '../../appwrite/database.appwrite';
import Modal from '@mui/material/Modal';
import { display } from '@mui/system';
import { refreshPage } from '../../utils/utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
      xs : '60%',
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
export default function NewCategory(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title,setTitle] = React.useState('');

    const handleSubmit = ()=>{
        const data = {
            "title" : title,
            "user" : props.user, 
            "count" : 0,
        }
        createCategory(data).then(res=>{
            console.log(res);
            handleClose();
            refreshPage();
        }, err=>console.log(err))

    }





  
  return (
    <div>
    <Button {...props} onClick={handleOpen} variant="contained">{props.children}</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <TextField label="Title" fullWidth value={title} onChange={(event)=>setTitle(event.target.value)} color="primary" focused />

        <Button sx ={fieldStyle} onClick={handleSubmit} variant="contained">Save</Button>
        </Box>
      </Modal>
    </div>
  );
}