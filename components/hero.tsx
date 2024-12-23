export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <div className="bg-[#2A254B] text-white p-8 lg:p-12 xl:p-24 lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-normal mb-6 leading-[44.8px]">
          The furniture brand for the future, with timeless designs
        </h1>
        <button className="bg-[#2A254B] border b text-[#FFFFFF] py-2 px-6 mt-4 w-fit text-base">
          View collection
        </button>
        <p className="text-[#FFFFFF] mt-8 text-sm leading-relaxed max-w-xl">
          A new era in eco-friendly furniture with Avion, the French luxury retail brand
          with nice fonts, tasteful colors and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>
      <div className="bg-[#82A7A6] lg:w-1/2 flex items-center justify-center">
        <img
          src="/images/chair.jpeg"
          width={600}
          height={600}
          alt="Modern chair"
        />
      </div>
    </section>

  )
}



