import React from 'react'
import { Input } from '../ui/input'
import { Search, SlidersHorizontalIcon } from 'lucide-react'

export default function ProjectHeader() {
  return (
    <div className='flex justify-between m-4'>
        <div className="leftProjectsHeader">
            <h1>Todo List</h1>
        </div>
        <div className="rightProjectsHeader flex gap-3 items-center">
            <div className="flex relative">
            <Input placeholder='Search...' className='px-8'/>
            <Search className='absolute top-2 left-2'/>
            </div>
            <h2 className='flex px-3 py-2  gap-2 items-center bg-red-200 rounded-[20px] text-[12px]'><SlidersHorizontalIcon className='h-3 w-3'/> Filter</h2>
        </div>
    </div>
  )
}
