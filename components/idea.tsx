export default function Idea() {
  return (
    <section className="grid md:grid-cols-2 gap-4 min-h-[500px] mt-4 mb-40">
      {/* Left Content */}
      <div className="bg-[#2A254B] text-white p-8 flex flex-col justify-between mt-12 w-full h-full">
        <div className="space-y-4">
          <h1 className="text-2xl leading-[39.36px] md:text-2xl font-normal">
            It started with a small idea
          </h1>
          <p className="text-[#FFFFFF] max-w-md text-[18px] font-normal leading-[24.3px]">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="mt-8">
          <button className="px-6 py-2 border border-white/20 transition">
            View collection
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-12 w-full h-full">
        <img
          src="/images/block.png"
          alt="Modern interior with yellow chair"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
