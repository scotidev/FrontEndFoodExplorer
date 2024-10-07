import { Routes, Route } from 'react-router-dom'

import { UserHome } from "../pages/UserHome"
import { UserDish } from "../pages/UserDish"
import { UserMenu } from "../pages/UserMenu"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/dish/:id" element={<UserDish />} />
      <Route path="/menu" element={<UserMenu />} />
    </Routes>
  )
}