import './App.scss';
import { userRoutes } from './routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(userRoutes);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
