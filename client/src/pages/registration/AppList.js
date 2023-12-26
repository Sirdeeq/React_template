import React, { useContext } from "react";

const AppList = ({ application, handleDelete }) => {
  return (
    <>
      <td>{application.appName}</td>
      <td>{application.devID}</td>
      <td>{application.solnStatement}</td>
      <td onClick={() => handleDelete(application.id)}>X</td>
    </>
  );
};

export default AppList;
