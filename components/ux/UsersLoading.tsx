import React from "react";

function UsersLoading() {
  const rows = [1, 2, 3, 4, 5];
  return (
    <>
      {rows.map((r) => (
        <div
          key={r}
          className="row gap-4 py-2 border-b border-b-[#F0F0F0] grid items-center grid-cols-[3rem_25%_15%_20%_1fr] max-sm:grid-cols-[3rem_1fr_4rem]"
        >
          <span className="h-8 w-8 bg-[#E3E3E3]/50 flex items-center justify-center rounded-lg">
            <span className="font-semibold opacity-75"></span>
          </span>
          <span className="truncate h-fit bg-[#E3E3E3]/50 py-1 rounded-sm">
            <span className="opacity-0">full name</span>
          </span>
          <span className="h-fit py-1 rounded-sm bg-[#E3E3E3]/50">
            <span className="max-sm:hidden opacity-0">username</span>
          </span>
          <span className="truncate h-fit py-1 rounded-sm bg-[#E3E3E3]/50">
            <span className="opacity-0">email</span>
          </span>
          <span className="truncate h-fit py-1 rounded-sm bg-[#E3E3E3]/50  max-sm:hidden">
            <span className="opacity-0">company name</span>
          </span>
        </div>
      ))}
    </>
  );
}

export default UsersLoading;
