import Image from "next/image";

export default function Page_03() {
  return (
    <div className="flex">
      <div className="m-10 ">
        <Image src="/images/Work Together Image.png" 
        alt="Work Together Image" 
        width={661} 
        height={661} 
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 justify-center  w-[661px] h-[661px]">
        <div>
          <h1 className="font-bold text-[72px] relative inline-block ">
            Work Together
          </h1>
          <img
            src="/images/Vector.png"
            alt="Vector"
            width="640"
            height="30"
            className="underline-image -mt-8 pl-56"
          />
        </div>

        <p className="font-normal text-[17px]">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <br />
        <div>
          <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">
            Try it Now ➔
          </button>
        </div>
      </div>
    </div>
  );
}
