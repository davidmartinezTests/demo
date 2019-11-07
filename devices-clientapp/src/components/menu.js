import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const machineNames = [
  { name: "Window Workstation", value: "WINDOWS_WORKSTATION" },
  { name: "Windows Server", value: "WINDOWS_SERVER" },
  { name: "Mac", value: "MAC" }
];

const Menu = props => {
  const [selectedMachines, setMachineName] = useState([]);
  const [sortingBy, setSortByName] = useState("");

  const selection = props.allDevices.filter(device => {
    return selectedMachines.includes(device.type);
  });

  const handleMachineChange = event => {
    setMachineName(event.target.value);
  };
  const updateSelection = () => {
    props.setDevices(selection);
    setSortByName("");
  };

  const handleSortChange = event => {
    setSortByName(event.target.value);
    props.setSort(event.target.value);
  };
  return (
    <div>
      <FormControl className="app__nav--sort">
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={sortingBy}
          onChange={handleSortChange}
        >
          <MenuItem value="id">ID</MenuItem>
          <MenuItem value="system_name">System Name</MenuItem>
          <MenuItem value="type">Type</MenuItem>
          <MenuItem value="hdd_capacity">HDD Capacity</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="app__nav--filter">
        <InputLabel id="demo-mutiple-chip-label">Device Type(s)</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedMachines}
          onChange={handleMachineChange}
          onClose={updateSelection}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div>
              {selected.map(value => (
                <Chip size="small" key={value} label={value} />
              ))}
            </div>
          )}
        >
          {machineNames.map(m => (
            <MenuItem key={m.value} value={m.value}>
              {m.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button
        type="button"
        onClick={props.handleOpen}
        className="app__nav--add"
      >
        + Add Machine
      </button>
    </div>
  );
};

export default Menu;
