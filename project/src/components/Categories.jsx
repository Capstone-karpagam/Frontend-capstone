import React from 'react';
import { 
  Utensils, 
  Hotel, 
  Car, 
  Wrench, 
  Sparkles, 
  GraduationCap,
  Heart,
  ShoppingBag,
  Home,
  Briefcase,
  Camera,
  Dumbbell,
  Plane,
  Music,
  Gamepad2,
  Baby
} from 'lucide-react';

const Categories = ({ onCategorySelect }) => {
  const categories = [
    { name: 'Restaurants', icon: Utensils, color: 'from-red-500 to-red-600', bgColor: 'bg-red-50', count: '45K+', description: 'Fine dining & cafes' },
    { name: 'Hotels', icon: Hotel, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', count: '12K+', description: 'Luxury & budget stays' },
    { name: 'Automotive', icon: Car, color: 'from-gray-600 to-gray-700', bgColor: 'bg-gray-50', count: '8K+', description: 'Cars & services' },
    { name: 'Repair Services', icon: Wrench, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', count: '15K+', description: 'Home & appliance repair' },
    { name: 'Beauty & Spa', icon: Sparkles, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50', count: '6K+', description: 'Salons & wellness' },
    { name: 'Education', icon: GraduationCap, color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-50', count: '10K+', description: 'Schools & coaching' },
    { name: 'Healthcare', icon: Heart, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50', count: '20K+', description: 'Doctors & hospitals' },
    { name: 'Shopping', icon: ShoppingBag, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', count: '25K+', description: 'Malls & stores' },
    { name: 'Real Estate', icon: Home, color: 'from-teal-500 to-teal-600', bgColor: 'bg-teal-50', count: '7K+', description: 'Properties & agents' },
    { name: 'Professional', icon: Briefcase, color: 'from-slate-600 to-slate-700', bgColor: 'bg-slate-50', count: '18K+', description: 'Business services' },
    { name: 'Photography', icon: Camera, color: 'from-amber-500 to-amber-600', bgColor: 'bg-amber-50', count: '3K+', description: 'Studios & events' },
    { name: 'Fitness', icon: Dumbbell, color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-50', count: '4K+', description: 'Gyms & trainers' },
    { name: 'Travel', icon: Plane, color: 'from-sky-500 to-sky-600', bgColor: 'bg-sky-50', count: '5K+', description: 'Tours & travel' },
    { name: 'Entertainment', icon: Music, color: 'from-violet-500 to-violet-600', bgColor: 'bg-violet-50', count: '2K+', description: 'Events & shows' },
    { name: 'Gaming', icon: Gamepad2, color: 'from-rose-500 to-rose-600', bgColor: 'bg-rose-50', count: '1K+', description: 'Gaming zones' },
    { name: 'Kids', icon: Baby, color: 'from-cyan-500 to-cyan-600', bgColor: 'bg-cyan-50', count: '3K+', description: 'Kids activities' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Popular Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the best local businesses across various categories. From restaurants to healthcare, 
            we've got you covered with verified listings and genuine reviews.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 w-24 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {categories.slice(0, 8).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                onClick={() => onCategorySelect(category.name)}
                className={`${category.bgColor} rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm group-hover:text-gray-900 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{category.count}</p>
                <p className="text-xs text-gray-400 leading-tight">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.slice(8).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index + 8}
                onClick={() => onCategorySelect(category.name)}
                className={`${category.bgColor} rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm group-hover:text-gray-900 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{category.count}</p>
                <p className="text-xs text-gray-400 leading-tight">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;