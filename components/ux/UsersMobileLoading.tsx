function UsersMobileLoading() {
  const cards = [1, 2, 3, 4, 5, 6,];
  return (
    <>
      {cards.map((c) => (
        <div
          key={c}
          className="w-full bg-white flex items-center p-2 border border-(--black)/10 rounded-2xl"
        >
          <span className="w-hit h-full aspect-square bg-[#E3E3E3]/50 flex items-center justify-center rounded-[0.8rem]">
            <span className="font-semibold font-h2 opacity-0">A</span>
          </span>

          <div className="flex flex-col justify-center space-y-2 ml-4 py-3 flex-1">
            <span className="bg-[#E3E3E3]/50 w-20 p-1 px-2 font-p3 rounded-md">
              <span className="opacity-0">username</span>
            </span>
            <span className="bg-[#E3E3E3]/50 w-32 rounded-sm">
              <span className="opacity-0">Full Name</span>
            </span>

            <div className="flex items-center font-p3 space-x-2">
              <span className="bg-[#E3E3E3]/50 px-2 rounded-sm">
                <span className="opacity-0">email@example.com</span>
              </span>
            </div>

            <div className="flex items-center font-p3 space-x-2">
              <span className="bg-[#E3E3E3]/50 px-2 rounded-sm">
                <span className="opacity-0">Company Name</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UsersMobileLoading;
