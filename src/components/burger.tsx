import type { FC } from 'react'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Icons } from './Icons'
import { Button } from './ui/button'

const BurgerMenu: FC = (): JSX.Element => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               size='icon'
               variant='outline'
            >
               <Icons.burger />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className='w-56 relative right-8'>
            <DropdownMenuGroup>
               <DropdownMenuItem>
                  <a href='/projets'>Projets</a>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <a
                     href='https://github.com/Tom-lchg/pp'
                     target='_blank'
                  >
                     Source
                  </a>
               </DropdownMenuItem>
            </DropdownMenuGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default BurgerMenu
