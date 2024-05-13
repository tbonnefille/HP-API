import "./hufflepuff.css";

import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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


  const [pageNumber, setPageNumber] = useState(0);

  const wizardsPerPage = 12;
  const pagesVisited = pageNumber * wizardsPerPage;

  const displayWizards = data
    .slice(pagesVisited, pagesVisited + wizardsPerPage)
    .map((wizard, i) => {

      return (
        <div key={i}>{<Card character={wizard} />}</div>

      );
    });

  const pageCount = Math.ceil(data.length / wizardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="Hufflepuff">

      <div className="houseName">Hufflepuff</div>

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
export default Hufflepuff;