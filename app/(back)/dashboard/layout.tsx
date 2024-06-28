import Header from '@/components/back/Header'
import SideBar from '@/components/back/SideBar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className="grid h-screen w-full pl-[56px]">
    <SideBar/>
      <div className="flex bg-[#F9FAFC] flex-col ">
        <Header/>
        <div className="px-6">
        {children}
        </div>
        
      </div>
    </div>
  )
}
