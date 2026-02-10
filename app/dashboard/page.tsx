"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ValidateResponse {
  user?: {
    id: number;
    name: string;
    email: string;
    last_name: string;
    role: string;
  };
  error?: string;
}

export default function Dashboard() {
  const [message, setMessage] = useState("Cargando...");
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchProtected = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/validate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data: ValidateResponse = await res.json();

        if (!res.ok || data.error) {
          setMessage("Token inválido o expirado. Redirigiendo...");
          localStorage.removeItem("token");
          setTimeout(() => router.push("/login"), 1000);
        } else {
          setMessage(`Bienvenido ${data.user!.name}!`);
        }
      } catch (err: any) {
        setMessage("Error de conexión: " + err.message);
      }
    };

    fetchProtected();
  }, []);

  return <div style={{ textAlign: "center", marginTop: 50 }}>{message}</div>;
}
