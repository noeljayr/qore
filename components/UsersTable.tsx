"use client";

import { useEffect, useState, useMemo } from "react";
import IconSearch from "./icons/IconSearch";
import { User as UserTypes } from "@/types/users";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import UsersLoading from "./ux/UsersLoading";
import User from "./User";
import UserMobile from "./UserMobile";
import UsersMobileLoading from "./ux/UsersMobileLoading";

function UsersTable() {
  const [width, setWidth] = useState<number | null>(null);
  const [users, setUsers] = useState<UserTypes[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width && width > 640) {
      setUsersPerPage(5);
    } else {
      setUsersPerPage(10);
    }
  }, [width]);

  const getUsers = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      if (res.ok) {
        setUsers(data);
      } else {
        console.error(`That didn't go well`);
      }
    } catch (error) {
      console.error(`That didn't go well`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!users) return [];
    if (!searchQuery.trim()) return users;

    const query = searchQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.company.name.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="w-full flex flex-col space-y-4 max-sm:pb-16">
      <div className="w-full flex items-center">
        <div className="font-p1 font-semibold">
          All users{" "}
          {users && (
            <span className="opacity-50 font-semibold ml-1">
              {filteredUsers.length}
            </span>
          )}
        </div>
        <div className="ml-auto z-10 max-sm:fixed max-sm:bottom-0 max-sm:pb-6 max-sm:pt-4 max-sm:border-t max-sm:border-t-(--black)/15 grid grid-cols-1 gap-2 max-sm:px-4 max-sm:bg-white w-60 max-sm:w-screen max-sm:left-0">
          <div className="w-full border items-center px-1.5 gap-1.5 border-(--black)/10 bg-[#F0F0F0]/85 rounded-md max-sm:rounded-full grid grid-cols-[auto_1fr]">
            <IconSearch className="opacity-35 h-4 w-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-medium h-7.5 max-sm:h-10 outline-0 border-0 bg-transparent"
              placeholder="Looking for anyone specific?"
            />
          </div>
        </div>
      </div>

      {width === null ? null : width > 640 ? (
        <div className="flex flex-col">
          <div className="header grid py-2 rounded-md bg-black/3 gap-4 grid-cols-[3rem_25%_15%_20%_1fr] max-sm:grid-cols-[3rem_1fr_4rem]">
            <span className="font-semibold"></span>
            <span className="font-medium opacity-65">Name</span>
            <span className="font-medium opacity-65">Username</span>
            <span className="font-medium opacity-65 max-sm:hidden">Email</span>
            <span className="font-medium opacity-65 max-sm:hidden">
              Company
            </span>
          </div>
          {loading ? (
            <UsersLoading />
          ) : currentUsers.length > 0 ? (
            <>
              {currentUsers.map((user, index) => (
                <User key={index} user={user} />
              ))}
              {!loading && filteredUsers.length > 0 && (
                <div className="w-full flex mt-2">
                  <div className="flex items-center mr-auto space-x-2">
                    <button
                      onClick={handlePrevious}
                      disabled={!canGoPrevious}
                      className={`h-6 w-6 border ${
                        canGoPrevious
                          ? "bg-[#F2F2F2] border-transparent cursor-pointer hover:bg-[#E8E8E8]"
                          : "border-[#E6E6E6] bg-transparent cursor-not-allowed"
                      } rounded-full flex items-center justify-center transition-colors`}
                    >
                      <IconChevronLeft
                        className={`h-4 w-4 ${
                          canGoPrevious ? "opacity-75" : "opacity-25"
                        }`}
                      />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!canGoNext}
                      className={`h-6 w-6 border ${
                        canGoNext
                          ? "bg-[#F2F2F2] border-transparent cursor-pointer hover:bg-[#E8E8E8]"
                          : "border-[#E6E6E6] bg-transparent cursor-not-allowed"
                      } rounded-full flex items-center justify-center transition-colors`}
                    >
                      <IconChevronRight
                        className={`h-4 w-4 ${
                          canGoNext ? "opacity-75" : "opacity-25"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center font-semibold space-x-1">
                    <span className="opacity-50">Showing</span>{" "}
                    <span>
                      {startIndex + 1}-
                      {Math.min(endIndex, filteredUsers.length)} of{" "}
                      {filteredUsers.length}
                    </span>{" "}
                    <span className="opacity-50">users</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-8 text-center opacity-50">
              Hmm, We could't find any users. Try again.
            </div>
          )}
        </div>
      ) : (
        <div className="w-full relative z-0 gap-3  grid auto-rows-min h-full grid-flow-row overflow-y-auto">
          {loading ? (
            <UsersMobileLoading />
          ) : (
            filteredUsers &&
            filteredUsers.map((user, index) => (
              <UserMobile key={index} user={user} />
            ))
          )}
        </div>
      )}

      {}
    </div>
  );
}

export default UsersTable;
