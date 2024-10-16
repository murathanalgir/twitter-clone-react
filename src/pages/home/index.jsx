// import UserCard from "~/components/user-card";
import { whoFollowUsers } from "~/mock";

export default function Home() {
  return (
    <>
      <div className="flex">
        {/* Top menu */}
        <div className="bg-black flex flex-row">
          <button
            href="/"
            className="border-x-[0.1rem] border-[#333] pl-[16px] pr-[16px] pt-[16px] pb-[16px] font-black cursor-pointer hover:bg-[#1a8cd8]"
          >
            For You
          </button>
          {/* <main className="border-x border-[#333]"></main> */}
          <button
            href="/"
            className="border-x-[0.1rem] border-[#333] opacity-40 pl-[16px] pr-[16px] pt-[16px] pb-[16px] font-black cursor-pointer hover:bg-[#1a8cd8]"
          >
            Following
          </button>
        </div>
      </div>

      <div className=" left-50 top-50 border-2 border-black">
        {whoFollowUsers.map((user) => (
          <img
            key={user.id}
            src={user.avatar}
            className="rounded-full py-4 p-"
            alt=""
            width={40}
            height={40}
          ></img>
        ))}
        <div className="ml-24 mb-[12px]">whats happening</div>
      </div>
    </>
  );
}
