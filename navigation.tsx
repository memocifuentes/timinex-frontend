"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Bell,
  Menu,
  X,
  Home,
  CalendarIcon,
  UsersIcon,
  Wallet,
  User,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  MessageSquare,
} from "lucide-react"
import { useAppContext } from "@/context/AppContext"

const Navigation = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { alumnos, usuario, cerrarSesion, logoNegocio } = useAppContext()
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Cerrar menú de búsqueda al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const alumnosFiltrados = alumnos
    .filter(
      (alumno) =>
        alumno.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumno.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(0, 5)

  const getActiveItem = () => {
    if (pathname === "/dashboard") return "inicio"
    if (pathname.startsWith("/calendario")) return "calendario"
    if (pathname.startsWith("/alumnos")) return "alumnos"
    if (pathname.startsWith("/finanzas")) return "finanzas"
    return ""
  }

  const activeNav = getActiveItem()

  const handleNavigation = (path: string) => {
    router.push(path)
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    cerrarSesion()
    router.push("/landing")
  }

  const menuItems = [
    { id: "inicio", label: "Inicio", path: "/dashboard", icon: Home },
    { id: "calendario", label: "Calendario", path: "/calendario", icon: CalendarIcon },
    { id: "alumnos", label: "Alumnos", path: "/alumnos", icon: UsersIcon },
    { id: "finanzas", label: "Finanzas", path: "/finanzas", icon: Wallet },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Marca */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#5b5fef] to-[#7b68ee] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-gray-900 font-semibold text-lg hidden sm:block">Mi Portal</span>
            </button>
          </div>

          {/* Barra de búsqueda central (Desktop) */}
          <div className="flex-1 max-w-md mx-4 hidden md:block" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Buscar alumno..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearchResults(true)
                }}
                onFocus={() => setShowSearchResults(true)}
                className="pl-10 bg-gray-50 border-gray-200 h-10 text-sm rounded-full focus:bg-white transition-colors"
              />

              {showSearchResults && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 max-h-80 overflow-y-auto z-50">
                  {alumnosFiltrados.length > 0 ? (
                    <div className="py-2">
                      {alumnosFiltrados.map((alumno) => (
                        <button
                          key={alumno.id}
                          onClick={() => {
                            setShowSearchResults(false)
                            setSearchQuery("")
                            router.push("/alumnos")
                          }}
                          className="w-full px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 text-left"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                            {alumno.nombre
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{alumno.nombre}</p>
                            <p className="text-sm text-gray-500">{alumno.email}</p>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              alumno.estado === "activo" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {alumno.estado}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center text-gray-500">
                      <UsersIcon className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">No se encontraron alumnos</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Navegación principal (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeNav === item.id ? "default" : "ghost"}
                onClick={() => handleNavigation(item.path)}
                className={`rounded-full px-6 ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-[#5b5fef] to-[#7b68ee] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Iconos de usuario */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            {/* Avatar del usuario con menú desplegable */}
            <div className="relative hidden lg:block" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-semibold text-sm hover:shadow-lg transition-shadow"
              >
                {usuario.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </button>

              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-gray-900">{usuario.nombre}</p>
                    <p className="text-sm text-gray-500">{usuario.email}</p>
                  </div>

                  <div className="py-2">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        router.push("/perfil")
                      }}
                      className="w-full px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 text-left"
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm">Mi Perfil</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        router.push("/comunicacion")
                      }}
                      className="w-full px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 text-left"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">Comunicación</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        router.push("/configuracion")
                      }}
                      className="w-full px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 text-left"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Configuración</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        router.push("/finanzas")
                      }}
                      className="w-full px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 text-left"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm">Suscripción y Pagos</span>
                    </button>

                    <button className="w-full px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 text-left">
                      <HelpCircle className="w-4 h-4" />
                      <span className="text-sm">Ayuda y Soporte</span>
                    </button>
                  </div>

                  <div className="border-t border-gray-100 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2.5 hover:bg-red-50 transition-colors flex items-center gap-3 text-red-600 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Cerrar Sesión</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Botón de menú hamburguesa (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil expandido */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeNav === item.id
                      ? "bg-gradient-to-r from-[#5b5fef] to-[#7b68ee] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}

            {/* Búsqueda en móvil */}
            <div className="md:hidden pt-4 border-t border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Buscar alumno..."
                  className="pl-10 bg-gray-50 border-gray-200 rounded-full"
                />
              </div>
            </div>

            {/* Opciones de usuario en móvil */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => handleNavigation("/perfil")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Mi Perfil</span>
              </button>

              <button
                onClick={() => handleNavigation("/comunicacion")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Comunicación</span>
              </button>

              <button
                onClick={() => handleNavigation("/configuracion")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Configuración</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
