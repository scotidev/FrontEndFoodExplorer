import { Routes, Route } from 'react-router-dom'

import { UserHome } from "../pages/UserHome"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
    </Routes>
  )
}