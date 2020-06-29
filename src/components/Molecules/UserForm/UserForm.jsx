import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Styles from './UserForm.module.sass';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import validator from 'validator';

const UserForm = ({ userInit, sumbitForm }) => {
  const [user, setUser] = useState(
    userInit
      ? { ...userInit, birthDate: userInit.birthDate }
      : {
          name: '',
          lastname: '',
          birthDate: '',
          email: '',
          userId: '',
          githubUser: '',
        }
  );
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (!errorMessage) {
      return;
    }
    if (
      !user.name ||
      !user.lastname ||
      !user.birthDate ||
      !user.email ||
      !user.userId ||
      !user.githubUser
    ) {
      setErrorMessage('Todos los campos son requeridos');
      return;
    }
    if (!validator.isEmail(user.email)) {
      setErrorMessage('Por favor ingresa un email válido');
      return;
    }
    setErrorMessage('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (
          !user.name ||
          !user.lastname ||
          !user.birthDate ||
          !user.email ||
          !user.userId ||
          !user.githubUser
        ) {
          setErrorMessage('Todos los campos son requeridos');
          return;
        }
        if (!validator.isEmail(user.email)) {
          setErrorMessage('Por favor ingresa un email válido');
          return;
        }
        sumbitForm(user);
      }}
      className={Styles.UserForm}
    >
      <div className={Styles.grid}>
        <Input
          type='text'
          label='Nombre'
          value={user.name}
          isError={!!errorMessage && !user.name}
          onChange={e => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <Input
          type='text'
          label='Apellido'
          value={user.lastname}
          isError={!!errorMessage && !user.lastname}
          onChange={e => {
            setUser({ ...user, lastname: e.target.value });
          }}
        />
        <Input
          type='date'
          label='Fecha de nacimiento'
          value={user.birthDate}
          isError={!!errorMessage && !user.birthDate}
          onChange={e => {
            setUser({ ...user, birthDate: e });
          }}
        />
        <Input
          type='text'
          label='Email'
          value={user.email}
          isError={
            !!errorMessage && (!user.email || !validator.isEmail(user.email))
          }
          onChange={e => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <Input
          type='text'
          label='Cedula'
          value={user.userId}
          isError={!!errorMessage && !user.userId}
          onChange={e => {
            setUser({
              ...user,
              userId: e.target.value.replace(/[^0-9]+/g, ''),
            });
          }}
        />
        <Input
          type='text'
          label='Usuario de GitHub'
          value={user.githubUser}
          isError={!!errorMessage && !user.githubUser}
          onChange={e => {
            setUser({ ...user, githubUser: e.target.value });
          }}
        />
      </div>
      {errorMessage && (
        <div className={Styles.errorMessage}>{errorMessage}</div>
      )}
      <Button type='submit'>Guardar</Button>
    </form>
  );
};

UserForm.propTypes = {
  sumbitForm: PropTypes.func,
  userInit: PropTypes.object,
};

export default UserForm;
