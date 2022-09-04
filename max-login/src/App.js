import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //  if(localStorage.getItem('isLoggedIn') === '1') {
  //   setIsLoggedIn(true)
  //  }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1')
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false);
  // };
  const {isLoggedIn, onLogout, onLogin} = useContext(AuthContext)
  return (
    // <AuthContext.Provider value={{isLoggedIn, onLogout: logoutHandler}}>
    <>
      <MainHeader  onLogout={onLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={onLogin} />}
        {isLoggedIn && <Home />}
      </main>
    </>
    // </AuthContext.Provider>
  );
}

export default App;
