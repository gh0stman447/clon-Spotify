import React from 'react';
import { CiSearch, CiHome, CiHeart } from 'react-icons/ci';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { GoPlus } from 'react-icons/go';
import { NavItem } from './NavItem';

export const TheNav = () => {
  const activeNavItemClaasses =
    'flex items-center text-white bg-[#282828] px-2 py-2 mx-2 mx-4 rounded';
  const navItemClasses =
    'flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300';
  const navItems = [
    {
      label: 'Home',
      icon: <CiHome className='h-8 w-8' />,
      classes: activeNavItemClaasses,
    },
    {
      label: 'Search',
      icon: <CiSearch className='h-8 w-8' />,
      classes: navItemClasses,
    },
    {
      label: 'Your Library',
      icon: <HiOutlineBuildingLibrary className='h-8 w-8' />,
      classes: `${navItemClasses} mb-6`,
    },
    {
      label: 'Create Playlist',
      icon: <GoPlus className='h-8 w-8' />,
      classes: navItemClasses,
    },
    {
      label: 'Liked Songs',
      icon: <CiHeart className='h-8 w-8' />,
      classes: navItemClasses,
    },
  ];
  return (
    <nav>
      {navItems.map(({ classes, icon, label }) => (
        <NavItem classes={classes} icon={icon}>
          {label}
        </NavItem>
      ))}
    </nav>
  );
};
