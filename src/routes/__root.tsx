import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <header className='h-20 w-full bg-gradient-to-tr from-red-800 to-amber-400'>
        <div className='max-w-9xl flex h-full items-center gap-inner-spacing px-spacing'>
          <h3 className='aspect-square border-[3px] bg-gradient-to-t from-red-950 to-amber-800 p-2 text-2xl font-extrabold leading-none shadow-lg'>
            RS
          </h3>
          <Link to='/' className='text-lg [&.active]:font-bold'>
            Home
          </Link>
          <Link to='/jokes' className='text-lg [&.active]:font-bold'>
            Jokes
          </Link>
        </div>
      </header>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
})
