import React, { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function Wireframe() {
  const [currentPage, setCurrentPage] = useState('login');
  const [viewMode, setViewMode] = useState('desktop');

  const pages = [
    { id: 'login', name: 'Login/Register' },
    { id: 'services', name: 'Services' },
    { id: 'cart', name: 'Shopping Cart' },
    { id: 'checkout', name: 'Checkout' },
    { id: 'about', name: 'About Us' }
  ];

  const renderWireframe = () => {
    const isMobile = viewMode === 'mobile';
    const containerClass = isMobile ? 'max-w-sm' : 'max-w-6xl';

    switch(currentPage) {
      case 'login':
        return (
          <div className={`${containerClass} mx-auto bg-white border-2 border-gray-800 p-8`}>
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 mb-6 text-center">
              <div className="text-2xl font-bold mb-2">✨ SPARKLECLEAN</div>
              <div className="text-sm text-gray-600">Premium Dry Cleaning & Laundry Services</div>
            </div>

            {/* Navigation Tabs */}
            <div className={`border-2 border-gray-400 p-3 mb-6 ${isMobile ? 'flex flex-col gap-2' : 'flex gap-2'}`}>
              <div className="flex-1 border border-gray-600 p-2 text-center bg-blue-100 font-bold">Login/Register</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Services</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Cart (0)</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Checkout</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">About Us</div>
            </div>

            {/* Login/Register Tabs */}
            <div className="border-2 border-gray-600 p-4 mb-4 flex gap-2">
              <div className="flex-1 border border-gray-600 p-2 text-center bg-gray-200 font-bold">Login</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Register</div>
            </div>

            {/* Login Form */}
            <div className="border-2 border-gray-600 p-6">
              <div className="text-lg font-bold mb-4">🔑 Login to Your Account</div>
              
              <div className="mb-4">
                <div className="text-sm font-bold mb-1">👤 Username *</div>
                <div className="border-2 border-gray-400 p-2 bg-gray-50">[Text Input]</div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-bold mb-1">🔒 Password *</div>
                <div className="border-2 border-gray-400 p-2 bg-gray-50">[Password Input]</div>
              </div>

              <div className="border-2 border-blue-600 bg-blue-500 text-white p-3 text-center font-bold mb-3">
                LOGIN BUTTON
              </div>

              <div className="text-sm text-center">
                Don't have an account? <span className="text-blue-600 underline">Register here</span>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className={`${containerClass} mx-auto bg-white border-2 border-gray-800 p-8`}>
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 mb-6 text-center">
              <div className="text-2xl font-bold mb-2">✨ SPARKLECLEAN</div>
              <div className="text-sm text-gray-600">Premium Dry Cleaning & Laundry Services</div>
            </div>

            {/* Navigation */}
            <div className={`border-2 border-gray-400 p-3 mb-6 ${isMobile ? 'flex flex-col gap-2' : 'flex gap-2'}`}>
              <div className="flex-1 border border-gray-600 p-2 text-center">Login/Register</div>
              <div className="flex-1 border border-gray-600 p-2 text-center bg-blue-100 font-bold">Services</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Cart (0)</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Checkout</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">About Us</div>
            </div>

            <div className="border-2 border-gray-600 p-6">
              <div className="text-lg font-bold mb-4 text-center">🧺 Our Services</div>
              
              {/* Products Grid */}
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-4 mb-6`}>
                {['Shirts\n$10.00', 'Pants\n$15.00', 'Dresses\n$20.00', 'Suits\n$25.00', 'Coats\n$30.00', 'Blankets\n$35.00', 'Curtains\n$40.00', 'Comforters\n$45.00'].map((item, i) => (
                  <div key={i} className="border-2 border-gray-600 p-4 text-center">
                    <div className="text-2xl mb-2">👕</div>
                    <div className="font-bold text-sm whitespace-pre-line mb-2">{item}</div>
                    <div className="border border-blue-600 bg-blue-100 p-2 text-xs">ADD TO CART</div>
                  </div>
                ))}
              </div>

              {/* Special Offers */}
              <div className="border-2 border-yellow-400 bg-yellow-50 p-4">
                <div className="font-bold mb-2">🎉 Special Offers</div>
                <div className="text-sm space-y-1">
                  <div>• 10% off orders over $2000</div>
                  <div>• Free pickup & delivery for orders over $3000</div>
                  <div>• Same-day service available (+$1000)</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cart':
        return (
          <div className={`${containerClass} mx-auto bg-white border-2 border-gray-800 p-8`}>
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 mb-6 text-center">
              <div className="text-2xl font-bold mb-2">✨ SPARKLECLEAN</div>
              <div className="text-sm text-gray-600">Premium Dry Cleaning & Laundry Services</div>
            </div>

            {/* Navigation */}
            <div className={`border-2 border-gray-400 p-3 mb-6 ${isMobile ? 'flex flex-col gap-2' : 'flex gap-2'}`}>
              <div className="flex-1 border border-gray-600 p-2 text-center">Login/Register</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Services</div>
              <div className="flex-1 border border-gray-600 p-2 text-center bg-blue-100 font-bold">Cart (3)</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Checkout</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">About Us</div>
            </div>

            <div className="border-2 border-gray-600 p-6">
              <div className="text-lg font-bold mb-4">🛒 Shopping Cart</div>
              
              {/* Cart Items */}
              <div className="space-y-3 mb-6">
                {['Shirts - $10.00 each', 'Pants - $15.00 each', 'Dresses - $20.00 each'].map((item, i) => (
                  <div key={i} className="border-2 border-gray-400 p-3 flex items-center justify-between">
                    <div className="font-bold text-sm">{item}</div>
                    <div className="flex items-center gap-2">
                      <div className="border border-gray-600 px-2 py-1">[-]</div>
                      <div className="border border-gray-600 px-3 py-1">2</div>
                      <div className="border border-gray-600 px-2 py-1">[+]</div>
                      <div className="font-bold">$20.00</div>
                      <div className="border border-red-600 bg-red-100 px-2 py-1">🗑</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-2 border-gray-600 p-4">
                <div className="font-bold mb-3">Order Summary</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Subtotal:</span><span>$90.00</span></div>
                  <div className="flex justify-between"><span>Discount (10%):</span><span>-$9.00</span></div>
                  <div className="flex justify-between"><span>Tax (15%):</span><span>$12.15</span></div>
                  <div className="flex justify-between"><span>Delivery:</span><span>FREE ✓</span></div>
                  <div className="flex justify-between font-bold text-base border-t-2 border-gray-400 pt-2">
                    <span>Total:</span><span>$93.15</span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="border-2 border-blue-600 bg-blue-500 text-white p-3 text-center font-bold">
                    PROCEED TO CHECKOUT
                  </div>
                  <div className="border-2 border-red-600 bg-red-100 p-3 text-center font-bold">
                    CLEAR CART
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'checkout':
        return (
          <div className={`${containerClass} mx-auto bg-white border-2 border-gray-800 p-8`}>
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 mb-6 text-center">
              <div className="text-2xl font-bold mb-2">✨ SPARKLECLEAN</div>
              <div className="text-sm text-gray-600">Premium Dry Cleaning & Laundry Services</div>
            </div>

            {/* Navigation */}
            <div className={`border-2 border-gray-400 p-3 mb-6 ${isMobile ? 'flex flex-col gap-2' : 'flex gap-2'}`}>
              <div className="flex-1 border border-gray-600 p-2 text-center">Login/Register</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Services</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Cart (3)</div>
              <div className="flex-1 border border-gray-600 p-2 text-center bg-blue-100 font-bold">Checkout</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">About Us</div>
            </div>

            <div className="border-2 border-gray-600 p-6">
              <div className="text-lg font-bold mb-4">💳 Checkout</div>
              
              {/* Customer Info */}
              <div className="mb-6">
                <div className="font-bold mb-3">Customer Information</div>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3 mb-3`}>
                  <div>
                    <div className="text-sm font-bold mb-1">Full Name *</div>
                    <div className="border-2 border-gray-400 p-2 bg-gray-50">[Text Input]</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1">Phone Number *</div>
                    <div className="border-2 border-gray-400 p-2 bg-gray-50">[Tel Input]</div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-bold mb-1">Email Address *</div>
                  <div className="border-2 border-gray-400 p-2 bg-gray-50">[Email Input]</div>
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Pickup/Delivery Address *</div>
                  <div className="border-2 border-gray-400 p-3 bg-gray-50">[Textarea]</div>
                </div>
              </div>

              {/* Pickup Schedule */}
              <div className="mb-6">
                <div className="font-bold mb-3">Pickup Schedule</div>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
                  <div>
                    <div className="text-sm font-bold mb-1">Pickup Date *</div>
                    <div className="border-2 border-gray-400 p-2 bg-gray-50">[Date Picker]</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1">Pickup Time *</div>
                    <div className="border-2 border-gray-400 p-2 bg-gray-50">[Time Dropdown]</div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <div className="font-bold mb-3">Payment Method</div>
                <div className="space-y-2">
                  <div className="border border-gray-400 p-2">⚪ Cash on Delivery</div>
                  <div className="border border-gray-400 p-2">⚪ Credit/Debit Card</div>
                  <div className="border border-gray-400 p-2">⚪ Mobile Payment</div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-2 border-gray-600 bg-gray-50 p-4 mb-4">
                <div className="font-bold mb-2">Order Summary</div>
                <div className="text-sm space-y-1 mb-3">
                  <div>2x Shirts - $20.00</div>
                  <div>2x Pants - $30.00</div>
                  <div>2x Dresses - $40.00</div>
                </div>
                <div className="border-t border-gray-400 pt-2 space-y-1 text-sm">
                  <div className="flex justify-between"><span>Subtotal:</span><span>$90.00</span></div>
                  <div className="flex justify-between"><span>Discount:</span><span>-$9.00</span></div>
                  <div className="flex justify-between"><span>Tax:</span><span>$12.15</span></div>
                  <div className="flex justify-between font-bold">Total: <span>$93.15</span></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <div className="border-2 border-green-600 bg-green-500 text-white p-3 text-center font-bold">
                  CONFIRM ORDER
                </div>
                <div className="border-2 border-gray-600 bg-gray-200 p-3 text-center font-bold">
                  BACK TO CART
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className={`${containerClass} mx-auto bg-white border-2 border-gray-800 p-8`}>
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 mb-6 text-center">
              <div className="text-2xl font-bold mb-2">✨ SPARKLECLEAN</div>
              <div className="text-sm text-gray-600">Premium Dry Cleaning & Laundry Services</div>
            </div>

            {/* Navigation */}
            <div className={`border-2 border-gray-400 p-3 mb-6 ${isMobile ? 'flex flex-col gap-2' : 'flex gap-2'}`}>
              <div className="flex-1 border border-gray-600 p-2 text-center">Login/Register</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Services</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Cart (0)</div>
              <div className="flex-1 border border-gray-600 p-2 text-center">Checkout</div>
              <div className="flex-1 border border-gray-600 p-2 text-center bg-blue-100 font-bold">About Us</div>
            </div>

            <div className="border-2 border-gray-600 p-6">
              {/* Logo */}
              <div className="text-center mb-6 border-b-2 border-gray-400 pb-6">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-2xl font-bold">SparkleClean</div>
                <div className="text-sm italic">"Where Every Garment Shines"</div>
              </div>

              {/* Mission & Vision */}
              <div className="space-y-4 mb-6">
                <div className="border-2 border-gray-400 p-4">
                  <div className="font-bold mb-2">🚩 Our Mission</div>
                  <div className="text-sm text-gray-700">[Mission statement text block]</div>
                </div>
                <div className="border-2 border-gray-400 p-4">
                  <div className="font-bold mb-2">👁 Our Vision</div>
                  <div className="text-sm text-gray-700">[Vision statement text block]</div>
                </div>
              </div>

              {/* Student Info */}
              <div className="border-2 border-blue-400 bg-blue-50 p-4 mb-6">
                <div className="font-bold mb-3">📚 Project Information</div>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3 text-sm`}>
                  <div>👤 Student: Jamel Reid</div>
                  <div>🎓 ID: 2404251</div>
                  <div>📧 Email: jamelreid@students.utech.edu.jm</div>
                  <div>📚 Course: CIT2011</div>
                  <div>📝 Assignment: IA #2</div>
                  <div>🕐 Class: Thu 1-3 PM</div>
                </div>
              </div>

              {/* Contact */}
              <div className="border-2 border-gray-400 p-4">
                <div className="font-bold mb-3">📞 Contact Us</div>
                <div className="space-y-2 text-sm mb-4">
                  <div>📍 123 Main Street, Spanish Town</div>
                  <div>☎️ (876) 555-0100</div>
                  <div>📧 1234567@utech.edu.jm</div>
                </div>
                <div className="border-2 border-blue-600 bg-blue-500 text-white p-3 text-center font-bold">
                  SEND US A MESSAGE
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
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Control Panel */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">SparkleClean Website Wireframes</h1>
          
          {/* Page Selector */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Select Page:</label>
            <div className="flex flex-wrap gap-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-4 py-2 rounded border-2 font-medium transition-colors ${
                    currentPage === page.id
                      ? 'bg-blue-500 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">View Mode:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-4 py-2 rounded border-2 font-medium flex items-center gap-2 transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-blue-500 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                }`}
              >
                <Monitor size={18} />
                Desktop
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-4 py-2 rounded border-2 font-medium flex items-center gap-2 transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-blue-500 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                }`}
              >
                <Smartphone size={18} />
                Mobile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe Display */}
      <div className="max-w-7xl mx-auto bg-gray-200 p-8 rounded-lg shadow-xl">
        <div className="flex justify-center">
          {renderWireframe()}
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded-lg shadow-lg p-6">
        <h3 className="font-bold text-lg mb-3">Wireframe Legend</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-800 bg-white"></div>
            <span>Container/Card</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-blue-600 bg-blue-500"></div>
            <span>Primary Button</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400 bg-gray-50"></div>
            <span>Input Field</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400 bg-blue-100"></div>
            <span>Active/Selected State</span>
          </div>
        </div>
      </div>
    </div>
  );
}