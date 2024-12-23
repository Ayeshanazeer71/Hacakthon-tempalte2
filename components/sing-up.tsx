export default function SingUp() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] w-full text-center mt-16 py-6 px-4 items-center justify-center ">
      <h1 className="font-normal text-3xl leading-[50.4px] text-[#2A254B]">
        Join the club and get the benefits
      </h1>
      <p className="px-6 py-2 mt-4 text-center font-normal text-base leading-6 text-[#2A254B]">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>

      <div className="mt-[52px] flex items-center justify-center">
        {" "}
        <img src="/images/input.png" alt="input" />{" "}
      </div>
    </div>
  );
}
