import Image from "next/image";

export default function Page6() {
  return (
    <div className="h-auto my-20 flex flex-col justify-center">
      <div className=" h-[171px] mb-9 gap-4 flex flex-col justify-center items-center">
        <h1 className="font-bold xxl:text-[72px]/[78px] sm:text-start text-center lg:text-[64px]/[64px] sm:text-[54px]/[54px] text-4xl relative inline-block ">
          Choose Your Plan
        </h1>
        <Image
          src="/images/underline.png"
          alt="underline image"
          width={355}
          height={33}
          className="underline-image -mt-10 md:w-[400px] w-auto"
        />
        <p className="text-[18px] font-normal text-center">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the
          right plan for you.
        </p>
      </div>

      <div className=" lg:h-[761px] h-auto flex items-cente justify-center bg-slate mx-auto  gap-10 ">

        {/* right side start */}
          <div className="xxl:w-[400px] overflow-hidden md:w-auto w-[400px] md:block hidden lg:h-[700px] h-auto space-y-5 px-8 pt-8 outline outline-1 outline-yellow-300 rounded-md">
            <div>
              <h3 className="text-[24px] font-semibold">Free</h3>
            </div>
            <div>
              <h2 className="text-[36px] font-bold">0$</h2>
            </div>
            <div>
              <p className="text-[18px] font-medium">
                Capture ideas and find them quickly
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">
                  Sync unlimited devices
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">10 GB monthly uploads</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">200 MB max. note size</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">
                  Customize Home dashboard and access extra widgets
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">
                  Connect primary Google Calendar account
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[16px] font-normal">
                  Add due dates, reminders, and notifications to your tasks
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="outline outline-1 outline-yellow-500 rounded-md px-4 py-2"
              >
                Get Started
              </button>
            </div>
          </div>
        {/* right side end */}

        {/* center side */}
        <div className="xxl:w-[472.33px]  md:w-auto sm:w-[472.33px] xs:w-[300px] w-[270px] bg-[#043873] py-9 lg:h-[761px] h-auto flex flex-col gap-5 px-8 pt-8 rounded-md">
          <div>
            <h3 className="text-[24px] font-semibold text-white">Personal</h3>
          </div>
          <div>
            <h2 className="text-[36px] font-bold text-[#FFE492]">11.99$</h2>
          </div>
          <div>
            <p className="text-[18px] font-medium text-white">
              Capture ideas and find them quickly
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                Sync unlimited devices
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                10 GB monthly uploads
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                200 MB max. note size
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                Customize Home dashboard and access extra widgets
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                Connect primary Google Calendar account
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon-2.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[18px] font-medium text-white">
                Add due dates, reminders, and notifications to your tasks
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="bg-[#4F9CF9] rounded-md px-4 py-2 text-white"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* center side end */}

        {/* left side start */}

        <div className="xxl:w-[400px] overflow-hidden md:w-auto w-[400px] md:block hidden lg:h-[700px] h-auto space-y-5 px-8 pt-8 outline outline-1 outline-yellow-300 rounded-md">
          <div>
            <h3 className="text-[24px] font-semibold">Organization</h3>
          </div>
          <div>
            <h2 className="text-[36px] font-bold">49.99$</h2>
          </div>
          <div>
            <p className="text-[18px] font-medium">
              Capture ideas and find them quickly
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">Sync unlimited devices</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">10 GB monthly uploads</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">200 MB max. note size</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">
                Customize Home dashboard and access extra widgets
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">
                Connect primary Google Calendar account
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center w-8 h-8">
                <Image
                  src="/images/Icon.png"
                  alt="Icon"
                  width={18}
                  height={6}
                />
              </span>
              <p className="text-[16px] font-normal">
                Add due dates, reminders, and notifications to your tasks
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="outline outline-1 outline-yellow-500 rounded-md px-4 py-2"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* left side end */}
      </div>
    </div>
  );
}
