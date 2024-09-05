import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.theme
    const toggle = document.documentElement.classList.toggle.bind(
      document.documentElement.classList,
      'dark'
    )
    toggle(!localTheme ? isSystemDark : localTheme === 'dark')
    return toggle
  },
  component: Home,
})

function Home() {
  return (
    <div className='p-spacing text-5xl'>
      <h1 className='gap-spacing pb-inner-spacing text-red-500'>Riggs Space</h1>
      <p>The space app for nerd like Gavin Riggs!</p>
    </div>
  )
}

document.documentElement.classList.toggle('dark')
