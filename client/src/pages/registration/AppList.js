import React, { useContext } from "react";
import ApplicationContext from "../../context/application-context";
import { useNavigate } from "react-router-dom";

const AppList = ({ application, handleDelete }) => {
  const ctx = useContext(ApplicationContext);
  const navigate = useNavigate();
  const deleteApp = () => {
    console.log(application);

    handleDelete(application.id);
  };
  const showApp = () => {
    ctx.handleSelectedApp(application);
    navigate("/detail");
  };
  return (
    <>
      <td>{application.appName}</td>
      <td>{application.devID}</td>
      <td>{application.solnStatement}</td>
      <td>
        <span onClick={deleteApp}>X</span>
        <span onClick={showApp}>Show</span>
      </td>
    </>
  );
};

export default AppList;
