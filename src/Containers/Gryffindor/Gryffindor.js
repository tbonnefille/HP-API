import "./gryffindor.css";

import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";


function Gryffindor() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/gryffindor"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);


  //console.log("nb de personnages", data.length)

  const [pageNumber, setPageNumber] = useState(0);

  //combien de persos par page et combien de pages il y aura
  const wizardsPerPage = 12;
  const pagesVisited = pageNumber * wizardsPerPage;

  //ce que la page affichera
  const displayWizards = data
    .slice(pagesVisited, pagesVisited + wizardsPerPage)
    .map((wizard, i) => {

      return (
        <div key={i}>{<Card character={wizard} />}</div>

      );
    });

  //Math.ceil (plafont) va permeettre d'arrondir au chiffre supérieur, si néceesaire pour le nombre de pages
  const pageCount = Math.ceil(data.length / wizardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (

    <div className="Gryffindor">

      <div className="houseName">Gryffindor</div>

      <div className="cardholder">

        {displayWizards}

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


export default Gryffindor;


