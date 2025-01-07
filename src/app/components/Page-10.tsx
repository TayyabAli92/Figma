import Image from "next/image";

export default function Page10() {
  return (
    <div className="bg-[#043873] bg-[url('/images/bg-line-2.png')] px-10 py-16">
      <div className="flex lg:flex-row flex-col items-center gap-10 mx-auto max-w-[1440px]">
        <div className="">
          <Image
            src="/images/Apps.png"
            alt="Apps-image"
            width={582}
            height={470}
            className="xl:w-[582px] xl:h-[470px] md:w-[528px] md:h-[427px] xs:w-[485px] xs:h-[392px] w-[286px] h-[231px]"
          />
        </div>
        <div className="flex flex-col flex-1 gap-4 justify-center lg:items-start items-center">
          <div>
            <h1 className="text-white gap-2 xxl:text-[72px]/[78px] lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl font-bold lg:text-start text-center">
              Work with Your Favorite Apps Using whitepace
            </h1>
          </div>

          <p className="font-normal text-lg text-white lg:text-start text-center">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your project success.
          </p>

          <br />

          <div>
            <button className="text-white w-[237px] h-[66px] rounded-lg bg-[#4F9CF9] p-4">
              Read more ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
