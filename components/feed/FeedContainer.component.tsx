import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import tw from "twin.macro";

const Container = tw.div`
  
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
  border-2
  border-black
`;

const FeedContainer = () => {
  return (
    <Container>
      <HomeContainer>
        <HomeText>Home</HomeText>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 text-twitter transition-all ease-linear duration-300 active:scale-125 hover:rotate-180"></RefreshIcon>
      </HomeContainer>
    </Container>
  );
};

export default FeedContainer;
