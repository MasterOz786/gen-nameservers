import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AdminLayout } from './components/layouts/admin-layout'
import { PublicLayout } from './components/layouts/public-layout'
import { ProtectedRoute } from './components/protected-route'
import { AdminDashboard } from './pages/admin/dashboard'
import { DomainRequests } from './pages/admin/domain-requests'
import { Nameservers } from './pages/admin/nameservers'
import { Settings } from './pages/admin/settings'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { NotFound } from './pages/not-found'
import { SubmitDomain } from './pages/submit-domain'
import Guides from './pages/guides'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitDomain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guides" element={<Guides />} />
        </Route>

        {/* Admin Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/requests" element={<DomainRequests />} />
          <Route path="/admin/nameservers" element={<Nameservers />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App