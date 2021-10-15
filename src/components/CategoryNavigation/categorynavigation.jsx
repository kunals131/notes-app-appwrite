import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ActionAreaCard from "../card/card";
import NotesContainer from "../notesContainer/notesContainer";
import NewCard from "../NewNote/newNote";
import { getAllNotes, getNotesViaCategory } from "../../appwrite/database.appwrite";
import { useEffect } from "react";

const buttonStyle = {
  display : 'flex',
  justifyContent : 'center',
  marginTop : '1rem',
  marginBottom : '0.5rem'
}

export default function ScrollableTabsButtonForce(props) {
  const [value, setValue] = React.useState(0);
  const [notes,setNotes] = React.useState(props.notes);
  const [changed,setchanged] = React.useState(false)


  const handleChange = (event, newValue) => {
    setchanged(true);
    setValue(newValue);
    if (newValue===0) {
      getAllNotes(props.user).then((response)=>{
        setNotes(response['documents']);
        console.log(response['documents'])
      }, err=>console.log(err))
    }
    else {
      getNotesViaCategory(props.user,newValue).then(res=>{
        setNotes(res['documents'])
        console.log(res['documents'])
      }, err=>console.log(err))
    }
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
      <NotesContainer {...props} notes= {(!changed)?props.notes:notes}></NotesContainer>
      <div style={buttonStyle}>
      <NewCard category={value} user = {props.user}>Create New Card</NewCard>
      </div>
    </div>
  );
}
