import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TablePagination.module.sass';

const TablePagination = ({ pages, currentPage, setCurrentPage }) => {
  const shownPages = 6;
  const initPage =
    currentPage - Math.ceil(shownPages / 2) > 0
      ? currentPage - Math.ceil(shownPages / 2)
      : 0;
  const fillPages = new Array(
    Math.ceil(pages) < shownPages ? Math.ceil(pages) : shownPages
  ).fill('');
  return (
    <div className={Styles.TablePagination}>
      {currentPage > 0 && (
        <button
          onClick={() => {
            setCurrentPage(0);
          }}
          className={Styles.caret}
        >
          &#171;
        </button>
      )}
      {currentPage > 0 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          className={Styles.caret}
        >
          &#8249;
        </button>
      )}
      {fillPages.map((page, index) => {
        return (
          initPage + index < Math.ceil(pages) && (
            <button
              key={`pagination-${index}`}
              onClick={() => {
                setCurrentPage(initPage + index);
              }}
              className={initPage + index === currentPage ? Styles.active : ''}
            >
              {initPage + index + 1}
            </button>
          )
        );
      })}
      {currentPage < Math.ceil(pages) - 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          className={Styles.caret}
        >
          &#8250;
        </button>
      )}
      {currentPage < Math.ceil(pages) - 1 && (
        <button
          onClick={() => {
            setCurrentPage(Math.ceil(pages) - 1);
          }}
          className={Styles.caret}
        >
          &#187;
        </button>
      )}
    </div>
  );
};

TablePagination.propTypes = {
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
export default TablePagination;
