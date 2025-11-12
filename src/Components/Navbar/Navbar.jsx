import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className="navbar max-w-[1200px] w-11/12 mx-auto">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl md:text-2xl">CS — Ticket System</a>
                    </div>
                    <div className="flex-none hidden md:block">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <button className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>+ New Ticket</button>
                    </div>
                    <div className="dropdown dropdown-hover md:hidden flex-none relative">
                        <div tabIndex={0} role="button" className="btn">Hover</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-1 shadow-sm w-24">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;