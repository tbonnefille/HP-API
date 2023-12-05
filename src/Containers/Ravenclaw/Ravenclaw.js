import "./ravenclaw.css";

import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";


function Ravenclaw() {



  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/ravenclaw"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);

  console.log(data);


  return (
    <div className="Ravenclaw">
      
      <div className="houseName">Ravenclaw</div>

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
export default Ravenclaw;