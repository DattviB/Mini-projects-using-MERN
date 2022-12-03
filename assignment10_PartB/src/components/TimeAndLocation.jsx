//  import React from "react";
//  import { formatToLocalTime } from "../services/weatherService";

//  function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
//    return (
//      <div>
//        <div className="flex items-center justify-center my-6">
//          <p className="text-white text-xl font-extralight">
//            {formatToLocalTime(dt, timezone)}
//          </p>
//        </div>

//        <div className="flex items-center justify-center my-3">
//          <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
//        </div>
//      </div>
//    );
//  }

//  export default TimeAndLocation;
import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            Tuesday, 31 May 2022 | Time: 12:00 AM

        </p></div>
        <div className="flex items-center justify-center my-3">
         <p className="text-white text-3xl font-medium"> 
            Berlin
         </p>
       </div>
    </div>
  )
}

export default TimeAndLocation