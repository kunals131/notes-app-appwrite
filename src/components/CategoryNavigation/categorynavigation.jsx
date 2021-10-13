import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ActionAreaCard from '../card/card';

export default function ScrollableTabsButtonForce(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log(event.target);
  };

  return (
    <div class="CategoryNotes">
    <Box sx={{ maxWidth: '70%', display: 'flex', justifyContent: 'center', margin : 'auto', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>

    <div className="notes-container">
        <ActionAreaCard title="homeee" content={'loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111'}></ActionAreaCard>
    </div>
    </div>
  );
}