import Image from "next/image";

export default function Page_04() {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-900">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-8 justify-center px-4 align-center">
          <h1 className="text-white font-bold text-[44px] relative inline-block">
            Use as Extenion
          </h1>
          <img
            src="/images/Vector.png"
            alt="Vector"
            width="350"
            height="30"
            className="underline-image -mt-14 pl-[150px]"
          />

          <p className="text-white font-normal text-[18px]">
            Use the web clipper extension, available on chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="text-white w-[237px] h-[66px] p-4 bg-blue-500 rounded-lg">
            let's Go →
          </button>
        </div>
        <div className="bg-[#C4DEFD] w-[500px] h-[350px] my-auto"></div>
      </div>
    </div>
  );
}
