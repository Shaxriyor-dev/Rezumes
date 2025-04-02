import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import kol from "../assets//imgs/kol.jpg";
import person from "../assets/icons/person.jpg"
import person1 from "../assets/icons/person1.jpg"
import person2 from "../assets/icons/person2.jpg"

function Reference() {
  return (
    <div className="w-full h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        References
      </p>
      <p className="mt-10 text-[19px] font-ubuntu text-base/8 text-neutral-400">
        A testimonial is effectively a review or recommendation from a client,
        letting other people know how your products or services benefitted them.
        We respect each client and help everyone with all our might.
      </p>
      <div className="flex items-center h-[230px] mt-10 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
        <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
        <div>
          <p className="text-lg font-[Poppins] text-neutral-300 p-3">
            One of the best. It works quite well for software development also.
            The design and ease of installation and customizing is exceptional.
            Many plaudits to the developers!
          </p>
        </div>
        <div className="h-[230px] w-0.5 bg-neutral-400"></div>
        <div className="p-17 flex items-center flex-wrap justify-center">
          <img className="rounded-[50%] h-[100px] w-[100px]" src={person} alt="" />
          <p className="text-[14px] p-3 text-center py-2 font-[Poppins]">
            Mr.Mike
            <Stack spacing={1}>
              <Rating  name="size-medium" defaultValue={3} />
            </Stack>
          </p>
        </div>
      </div>
      <div className="flex items-center h-[230px] mt-10 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
        <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
        <div>
          <p className="text-lg font-[Poppins] text-neutral-300 p-3">
          Very good design and code quality. The costumer support is excellent. They respond within minutes and solve problems on the fly. I sincerely recommend!
          </p>
        </div>
        <div className="h-[230px] w-0.5 bg-neutral-400"></div>
        <div className="p-17 flex items-center flex-wrap justify-center">
          <img className="rounded-[50%] h-[100px] w-[100px]" src={person1} alt="" />
          <p className="text-[14px] p-3 text-center py-2 font-[Poppins]">
            Shahk-web
            <Stack spacing={1}>
              <Rating  name="size-medium" defaultValue={4} />
            </Stack>
          </p>
        </div>
      </div>
      <div className="flex items-center h-[230px] mt-10 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
        <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
        <div>
          <p className="text-lg font-[Poppins] text-neutral-300 p-3">
            One of the best. It works quite well for software development also.
            The design and ease of installation and customizing is exceptional.
            Many plaudits to the developers!
          </p>
        </div>
        <div className="h-[230px] w-0.5 bg-neutral-400"></div>
        <div className="p-17 flex items-center flex-wrap justify-center">
          <img className="rounded-[50%] h-[100px] w-[100px]" src={person2} alt="" />
          <p className="text-[14px] p-3 text-center py-2 font-[Poppins]">
            Alexsandr
            <Stack spacing={1}>
              <Rating  name="size-medium" defaultValue={2} />
            </Stack>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reference;
