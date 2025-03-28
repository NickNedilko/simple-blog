import { Navigate } from "react-router-dom";

import { FC } from "react";
import { useAuthStore } from "../store/authStore";

interface RouteProps{
  component:  any,
  redirectTo?: string
}

export const RestrictedRoute: FC<RouteProps> = ({ component , redirectTo = '/' }) => {
 const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}

export const PrivateRoute: FC<RouteProps> = ({ component, redirectTo = '/' }) =>{
   const { isLoggedIn } = useAuthStore();
  const isFetching = useSelector(selectIsRefreshing);

  return !isLoggedIn && !isFetching ? <Navigate to={redirectTo} /> : component;
}