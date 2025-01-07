import Image from "next/image";

export default function Page8() {
  return (
    <div className="mx-auto max-w-[1440px] flex lg:flex-row flex-col-reverse items-center gap-10 py-10 justify-between">
        <div className="flex flex-col flex-1 gap-4 lg:items-start items-center justify-center px-4">
          <div>
            <h1 className="gap-2 xxl:text-[72px]/[78px] lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl font-bold pb-2 relative inline-block">
              100% your data</h1>
              <Image
                src="/images/underline.png"
                alt="Element-image"
                width={350.15}
                height={36.56}
                className="underline-image -mt-8"
              />
          </div>

          <p className="font-normal text-[18px] lg:text-start text-center">
            The app is open source and your notes are saved to an open format,
            so you&#39;ll always have acces to them. Uses End-To-End Encryption
            (E2EE) to source your notes and ensure no-one but yourself can
            access them.
          </p>

          <div className="mt-10">
            <button className="text-white w-[237px] h-[66px] bg-[#4F9CF9] p-4 rounded-md">
              Read more →
            </button>
          </div>
          <div />
        </div>
        <div className="">
          <Image
            src="/images/side-image.png"
            alt="side-image"
            width={681}
            height={381.13}
            className="xl:w-[681px] xl:h-[381px] md:w-[562px] md:h-[314px] xs:w-[513px] xs:h-[287px] w-[290px] h-[162px]"
          />
        </div>
      </div>
  )
}