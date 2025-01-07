import Image from "next/image";

export default function Page7() {
  return (
    <div className="bg-[#043873] w-full flex items-center relative overflow-hidden py-4 px-2">
      {/* Background Image */}
      <div className="absolute top-0 left-0 h-full w-auto">
        <Image
          src="/images/bg-line.png"
          alt="background image"
          width={300}
          height={400}
          className="object-cover  xxl:w-[300px] xxl:h-full md:w-[200px] md:h-[300px] h-full w-auto lg:block md:hidden block"
        />
      </div>

      {/* Content */}
      <div className="flex flex-row mx-auto lg:w-[1100px] w-auto justify-center items-center z-10">
        <div className="py-10">
          <div className="flex flex-col xl:items-center items-start xl:text-center text-start">
            <div>
              <h1 className="text-white gap-2 xxl:text-[72px]/[78px] lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl font-bold pb-2 relative inline-block">
                Your work, everywhere you are
              </h1>
              <Image
                src="/images/underline-blue.png"
                alt="Element"
                width={270}
                height={33}
                className="-mt-2  underline-image "
              />
            </div>
            <p className="text-white font-normal text-[14px] pt-5">
              Access your notes from your computer, phone, or tablet by
              synchronizing with various services, including whitespace,
              Dropbox, and OneDrive. The app is available on Windows, macOS,
              Linux, Android, and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="flex xl:justify-center justify-start mt-10">
            <button className="text-white w-[195px] h-[63px] p-4 bg-[#4F9CF9] rounded-lg">
              Try Taskey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
