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

const SideBar = () => {
  return (
    <div>
      <Image
        src={"https://links.papareact.com/drq"}
        width={100}
        height={100}
      ></Image>
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      {true && <SideBarRow Icon={UserIcon} title="Sign In" />}
      {false && <SideBarRow Icon={UserIcon} title="Sign Out" />}
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default SideBar;
