import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Atoms/Card/Card';
import {
  reposSelector,
  userSelector,
} from '../../../reducers/User/UserSelectors';
import TableContainer from '../../Organisms/TableContainer/TableContainer';
import Loading from '../../Atoms/Loading/Loading';
import Styles from './RepoList.module.sass';

const RepoList = ({ repos, user }) => {
  return (
    user && (
      <Card className={Styles.RepoList} title='Repositorios del candidato'>
        {!repos.loading && !repos.error && (
          <>
            {repos.list.length > 0 && <TableContainer list={repos.list} />}
            {repos.list.length === 0 && (
              <div className={Styles.loadingContainer}>
                <h3>
                  El usuario de github {user.githubUser} no tiene repositorios
                  públicos.
                </h3>
              </div>
            )}
          </>
        )}
        {repos.loading && (
          <div className={Styles.loadingContainer}>
            <Loading />
          </div>
        )}
        {repos.error && (
          <div className={Styles.loadingContainer}>
            <h3>
              El usuario de github {user.githubUser} no existe, por favor
              verifícalo e intenta de nuevo
            </h3>
          </div>
        )}
      </Card>
    )
  );
};

RepoList.propTypes = {
  repos: PropTypes.shape({
    error: PropTypes.bool,
    list: PropTypes.array,
    loading: PropTypes.bool,
  }),
  user: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    repos: reposSelector(state),
    user: userSelector(state),
  };
};

export default connect(mapStateToProps)(RepoList);
