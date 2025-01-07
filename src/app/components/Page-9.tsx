import Image from "next/image";

export default function Page9() {
  return (
    <div className="h-auto py-28 gap-16 flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="xxl:text-[72px]/[78px] lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl text-center font-bold relative inline-block">
          Our sponsors
        </h1>
        <Image
          src="/images/underline.png"
          alt="Element-image"
          width={300.15}
          height={36.56}
          className="underline-image -mt-5 sm:w-[300px] sm:h-[36px] w-[200px] h-[26px]"
        />
      </div>

      <div className="flex gap-16 justify-center items-center lg:flex-row flex-col">
        <Image src="/images/Apple.png" alt="apple" width={55} height={68} />
        <Image
          src="/images/Microsoft.png"
          alt="microsoft"
          width={287}
          height={62}
          className="xs:w-[287px] xs:h-[62px] w-[213px] h-[46px]"
        />
        <Image
          src="/images/Slack.png"
          alt="slack"
          width={280}
          height={71}
          className="xs:w-[280px] xs:h-[71px] w-[192px] h-[49px]"
        />
        <Image
          src="/images/Google.png"
          alt="google"
          width={211}
          height={69}
          className="xs:w-[211px] xs:h-[69px] w-[139px] h-[46px]"
        />
      </div>
    </div>
  );
}
