export default function Popular() {
  return (
    <>
      {/* Section Heading */}
      <div className="text-center py-10">
        <h1 className="text-2xl font-normal text-[#2A254B]">
          Our popular products
        </h1>
      </div>

      {/* Product Images */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/product3.png"
            alt="sofa"
            className="w-[300px] h-[300px] object-cover"
          />
          <p className="text-sm text-[#2A254B] mt-2">The Poplar suede sofa</p>
          <p className="text-lg text-[#2A254B]">£980</p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/popular2.png"
            alt="chair2"
            className="w-[300px] h-[300px] object-cover"
          />
          <p className="text-sm text-[#2A254B] mt-2">The Dandy chair</p>
          <p className="text-lg text-[#2A254B]">£980</p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/popular3.png"
            alt="chair3"
            className="w-[300px] h-[300px] object-cover"
          />
          <p className="text-sm text-[#2A254B] mt-2">The Classic chair</p>
          <p className="text-lg text-[#2A254B]">£850</p>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-300 bg-[#F9F9F9] text-[#2A254B] hover:bg-gray-100 transition">
          View collection
        </button>
      </div>
    </>
  );
}
