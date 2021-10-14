import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ActionAreaCard from "../card/card";

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

      <div className="notes-container">
        <ActionAreaCard
          title="homeee"
          content={
            "loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111loerem121111111111111111111111111111111"
          }
        ></ActionAreaCard>
      </div>
    </div>
  );
}
