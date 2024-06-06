import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("isAuthenticated");
    navigate("/auth/login");
  };

  return (
    <>
      <div className="flex h-screen fixed bg-gray-100">
        <div className="flex flex-col w-56 h-full py-5 bg-blue-900 text-white justify-between">
          <div className="text-center">
            <img
              src="https://picsum.photos/200"
              alt="logo"
              className="rounded-full w-16 h-16 mx-auto mb-3"
            />
            <h2 className="text-lg font-semibold mb-6">Usuario Logeado</h2>
            <hr className="border-gray-700 mb-6" />
            <div className="space-y-4">
           
              <Link
                to="/tickets"
                className="flex items-center justify-start  px-4 py-2 hover:bg-blue-800 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-fill" viewBox="0 0 16 16">
                  <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z" />
                </svg>
                <span className="text-sm font-medium ml-4">Tickets</span>
              </Link>
              <Link
                to="/newTicket"
                className="flex items-center justify-start px-4 py-2 hover:bg-blue-800 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <span className="text-sm font-medium ml-4">Crear nuevo Ticket</span>
              </Link>
           
            </div>
          </div>
          <div className="text-center pb-5">
            <a
              href="#"
              onClick={handleLogout}
              className="flex items-center justify-start px-4 py-2 hover:bg-blue-800 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
              </svg>
              <span className="text-sm font-medium ml-4">Cerrar Sesión</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};