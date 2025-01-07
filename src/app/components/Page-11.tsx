import Image from "next/image";

export default function Page11() {
  return (
    <div className="flex flex-col items-center py-20 gap-10">
      <div>
        <h1 className="gap-2 text-center px-2 xxl:text-[72px]/[78px] lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl font-bold pb-2 relative inline-block">
          What Our Clients Says
        </h1>
        <Image
          src="/images/underline-short.png"
          alt="Group"
          width="600"
          height="300"
          className="underline-image -mt-4 ml-10 sm:w-[300px] sm:h-[36px] w-[200px] h-[26px]"
        />
      </div>
      <div className="flex justify-center xl:gap-10 gap-2">
        <div className="bg-white rounded-lg xl:w-[400px] lg:block hidden xl:h-[498px] w-[330px] h-[560px] pl-5 shadow-2xl p-4">
          <Image
            src="/images/Group-1.png"
            alt="Group-1"
            width={86}
            height={61}
            className="py-5"
          />
          <p className="text-[18px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that is
            a full project management solution.
          </p>
          <hr className="pb-9" />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-1.png"
                alt="Avater-1"
                width={95}
                height={95}
                className="py-5"
              />
            </div>
            <div>
              <h6 className="text-[24px] font-semibold">Oberon Shaw, MCH</h6>
              <p className="text-[16px] font-normal">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#4F9CF9] xl:w-[400px] xl:h-[498px] md:w-[330px] w-[300px] h-[560px] rounded-lg p-4">
          <Image
            src="/images/Group-2.png"
            alt="Group-2"
            width={86}
            height={61}
            className="py-5"
          />
          <p className="text-white text-[18px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that is
            a full project management solution.
          </p>
          <hr className="pb-9 " />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-2.png"
                alt="Avater-2"
                width={95}
                height={95}
                className="py-5"
              />
            </div>
            <div className="">
              <h6 className="text-[24px] text-blue-700 font-semibold">
                Oberon Shaw, MCH
              </h6>
              <p className="text-white text-[16px] font-normal">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#4F9CF9] xl:w-[400px] lg:block hidden xl:h-[498px] w-[330px] h-[560px] rounded-lg p-4">
          <Image
            src="/images/Group-2.png"
            alt="Group-2"
            width={86}
            height={61}
            className="py-5"
          />
          <p className="text-white text-[18px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that is
            a full project management solution
          </p>
          <hr className="pb-9 " />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-3.png"
                alt="Avater-3"
                width={95}
                height={95}
                className="py-5"
              />
            </div>
            <div>
              <h6 className="text-[24px] text-blue-700 font-semibold">
                Oberon Shaw, MCH
              </h6>
              <p className="text-white text-[16px] font-normal">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image src="/images/Slider.png" alt="Slider" width={60} height={5} />
    </div>
  );
}
