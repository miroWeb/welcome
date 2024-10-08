function Experience() {
  return (
    <div className="w-[1349px] container m-auto">
      <br />
      <br />
      <br />
      <div className="text-center flex flex-col">
        <h3 className="text-[64px] ml-[-520px]">An unmatched attendee</h3>
        <h1 className="text-[240px] mt-[-70px]">Experience</h1>
      </div>
      {/* img */}
      <div className="relative mb-[21px]">
        <div className="absolute mt-[37px] ml-[37px]">
          <h4 className="text-[18px] mb-[5px]">Interactive overlays</h4>
          <p className="w-[320px] text-[16px] opacity-[0.7]">
            Add custom branded graphics that lay over your live video to intro
            speakers, emphasize key points, and display clickable CTAs.
          </p>
        </div>
        <img src="/experience-img/img1.png" alt="img" />
      </div>
      {/* === */}
      <div className="flex gap-[21px] mb-[21px]">
        <div className="relative">
          <div className="absolute mt-[37px] ml-[37px]">
            <h4 className="text-[18px] mb-[5px]">Interactive Polls</h4>
            <p className="w-[320px] text-[16px] opacity-[0.7]">
              Embed polls directly on stage and watch the results populate in
              real-time. Moderate audience questions, allow upvoting, and bring
              attendees on-stage.
            </p>
          </div>
          <img src="/experience-img/img2.png" alt="img" />
        </div>
        <div className="relative">
          <div className="absolute mt-[37px] ml-[37px]">
            <h4 className="text-[18px] mb-[5px] text-[#fff]">
              HD Video Quality
            </h4>
            <p className="w-[320px] text-[16px] opacity-[0.7] text-[#fff]">
              Provide a better experience for your viewers with crystal clear HD
              video streaming.
            </p>
          </div>
          <img src="/experience-img/img3.png" alt="img" />
        </div>
      </div>
      {/* === */}
      <div className="flex gap-[21px] mb-[51px]">
        <div className="relative">
          <div className="absolute mt-[37px] ml-[37px]">
            <h4 className="text-[18px] mb-[5px] text-[#fff]">Q&A</h4>
            <p className="w-[320px] text-[16px] opacity-[0.7] text-[#fff]">
              Moderate audience questions, allow upvoting, and bring attendees
              on-stage.
            </p>
          </div>
          <img src="/experience-img/img4.png" alt="img" />
        </div>
        <div className="relative">
          <div className="absolute mt-[37px] ml-[37px]">
            <h4 className="text-[18px] mb-[5px]">Chat</h4>
            <p className="w-[320px] text-[16px]">
              Chat is where engagement happens. With a slack-like experience,
              attendees can use emojis, reactions, and gifs to express
              themselves.
            </p>
          </div>
          <img src="/experience-img/img5.png" alt="img" />
        </div>
      </div>
      <div className="w-[194.59px] mb-[100px] flex justify-center m-auto cursor-pointer items-center rounded-[64px] border border-[#777] hover:bg-[#ece8e8] transition">
        <button className="p-[11px] text-[16px]">See all features</button>
        <img className="mt-[2px]" src="btn-str.svg" alt="" />
      </div>
    </div>
  );
}

export default Experience;
