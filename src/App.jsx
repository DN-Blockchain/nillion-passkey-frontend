import { Toaster } from 'react-hot-toast';
import './App.scss';
import { userRoutes } from './routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(userRoutes);

function App() {
  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
