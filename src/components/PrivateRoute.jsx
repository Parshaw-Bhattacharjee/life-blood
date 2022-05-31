import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();

  console.log(location, 'location', token);
  return (
    <>{token ? children : <Navigate to={`/login${location.pathname}`} />}</>
  );
};
