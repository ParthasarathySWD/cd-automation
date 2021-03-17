import react from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  // Animation
  import { easeQuadInOut } from 'd3-ease';
  import AnimatedProgressProvider from "../../CommonComponents/AnimatedProgressProvider";
  import ChangingProgressProvider from "../../CommonComponents/ChangingProgressProvider";
  
  // Radial separators
//   import RadialSeparators from "./RadialSeparators";
  
  const percentage = 66;
function Dashboard(props){
    
    return(
        <div>   <h1>Dashboard</h1>
         <h2>Animation</h2>
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
 
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>
    
 


        </div>
    

    )
    
}
export default Dashboard;