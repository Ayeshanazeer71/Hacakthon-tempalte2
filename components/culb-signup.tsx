export default function Newsletter() {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl w-full text-center space-y-6 bg-white p-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Join the club and get the benefits
        </h2>

        {/* Subheading */}
        <p className="text-sm text-gray-600">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>

        {/* Email Input and Button */}
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-2/3 md:w-1/2 border border-gray-300 rounded-l-md px-4 py-2 "
          />
          <button className="bg-gray-800 text-white px-6 py-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
