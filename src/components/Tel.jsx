function Tel() {
  return (
    <div className="flex justify-center m-auto">
      <div className="relative mt-[250px]">
        <div className="text-[#fff] absolute ml-[40px]">
          <h1 className="text-[56px] w-[582px] mb-[30px]">
            “Makes other platforms look like the 1990’s”
          </h1>
          <p className="text-[22opx] opacity-[0.5] mb-[30px]">
            -Nate Skinner, CMO at Onfido
          </p>
          <div>
            <button className="rounded-[64px] p-[11px] border border-[#777] hover:bg-[#201f1f] transition">
              Read customer stories
            </button>
          </div>
        </div>
      </div>
      <img src="tel-img.png" alt="" />
    </div>
  );
}

export default Tel;
