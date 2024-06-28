import { Edit2, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ProjectsBorder() {
  return (
    <div className='grid grid-cols-3 px-5 gap-10' mt-3 >
        <div className="">
            <div className="flex items-center  justify-between">
            <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">To Do(2)</h2>
            <button className='px-3 py-1 rounded-[20px] text-[13px] flex items-center text-[#FC85AA] bg-[#F8E8EF] flex'> <Plus className='h-4 w-4'/> Add Task</button>
            </div>
            <div className="todoCards flex flex-col gap-4 mt-2">
                <div className="card rounded-t-[20px] bg-white shadow-md  overflow-hidden">
                    <Image src={'/images/jf.jpg'} className='w-full h-[90px]' alt='' width={300} height={60}/>
                    <div className="p-2">
                        <h1 className='fontextrabold'>ABout the task</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="ctas p-3 flex justify-between">
                        <Edit2/>
                        <Trash2/>
                    </div>
                </div>
                <div className="card rounded-t-[20px] bg-white shadow-md  overflow-hidden">
                    <Image src={'/images/jf.jpg'} className='w-full h-[90px]' alt='' width={300} height={60}/>
                    <div className="p-2">
                        <h1 className='fontextrabold'>ABout the task</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="ctas p-3 flex justify-between">
                        <Edit2/>
                        <Trash2/>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex items-center  justify-between">
            <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">In Progress(1)</h2>
            <button className='px-3 py-1 rounded-[20px] text-[13px] flex items-center text-[#FC85AA] bg-[#F8E8EF] flex'> <Plus className='h-4 w-4'/> Add Task</button>
            </div>
            <div className="todoCards mt-2">
                <div className="card rounded-t-[20px] bg-white shadow-md  overflow-hidden">
                    <Image src={'/images/jf.jpg'} className='w-full h-[90px]' alt='' width={300} height={60}/>
                    <div className="p-2">
                        <h1 className='fontextrabold'>ABout the task</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex items-center  justify-between">
            <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">Completed(2)</h2>
            <button className='px-3 py-1 rounded-[20px] text-[13px] flex items-center text-[#FC85AA] bg-[#F8E8EF] flex'> <Plus className='h-4 w-4'/> Add Task</button>
            </div>
            <div className="todoCards mt-2">
                <div className="card rounded-t-[20px] bg-white shadow-md  overflow-hidden">
                    <Image src={'/images/jf.jpg'} className='w-full h-[90px]' alt='' width={300} height={60}/>
                    <div className="p-2">
                        <h1 className='fontextrabold'>ABout the task</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
