import React from 'react'
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    FolderKanbanIcon,
    Home,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Settings2Icon,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
  } from "lucide-react"

  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from '../ui/button'
import Link from 'next/link'


export default function SideBar() {
  return (
    <aside className="inset-y fixed bg-white w-[6%] left-0 z-20 flex h-full flex-col border-r">
    <div className="border-b p-2 flex flex-col gap-4 items-center" >
      <Button variant="outline" size="icon" aria-label="Home">
        <Triangle className="size-5 fill-foreground" />
      </Button>
    </div>
    <nav className="  p-2 flex flex-col gap-4 items-center">
      <Link href={'/dashboard/home'} className='p-3'>
      <Home/>
      
      </Link>  
      <Link href={'/dashboard/projects'} className='p-3'><FolderKanbanIcon/></Link>  
      <Link href={'/dashboard/settings'} className='p-3'><Settings2Icon/></Link>  
 
     
      
    </nav>
    <nav className="mt-auto grid gap-1 p-2">
      
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mt-auto rounded-lg"
            aria-label="Help"
          >
            <LifeBuoy className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Help
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mt-auto rounded-lg"
            aria-label="Account"
          >
            <SquareUser className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Account
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
     
    </nav>
  </aside>
  )
}
