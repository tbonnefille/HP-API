import "./spells.css";

import SpellCard from "../../Components/SpellCard/SpellCard";
import { useState, useEffect } from "react";


function Spells() {



  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/spells"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);

  console.log(data);


  return (
    <div className="Spells">
      
      <div className="houseName">Spells</div>

<div className="spellHolder">


      {data.length === 0 ? (
        <span class="loader"></span>
      ) : (
        data.map((spell) => {
          return <div>{<SpellCard spell={spell} />}</div>;
        })
      )}
    </div>

</div>

  );
}
export default Spells;