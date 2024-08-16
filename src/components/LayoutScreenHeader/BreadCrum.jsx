// // import { useLocation, useNavigate, useParams } from "react-router-dom";
// // import HomeIcon from "/homeIcon.png";

// // const Sidebar = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { userId, projectId } = useParams();

// //   const isActive = (path) => location.pathname === path;
// //    const pathSegments = location.pathname.split("/").filter(Boolean);
// //    console.log(pathSegments);
// //   const handleNavigate = (path) => {
// //     navigate(path);
// //   };

// //   return (
// //     <div className="flex flex-row justify-start items-center gap-2 ">
// //       <div
// //         className={`cursor-pointer items-center p-1 gap-2  w-10 h-10
// //               ${
// //                 isActive(`/add-project/${userId}/app/${projectId}`)
// //                   ? "text-purple-700"
// //                   : "text-greaytextcolor2"
// //               }`}
// //         onClick={() => handleNavigate(`/home`)}
// //       >
// //         <img src={HomeIcon} alt="" />
// //       </div>
// //       <div
// //         className={`cursor-pointer items-start gap-2 font-bold text-[20px]
// //               ${
// //                 isActive(`/add-project/${userId}/app/${projectId}`)
// //                   ? "text-purple-700"
// //                   : "text-greaytextcolor2"
// //               }`}
// //         onClick={() =>
// //           handleNavigate(`/add-project/${userId}/app/${projectId}`)
// //         }
// //       >
// //         Sample Project /
// //       </div>
// //       <div
// //         className={`cursor-pointer items-start gap-2 font-bold text-[20px] 
// //               ${
// //                 isActive(`/add-project/${userId}/app/${projectId}`)
// //                   ? "text-purple-700"
// //                   : "text-greaytextcolor2"
// //               }`}
// //         onClick={() =>
// //           handleNavigate(`/add-project/${userId}/app/${projectId}`)
// //         }
// //       >
// //         Upload
// //       </div>
// //       <div
// //         className={`cursor-pointer items-start gap-2 font-bold text-[20px]
// //                ${
// //                  isActive(`/add-project/${userId}/app/${projectId}`)
// //                    ? "text-purple-700"
// //                    : "text-greaytextcolor2"
// //                }`}
// //         onClick={() =>
// //           handleNavigate(`/add-project/${userId}/app/${projectId}`)
// //         }
// //       >
// //         Transcript
// //       </div>
// //       <div
// //         className={`cursor-pointer items-start gap-2 font-bold text-[20px]             ${
// //           isActive(`/add-project/${userId}/app/${projectId}/configurations`)
// //             ? "text-purple-700"
// //             : "text-greaytextcolor2"
// //         }`}
// //         onClick={() =>
// //           handleNavigate(
// //             `/add-project/${userId}/app/${projectId}/configurations`
// //           )
// //         }
// //       >
// //         / Widget Configurations
// //       </div>

// //       <div
// //         className={`cursor-pointer items-start gap-2 font-bold text-[20px] 
// //                      ${
// //                        isActive(
// //                          `/add-project/${userId}/app/${projectId}/account-setting`
// //                        )
// //                          ? "text-purple-700"
// //                          : "text-greaytextcolor2"
// //                      }`}
// //         onClick={() =>
// //           handleNavigate(
// //             `/add-project/${userId}/app/${projectId}/account-setting`
// //           )
// //         }
// //       >
// //         / Account Settings
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import HomeIcon from "/homeIcon.png";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { userId, projectId } = useParams();

//   // Split the path into segments
//   const pathSegments = location.pathname.split("/").filter(Boolean);

//   // Create an array of breadcrumb paths
//   const breadcrumbPaths = pathSegments.map((segment, index) => {
//     return {
//       name: segment, // You can replace this with more readable names if needed
//       path: `/${pathSegments.slice(0, index + 1).join("/")}`,
//     };
//   });
//   console.log(breadcrumbPaths);

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="flex flex-row justify-start items-center gap-2">
//       <div
//         className="cursor-pointer items-center p-1 gap-2 w-10 h-10 text-purple-700"
//         onClick={() => handleNavigate(`/home`)}
//       >
//         <img src={HomeIcon} alt="Home" />
//       </div>
//       {breadcrumbPaths.map((breadcrumb, index) => (
//         <div
//           key={breadcrumb.name}
//           className={`cursor-pointer items-start gap-2 font-bold text-[20px] ${
//             index === breadcrumbPaths.length - 1
//               ? "text-purple-700"
//               : "text-greaytextcolor2"
//           }`}
//           onClick={() => handleNavigate(breadcrumb.path)}
//         >
//           {breadcrumb.name}
//           {index !== breadcrumbPaths.length - 1 && " / "}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Breadcrumb;

import { useLocation, useNavigate, useParams } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId, projectId, fileId } = useParams(); // Extract IDs from URL params

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
    .filter(
      (segment) =>
        segment !== userId && segment !== projectId && segment !== fileId
    ); // Filter out IDs from path segments

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
