function Main() {
  return (
    <div className="w-[1349px] m-auto bg-black">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[103px] text-[#fff]">Captivate & Convert</h1>
        <p className="text-[24px] w-[584.7px] text-center text-[#fff] mb-[30px] opacity-[0.5]">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </p>
        <div className="text-[#fff] text-[16px] flex gap-[13px]">
          <div>
            <button className="w-[90.78px] bg-[#5B6CFF] p-[11px] rounded-[64px] hover:bg-[#3647ca] transition">
              Demo
            </button>
          </div>
          <div>
            <button className="flex p-[11px] rounded-[64px] border gap-[3px] hover:bg-[#222020] transition">
              {" "}
              <img src="icon-btn.svg" alt="" /> How it works
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="bg-img.png" alt="img-bg" />
        <div className="absolute mt-[-700px]">
          <img src="bg2-img.png" alt="img-bg" />
        </div>
        <div className="flex justify-center ">
          <div className="absolute mt-[-695px]">
            <img className="rounded-[14px]" src="bg3-img.png" alt="img-bg" />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="absolute mt-[-695px]">
            <img className="rounded-[14px]" src="bg4-img.png" alt="img-bg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
