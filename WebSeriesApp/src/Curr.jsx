import React from "react";

function Curr(){
    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting = " ";
    const cssStyle = { };

    if(currDate>=1 && currDate<12){
        greeting = "Good Morning";
        cssStyle.color = "green";
    }
    else if(currDate>=12 && currDate<19){
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else{
        greeting = "Good Night";
        cssStyle.color="grey";
    }
    return(
        <>
            <h1> Hi Sir, <span style={cssStyle}>{greeting}</span></h1>
        </>
    )
};
export default Curr;