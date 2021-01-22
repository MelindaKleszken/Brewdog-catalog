import React, { useState, useEffect  } from "react";
import "./App.css";


export const ShowBeer = () =>  {
  const [data, setData] = useState("");

  const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/")
        .then((res) => res.json())
        .then((data) => {
            setData(data.value);
            console.log(data);
                        
        });
    };

    useEffect (() => {
        getBeer();
      }, []);
      
  return (
    <>
      {data}
      <button onClick={getBeer}>New beer</button>
    </>
  );
}

export default ShowBeer;