import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../Atoms/Card/Card';
import UserForm from '../../Molecules/UserForm/UserForm';
import UserInfo from '../../Molecules/UserInfo/UserInfo';
import { useCookies } from 'react-cookie';
import { userSelector } from '../../../reducers/User/UserSelectors';
import {
  editUser,
  clearUser,
  fetchUserRepos,
} from '../../../reducers/User/UserActions';

const Header = ({
  user,
  setUserLocal,
  clearUserLocal,
  fetchUserReposLocal,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [showForm, setShowForm] = useState(true);
  const sumbitForm = u => {
    setCookie('user', u, { path: '/' });
    setUserLocal(u);
    setShowForm(false);
  };
  const editUser = () => {
    setShowForm(true);
  };
  const clearUser = () => {
    removeCookie('user', { path: '/' });
    clearUserLocal();
    setShowForm(true);
  };
  useEffect(() => {
    if (cookies.user) {
      setUserLocal({
        ...cookies.user,
        birthDate: new Date(cookies.user.birthDate),
      });
      setShowForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (user?.githubUser) {
      fetchUserReposLocal(user.githubUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Card title='Información del candidato'>
      {!showForm && (
        <UserInfo user={user} editUser={editUser} clearUser={clearUser} />
      )}
      {showForm && <UserForm userInit={user} sumbitForm={sumbitForm} />}
    </Card>
  );
};

Header.propTypes = {
  clearUserLocal: PropTypes.func,
  fetchUserReposLocal: PropTypes.func,
  setUserLocal: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    user: userSelector(state),
  };
};

const mapDispatchToProps = dispatch => ({
  setUserLocal: user => {
    dispatch(editUser(user));
  },
  fetchUserReposLocal: username => {
    dispatch(fetchUserRepos(username));
  },
  clearUserLocal: () => {
    dispatch(clearUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
