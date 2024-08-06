import React from "react";
import { NavLink } from "react-router-dom";

// const WorkCard = ({ data }) => {
//   return (
//     <>
//       <div className="work-container">
//         <h1 className="project-heading"> projects</h1>
//         <div className="project-container">
//           {data.map((item, index) => {
//             return (
//               <>
//                 <div className="project-card">
//                   <img src={item.img} alt="image" />
//                   <h2 className="project-title">{item.cardTitle}</h2>
//                   <div className="pro-details">
//                     <p>{item.cardSubTitle}</p>
//                     <div className="pro-btns">
//                       <NavLink to={item.cardLink} className="btn">
//                         View
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
const WorkCard = ({ data }) => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 p-10">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-black">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1919] m-5 flex flex-col items-center rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.cardTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-xl text-white  font-semibold mb-2">
                {item.cardTitle}
              </h2>
              <p className="text-gray-300 mb-4">{item.cardSubTitle}</p>
              <NavLink
                to={item.cardLink}
                className=" btn inline-block px-4 py-2 bg-black-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                View
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
