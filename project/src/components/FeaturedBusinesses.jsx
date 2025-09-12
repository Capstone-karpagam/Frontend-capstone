import React from 'react';
import { Star, MapPin, ArrowRight, TrendingUp, Award } from 'lucide-react';

const FeaturedBusinesses = ({ businesses, onBusinessClick }) => {
  const featuredBusinesses = businesses.filter(b => b.featured).slice(0, 6);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 mr-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Featured Businesses
                </h2>
                <p className="text-xl text-gray-600">
                  Discover top-rated local businesses handpicked for excellence
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>Trending in your area • Updated daily</span>
            </div>
          </div>
          <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Featured
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business, index) => (
            <div
              key={business.id}
              onClick={() => onBusinessClick(business)}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden group transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    ⭐ FEATURED
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-xs font-bold">
                    #{index + 1} TRENDING
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-bold text-gray-800">{business.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({business.reviews})</span>
                    </div>
                    <div className={`px-3 py-2 rounded-full text-xs font-bold ${
                      business.isOpen 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {business.isOpen ? 'OPEN' : 'CLOSED'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {business.name}
                </h3>
                <p className="text-gray-600 font-semibold mb-4">{business.category}</p>

                <div className="flex items-center text-gray-600 mb-6">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm line-clamp-1 flex-1">{business.address}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-white font-bold">{i}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-3">+{business.reviews} customers</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-bold shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to be Featured?</h3>
            <p className="text-gray-600 mb-6 max-w-md">Join thousands of successful businesses and get discovered by more customers</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bold shadow-lg">
              List Your Business FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;