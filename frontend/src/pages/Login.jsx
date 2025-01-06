import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillAndroid } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Inside Try block");
      const token = response.data.token;
      console.log(token);

      if (token) {
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/admin-dashboard");
      } else {
        throw new Error("Invalid response. Token not found.");
      }
    } catch (error) {
      console.log("Inside Catch block");
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      alert(errorMessage);
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="galaxy-bg">
      {showSplash ? (
        <div
          className="splash-screen"
          style={{
            transform: "translateY(0)",
            opacity: 1,
            transition: "transform 1s ease, opacity 1s ease",
          }}
        >
          <AiFillAndroid size={150} color="#61DBFB" className="splash-logo" />
          <h1 className="splash-text">Welcome to My React App</h1>
        </div>
      ) : (
        <div className="relative flex flex-col items-center h-screen justify-center space-y-6">
          <h2 className="font-FleurDeLeah text-5xl text-white">
            Unlock your potential
          </h2>
          <div className="border shadow p-6 w-80 bg-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />{" "}
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                Log In
              </button>
            </form>
            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
