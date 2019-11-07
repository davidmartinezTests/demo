import React from "react";
import UpdateMachine from "./updateMachine";
const Devices = props => {
  const handleDelete = event => {
    if (window.confirm("Do you really want to delete this entry?")) {
      const deviceID = event.target.getAttribute("data-id");

      fetch(`http://localhost:3000/devices/${deviceID}`, {
        method: "delete"
      }).then(() => {
        alert("Deleted");
        props.fetchData();
      });
    }
  };

  //Update Machine modal funcs
  const [open, openUpdate] = React.useState(false);
  const [machineID, setMachine] = React.useState("");
  const handleOpen = event => {
    const clickProps = event.target.getAttribute("data-id");
    setMachine(clickProps);
    openUpdate(true);
  };

  return (
    <div className="devices">
      <div className="devices__titles">
        <div className="devices__detail id">ID</div>
        <div className="devices__detail name">System Name</div>
        <div className="devices__detail type">Type</div>
        <div className="devices__detail capacity">Capacity</div>
      </div>
      {props.devices.map((element, index) => {
        return (
          <div key={index} className="devices__item">
            <div className="devices__detail id">{element.id}</div>
            <div className="devices__detail name">{element.system_name}</div>
            <div className="devices__detail type">{element.type}</div>
            <div className="devices__detail capacity">
              {element.hdd_capacity} GB
            </div>
            <div className="devices__edit">
              <div
                className="devices__detail update"
                data-id={element.id}
                onClick={handleOpen}
              >
                Update
              </div>
              <div
                className="devices__detail delete"
                data-id={element.id}
                onClick={handleDelete}
              >
                Delete
              </div>
            </div>
          </div>
        );
      })}
      <UpdateMachine
        id={machineID}
        openUpdate={openUpdate}
        open={open}
        fetchData={props.fetchData}
      />
    </div>
  );
};
export default Devices;
