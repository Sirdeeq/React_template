import React, { useContext } from "react";
import CustomCard from "../../components/custom/CustomCard";
import ApplicationContext from "../../context/application-context";

const Detail = (props) => {
  const ctx = useContext(ApplicationContext);
  const detailedApp = ctx.detailedApp;
  console.log(`the app is ${detailedApp.id}`);
  return (
    <div className="container">
      <CustomCard>
        <div>
          <h3>
            <span className="text-success">App Name:</span>{" "}
            {detailedApp.appName}
          </h3>
          <p className="lead">{detailedApp.detailedInfo}</p>
        </div>
        <hr />
        <div className="problem">
          <fieldset>
            <legend className="text-success">Problem Statement</legend>
            <p className="lead">{detailedApp.probStatement}</p>
          </fieldset>
        </div>
        <div className="solution">
          <fieldset>
            <legend className="text-success">Solution Statement</legend>
            <p className="lead">{detailedApp.solnStatement}</p>
          </fieldset>
        </div>
        <div className="technology">
          <fieldset>
            <legend className="text-success">Technology Statement</legend>
            <p className="lead">{detailedApp.techStatement}</p>
          </fieldset>
        </div>
        <hr />
        <div className="text-end">
          <p className="h3 lead">Muhammad Aliyu Katagum</p>
          <span>Signature</span>
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
