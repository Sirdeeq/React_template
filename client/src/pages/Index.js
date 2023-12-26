import React, { useContext } from "react";
import RegisterForm from "./registration/RegisterForm";
import AppListWrapper from "./registration/AppListWrapper";
import { CustomButton } from "../components/custom/CustomButton";
import Detail from "./registration/Detail";
import ApplicationContext from "../context/application-context";

const Index = () => {
  const ctx = useContext(ApplicationContext);
  return (
    <>
      <CustomButton
        type="filled"
        // color="#A78BFA"
        className="flex-fill"
        onClick={ctx.handleShowForm}
      >
        {ctx.showForm ? "Close" : "Register application"}
      </CustomButton>
      {ctx.showForm && <RegisterForm />}

      {/* <AppListWrapper /> */}

      {/* <Detail /> */}
    </>
  );
};

export default Index;
