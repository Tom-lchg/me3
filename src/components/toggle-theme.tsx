import { useState, useEffect, type FC } from 'react'
import { Button } from './ui/button'
import { Icons } from './Icons'

const ToggleTheme: FC = (): JSX.Element => {
   const [theme, setTheme] = useState(window.localStorage.getItem('theme') ?? 'light')

   const handleClick = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
   }, [theme])

   return (
      <Button
         onClick={handleClick}
         size='icon'
         variant='ghost'
      >
         {theme === 'light' ? <Icons.moon /> : <Icons.sun />}
      </Button>
   )
}

export default ToggleTheme
