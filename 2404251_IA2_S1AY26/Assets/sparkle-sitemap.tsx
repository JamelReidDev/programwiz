import React from 'react';
import { FileText, Home, Users, ShoppingBag, ShoppingCart, CreditCard, Info } from 'lucide-react';

export default function SiteMap() {
  const siteStructure = [
    {
      name: "Home / Landing",
      icon: Home,
      description: "Main entry point with business overview",
      children: []
    },
    {
      name: "Login / Register",
      icon: Users,
      description: "User authentication system",
      children: [
        { name: "Login Form", description: "Existing user login" },
        { name: "Registration Form", description: "New user account creation" }
      ]
    },
    {
      name: "Services",
      icon: ShoppingBag,
      description: "Browse available cleaning services",
      children: [
        { name: "Service Catalog", description: "All 8 cleaning services with prices" },
        { name: "Special Offers", description: "Current promotions and discounts" },
        { name: "Add to Cart", description: "Shopping functionality" }
      ]
    },
    {
      name: "Shopping Cart",
      icon: ShoppingCart,
      description: "Review selected items",
      children: [
        { name: "Cart Items", description: "List of selected services" },
        { name: "Quantity Controls", description: "Adjust item quantities" },
        { name: "Order Summary", description: "Subtotal, discounts, tax calculation" },
        { name: "Cart Actions", description: "Proceed to checkout or clear cart" }
      ]
    },
    {
      name: "Checkout",
      icon: CreditCard,
      description: "Complete order and payment",
      children: [
        { name: "Customer Information", description: "Name, phone, email, address" },
        { name: "Pickup Schedule", description: "Date and time selection" },
        { name: "Payment Method", description: "Cash, card, or mobile payment" },
        { name: "Special Instructions", description: "Optional care notes" },
        { name: "Order Confirmation", description: "Success message with order ID" }
      ]
    },
    {
      name: "About Us",
      icon: Info,
      description: "Company information",
      children: [
        { name: "Mission & Vision", description: "Business goals and values" },
        { name: "Student Information", description: "Project details and assignment info" },
        { name: "Contact Information", description: "Address, phone, email" },
        { name: "Contact Form", description: "Send message via email" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SparkleClean Site Map</h1>
          <p className="text-gray-600 text-lg">Website Structure & Navigation</p>
          <div className="mt-4 inline-block bg-white px-6 py-2 rounded-full shadow-md">
            <span className="text-sm text-gray-600">✨ Premium Dry Cleaning & Laundry Services</span>
          </div>
        </div>

        {/* Site Structure */}
        <div className="space-y-6">
          {siteStructure.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Parent Section */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{section.name}</h2>
                    <p className="text-blue-100">{section.description}</p>
                  </div>
                  <div className="flex-shrink-0 bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {section.children.length > 0 ? `${section.children.length} subsections` : 'Main section'}
                  </div>
                </div>
              </div>

              {/* Child Sections */}
              {section.children.length > 0 && (
                <div className="p-6 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">{child.name}</h3>
                            <p className="text-sm text-gray-600">{child.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Summary */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Site Features Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-700 font-medium">Main Sections</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-700 font-medium">Services Offered</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <div className="text-sm text-gray-700 font-medium">Total Features</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              <strong>Student:</strong> Jamel Reid (2404251) | 
              <strong className="ml-2">Course:</strong> CIT2011 - Web Programming | 
              <strong className="ml-2">Assignment:</strong> Individual Assignment #2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}