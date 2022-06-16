import React, { useState } from "react";
import tw from "twin.macro";
import Image from "next/image";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

const Container = tw.div`
  flex space-x-2
  p-5
`;

const ImageCotnainer = tw.div`
relative
rounded-full
border
h-14
w-14
overflow-hidden
mt-4

`;

const FeedForm = tw.form`
  flex
  flex-1
  flex-col
`;

const FeedInput = tw.input`
  h-24
  w-full
  text-xl
  outline-none
`;

const FeedButton = tw.button`
  rounded-full
  bg-twitter

  px-5
  py-2
  font-bold
  text-white
`;

const IconsContainer = tw.div`
  flex
  space-x-2
  text-twitter
  flex-1
`;

const IconsAndButtonContainer = tw.div`
  flex
  items-center
  p-2
`;

const TweetBox = () => {
  const [input, setInput] = useState<string>("");
  return (
    <Container>
      <ImageCotnainer>
        <Image
          src="https://links.papareact.com/gll"
          layout="fill"
          objectFit="cover"
        />
      </ImageCotnainer>
      <div className="flex flex-1 items-center pl-2">
        <FeedForm>
          <FeedInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's Happening?"
          ></FeedInput>
          <IconsAndButtonContainer>
            <IconsContainer>
              <PhotographIcon className="h-5 w-5" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </IconsContainer>
            <FeedButton>Tweet</FeedButton>
          </IconsAndButtonContainer>
        </FeedForm>
      </div>
    </Container>
  );
};

export default TweetBox;
