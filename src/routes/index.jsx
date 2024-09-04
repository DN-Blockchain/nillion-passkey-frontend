import RegisterPage from '@/pages/Auth/Register';
import LoginPage from '@/pages/Auth/Login';
import LandingPage from '@/pages/Landing';
import ProfilePage from '@/pages/Profile';

export const userRoutes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
];
