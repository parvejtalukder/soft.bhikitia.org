import React from 'react';
import Logo from './Logo/Logo';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center gap-3 py-3 px-2 bg-white rounded-2xl'>
            <Logo></Logo>
        </div>
    );
};

export default Navbar;