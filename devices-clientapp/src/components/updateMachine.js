import React, { useState, useEffect } from "react";
import useStyles from "../styles";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Modal
} from "@material-ui/core";

const UpdateMachine = props => {
  const classes = useStyles();
  const [name, setName] = useState("0");
  const [hdd, setHDD] = useState("0");
  const [type, setType] = useState("0");
  const init = {
    id: "",
    system_name: "",
    type: "",
    hdd_capacity: ""
  };

  const handleClose = () => {
    props.openUpdate(false);
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

  useEffect(() => {
    async function getMachine() {
      const res = await fetch(`http://localhost:3000/devices/${props.id}`);
      res.json().then(res => {
        setName(res.system_name);
        setType(res.type);
        setHDD(res.hdd_capacity);
      });
    }
    getMachine();
  }, [props]);

  const update = () => {
    fetch(`http://localhost:3000/devices/${props.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        system_name: name,
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
            <h2 id="modal-title">Update Machine: {props.id}</h2>
            <div>
              <FormControl>
                <InputLabel htmlFor="machineName">Name</InputLabel>
                <Input
                  id="machineName"
                  aria-describedby="name-helper-text"
                  value={name ? name : init.system_name}
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
                <Input
                  id="machineType"
                  name="machineType"
                  value={type ? type : init.type}
                  onChange={handleTypeChange}
                />

                <FormHelperText id="type-helper-text">
                  Please enter a machine type.
                </FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="machineHDD">HDD</InputLabel>
                <Input
                  id="machineHDD"
                  name="machineHDD"
                  value={hdd ? hdd : init.hdd_capacity}
                  onChange={handleHDDChange}
                />

                <FormHelperText id="hdd-helper-text">
                  Please enter a machine hdd.
                </FormHelperText>
              </FormControl>
            </div>
            <Button variant="contained" onClick={update}>
              Update Machine
            </Button>

            {props.open ? (
              <button
                type="button"
                onClick={handleClose}
                className="modal--close"
              >
                Done
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
export default UpdateMachine;
