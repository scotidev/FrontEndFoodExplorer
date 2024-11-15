import { Routes, Route } from 'react-router-dom'

import { AdminHome } from "../pages/AdminHome"
import { AdminDish } from "../pages/AdminDish"
import { AdminEditDish } from "../pages/AdminEditDish"
import { AdminNewDish } from "../pages/AdminNewDish"
import { AdminMenu } from "../pages/AdminMenu"


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/editDish/:id" element={<AdminEditDish />} />
      <Route path="/newDish" element={<AdminNewDish />} />
      <Route path="/adminDish/:id" element={<AdminDish />} />
      <Route path="/adminMenu" element={<AdminMenu />} />

    </Routes>
  )
}
//<Route path="*" exact={true} element={<NotFound />} />