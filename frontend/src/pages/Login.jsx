import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillAndroid } from "react-icons/ai"; // React icon for the logo

const Login = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 3 seconds
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></div>
      );
    }
    return stars;
  };

  const generateShootingStars = (count) => {
    const shootingStars = [];
    for (let i = 0; i < count; i++) {
      shootingStars.push(
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      );
    }
    return shootingStars;
  };

  return (
    <div className="galaxy-bg">
      {/* Stars */}
      {generateStars(100)}

      {/* Shooting Stars */}
      {generateShootingStars(5)}

      {/* Splash Screen */}
      {showSplash ? (
        <div
          className="splash-screen"
          style={{
            transform: showSplash ? "translateY(0)" : "translateY(-100%)",
            opacity: showSplash ? 1 : 0,
            transition: "transform 1s ease, opacity 1s ease", // Smooth transition
          }}
        >
          {/* Using React Icon for the logo */}
          <AiFillAndroid size={150} color="#61DBFB" className="splash-logo" />
          <h1 className="splash-text">Welcome to My React App</h1>
        </div>
      ) : (
        <div className="relative flex flex-col items-center h-screen justify-center space-y-6 z-10">
          <h2 className="font-FleurDeLeah text-5xl text-white">
            Unlock your potential
          </h2>

          <div className="border shadow p-6 w-80 bg-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Log In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
