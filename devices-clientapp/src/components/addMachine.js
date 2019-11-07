import React, { useState } from "react";
import useStyles from "../styles";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  MenuItem,
  Modal,
  Select
} from "@material-ui/core";

const AddMachine = props => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [hdd, setHDD] = useState("");
  const [type, setType] = useState("");

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleTypeChange = event => {
    setType(event.target.value);
  };
  const handleHDDChange = event => {
    setHDD(event.target.value);
  };
  const add = () => {
    fetch("http://localhost:3000/devices/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        system_name: document.getElementById("machineName").value,
        type: type,
        hdd_capacity: hdd
      })
    }).then(() => {
      alert("Saved");
      setName("");
      handleClose();
      props.fetchData();
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className="outter">
          <div className="inner">
            <h2 id="modal-title">Add Machine</h2>

            <div>
              <FormControl>
                <InputLabel htmlFor="machineName">Name</InputLabel>
                <Input
                  id="machineName"
                  aria-describedby="name-helper-text"
                  value={name}
                  onChange={handleNameChange}
                  required={true}
                />
                <FormHelperText id="name-helper-text">
                  Please enter a machine name.
                </FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="machineType">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="machineType"
                  name="machineType"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <MenuItem value="WINDOWS_WORKSTATION" selected>
                    Windows Workstation
                  </MenuItem>
                  <MenuItem value="WINDOWS_SERVER">Windows Server</MenuItem>
                  <MenuItem value="MAC">Mac</MenuItem>
                </Select>

                <FormHelperText id="type-helper-text">
                  Please enter a machine type.
                </FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="machineHDD">HDD</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="machineHDD"
                  name="machineHDD"
                  value={hdd}
                  onChange={handleHDDChange}
                >
                  <MenuItem value="32">32 GB</MenuItem>
                  <MenuItem value="64">64 GB</MenuItem>
                  <MenuItem value="128">128 GB</MenuItem>
                  <MenuItem value="256">256 GB</MenuItem>
                </Select>
                <FormHelperText id="hdd-helper-text">
                  Please enter a machine hdd.
                </FormHelperText>
              </FormControl>
            </div>
            <Button
              variant="contained"
              disabled={name === "" || type === "" || hdd === "" ? true : false}
              onClick={add}
            >
              Add Machine
            </Button>

            {props.open ? (
              <button
                type="button"
                onClick={handleClose}
                className="modal--close"
              >
                CLOSE
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AddMachine;
