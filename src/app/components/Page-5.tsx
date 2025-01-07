import Image from "next/image";

export default function Page5() {
  return (
    <div className="mx-auto xxl:max-w-[1440px] flex lg:flex-row flex-col justify-center items-center py-20 px-10 gap-4">
      <div className="flex-1 flex justify-center">
        <div className="bg-[#C4DEFD]  xxl:w-[714px] xxl:h-[532px] xl:w-[670px] xl:h-[499px] lg:w-[534px] lg:h-[397px] sm:w-[534px] sm:h-[397px] w-[288px] h-[214px]"></div>
      </div>

      <div className="flex flex-col flex-1 gap-6 justify-center lg:items-start items-center px-4">
        <div>
          <h1 className="font-bold xxl:text-[72px]/[78px] lg:text-start text-center lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl relative inline-block ">
            Customize it to your needs
          </h1>
          <Image
            src="/images/underline.png"
            alt="Element-image"
            width={400}
            height={31.47}
            className="underline-image lg:-mt-8 sm:-mt-6 -mt-4 lg:w-[400px] md:w-[300px] sm:w-[200px] xs:w-[140px] w-[100px] lg:ml-0 md:ml-36 sm:ml-44 ml-28"
          />
        </div>

        <p className="font-normal text-[18px] lg:text-left text-center">
        Customise the app plugins, custom and multiple text editor&mdash;Rich Text or Markdown. Or create your own scripts and plugins using the Extension API.

        </p>

        <div className="mt-10">
          <button className="text-white w-[225px] h-[66px] rounded-md bg-[#4F9CF9] p-4">
            Let&#39;s Go→
          </button>
        </div>
        <div />
      </div>
    </div>
  );
}
