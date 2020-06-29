import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Table.module.sass';

const Table = ({ list, setSortCriteria, sortCriteria }) => {
  return (
    <table className={Styles.Table}>
      <thead>
        <tr>
          <th>
            <button
              onClick={() => {
                setSortCriteria('language');
              }}
            >
              Lenguaje
              {sortCriteria === 'language' && <span>&#9650;</span>}
              {sortCriteria === '-language' && <span>&#9660;</span>}
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                setSortCriteria('default_branch');
              }}
            >
              Branch por defecto
              {sortCriteria === 'default_branch' && <span>&#9650;</span>}
              {sortCriteria === '-default_branch' && <span>&#9660;</span>}
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                setSortCriteria('git_url');
              }}
            >
              URL de Git
              {sortCriteria === 'git_url' && <span>&#9650;</span>}
              {sortCriteria === '-git_url' && <span>&#9660;</span>}
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                setSortCriteria('name');
              }}
            >
              Nombre
              {sortCriteria === 'name' && <span>&#9650;</span>}
              {sortCriteria === '-name' && <span>&#9660;</span>}
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                setSortCriteria('description');
              }}
            >
              Descripcion
              {sortCriteria === 'description' && <span>&#9650;</span>}
              {sortCriteria === '-description' && <span>&#9660;</span>}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          return (
            <tr key={item.id}>
              <td key={item.id}>
                <span>{item.language}</span>
              </td>
              <td>
                <span>{item.default_branch}</span>
              </td>
              <td>
                <span className={Styles.urlText}>{item.git_url}</span>
              </td>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <span>{item.description}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  list: PropTypes.object,
  setSortCriteria: PropTypes.func,
  sortCriteria: PropTypes.string,
};

export default Table;
