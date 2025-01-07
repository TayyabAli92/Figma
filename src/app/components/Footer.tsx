import Image from "next/image"

export default function Footer(){
    return(
        <div className="md:h-[900px] h-auto bg-[#043873] md:pl-0 sx:pl-5 pl-0">
            <div className="md:h-[705px] h-auto flex md:justify-center justify-start pt-20 md:pl-3 xs:pl-0 pl-3">
                <div className="md:w-[608px] w-auto h-[533px] flex flex-col gap-8">
                    <div className="md:h-[262px] h-auto flex flex-col justify-center">
                      <h1 className="xs:text-[62px] text-[40px] font-bold  text-start md:text-center text-white leading-tight pb-5">Try Whitespace today</h1>
                      <p className="xs:text-2xl text-lg font-normal text-start md:text-center text-white">Get started for free.</p>
                      <p className="text-[24px] font-normal md:leading-[14px] leading-none text-start md:text-center text-white">Add your whole team as your needs grow.</p>
                    </div>
                    <div className="flex flex-col justify-center md:items-center items-start gap-10">
                        <button type="button" className="text-white bg-[#4F9CF9] w-[218px] h-[59px] items-center">Try Taskey free <span>→</span></button>
                        <p className="xs:text-[24px] text-lg font-normal text-center text-white">On a big team? Contact sales</p>
                        <Image
                        src="/images/App-icon.png"
                        alt="App Icon"
                        width={260}
                        height={60}
                        className="xs:w-[260px] xs:h-[60px] w-[191px] h-[44px]"
                        />
                    </div>
                </div>
            </div>



            <div className="bg-[#043873] md:h-[474px] h-auto flex flex-col md:items-center xs:items-start items-center pt-32 gap-7 ">
                <div className="flex md:flex-row flex-col xl:gap-10 xs:gap-5 gap-16 xl:w-[1180px] w-auto md:h-[182px] h-auto">
                    <div className="xl:w-[250px] xs:w-[200px]  w-auto flex flex-col gap-5 xs:items-start items-center ">
                        <Image   
                        src="/images/Logo main.png"
                        alt="Logo"
                        width={325}
                        height={50}
                        className="xs:w-[325px] xs:h-[50px] w-[191px] h-[34px]"/>
                        <p className="text-[18px] font-normal text-white xs:text-start text-center">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="flex flex-col gap-4 xl:w-[205.25px] w-auto xs:h-[130px] h-auto xs:items-start items-center"> 
                        <h4 className="text-[18px] font-bold text-white hover:text-[#FFE492]" >Product</h4>
                        <p className="text-[16px] font-normal text-[#FFE492]">Overview</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Pricing</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Customer stories</p>
                    </div>
                    <div className="flex flex-col gap-4 xl:w-[205.25px] w-auto xs:h-[130px] h-auto xs:items-start items-center">
                        <h4 className="text-[18px] font-bold text-white hover:text-[#FFE492]" >Resources</h4>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Blog</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Guides & tutorials</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Help center</p>
                    </div>
                    <div className="flex flex-col gap-4 xl:w-[205.25px] w-auto xs:h-[130px] h-auto xs:items-start items-center">
                        <h4 className="text-[18px] font-bold text-white hover:text-[#FFE492]" >Company</h4>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">About us</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Careers</p>
                        <p className="text-[16px] font-normal text-white hover:text-[#FFE492]">Media kit</p>
                    </div>
                    <div className="flex flex-col gap-4 xl:w-[249px] w-auto h-[182px] xs:items-start items-center">
                        <h4 className="text-[28px] font-bold text-white">Try It Today</h4>
                        <p className="text-[16px] font-normal text-white">Get started for free. Add your<br/>whole team as your needs grow.</p>
                        <button type="button" className="text-white bg-[#4F9CF9] hover:bg-[#5994dd]  w-[165px] h-[50px]  rounded-md">Try Taskey free <span>→</span></button>
                    </div>
                </div>

                <hr className="xl:w-[1180px] lg:w-[1000px] md:w-[780px] w-auto border-t border-white opacity-30 mt-16" />

                <div className="xl:w-[1180px] lg:w-[1000px] md:w-[760px] w-auto flex md:flex-row flex-col justify-between ">
                    <div className="md:w-[737px] w-auto md:h-[20px] h-auto flex sx:flex-row flex-col  lg:gap-10 md:gap-5 xs:gap-5 gap-2 xs:items-start items-center">
                       <Image
                        src="/images/Logo-footer.png"
                        alt="footer image"
                        width={104}
                        height={20}
                       />
                       <p className="text-white hover:hover:text-[#FFE492]">Terms & Privacy</p>
                       <p className="text-white hover:hover:text-[#FFE492]">Security</p>
                       <p className="text-white hover:hover:text-[#FFE492]">Status</p>
                       <p className="text-white hover:hover:text-[#FFE492]">Ⓒ 2021 Whitepace LLC.</p>
                    </div>
                    <div className="md:my-0 my-4 flex xs:justify-start justify-center">
                        <Image
                        src="/images/Social-Icon.png"
                        alt="social media icon"
                        width={105}
                        height={16.65}/>
                    </div>
                </div>

                

            </div>
        </div>
    )
}