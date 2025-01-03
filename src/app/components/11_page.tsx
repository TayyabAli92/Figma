import Image from "next/image";

export default function Page_11() {
  return (
    <div className="flex flex-col items-center pt-10 pb-10 gap-10">
      <h1 className="font-bold w-700 text-[54px] relative inline-block">What Our Clients Says</h1>
      <Image
            src="/images/Group.png"
            alt="Group"
            width="600"
            height="300"
            className="underline-image -mt-20 pl-[450px]"
          />
      <div className="flex justify-center gap-10">
        <div className="bg-white rounded-lg w-[300px] h-[350px] pl-5 shadow-2xl p-4">
          <Image
            src="/images/Group-1.png"
            alt="Group-1"
            width={54}
            height={54}
            className="py-5"
          />
          <p className="text-[14px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that
            is a full project management solution.
          </p>
          <hr className="pb-9" />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-1.png"
                alt="Avater-1"
                width={54}
                height={54}
                className="py-5"
              />
            </div>
            <div className="h-12 pb-10">
              <h6 className="text-[20px] font-normal">Oberon Shaw, MCH</h6>
              <p className="text-[12px]">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#4F9CF9] w-[300px] h-[350px] rounded-lg p-4">
          <Image
            src="/images/Group-2.png"
            alt="Group-2"
            width={54}
            height={54}
            className="py-5"
          />
          <p className="text-white text-[14px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that
            is a full project management solution.
          </p>
          <hr className="pb-9 " />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-2.png"
                alt="Avater-2"
                width={54}
                height={54}
                className="py-5"
              />
            </div>
            <div className="h-12 pb-10">
              <h6 className="text-[20px] text-blue-700 font-normal">
                Oberon Shaw, MCH
              </h6>
              <p className="text-white text-[12px]">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#4F9CF9] w-[300px] h-[350px] rounded-lg p-4">
          <Image
            src="/images/Group-2.png"
            alt="Group-2"
            width={54}
            height={54}
            className="py-5"
          />
          <p className="text-white text-[14px] pb-10">
            Whitepate is designed as a collaboration tool for businesses that
            is a full project management solution.
          </p>
          <hr className="pb-9 " />
          <div className="flex items-center justify-center gap-4">
            <div>
              <Image
                src="/images/Avater-3.png"
                alt="Avater-3"
                width={54}
                height={54}
                className="py-5"
              />
            </div>
            <div className="h-12 pb-12">
              <h6 className="text-[20px] text-blue-700 font-normal">
                Oberon Shaw, MCH
              </h6>
              <p className="text-white text-[12px]">
                Head of Telent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/Slider.png" 
        alt="Slider" 
        width={60} 
        height={5} 
        />
    </div>
  );
}
