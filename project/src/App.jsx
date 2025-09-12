import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import FeaturedBusinesses from './components/FeaturedBusinesses';
import BusinessList from './components/BusinessList';
import BusinessDetail from './components/BusinessDetail';
import Footer from './components/Footer';
import { mockBusinesses } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter(business => {
      const matchesQuery = !searchQuery || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
        business.category === selectedCategory;
      
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query, location) => {
    setSearchQuery(query);
    setSearchLocation(location);
    setSelectedCategory('');
    setCurrentView('search');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setCurrentView('search');
  };

  const handleBusinessClick = (business) => {
    setSelectedBusiness(business);
    setCurrentView('detail');
  };

  const handleBackToResults = () => {
    setCurrentView(searchQuery || selectedCategory ? 'search' : 'home');
    setSelectedBusiness(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-5"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full opacity-5"></div>
              </div>
              <div className="max-w-7xl mx-auto px-4 text-center relative">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Find Local
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Businesses
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Discover, connect, and grow with India's most trusted local business directory. 
                  Find verified businesses, read genuine reviews, and make informed decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setCurrentView('search')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                  >
                    Explore Businesses
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-12 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 font-bold text-lg">
                    List Your Business
                  </button>
                </div>
              </div>
            </section>

            <Categories onCategorySelect={handleCategorySelect} />
            <FeaturedBusinesses 
              businesses={mockBusinesses} 
              onBusinessClick={handleBusinessClick}
            />

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose FindLocal?</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're more than just a directory - we're your trusted partner in discovering quality local businesses
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Discovery</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Find exactly what you're looking for with our powerful search and smart filters
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Verified Listings</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All businesses are verified for authenticity and quality assurance
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">⭐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Genuine Reviews</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Read authentic reviews from real customers to make informed decisions
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      
      case 'search':
        return (
          <BusinessList
            businesses={filteredBusinesses}
            searchQuery={searchQuery || selectedCategory}
            onBusinessClick={handleBusinessClick}
          />
        );
      
      case 'detail':
        return selectedBusiness ? (
          <BusinessDetail
            business={selectedBusiness}
            onBack={handleBackToResults}
          />
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView !== 'detail' && (
        <Header 
          onSearch={handleSearch}
          onCategorySelect={handleCategorySelect}
        />
      )}
      
      <main>
        {renderCurrentView()}
      </main>
      
      {currentView !== 'detail' && <Footer />}
    </div>
  );
}

export default App;