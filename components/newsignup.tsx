export default function SimpleNewsletterSignup() {
  return (
    <div className="min-h-[400px] w-full bg-amber-800 relative overflow-hidden">
      {/* Diagonal light effect */}

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-medium mb-4">
          Join the club and get the benefits
        </h1>

        <p className="text-sm sm:text-base mb-8 opacity-90">
          Sign up for our newsletter and receive exclusive offers on
          <br className="hidden sm:inline" />
          new ranges, sales, pop up stores and more
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-24">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span>Exclusive offers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span>Free events</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span>Large discounts</span>
          </div>
        </div>

        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 rounded-md text-gray-900"
            required
          />
          <button type="submit" className="px-6 py-2 bg-gray-900 text-white">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
