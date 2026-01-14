import { User } from "@/types/users";
import React from "react";

type Props = {
  user: User;
};
function UserMobile({ user }: Props) {
  return (
    <div className="w-full bg-white flex items-center p-2 border border-(--black)/10 rounded-2xl">
      <span className="w-hit h-full aspect-square bg-[#E3E3E3] flex items-center justify-center rounded-[0.8rem]">
        <span className="font-semibold font-h2 opacity-75">
          {user.name[0].toUpperCase()}
        </span>
      </span>

      <div className="flex flex-col justify-center space-y-2 ml-4 py-3">
        <span className="bg-[#F5F5F5]  w-fit p-1 px-2 font-p3 rounded-md border border-[#E3E3E3]">
          {user.username}
        </span>
        <span className="font-semibold">{user.name}</span>

        <div className="flex items-center font-p3 space-x-2">
          <span className="opacity-50">Email:</span>
          <span className="opacity-75 font-medium">{user.email}</span>
        </div>

        <div className="flex items-center font-p3 space-x-2">
          <span className="opacity-50">Company:</span>
          <span className="opacity-75 font-medium">{user.company.name}</span>
        </div>
      </div>
    </div>
  );
}

export default UserMobile;
