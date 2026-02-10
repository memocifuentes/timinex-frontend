"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginResponse {
  token?: string;
  user?: {
    id: number;
    email: string;
    name: string;
    last_name: string;
    role: string;
  };
  error?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

  const handleLogin = async () => {
    setMessage("");

    if (!email || !password) {
      setMessage("Por favor ingresa email y contraseña");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok || data.error) {
        setMessage(data.error || "Error en login");
      } else {
        // Guardar token y user
        localStorage.setItem("token", data.token!);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage(`Login exitoso! Bienvenido ${data.user!.name}`);
        setTimeout(() => router.push("/dashboard"), 1000);
      }
    } catch (err: any) {
      setMessage("Error de conexión: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>Login Timinex</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={handleLogin} style={{ width: "100%", padding: 10 }}>
        Ingresar
      </button>
      {message && <p style={{ marginTop: 10, color: "red" }}>{message}</p>}
    </div>
  );
}
