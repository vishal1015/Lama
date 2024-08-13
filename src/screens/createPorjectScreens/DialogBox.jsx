
import { useContext } from "react";
import { ProjectContext } from "./ProjectHomeScreen";
import * as projectConstants from "../../utils/Constants";
import "./styles.css";

const DialogBox = () => {
  const {
    currentProjectName,
    errorMessage,
    handleCloseDialog,
    handleSubmit,
    setCurrentProjectName,
  } = useContext(ProjectContext);

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <h2 className="dialog-title">{projectConstants.createProjectText}</h2>
        <input
          type="text"
          placeholder={projectConstants.enterProjectNameText}
          value={currentProjectName}
          onChange={(e) => setCurrentProjectName(e.target.value)}
          className="dialog-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="dialog-buttons">
          <button onClick={handleCloseDialog} className="cancel-button">
            {projectConstants.cancelText}
          </button>
          <button onClick={handleSubmit} className="create-button">
            {projectConstants.createText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
