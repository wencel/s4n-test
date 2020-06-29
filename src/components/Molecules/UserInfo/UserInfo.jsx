import PropTypes from 'prop-types';
import React from 'react';
import Styles from './UserInfo.module.sass';
import Label from '../../Atoms/Label/Label';
import Button from '../../Atoms/Button/Button';
import moment from 'moment';

const UserInfo = ({ user, editUser, clearUser }) => {
  return (
    <div className={Styles.UserInfo}>
      <div className={Styles.grid}>
        <div>
          <Label>Nombre</Label>
          <div className={Styles.field}>{user?.name}</div>
        </div>
        <div>
          <Label>Apellido</Label>
          <div className={Styles.field}>{user?.lastname}</div>
        </div>
        <div>
          <Label>Fecha de nacimiento</Label>
          <div className={Styles.field}>
            {moment(user?.birthDate).format('MM/DD/YYYY')}
          </div>
        </div>
        <div>
          <Label>Email</Label>
          <div className={Styles.field}>{user?.email}</div>
        </div>
        <div>
          <Label>Cedula</Label>
          <div className={Styles.field}>{user?.userId}</div>
        </div>
        <div>
          <Label>Usuario de GitHub</Label>
          <div className={Styles.field}>{user?.githubUser}</div>
        </div>
      </div>
      <Button type='button' onClick={editUser}>
        Editar
      </Button>
      <Button type='button' onClick={clearUser}>
        Borrar
      </Button>
    </div>
  );
};

UserInfo.propTypes = {
  clearUser: PropTypes.func,
  editUser: PropTypes.func,
  user: PropTypes.shape({
    birthDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    email: PropTypes.string,
    githubUser: PropTypes.string,
    lastname: PropTypes.string,
    name: PropTypes.string,
    userId: PropTypes.string,
  }),
};

export default UserInfo;
