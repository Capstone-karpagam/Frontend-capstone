import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Globe, 
  Verified,
  Share2,
  Heart,
  Camera,
  MessageSquare,
  ThumbsUp,
  User,
  Mail,
  Calendar,
  Award,
  Shield,
  Bookmark
} from 'lucide-react';

const BusinessDetail = ({ business, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Award },
    { id: 'reviews', label: `Reviews (${business.reviews.toLocaleString()})`, icon: Star },
    { id: 'photos', label: 'Photos (24)', icon: Camera },
    { id: 'contact', label: 'Contact & Hours', icon: Phone }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">About {business.name}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {business.description || `${business.name} is a highly rated ${business.category.toLowerCase()} located in ${business.address}. We provide exceptional service and have been serving the community with dedication and quality. Our commitment to excellence has earned us the trust of thousands of satisfied customers.`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {['Premium Quality Service', 'Expert Professional Staff', 'Competitive Pricing', '24/7 Customer Support', 'Quick Response Time', '100% Satisfaction Guaranteed'].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-2 mr-4">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Working Hours</h3>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="space-y-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-semibold text-gray-800">{day}</span>
                        <span className={`font-medium ${day === 'Sunday' ? 'text-red-500' : 'text-green-600'}`}>
                          {day === 'Sunday' ? 'Closed' : '9:00 AM - 8:00 PM'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Award Winning</h4>
                  <p className="text-gray-600">Recognized for excellence in service quality</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Trusted & Verified</h4>
                  <p className="text-gray-600">Verified business with genuine reviews</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Top Rated</h4>
                  <p className="text-gray-600">Consistently high ratings from customers</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-6xl font-bold text-gray-800 mr-6">{business.rating}</div>
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 ${star <= business.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-xl text-gray-600 font-semibold">{business.reviews.toLocaleString()} reviews</p>
                    <p className="text-gray-500">Based on customer feedback</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg">
                  Write a Review
                </button>
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <span className="text-sm font-medium mr-2">{rating}</span>
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-2" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full" 
                        style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                { name: 'Rajesh Kumar', rating: 5, date: '2 days ago', review: 'Excellent service and great experience! The staff was very professional and the quality exceeded my expectations. Highly recommended for anyone looking for quality service.' },
                { name: 'Priya Sharma', rating: 5, date: '1 week ago', review: 'Outstanding! I have been a customer for over a year now and they never disappoint. The attention to detail and customer care is remarkable.' },
                { name: 'Amit Patel', rating: 4, date: '2 weeks ago', review: 'Very good service overall. Quick response time and professional approach. Will definitely come back and recommend to others.' }
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                          <div className="flex items-center mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <button className="flex items-center hover:text-blue-600 transition-colors">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          Helpful (12)
                        </button>
                        <button className="hover:text-blue-600 transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-bold">
                Load More Reviews
              </button>
            </div>
          </div>
        );

      case 'photos':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Photo Gallery</h3>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold">
                Upload Photos
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photo) => (
                <div key={photo} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                  <img
                    src={business.image}
                    alt={`Photo ${photo}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <p className="text-sm font-semibold text-gray-800">Interior View {photo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-3 mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{business.phone}</p>
                      <p className="text-sm text-gray-500">Primary Contact</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3 mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{business.address}</p>
                      <p className="text-sm text-gray-500">Business Address</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-3 mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">info@{business.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                      <p className="text-sm text-gray-500">Email Address</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3 mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">www.{business.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                      <p className="text-sm text-gray-500">Website</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 resize-none transition-colors"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Location Map</h3>
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-600">Interactive Map</p>
                  <p className="text-gray-500">Google Maps integration would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Results
          </button>
        </div>
      </div>

      {/* Business Hero */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute top-6 right-6 flex space-x-3">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg"
                >
                  <Heart className={`w-6 h-6 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
                <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg">
                  <Share2 className="w-6 h-6 text-gray-600" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg">
                  <Bookmark className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center mb-3">
                    <h1 className="text-4xl font-bold text-gray-800">{business.name}</h1>
                    {business.verified && (
                      <div className="ml-4 bg-green-100 rounded-full p-2">
                        <Verified className="w-6 h-6 text-green-600" />
                      </div>
                    )}
                  </div>
                  <p className="text-xl text-gray-600 font-semibold">{business.category}</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-3 rounded-2xl shadow-lg">
                  <Star className="w-6 h-6 text-white fill-current" />
                  <span className="text-xl font-bold ml-2 text-white">{business.rating}</span>
                </div>
                <span className="text-gray-600 ml-4 text-lg font-semibold">({business.reviews.toLocaleString()} reviews)</span>
                <span className={`ml-6 px-4 py-2 rounded-full text-sm font-bold ${
                  business.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {business.isOpen ? '🟢 Open Now' : '🔴 Closed'}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="bg-gray-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="text-lg">{business.address}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="bg-gray-100 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="text-lg font-semibold">{business.phone}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  📞 Call Now
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-t border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-6 px-4 border-b-4 font-bold whitespace-nowrap transition-all duration-300 flex items-center ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default BusinessDetail;