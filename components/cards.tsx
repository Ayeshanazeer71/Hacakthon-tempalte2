
import React from "react";

export default function Card() {
  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="group block">
            <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
              <img
                src="/images/product1.png"
                alt="The Dandy Chair"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-base font-medium text-gray-900">The Dandy Chair</h3>
            <p className="mt-1 text-sm text-gray-500">£250</p>
          </div>
          {/* Card 2 */}
          <div className="group block">
            <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
              <img
                src="/images/product2.png"
                alt="Rustic Vase Set"
                className="h-full w-full object-cover "
              />
            </div>
            <h3 className="text-base font-medium text-gray-900">Rustic Vase Set</h3>
            <p className="mt-1 text-sm text-gray-500">£155</p>
          </div>
          {/* Card 3 */}
          <div className="group block">
            <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
              <img
                src="/images/product3.png"
                alt="The Silky Vase"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-base font-medium text-gray-900">The Silky Vase</h3>
            <p className="mt-1 text-sm text-gray-500">£125</p>
          </div>
          {/* Card 4 */}
          <div className="group block">
            <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
              <img
                src="/images/product4.png"
                alt="The Lucy Lamp"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-base font-medium text-gray-900">The Lucy Lamp</h3>
            <p className="mt-1 text-sm text-gray-500">£399</p>
          </div>
        </div>
        <div className="text-center">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-base bg-[#F9F9F9]
">
            View collection
          </button>
        </div>
      </div>
    </section>
  );
}


 