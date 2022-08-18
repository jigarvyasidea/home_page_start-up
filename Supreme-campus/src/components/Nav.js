import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li className='nav-link'>
          <a href='#'>Home</a>
        </li>
        <li className='nav-link'>
          <a href='https://supremecampus.com/starter/'>Supreme Starter Course</a>
        </li>
        <li className='nav-link'>
          <a href='https://supremecampus.com/about/'>About</a>
        </li>
        <li className='text-lg'>
          <a href='https://supremecampus.com/contact-us/'>Contact Us</a>
        </li>
        <li className='btn'>
          <a href='https://learn.supremecampus.com/'>Member Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
