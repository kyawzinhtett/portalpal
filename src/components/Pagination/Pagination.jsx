import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center mb-4 gap-2"
      breakLabel="..."
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousClassName="page-item previous"
      previousLinkClassName="page-link"
      nextClassName="page-item next"
      nextLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      onPageChange={(data) => setPageNumber(data.selected + 1)}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
