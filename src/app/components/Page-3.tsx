import Image from "next/image";

export default function Page3() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto py-20 xxl:w-[1440px] px-6">
      <div className="m-10 mx-auto">
        <Image
          src="/images/Work Together Image.png"
          alt="work-together-image"
          width={710}
          height={661}
          className="xxl:w-[710px] xxl:h-[661px] xl:w-[583px] xl:h-[542px] md:w-[582px] md:h-[561px] xs:w-[452px] xs:h-[422px] w-[279px] h-[259px]"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 justify-center lg:items-start items-center w-full px-8 h-[661px]">
        <div>
          <h1 className="font-bold xxl:text-[72px]/[78px] sm:text-start text-center lg:text-[64px]/[64px] sm:text-[54px]/[54px] relative text-4xl inline-block ">
            Work Together
          </h1>
          <Image
            src="/images/underline.png"
            alt="Element-image"
            width={500}
            height={30}
            className="underline-image lg:-mt-8 sm:-mt-6 -mt-4 md:w-[400px] sm:w-[300px] w-[200px] "
            />
        </div>

        <p className="font-normal text-[17px] lg:text-start text-center">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <br />
        <div>
          <button className="text-white w-[237px] h-[66px] rounded-lg bg-[#4F9CF9] p-4">
            Try it Now ➔
          </button>
        </div>
      </div>
    </div>
  );
}
