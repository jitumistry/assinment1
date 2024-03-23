import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Internal from './components/Internal';
import PRD from './components/PRD';
import Specs from './components/Specs';
import Hardware from './components/Hardware';
import Software from './components/Software';
import Material from './components/Material';
import Production from './components/Production';
import Online from './components/Online';
import Dealearship from './components/Dealearship';
import B2C from './components/B2C';
import ReachOnline from './components/ReachOnline';
import Interview from './components/Interview';
import PublicData from './components/PublicData';
import Health from './components/Health';



function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Internal',
      element: <Internal />
    },
    {
      path: 'PRD',
      element: <PRD />
    },
    {
      path: '/Specs',
      element: <Specs />
    },
    {
      path: '/Hardware',
      element: <Hardware />
    },
    {
      path: 'Software',
      element: <Software />
    },
    {
      path: '/Material',
      element: <Material />
    },
    {
      path: '/Production',
      element: <Production />
    },
    {
      path: 'Online',
      element: <Online />
    },
    {
      path: '/Dealearship',
      element: <Dealearship />
    },
    {
      path: '/B2C',
      element: <B2C />
    },
    {
      path: 'ResearchOnline',
      element: <ReachOnline />
    },
    {
      path: 'Interview',
      element: <Interview />
    },
    {
      path: 'PublicData',
      element: <PublicData />
    },
    {
      path: 'Health',
      element: <Health />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
