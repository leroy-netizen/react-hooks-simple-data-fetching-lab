// create your App component here
import { React, useEffect, useState } from "react";
import { data } from "../mocks/data";

const App = () => {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState(null);

  const URL = "https://dog.ceo/api/breeds/image/random";
  useEffect(() => {
    // setIsLoading((isLoading) => !isLoading);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDogData(data);
        setImg(dogData.message);
      });
  }, []);
  return (
    <>
      {/* {isLoading ? null : <p>Loading...</p>} */}

      {img === null ? (
        <p>Loading...</p>
      ) : (
        <img src={data.message} alt="A Random Dog" />
      )}
    </>
  );
};

export default App;
