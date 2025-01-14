import React from "react";
import SimulationModule from "../Modules/SimulationModule";
import ControlPanelModule from "../Modules/ControlPanelModule";
import { useState, useEffect } from "react";
import NewOpsModule from "../Modules/ScenarioAnalysisModule";
import Scoreboard from "../Modules/ScoreboardModule";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import Navbar from "../Components/NavigationBar";
import GoToMarketStatisticsModule from "../Modules/GoToMarketStatisticsModule";
import ScenarioStatisticsModule from "../Modules/ScenarioStatisticsModule";
import SearchAppBar from "../Components/SearchAppBar";

/*
    Description: This component is used to display the main frame of the application.

    Arguments: None

    Return Type: None
*/
const MainFrame = () => {
  // This state will store the response from the lambda function
  const [lambdaOutput, setLambdaOutput] = useState();
  const [sliderValue, setSliderValue] = useState([0, 0, 0, 0, 0, 0]);
  const [uploadCount, setUploadCount] = useState(0);
  const [startSimulationButtonFlashing, setStartSimulationButtonFlashing] =
    useState(false);
  const [marketingInputFileResponse, setMarketingInputFileResponse] =
    useState(null);

  const handleMarketingInputFileResponse = (response) => {
    setMarketingInputFileResponse(response);
  };

  useEffect(() => {
    if (localStorage.getItem("KinetikDataSet") === null) {
      alertify.success(
        "Please see the template link for input template, and upload file to begin simulation."
      );
    }
  }, []);

  const handleLambdaOutput = async (output) => {
    await setLambdaOutput(output);
  };

  const handleSliderValue = async (data) => {
    await setSliderValue(data);
  };

  const handleUploadCount = async () => {
    await setUploadCount(uploadCount + 1);
  };

  const handleStartSimulationButtonFlash = () => {
    setStartSimulationButtonFlashing(!startSimulationButtonFlashing);
  };

  const onClickStartSimulationButton = () => {
    setStartSimulationButtonFlashing(false);
  };

  return (
    <div>
      <SearchAppBar />
      <Navbar />
      <div id="mainFrameLayout">
        <div id="first-column-mainframe">
          <ControlPanelModule
            handleUploadCount={handleUploadCount}
            handleStartSimulationButtonFlashing={
              handleStartSimulationButtonFlash
            }
          />
          <NewOpsModule
            handleSliderValue={handleSliderValue}
            uploadCount={uploadCount}
          />
        </div>
        <div id="second-column-mainframe">
          <SimulationModule
            handleLambdaOutput={handleLambdaOutput}
            sliderValue={sliderValue}
            startSimulationButtonFlashing={startSimulationButtonFlashing}
            onClickStartSimulationButton={onClickStartSimulationButton}
            marketingInputFileResponse={handleMarketingInputFileResponse}
          />
          <Scoreboard lambdaOutput={lambdaOutput} />
        </div>
        <div id="third-column-mainframe">
          <GoToMarketStatisticsModule
            lambdaOutput={lambdaOutput}
            marketingInputFileResponse={marketingInputFileResponse}
          />
          <ScenarioStatisticsModule lambdaOutput={lambdaOutput} />
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
