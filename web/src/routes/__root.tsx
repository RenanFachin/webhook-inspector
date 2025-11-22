import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
  <>
    {/* conteudo de cada página */}
    < Outlet />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
