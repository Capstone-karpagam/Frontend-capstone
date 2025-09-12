import React, { useState } from 'react';
import { Search, MapPin, Phone, Menu, X, User, Bell, Heart } from 'lucide-react';

const Header = ({ onSearch, onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Mumbai');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery, location);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-blue-200 transition-colors cursor-pointer">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+91 8888888888</span>
            </span>
            <span className="hidden md:block text-blue-200">|</span>
            <span className="hidden md:block">India's No.1 Local Business Directory</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-200 transition-colors flex items-center bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
              <Bell className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Notifications</span>
            </button>
            <button className="hover:text-blue-200 transition-colors">
              List Your Business FREE
            </button>
            <button className="hover:text-blue-200 transition-colors flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <User className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl mr-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent cursor-pointer">
                FindLocal
              </h1>
              <span className="text-sm text-gray-500 font-medium">Discover • Connect • Grow</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-3xl mx-8">
            <div className="flex w-full bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for restaurants, hotels, beauty spas, doctors..."
                  className="flex-1 px-4 py-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="flex items-center border-l border-gray-200 bg-white bg-opacity-50">
                <MapPin className="w-5 h-5 text-blue-500 ml-4" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-36 px-3 py-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg"
              >
                Search
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg">
              Add Business
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-4 animate-fadeIn">
            <div className="flex bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  className="flex-1 px-4 py-4 bg-transparent focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center bg-white rounded-2xl px-4 py-4 shadow-md border border-gray-200">
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 bg-transparent focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;