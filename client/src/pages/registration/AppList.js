import React, { useContext } from "react";

const AppList = ({ application, handleDelete }) => {
  const deleteApp = () => {
    console.log(application);

    handleDelete(application.id);
  };
  return (
    <>
      <td>{application.appName}</td>
      <td>{application.devID}</td>
      <td>{application.solnStatement}</td>
      {/* <td onClick={() => handleDelete(application.id)}>X</td> */}
      <td onClick={deleteApp}>X</td>
    </>
  );
};

export default AppList;
