import React from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext({});

const UserProvider = (props) => {
  const user = {
    input: 'default text input',
  };

  const { children } = props;

  return (
    <UserContext.Provider value={ user }>
      { children }
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
