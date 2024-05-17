import "./spells.css";

import SpellCard from "../../Components/SpellCard/SpellCard";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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

  // console.log(data);

  const [pageNumber, setPageNumber] = useState(0);

  const spellsPerPage = 15;
  const pagesVisited = pageNumber * spellsPerPage;

  const displaySpells = data
    .slice(pagesVisited, pagesVisited + spellsPerPage)
    .map((spell, i) => {

      return (
        <div key={i}>{<SpellCard spell={spell} />}</div>

      );
    });

  const pageCount = Math.ceil(data.length / spellsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div className="Spells">

      <div className="houseName">Spells</div>

      <div className="spellHolder">

      {displaySpells}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

    </div>

  );
}
export default Spells;