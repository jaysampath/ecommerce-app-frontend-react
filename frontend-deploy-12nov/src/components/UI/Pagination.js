import { useState } from "react";
import ItemCard from "../Item/ItemCard";
import classes from "./Pagination.module.css";

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [numPages] = useState( Math.round(data.length / dataLimit) ===0 ? 5 : Math.round(data.length / dataLimit)  );
  //console.log("numpages: ",numPages);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {getPaginatedData().map((item, idx) => {
        return <ItemCard key={idx} item={item} />;
      })}
      <div className={classes.pagination}>
        <button
          onClick={goToPreviousPage}
          className={`${classes.prev} ${currentPage === 1 ? classes.prevDisabled : ""}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${classes.paginationItem} ${
              currentPage === item ? classes.paginationItemActive : null
            }`}
          >
            <span className={classes.paginationItemSpan}>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`${classes.next} ${currentPage === numPages ? classes.nextDisabled : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
