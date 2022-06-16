import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import tw from "twin.macro";
import SearchBar from "./SearchBar.component";

const Container = tw.div`
  mt-2
  px-2
  col-span-2
  hidden
  lg:inline
`;

const WidgetsContainer = () => {
  return (
    <Container>
      {/* SearchBar */}
      <SearchBar></SearchBar>
      {/* Tweets */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="hern_1997"
        options={{ height: 1000 }}
      ></TwitterTimelineEmbed>
    </Container>
  );
};

export default WidgetsContainer;
