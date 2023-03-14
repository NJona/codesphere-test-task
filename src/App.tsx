import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Workspaces from './routes/workspaces/workspaces.component';
import { setTeam } from './store/team/team.action';
import { authenticateMock } from './utils/authenticate-mock.client';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const team = authenticateMock();
    console.log(team);
    dispatch(setTeam(team));
  }, [dispatch]);

  return (
    <Workspaces />
  );
}

export default App;
