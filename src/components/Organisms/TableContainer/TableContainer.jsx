import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Input from '../../Atoms/Input/Input';
import Styles from './TableContainer.module.sass';
import Table from '../../Molecules/Table/Table';
import TablePagination from '../../Molecules/TablePagination/TablePagination';

const TableContainer = ({ list }) => {
  const [filter, setFilter] = useState('');
  const [renderList, setTableContainer] = useState(list);
  const [sortCriteria, setSortCriteria] = useState('language');
  const [pages, setPages] = useState(list.length / 5);
  const [currentPage, setCurrentPage] = useState(0);
  const filterItems = () => {
    let newList = [];
    if (!filter || filter.length < 3) {
      newList = [...list];
    } else {
      newList = list.filter(repo => {
        if (
          repo.name?.toLowerCase().includes(filter.toLowerCase()) ||
          repo.language?.toLowerCase().includes(filter.toLowerCase()) ||
          repo?.default_branch.toLowerCase().includes(filter.toLowerCase()) ||
          repo.git_url?.toLowerCase().includes(filter.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    setPages(newList.length / 5);
    newList = newList
      .sort(sortByAttr)
      .slice(currentPage * 5, currentPage * 5 + 5);
    setTableContainer(newList);
  };
  const sortByAttr = (a, b) => {
    const desc = sortCriteria[0] === '-';
    const varA = a[sortCriteria.replace('-', '')]
      ? a[sortCriteria.replace('-', '')].toLowerCase()
      : '';
    const varB = b[sortCriteria.replace('-', '')]
      ? b[sortCriteria.replace('-', '')].toLowerCase()
      : '';
    if (desc) {
      if (varA > varB) {
        return -1;
      }
      if (varA < varB) {
        return 1;
      }
    }
    if (varA > varB) {
      return 1;
    }
    if (varA < varB) {
      return -1;
    }
    return 0;
  };
  const setSort = criteria => {
    if (sortCriteria.includes(criteria)) {
      setSortCriteria(sortCriteria.includes('-') ? criteria : `-${criteria}`);
    } else {
      setSortCriteria(criteria);
    }
  };
  useEffect(() => {
    filterItems();
    setCurrentPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, filter, sortCriteria]);
  useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <Input
        label='Filtrar Repositorios'
        onChange={e => {
          setFilter(e.target.value);
        }}
        value={filter}
        className={Styles.searchInput}
        placeholder='Ingresa criterio de búsqueda'
      />
      {renderList.length > 0 && (
        <>
          <div className={Styles.tableConatiner}>
            <Table
              list={renderList}
              setSortCriteria={setSort}
              sortCriteria={sortCriteria}
            />
          </div>
          {pages > 0 && (
            <TablePagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
      {renderList.length === 0 && (
        <h3>El criterio de búsqueda no retornó ningun resultado</h3>
      )}
    </>
  );
};

TableContainer.propTypes = {
  list: PropTypes.object,
};

export default TableContainer;
