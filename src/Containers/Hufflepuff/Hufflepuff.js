import "./hufflepuff.css";

import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";


function Hufflepuff() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/hufflepuff"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);


  return (
    <div className="Hufflepuff">

      <div className="houseName">Hufflepuff</div>

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
export default Hufflepuff;