import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { editCategory, editNote } from '../../appwrite/database.appwrite';

export default function Dropdown(props) {
  const [category, setCategory] = React.useState('no-category');

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(props.categories)
    console.log("category for post" + props.title + "changed to " + event.target.value);
    editNote(props.noteId,{"category" : event.target.value}).then(res=>console.log(res), err=>alert(err.message))
  };

  

  const styles = {
    marginTop : '1rem',
    m : 1,
    minWidth : {
        xs : '60%',
        sm : '50%'
    },
    marginTop : '1rem',
    display : 'flex',
    justifyContent : 'center',
}


  return (
    <div>
      <FormControl sx={styles}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            props.categories.map(category=>(
              <MenuItem key={[category['$id']]} value={category['$id']}>{category['title']}</MenuItem>
            ))
          }

        </Select>
      </FormControl>
    </div>
  );
}