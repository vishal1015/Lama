
// import RouterProvider from './RouterProvider'
// function App() {


//   return (
//     <>
//       <RouterProvider />
//     </>
//   )
// }

// export default App


//  <div className="relative flex justify-between ">
//         <div className=" w-[20%] bg-red-400  col-auto ">
//           <Sidebar />
//         </div>
//         <div className=' w-[80%] '>
//           <RouterProvider />
//         </div>
//       </div>


import AppRoutes from "./Routes/Routes";
import Home from "./screens/HomePage";

function App() {
  return (
    <div>
      <AppRoutes />
      {/* <Home /> */}
    </div>
  );
}

export default App;
