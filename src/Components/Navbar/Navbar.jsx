
import { useState } from "react";
import Linke from "./Linke/Linke"; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

 
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const routes = [
    { path: '/', name: 'Home', id: 'home' },
    { path: '/about', name: 'About', id: 'about' },
    { path: '/contact', name: 'Contact', id: 'contact' },
    { path: '/products', name: 'Products', id: 'products' },
    { path: '/products/:id', name: 'Product Detail', id: 'productDetail' }
  ];
  return (
    <nav className="bg-orange-100 text-black  "> 
      <div className="text-3xl font-bold  md:hidden" onClick={ ()=> setOpen(!open)}>  
          {
            open === true ? 
            <AiOutlineClose></AiOutlineClose> 
            : <AiOutlineMenu></AiOutlineMenu>
          } 
      </div>
        <ul className={`md:flex  bg-orange-400 absolute md:static duration-1000 rounded-xl p-4 font-bold ${open ? 'top-12' : '-top-80'}`}> 
        {
          routes.map(route => <Linke key={route.id} route={route}></Linke>  )
        }
        </ul>
    </nav>
  );
};

export default Navbar;