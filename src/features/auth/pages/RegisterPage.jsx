import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await registerUser({
        name,
        email,
        password,
      });

      login(data);

      toast.success("Compte créé");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Erreur serveur"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button className="w-full bg-black text-white py-3 rounded-xl">
            {loading
              ? "Chargement..."
              : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;