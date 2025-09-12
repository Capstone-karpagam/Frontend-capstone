import React, { useState } from 'react';
import { Filter, SortAsc, Grid, List, MapPin, Star, TrendingUp } from 'lucide-react';
import BusinessCard from './BusinessCard';

const BusinessList = ({ businesses, searchQuery, onBusinessClick }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: 'all',
    distance: 'all',
    openNow: false,
    verified: false
  });

  const sortedBusinesses = [...businesses].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'distance':
        return Math.random() - 0.5; // Mock distance sorting
      default:
        return 0;
    }
  });

  const filteredBusinesses = sortedBusinesses.filter(business => {
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      if (business.rating < minRating) return false;
    }
    if (filters.openNow && !business.isOpen) return false;
    if (filters.verified && !business.verified) return false;
    return true;
  });

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Results Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-xl border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {searchQuery ? `Results for "${searchQuery}"` : 'All Businesses'}
                  </h2>
                  <p className="text-xl text-gray-600">{filteredBusinesses.length} businesses found</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Showing results near Mumbai • Sorted by relevance</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 pr-12 focus:outline-none focus:border-blue-500 font-semibold text-gray-700"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                  <option value="distance">Sort by Distance</option>
                </select>
                <SortAsc className="w-5 h-5 absolute right-4 top-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
                {(filters.rating !== 'all' || filters.openNow || filters.verified) && (
                  <span className="ml-2 bg-white/20 rounded-full px-2 py-1 text-xs">Active</span>
                )}
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {filterOpen && (
            <div className="border-t border-gray-200 pt-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Minimum Rating</label>
                  <select 
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500 font-semibold"
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.0">4.0+ Stars</option>
                    <option value="3.5">3.5+ Stars</option>
                    <option value="3.0">3.0+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Distance</label>
                  <select className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500 font-semibold">
                    <option>Any Distance</option>
                    <option>Within 1 km</option>
                    <option>Within 5 km</option>
                    <option>Within 10 km</option>
                    <option>Within 25 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Availability</label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={filters.openNow}
                        onChange={(e) => setFilters({...filters, openNow: e.target.checked})}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" 
                      />
                      <span className="font-semibold text-gray-700">Open Now</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Verification</label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={filters.verified}
                        onChange={(e) => setFilters({...filters, verified: e.target.checked})}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" 
                      />
                      <span className="font-semibold text-gray-700">Verified Only</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setFilters({ rating: 'all', distance: 'all', openNow: false, verified: false })}
                  className="text-gray-600 hover:text-gray-800 font-semibold"
                >
                  Clear All Filters
                </button>
                <div className="text-sm text-gray-500">
                  Showing {filteredBusinesses.length} of {businesses.length} results
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">{filteredBusinesses.length}</div>
            <div className="text-sm text-gray-600 font-semibold">Total Results</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">{filteredBusinesses.filter(b => b.isOpen).length}</div>
            <div className="text-sm text-gray-600 font-semibold">Open Now</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">{filteredBusinesses.filter(b => b.verified).length}</div>
            <div className="text-sm text-gray-600 font-semibold">Verified</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">{filteredBusinesses.filter(b => b.featured).length}</div>
            <div className="text-sm text-gray-600 font-semibold">Featured</div>
          </div>
        </div>

        {/* Business Grid/List */}
        {filteredBusinesses.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
          }>
            {filteredBusinesses.map((business, index) => (
              <div
                key={business.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-fadeIn"
              >
                <BusinessCard
                  business={business}
                  onClick={onBusinessClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-md mx-auto">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Results Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button 
                onClick={() => setFilters({ rating: 'all', distance: 'all', openNow: false, verified: false })}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredBusinesses.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-12 py-4 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Load More Results
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessList;