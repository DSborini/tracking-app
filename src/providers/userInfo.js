import React from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext({});

const UserProvider = (props) => {
  const [user, setUser] = useState({
    input: '',
  });

  const { children } = props;

  return (
    <UserContext.Provider value={ { user, setUser } }>
      { children }
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export { UserContext, UserProvider };
