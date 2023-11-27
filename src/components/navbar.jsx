
import React from 'react';
import { Button, Navbar } from 'flowbite-react';

export default function NavbarC() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand >
        <span className="self-center text-xl font-semibold dark:text-white mx-10"> EntrenAT</span>
      </Navbar.Brand>
     
        
        <Navbar.Toggle />
      
      <Navbar.Collapse>
        <Navbar.Link href="/perfil" className='mx-5'>Perfil</Navbar.Link>
        <Navbar.Link href="#" className='mb-20 mx-5'>Buscar GymBro!</Navbar.Link>
        <button> <span className=" text-ml font-semibold dark:text-white ">Salir</span></button>
      </Navbar.Collapse>
    </Navbar>
  );
}
