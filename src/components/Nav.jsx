function Nav() {
  return (
    <div>
      <div className="flex justify-between items-center bg-black pr-[80px] pl-[80px] pt-[30px]">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <ul className="flex gap-[33px] text-[#fff] text-[15px] cursor-pointer">
          <li>Features</li>
          <li>Pricing</li>
          <li>Events</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div className="flex gap-[30px] text-[#fff] text-[15px] items-center">
          <ul className="flex gap-[30px] cursor-pointer">
            <li>Support</li>
            <li>Login</li>
          </ul>
          <div>
            <button className="w-[90.78px] bg-[#5B6CFF] p-[11px] rounded-[64px] hover:bg-[#3647ca] transition">
              Demo
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#000] h-[15px]"></div>
      <div className="bg-[#373535] h-[1.5px]"></div>
    </div>
  );
}

export default Nav;
