import Image from "next/image";

export default function Page4() {
  return (
    <div className="flex justify-center py-20 items-center bg-[#043873]">
      <div className="flex lg:flex-row flex-col gap-20 items-center px-7 mx-auto xxl:max-w-[1440px]">
        <div className="flex flex-col mx-auto gap-8 justify-center lg:items-start items-center px-4 align-center">
          <h1 className="text-white font-bold xxl:text-[72px]/[78px] sm:text-start text-center lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl relative inline-block ">
            Use as Extenion
          </h1>
          <Image
            src="/images/underline.png"
            alt="Vector"
            width={400}
            height={300}
            className="underline-image lg:-mt-16 sm:-mt-10 -mt-10 md:w-[400px] sm:w-[300px] w-[200px]"
          />

          <p className="text-white font-normal text-[18px] lg:text-start text-center xl:w-[620px] lg:w-[400px]">
            Use the web clipper extension, available on chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="text-white w-[237px] h-[66px] p-4 bg-[#4F9CF9] rounded-lg">
            let&#39;s Go →
          </button>
        </div>
        <div className="bg-[#C4DEFD] xxl:w-[686px] xxl:h-[479px] md:w-[459px] md:h-[320px] sm:w-[557px] sm:h-[388px] w-[284px] h-[198px]  my-auto"></div>
      </div>
    </div>
  );
}
