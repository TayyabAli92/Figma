import Image from "next/image";

export default function Page2() {
  return (
    <div className="my-10 flex justify-center items-center px-2">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-16 xxl:max-w-[1440px] mx-auto items-center">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 lg:items-start items-center">
          <div>
            <h1 className="font-bold xxl:text-[72px]/[78px]  lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl sm:text-start text-center relative inline-block ">
              Project Management
            </h1>
            <Image
              src="/images/underline.png"
              alt="Element-image"
              width={400}
              height={10}
              className="underline-image lg:-mt-8 sm:-mt-6 -mt-4 md:w-[400px] sm:w-[300px] w-[200px] lg:ml-0 sm:ml-48 xs:ml-36 ml-16"
            />
          </div>

          <p className="font-normal text-[18px] lg:text-start text-center">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <button className="text-white w-[237px] h-[66px] rounded-lg bg-[#4F9CF9] p-4">
            Get Started ➔
          </button>
        </div>
        <div className="flex-1">
          <div className="bg-[#C4DEFD] xxl:w-[748px] xxl:h-[547px] xl:w-[719px] xl:h-[448px] lg:w-[527px] lg:h-[328px] sm:w-[561px] sm:h-[349px] w-[286px] h-[177px]"></div>
        </div>
      </div>
    </div>
  );
}
