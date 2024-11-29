import { useNavigate, useLocation } from 'react-router-dom';

interface QueryParams {
  [key: string]: string | number;
}

const usePathNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (nextPath: string, queryParams?: QueryParams) => {
    const normalizedPath = `${location.pathname}/${nextPath}`.replace(/\/+/g, '/');

    const queryString = queryParams
      ? `?${new URLSearchParams(queryParams as Record<string, string>).toString()}`
      : '';

    navigate(`${normalizedPath}${queryString}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { pathname: location.pathname, navigateTo, goBack };
};

export default usePathNavigator;
