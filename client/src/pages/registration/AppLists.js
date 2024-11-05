import AppList from "./AppList";

const AppLists = ({ applications, handleDelete }) => {
  return applications.map((application) => {
    return (
      <tr key={application.id}>
        <AppList application={application} handleDelete={handleDelete} />
      </tr>
    );
  });
};

export default AppLists;
