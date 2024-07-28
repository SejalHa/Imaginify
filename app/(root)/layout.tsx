
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import MODERN_BROWSERSLIST_TARGET from 'next/dist/shared/lib/modern-browserslist-target'
import React from 'react'

const layout = ({children}: {children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav/>
      
      <div className="root-container">
      <div className="wrapper">

      {children}
      </div>
      </div>
      
      </main>
  )
}

export default layout