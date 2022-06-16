import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import tw from "twin.macro";

const Contianer = tw.div`
  w-64
  border-2
  border-black
  h-16
  rounded-full
  flex
  items-center
  bg-gray-100
  text-gray-400
  space-x-2
  p-3
`;

const SearchInput = tw.input`
  bg-transparent
  flex-1
  outline-none
`;

const SearchBar = () => {
  return (
    <Contianer>
      {/* Icon */}
      <SearchIcon className="h-8 w-8 "></SearchIcon>
      {/* SearchInput */}
      <SearchInput placeholder="Search twitter"></SearchInput>
    </Contianer>
  );
};

export default SearchBar;
