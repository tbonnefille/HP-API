import "./slytherin.css";

import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";


function Slytherin() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/slytherin"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);

  console.log(data);


  return (
    <div className="Slytherin">
      
      <div className="houseName">Slytherin</div>

<div className="cardholder">


      {data.length === 0 ? (
        <span class="loader"></span>
      ) : (
        data.map((character) => {
          return <div>{<Card character={character} />}</div>;
        })
      )}
    </div>

</div>

  );
}
export default Slytherin;