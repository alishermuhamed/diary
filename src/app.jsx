import Header from './components/header';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/login';
import RequireAuth from './components/require-auth';

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route
        path="add"
        element={
          <RequireAuth>
            <div>Add</div>
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <div>Home</div>
          </RequireAuth>
        }
      />
    </Routes>
  </>;
}

export default App;
