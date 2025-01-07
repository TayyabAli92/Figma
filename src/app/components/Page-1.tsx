export default function Page1() {
  return (
    <div>
      <div className="bg-[#043873]  bg-[url('/images/Element.png')] bg-cover bg-no-repeat">
        <div className="h-auto max-w-[1440px] mx-auto py-14 flex justify-center items-center ">
          <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center w-11/12 xl:h-[465px] h-auto gap-5">
            <div className="flex flex-col xl:py-12  flex-1 gap-4 justify-center lg:items-start items-center  px-4">
              <h1 className="font-bold xs:text-[64px]/[60px] text-4xl lg:text-start text-center text-white">
                Get More Done with whitepace
              </h1>
              <p className="font-normal text-[18px] lg:text-start text-center text-white">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
              <button className="text-white w-[237px] h-[66px] mt-7 rounded-lg bg-[#4F9CF9] p-4">
                Try Whitepace free ➔
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-[#C4DEFD] xl:w-[685px] xl:h-[456px] sm:w-[526px] xs:w-[450px]  w-[286px] xs:h-[300px] sm:h-[350px] h-[191px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
