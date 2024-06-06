import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginPage = () => {

  const { login } = useAuth();
  const navigate = useNavigate(); 
  const userDemo = {
    email: "test@nazar.cl",
    password: "test123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = () => {
    if (email === userDemo.email && password === userDemo.password) {
      login(); 
      setErrorMessage("");
      navigate('/'); 

    } else {
      setErrorMessage("El email o la contraseña son incorrectos.");
    }
  };
 
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
           INICIAR SESIÓN
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                id="username"
                type="text"
                placeholder="Ingrese su email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
            <div className="text-red-500 text-center mb-2">{errorMessage}</div>
          )}
            <div className="flex flex-col items-center justify-between">
              <button
                className="bg-blue-900 hover:bg-blue-800 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
              <Link
                to="/auth/forgotPass"
                className="inline-block align-baseline w-full mt-4 text-center font-bold text-sm text-blue-900 hover:text-blue-700"
              >
                Olvidaste tu contraseña?
              </Link>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
};