import Image from "next/image";

export default function Page_08(){
    return(
        <div>
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 w-[669px] h-[411px]">
          <h1 className="font-bold text-[72px] relative inline-block">
            100% your data
            <Image
              src="/images/Vector.png"
              alt="Vector"
              width="350.15"
              height="36.56"
              className="underline-image -mt-8 ml-56 "
            />
          </h1>

          <p className="font-normal text-[18px] text-left">
            The app is open source and your notes are saved to an open format,
            so you&apos;ll always have acces to them. Uses End-To-End Encryption
            (E2EE) to source your notes and ensure no-one but yourself can
            access them.
          </p>

          <div className="mt-10">
            <button className="text-white w-[237px] h-[66px] bg-blue-400 p-4 rounded-md">
              Read more →
            </button>
          </div>
          <div />
        </div>
        <div className="relative w-full flex justify-end">
          <Image
            src="/images/Element-3.png"
            alt="Element-3"
            className="relative -mt-96"
            width="681"
            height="381.13"
          />
        </div>
      </div>
    )
}