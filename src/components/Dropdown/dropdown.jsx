import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log("category for post" + props.title + "changed to " + event.target.value);
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
          <MenuItem value={10}>Category -1 </MenuItem>
          <MenuItem value={21}>Category -2</MenuItem>
          <MenuItem value={22}>Category -3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}