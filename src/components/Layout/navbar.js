
import React, { useState } from 'react';
import classes from './navbar.module.css';



const Navigation = () => {
  
  const navItems = [
    { id: 1, name: 'Services', link: '/Services' },
    { id: 2, name: 'Classes', link: '/Classes' },
    { id: 3, name: 'Restaurant', link: '/Restaurant' },
    { id: 4, name: 'Blog', link: '/Blog' },
    { id: 5, name: 'Shop', link: '/Shop' },
    { id: 6, name: 'EN', link: '/EN', button: true },
    { id: 6, name: 'Logout', link: '/Logout', button: true },

  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.nav}>
      <div onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul >
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ item }) => {
  return (
    <li >
      {item.button ? (
        <div>
          <button>{item.name}</button>
        </div>
      ) : (
        <a href={item.link}>{item.name}</a>
      )}
    </li>
  );
};

export default Navigation;

