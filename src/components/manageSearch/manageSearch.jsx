import React from 'react'
import { ManageSearchOutlined } from '@mui/icons-material'

export default function ManageSearch() {
  return (
    <div className='h-100'>
        <div className="md:flex items-center h-14 border-b border-slate-800 ml-2 hidden w-[200px]">
            <ManageSearchOutlined/>
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 h-full bg-transparent ml-2"
            />
          </div>
      
    </div>
  )
}