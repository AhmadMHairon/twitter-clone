import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import tw from "twin.macro";
import TweetBox from "./TweetBox.component";

const Container = tw.div`
col-span-7
lg:col-span-5
  
`;

const HomeContainer = tw.div`
  flex
  items-center
justify-between
`;

const HomeText = tw.h1`
  p-5
  pb-0
  text-xl
  font-bold
`;

const FeedContainer = () => {
  return (
    <Container className="border-x">
      <HomeContainer>
        <HomeText>Home</HomeText>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 text-twitter transition-all ease-linear duration-300 active:scale-125 hover:rotate-180"></RefreshIcon>
      </HomeContainer>
      {/* TweetBox */}
      <TweetBox></TweetBox>
    </Container>
  );
};

export default FeedContainer;
