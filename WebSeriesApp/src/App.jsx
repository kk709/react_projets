import React from "react";
import Netflix from "./Netflix";
import Amazon from './Amazon';

// const favseries = 'netflix';

// const FavS = () => {

//     if(favseries === "netflix") {
//         return(
//             <Netflix />
//         );
//     }
//     else{
//         return(
//             <Amazon />
//         );
//     }
// };
const App = () => {
    return(
    <>
        <h1 className="heading_style">List of top Netflix web series </h1>
        {/* <FavS /> */}
        {/* {favseries === "netflix"? <Netflix /> : <Amazon />} */}
        <Netflix />
        <Amazon />
        
    </>
    );
    
};
export default App;