import Image from "next/image";

export default function Page_11() {
  return (
    <div className="bg-blue-900 bg-[url('/images/Element.png')]">
      <div className="flex flex-row">
        <div className="m-10 pt-14">
          <Image src="/images/Apps.png" alt="Apps" width={550} height={400} />
        </div>
        <div className="flex flex-col flex-1 gap-4 justify-center  w-[661px] h-[661px]">
          <div>
            <h1 className="font-bold text-[55px] text-white ">
              Work with Your
              <br />
              Favorite Apps Using
              <br /> whitepace
            </h1>
          </div>

          <p className="font-normal text-[16px] text-white">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <br />

          <div>
            <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">
              Read more ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
