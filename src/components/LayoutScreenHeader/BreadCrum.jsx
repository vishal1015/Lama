
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (location.pathname === "/account-settings" || location.pathname === path)
      return true;
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean)

  return (
    <div className="flex flex-row justify-start items-center gap-2">
      <div
        className={`cursor-pointer items-center p-1 gap-2 w-10 h-10 ${
          isActive(`/home`) ? "text-purple-700" : "text-greaytextcolor2"
        }`}
        onClick={() => handleNavigate(`/`)}
      >
        <img src="/homeIcon.png" alt="Home" />
      </div>

      {pathSegments.map((segment, index) => (
        <div
          key={index}
          className={`cursor-pointer items-start gap-2 font-bold text-[20px] ${
            isActive(`/sample-project/${segment}`)
              ? "text-purple-700"
              : "text-greaytextcolor2"
          }`}
          // onClick={() => handleNavigate(`/sample-project/${segment}`)}
        >
          {index === 0  && pathSegments.length === 1 && "/ "}
          {segment.charAt(0).toUpperCase() + segment.slice(1)}{" "}
          {index !== pathSegments.length - 1 && "/"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
