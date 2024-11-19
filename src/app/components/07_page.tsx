import Image from "next/image";

export default function Page_07() {
  return (
    <div>
      <div className="bg-blue-900 w-auto h-[400px] flex items-center">
        <div className="flex flex-row justify-center items-center align-center">
          <div className="-mr-[50px] -pr-[100px]">
            <img
              src="/images/background-image.png"
              alt="background image"
              width={300}
              height={400}
            />
          </div>
          <div className="py-10">
            <div className="flex w-[900px] flex-col">
              <h1 className="text-white gap-2 font-bold text-[54px] relative inline-block pb-2">
                Your work, everywhere you are
              </h1>
              <Image
                src="/images/Element-2.png"
                alt="Element-2"
                width={270}
                height={33}
                className="underline-image -mt-10 ml-[570px]"
              />

              <p className="text-white font-normal text-[14px] text-center">
                Access your notes from your computer, phone or tablet by
                sycnhronising with vairous services, including whitespace,
                Dropbox and OneDrive. The app is available on Windows, macOS,
                linux, Andriod and iOS. A terminal app is also available!
              </p>
            </div>
            <div className="flex align-center justify-center mt-10">
              <button className="text-white w-[237px] h-[66px] p-4 bg-blue-500 flex align-center justify-center rounded-lg">
                Try Taskey →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
