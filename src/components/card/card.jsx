import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { display } from '@mui/system';

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
  height : '50%',
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

    }

  
  return (
    <div>
    <Card sx={CardStyle}>
      <CardActionArea onClick={handleOpen}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography multiline variant="body2" color="text.secondary" >
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
          multiline
          rows={10}
          defaultValue={body}
        />
        <Button sx ={fieldStyle} variant="contained">Save</Button>
        </Box>
      </Modal>
    </div>
  );
}