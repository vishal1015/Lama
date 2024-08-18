import {
  episodesText,
  lastEditedText,
  spInitialsText,
} from "../../utils/Constants";
import "./styles.css";

function ProjectCard({ ProjectName, onClick }) {
  return (
    <>
      <div className="project-card" onClick={onClick}>
        <div className="initials-container">
          <h1 className="initials-text">{spInitialsText}</h1>
        </div>
        <div className="project-details">
          <div>
            <h1 className="project-name-text">{ProjectName}</h1>
            <div>{episodesText}</div>
          </div>
          <p className="last-edited-text">{lastEditedText}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
