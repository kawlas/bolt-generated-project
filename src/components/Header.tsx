'use client';

    import React from 'react';
    import { Search, User } from 'lucide-react';

    const Header = () => {
      return (
        <header className="bg-primary text-white py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="text-2xl font-bold">Roofnox</div>

            {/* Navigation */}
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-accent">Home</a></li>
                <li><a href="#about" className="hover:text-accent">About Us</a></li>
                <li><a href="#services" className="hover:text-accent">Services</a></li>
                <li><a href="#projects" className="hover:text-accent">Projects</a></li>
                <li><a href="#news" className="hover:text-accent">News</a></li>
                <li><a href="#pages" className="hover:text-accent">Pages</a></li>
                <li><a href="#contact" className="hover:text-accent">Contact Us</a></li>
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 cursor-pointer hover:text-accent" />
              <User className="w-6 h-6 cursor-pointer hover:text-accent" />
            </div>
          </div>
        </header>
      );
    };

    export default Header;
