import Image from "next/image"

export default function Footer(){
    return(
        <div className="h-[1179px] bg-[#043873]">
            <div className=" h-[705px] flex justify-center pt-20">
                <div className="w-[608px] h-[533px] flex flex-col gap-8">
                    <div className="h-[262px] flex flex-col justify-center">
                      <h1 className="text-[62px] font-bold  text-center text-white leading-tight pb-5">Try Whitespace today</h1>
                      <p className="text-[24px] font-normal text-center text-white">Get started for free.</p>
                      <p className="text-[24px] font-normal leading-[14px] text-center text-white">Add your whole team as your needs grow.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <button type="button" className="text-white bg-[#4F9CF9] w-[218px] h-[59px] items-center">Try Taskey free <span>→</span></button>
                        <p className="text-[24px] font-normal text-center text-white">On a big team? Contact sales</p>
                        <Image
                        src="/images/App-icon.png"
                        alt="App-icon"
                        width={260}
                        height={60}/>
                    </div>
                </div>
            </div>



            <div className="bg-[#043873] h-[474px] flex flex-col items-center pt-32 gap-7">
                <div className="flex gap-10 w-[1180px] h-[182px]">
                    <div className="w-[250px] flex flex-col gap-5">
                        <Image
                        src="/images/Logo.png"
                        alt="Logo"
                        width={191}
                        height={34}/>
                        <p className="text-[18px] font-normal text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="flex flex-col gap-4 w-[205.25px] h-[130px]"> 
                        <h4 className="text-[18px] font-bold text-white" >Product</h4>
                        <p className="text-[16px] font-normal text-white">Overview</p>
                        <p className="text-[16px] font-normal text-white">Pricing</p>
                        <p className="text-[16px] font-normal text-white">Customer stories</p>
                    </div>
                    <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">
                        <h4 className="text-[18px] font-bold text-white" >Resources</h4>
                        <p className="text-[16px] font-normal text-white">Blog</p>
                        <p className="text-[16px] font-normal text-white">Guides & tutorials</p>
                        <p className="text-[16px] font-normal text-white">Help center</p>
                    </div>
                    <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">
                        <h4 className="text-[18px] font-bold text-white" >Company</h4>
                        <p className="text-[16px] font-normal text-white">About us</p>
                        <p className="text-[16px] font-normal text-white">Careers</p>
                        <p className="text-[16px] font-normal text-white">Media kit</p>
                    </div>
                    <div className="flex flex-col gap-4 w-[249px] h-[182px]">
                        <h4 className="text-[28px] font-bold text-white">Try It Today</h4>
                        <p className="text-[16px] font-normal text-white">Get started for free. Add your<br/>whole team as your needs grow.</p>
                        <button type="button" className="text-white bg-[#4F9CF9] w-[165px] h-[50px]  rounded-md">Try Taskey free <span>→</span></button>
                    </div>
                </div>

                <hr className="w-[1180px] border-t border-white opacity-30  mt-16" />

                <div className="w-[1180px] flex justify-between ">
                    <div className="w-[737px] h-[20px] flex justify-between">
                   <Image
                       src="/images/Language.png"
                       alt="Language"
                       width={104}
                       height={20}/>
                       <p className="text-white">Terms & Privacy</p>
                       <p className="text-white">Security</p>
                       <p className="text-white">Status</p>
                       <p className="text-white">Ⓒ2021 Whitepace LLC.</p>
                    </div>
                    <div>
                        <Image
                        src="/images/Social Icon.png"
                        alt="Social Icon"
                        width={105}
                        height={16.65}/>
                    </div>
                </div>

                

            </div>
        </div>
    )
}