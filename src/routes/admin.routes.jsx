import { Routes, Route, Navigate } from 'react-router-dom'

import { AdminHome } from "../pages/AdminHome"
import { AdminDish } from "../pages/AdminDish"
import { AdminEditDish } from "../pages/AdminEditDish"
import { AdminNewDish } from "../pages/AdminNewDish"
import { AdminMenu } from "../pages/AdminMenu"


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/" element={<AdminEditDish />} />
      <Route path="/" element={<AdminNewDish />} />
      <Route path="/" element={<AdminDish />} />
      <Route path="/" element={<AdminMenu />} />
    </Routes>
  )
}