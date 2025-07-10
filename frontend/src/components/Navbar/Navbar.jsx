
import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { Menu, X, Search, ShoppingCart, User, Package, LogOut } from 'lucide-react'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Menu', path: '#explore-menu', key: 'menu', anchor: true },
    { name: 'About', path: '/about', key: 'about' },
    { name: 'Contact', path: '/contact', key: 'contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Update active menu based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') setMenu('home');
    else if (currentPath === '/about') setMenu('about');
    else if (currentPath === '/contact') setMenu('contact');
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }

  const handleNavClick = (item) => {
    setMenu(item.key);
    if (item.anchor) {
      const element = document.querySelector(item.path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img 
              className="logo-img" 
              src={assets.im14} 
              alt="Logo" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.anchor ? (
                  <a
                    href={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`nav-link ${menu === item.key ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`nav-link ${isActivePath(item.path) || menu === item.key ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="navbar-right">
            {/* Search Icon */}
            <button className="nav-icon">
              {assets.search_icon ? (
                <img src={assets.search_icon} alt="Search" className="icon-img" />
              ) : (
                <Search className="icon-lucide" />
              )}
            </button>

            {/* Cart */}
            <Link to="/cart" className="nav-cart">
              {assets.basket_icon ? (
                <img src={assets.basket_icon} alt="Cart" className="icon-img" />
              ) : (
                <ShoppingCart className="icon-lucide" />
              )}
              {getTotalCartAmount() > 0 && (
                <span className="cart-badge">
                  {getTotalCartAmount()}
                </span>
              )}
            </Link>

            {/* User Authentication */}
            {!token ? (
              <button 
                onClick={() => setShowLogin(true)}
                className="sign-in-btn"
              >
                Sign In
              </button>
            ) : (
              <div className="navbar-profile">
                <button className="profile-btn">
                  {assets.profile_icon ? (
                    <img src={assets.profile_icon} alt="Profile" className="profile-img" />
                  ) : (
                    <User className="icon-lucide" />
                  )}
                </button>
                <div className="navbar-profile-dropdown">
                  <div className="dropdown-content">
                    <button
                      onClick={() => navigate('/myorders')}
                      className="dropdown-item"
                    >
                      {assets.bag_icon ? (
                        <img src={assets.bag_icon} alt="Orders" className="dropdown-icon" />
                      ) : (
                        <Package className="dropdown-icon-lucide" />
                      )}
                      Orders
                    </button>
                    <hr className="dropdown-divider" />
                    <button
                      onClick={logout}
                      className="dropdown-item"
                    >
                      {assets.logout_icon ? (
                        <img src={assets.logout_icon} alt="Logout" className="dropdown-icon" />
                      ) : (
                        <LogOut className="dropdown-icon-lucide" />
                      )}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
            >
              {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <div key={item.key}>
              {item.anchor ? (
                <a
                  href={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`mobile-nav-link ${menu === item.key ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`mobile-nav-link ${isActivePath(item.path) || menu === item.key ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="mobile-actions">
            <button className="mobile-icon">
              {assets.search_icon ? (
                <img src={assets.search_icon} alt="Search" className="icon-img" />
              ) : (
                <Search className="icon-lucide" />
              )}
            </button>
            
            <Link to="/cart" className="mobile-cart">
              {assets.basket_icon ? (
                <img src={assets.basket_icon} alt="Cart" className="icon-img" />
              ) : (
                <ShoppingCart className="icon-lucide" />
              )}
              {getTotalCartAmount() > 0 && (
                <span className="cart-badge">
                  {getTotalCartAmount()}
                </span>
              )}
            </Link>

            {!token ? (
              <button 
                onClick={() => setShowLogin(true)}
                className="mobile-sign-in"
              >
                Sign In
              </button>
            ) : (
              <div className="mobile-profile-actions">
                <button
                  onClick={() => navigate('/myorders')}
                  className="mobile-profile-item"
                >
                  {assets.bag_icon ? (
                    <img src={assets.bag_icon} alt="Orders" className="mobile-profile-icon" />
                  ) : (
                    <Package className="mobile-profile-icon-lucide" />
                  )}
                  Orders
                </button>
                <button
                  onClick={logout}
                  className="mobile-profile-item logout"
                >
                  {assets.logout_icon ? (
                    <img src={assets.logout_icon} alt="Logout" className="mobile-profile-icon" />
                  ) : (
                    <LogOut className="mobile-profile-icon-lucide" />
                  )}
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
