import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Star, Award, Shield, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-5"></div>
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Listed Businesses</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Verified Listings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FindLocal
                </h3>
                <p className="text-gray-400 text-sm">Discover • Connect • Grow</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              India's most trusted local business directory. Connecting millions of customers 
              with quality businesses across the country since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                'About FindLocal',
                'How It Works',
                'Success Stories',
                'Business Solutions',
                'Mobile App',
                'Help Center',
                'Contact Support'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Popular Categories</h4>
            <ul className="space-y-4">
              {[
                'Restaurants & Food',
                'Hotels & Travel',
                'Healthcare & Medical',
                'Beauty & Wellness',
                'Automotive Services',
                'Home Services',
                'Education & Training'
              ].map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-2 mr-4 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">+91 8888888888</p>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-2 mr-4 mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">hello@findlocal.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-2 mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Mumbai, Maharashtra</p>
                  <p className="text-gray-400 text-sm">Serving Pan India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20">
              <h5 className="font-bold mb-3 text-white">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">Get the latest business listings and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-r-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 FindLocal. All rights reserved. Made with ❤️ in India
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;