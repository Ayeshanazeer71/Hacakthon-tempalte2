
export default function Brand() {
    return (
        <div className="bg-[#FFFFFF] w-full mt-[72px] py-6 px-4 flex items-start justify-start gap-[25px] pl-36">
            <div className="flex flex-col text-left">
                <h1 className="py-2 px-0 font-normal text-3xl leading-[33.6px] text-[#2A254B]">
                    From a studio in London to a global brand with<br />
                    over 400 outlets
                </h1>
                <p className="py-2 px-0 font-normal mt-8 text-[16px] leading-[21.6px] text-[#505977]">
                    When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market.  <br />
                    <br />
                    Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique became the hotbed for the <br />
                    London interior design community.
                </p>
                {/* Button placed below text */}
                <button className="px-6 py-2 mt-72 w-fit border border-gray-300 font-normal bg-[#F9F9F9] text-[#2A254B]">
                    Get in touch
                </button>
            </div>
            <div className="flex-shrink-0">
                <img src="/images/brand.png" alt="brand" className="w-auto h-auto" />
            </div>
        </div>
    );
}
