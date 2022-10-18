import './App.css';
import { useState, useEffect } from "react"
import axios from 'axios';
import React from 'react';
import { BASE_URL, ACCESS_KEY, SECRET_KEY } from "./redux/Constants"

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getImages = async () => {
      let response = await axios.get(`${BASE_URL}photos?page=1/?client_id=${ACCESS_KEY}`)
      // let response1 = await axios.post(`https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}`)
      response = await response.data
      setData(response);
    }
    getImages();
  }, []);

  return (
    <div className="App">
      <span> unSplash</span>
      {
        data?.map((itm, index) => {
          return (
            <div key={index}>
              <img src={itm.urls.small} alt='userImage' />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
