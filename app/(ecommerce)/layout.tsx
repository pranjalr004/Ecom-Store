import React from 'react'

const layout = ({children}: Readonly<{
  children: React.ReactNode;
}>)=> {
  return (
    <div>
      <div>Navbar</div>
      {children}
      <div>Footer</div>
    </div>
  )
}

export default layout
