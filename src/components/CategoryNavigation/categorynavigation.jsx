import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ActionAreaCard from "../card/card";
import NotesContainer from "../notesContainer/notesContainer";
import NewCard from "../NewNote/newNote";

const buttonStyle = {
  display : 'flex',
  justifyContent : 'center',
  marginTop : '1rem',
  marginBottom : '0.5rem'
}

export default function ScrollableTabsButtonForce(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className="CategoryNotes">
      <Box
        sx={{
          maxWidth: "70%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab value={0} label="Recents" />

          {props.categories.map((category) => (
            <Tab
              value={category["$id"]}
              key={category["$id"]}
              label={category["title"]}
            />
          ))}
        </Tabs>
      </Box>
      <NotesContainer></NotesContainer>
      <div style={buttonStyle}>
      <NewCard >Create New Card</NewCard>
      </div>

    </div>
  );
}
