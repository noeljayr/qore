import { User as UserTypes } from "@/types/users";
import React from "react";

type Props = {
  user: UserTypes;
};
function User({ user }: Props) {
  return (
    <div
      key={user.id}
      className="row gap-4 py-2 border-b border-b-[#F0F0F0] grid items-center grid-cols-[3rem_25%_15%_20%_1fr] max-sm:grid-cols-[3rem_1fr_4rem]"
    >
      <span className="h-8 w-8 bg-[#E3E3E3] flex items-center justify-center rounded-lg">
        <span className="font-semibold opacity-75">
          {user.name[0].toUpperCase()}
        </span>
      </span>
      <span className="truncate h-fit">{user.name}</span>
      <span className="h-fit">
        <span className="bg-[#F5F5F5] p-1 px-2 font-p3 rounded-md border border-[#E3E3E3]">
          {user.username}
        </span>
      </span>
      <span className="truncate h-fit max-sm:hidden">{user.email}</span>
      <span className="truncate h-fit max-sm:hidden font-normal">
        {user.company.name}
      </span>
    </div>
  );
}

export default User;
