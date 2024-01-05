import React, { useContext } from "react";
import ApplicationContext from "../../context/application-context";
import { useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { BiShow } from "react-icons/bi";

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
      <td>{application.detailedInfo}</td>
      <td>
        <span onClick={deleteApp}>
          <h1>
            <TiDelete />
          </h1>
        </span>
        <span onClick={showApp}>
          <h1>
            <BiShow />
          </h1>
        </span>
      </td>
    </>
  );
};

export default AppList;
