// import Image from "next/image";

export default function Page_01() {
  return (
    <div>
      <div className="bg-blue-900  bg-[url('/images/Element-1.png')] bg-cover bg-no-repeat">
        <div className="h-screen flex justify-center items-center ">
          <div className="flex w-11/12 h-[465px] gap-5">
            <div className="flex flex-col flex-1 gap-4 justify-center px-4 -ml-5">
              <h1 className="font-bold text-[64px] text-white">
                Get More Done with whitepace
              </h1>
              <p className="font-normal text-[18px] text-white">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
              <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">
                Try Whitepace free ➔
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-[#C4DEFD] w-[550px h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
