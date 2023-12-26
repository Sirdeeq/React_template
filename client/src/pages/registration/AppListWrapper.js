import { useContext } from "react";
import AppLists from "./AppLists";
import CustomCard from "../../components/custom/CustomCard";
import ApplicationContext from "../../context/application-context";

const AppListWrapper = () => {
  const ctx = useContext(ApplicationContext);
  return (
    <CustomCard>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">App Name</th>
            <th scope="col">Dev ID</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <AppLists
            applications={ctx.applications}
            handleDelete={ctx.handleDelete}
          />
        </tbody>
      </table>
    </CustomCard>
  );
};

export default AppListWrapper;
