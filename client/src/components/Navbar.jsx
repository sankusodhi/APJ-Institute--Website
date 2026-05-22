import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Departments', href: '/about/departments' },
      ],
    },
    {
      label: 'Academics',
      href: '/academics',
      submenu: [
        { label: 'Programs', href: '/academics/programs' },
        { label: 'Admissions', href: '/academics/admissions' },
        { label: 'Faculty', href: '/academics/faculty' },
      ],
    },
    { label: 'Events', href: '/events' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <Logo size="md" />
            <span className="hidden md:inline text-xl font-bold text-gray-800">
              APJ Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Desktop Dropdown */}
                {link.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Search & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-40"
              />
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <Search size={18} />
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Admission Open
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-expanded="false"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-2 pt-2 pb-3 space-y-1">
          {/* Mobile Search */}
          <div className="px-2 py-2 mb-3">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 flex-1"
              />
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => {
                  if (link.submenu) {
                    handleDropdownToggle(link.label);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between"
              >
                <Link to={link.href} onClick={() => !link.submenu && setIsOpen(false)}>
                  {link.label}
                </Link>
                {link.submenu && (
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      activeDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown */}
              {link.submenu && activeDropdown === link.label && (
                <div className="bg-gray-50 rounded-md ml-4 mt-1">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Mobile CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold"
          >
            Admission Open
          </motion.button>
        </div>
      )}
    </motion.nav>
  );
}
