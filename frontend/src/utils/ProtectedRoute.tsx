import { Outlet, Navigate} from "react-router-dom"
export default function ProtectedRoute() {
    const user = localStorage.getItem('token');
  return user ? <Outlet /> : <Navigate to='/signin'/>
}
