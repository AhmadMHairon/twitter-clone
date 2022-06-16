import React from "react";
import Image from "next/image";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow.component";
import tw from "twin.macro";

const Contianer = tw.div`
  col-span-2
  flex
  flex-col
  items-center
  px-4
  md:items-start
`;

const SideBar = () => {
  return (
    <Contianer>
      <div className="m-3">
        <Image
          src={"https://links.papareact.com/drq"}
          width={40}
          height={40}
        ></Image>
      </div>

      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      {true && <SideBarRow Icon={UserIcon} title="Sign In" />}
      {false && <SideBarRow Icon={UserIcon} title="Sign Out" />}
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </Contianer>
  );
};

export default SideBar;
