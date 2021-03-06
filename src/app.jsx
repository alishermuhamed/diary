import {useEasybase} from 'easybase-react';
import Header from './components/header/header';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/login/login';
import RequireAuth from './routes/require-auth';
import AddRecord from './routes/add-record/add-record';
import Home from './routes/home/home';

function App() {
  const {isUserSignedIn, signOut} = useEasybase();

  return <>
    <Header
      isUserSignedIn={isUserSignedIn()}
      onSignOut={signOut}
    />
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route
        path="add"
        element={
          <RequireAuth>
            <AddRecord/>
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }
      />
    </Routes>
  </>;
}

export default App;
