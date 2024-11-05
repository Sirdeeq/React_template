import React, { useState } from "react";
const ApplicationContext = React.createContext({
  applications: [],
  showForm: false,
  handleAdd: () => {},
  handleDelete: () => {},
  handleShowForm: () => {},
  handleSelectedApp: () => {},
  selectedApp: {},
});

export const ApplicationContextProvider = (props) => {
  const [registeredApps, setRegisteredApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState({});
  const [showForm, setShowForm] = useState(true);

  // ------- ADD APPLICATION --------

  const addApplications = (application) => {
    const id = Math.random();
    const newApplication = { id, ...application };
    setRegisteredApps((prevApplications) => {
      return [...prevApplications, newApplication];
    });
  };
  console.log(registeredApps);

  // -------- DELETE APPLICATION ------
  const deleteBook = (id) => {
    setRegisteredApps(
      registeredApps.filter((application) => application.id !== id)
    );
  };

  // -------- SHOW SELECTED --------
  const showSelected = (app) => {
    setSelectedApp(app);
    console.log(selectedApp);
  };

  //   ----- TOGGLE SHOW FORM -------
  const toggle = () => {
    setShowForm(!showForm);
  };
  return (
    <ApplicationContext.Provider
      value={{
        handleAdd: addApplications,
        applications: registeredApps,
        handleDelete: deleteBook,
        handleShowForm: toggle,
        showForm: showForm,
        handleSelectedApp: showSelected,
        detailedApp: selectedApp,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
