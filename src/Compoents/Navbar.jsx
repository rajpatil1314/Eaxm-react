import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'space-around' , fontSize : '25px'}}>
<Link  style={{textDecoration : 'none'}} to ='/Home'>Home</Link>
<Link  style={{textDecoration : 'none'}} to ='/About'>About</Link>
<Link  style={{textDecoration : 'none'}} to ='/Product'>Product List</Link>

<Link  style={{textDecoration : 'none'}} to ='/Allproduct'>Product Detail</Link>
<Link  style={{textDecoration : 'none'}} to ='/Login'>Login</Link>


      
    </div>
  )
}

export default Navbar