import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import CustomForm from "../../components/custom/CustomForm";
import CustomCard from "../../components/custom/CustomCard";
import ApplicationContext from "../../context/application-context";
const RegisterForm = () => {
  const ctx = useContext(ApplicationContext);
  //  -------- FORM INPUT VALUES ---------

  const [formData, setFormData] = useState({
    appName: "",
    appVersion: "",
    devID: "",
    techStatement: "",
    probStatement: "",
    solnStatement: "",
  });

  //----- HANDLE INPUT CHANGE --------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   ------- HANDLE SUBMIT -------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.appName ||
      !formData.devID ||
      !formData.techStatement ||
      !formData.probStatement ||
      !formData.solnStatement
    ) {
      toast.error("check your inputs");
      return;
    }
    ctx.handleAdd(formData);
    console.log("Form submitted:", formData);
    toast.success("Form submitted");
    setFormData({
      appName: "",
      appVersion: "",
      devID: "",
      techStatement: "",
      probStatement: "",
      solnStatement: "",
    });
  };
  // ------ FORM INPUT FIELDS -------
  const formFields = [
    {
      label: "App Name",
      type: "text",
      id: "appName",
      placeholder: "Enter your App name",
      value: formData.appName,
      onChange: handleInputChange,
    },
    {
      label: "App Version",
      type: "text",
      id: "appVersion",
      placeholder: "Enter your App Version",
      value: formData.appVersion,
      onChange: handleInputChange,
    },
    {
      label: "Developer id",
      type: "text",
      id: "devID",
      placeholder: "Enter your ID",
      value: formData.devID,
      onChange: handleInputChange,
    },
    {
      label: "Technology used",
      type: "text",
      id: "techStatement",
      placeholder: "eg React, PHP ...",
      value: formData.techStatement,
      onChange: handleInputChange,
    },
    {
      label: "Problem Statement",
      type: "text",
      id: "probStatement",
      placeholder: "Problem to be addressed",
      value: formData.probStatement,
      onChange: handleInputChange,
    },
    {
      label: "Solution Statement",
      type: "text",
      id: "solnStatement",
      placeholder: "Problem to be addressed",
      value: formData.solnStatement,
      onChange: handleInputChange,
    },
  ];

  return (
    <div className="container flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <CustomCard
        header="Register your App Here"
        subtitle="Fill all the required information"
      >
        <CustomForm formFields={formFields} onSubmit={handleSubmit} />
        <hr />
      </CustomCard>
    </div>
  );
};

export default RegisterForm;
