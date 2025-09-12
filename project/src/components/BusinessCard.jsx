import React, { useState } from 'react';
import { Star, MapPin, Phone, Clock, Verified, Heart, Eye, Share2 } from 'lucide-react';

const BusinessCard = ({ business, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShareClick = (e) => {
    e.stopPropagation();
    // Share functionality would go here
  };

  return (
    <div 
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden group transform hover:-translate-y-2"
      onClick={() => onClick(business)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {business.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured
          </div>
        )}
        
        <div className="absolute top-4 right-4 flex space-x-2">
          <button 
            onClick={handleShareClick}
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={handleLikeClick}
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
          >
            <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <Eye className="w-4 h-4 text-gray-600 mr-1" />
              <span className="text-sm font-medium text-gray-700">View Details</span>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
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
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {business.name}
              </h3>
              {business.verified && (
                <div className="ml-2 bg-green-100 rounded-full p-1">
                  <Verified className="w-4 h-4 text-green-600" />
                </div>
              )}
            </div>
            <p className="text-gray-600 font-medium">{business.category}</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-2 rounded-full shadow-md">
            <Star className="w-4 h-4 text-white fill-current" />
            <span className="text-sm font-bold ml-1 text-white">{business.rating}</span>
          </div>
          <span className="text-gray-500 text-sm ml-3 font-medium">
            ({business.reviews.toLocaleString()} reviews)
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-sm line-clamp-1 flex-1">{business.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">{business.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <Clock className="w-4 h-4" />
            </div>
            <span className={`text-sm font-semibold ${
              business.isOpen ? 'text-green-600' : 'text-red-600'
            }`}>
              {business.isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl">
            View Details
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm font-bold shadow-lg">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;