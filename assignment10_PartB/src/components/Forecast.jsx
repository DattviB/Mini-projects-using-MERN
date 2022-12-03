import React from "react";
//import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  //console.log(items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {/* this commented code is what I teach during the video
        it has missing key and will show error in browser console
        so use the code below
        what I have done is just added index to loop and
        key attribute to the div element */}

         {/* {items.map((item) => ( */}
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">4:30 pm</p>
            <img
              src="http://openweathermap.org/img/wn/01n@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">30 c</p>
          </div>
        {/* ))}  */}

        {/* {items.map((item, index) => ( */}
          <div
            // key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">test</p>
            <img
              src="http://openweathermap.org/img/wn/01n@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">20 c</p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Forecast;