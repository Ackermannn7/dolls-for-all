import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

function Pagination({ currentPage, onChangePage }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel=" ... "
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePageChange={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
