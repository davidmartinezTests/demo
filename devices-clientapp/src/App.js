import React, { useState, useEffect } from "react";
import "./App.css";
import Devices from "./components/devices";
import Menu from "./components/menu";
import AddMachine from "./components/addMachine";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const [allDevices, getDevices] = useState([]);
  const [filteredDevices, setDevices] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3000/devices");
    res
      .json()
      .then(res => getDevices(res))
      .catch(() => getDevices(["error"]));
  }
  useEffect(() => {
    fetchData();
  }, []);

  let selectedDevices =
    filteredDevices.length === 0 ? allDevices : filteredDevices;

  //Machine modal funcs
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  //sort method
  const setSort = by => {
    //hdd_capcity is a string, lets turn it to numbers
    const sortedList = selectedDevices.map(e => {
      return {
        ...e,
        hdd_capacity: parseInt(e.hdd_capacity)
      };
    });
    //sort by key
    sortedList.sort((a, b) => (a[by] > b[by] ? 1 : -1));
    //set list
    setDevices(sortedList);
  };

  return (
    <div className={[classes.app, "app"].join(" ")}>
      <header className="app__header"></header>
      <nav className="app__nav">
        <Menu
          allDevices={allDevices}
          setDevices={setDevices}
          setSort={setSort}
          handleOpen={handleOpen}
        />
      </nav>
      <section>
        <Devices devices={selectedDevices} fetchData={fetchData} />
        <AddMachine setOpen={setOpen} open={open} fetchData={fetchData} />
      </section>
    </div>
  );
}

export default App;
