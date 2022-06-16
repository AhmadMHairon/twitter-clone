import type { NextPage } from "next";
import Head from "next/head";
import FeedContainer from "../components/feed/FeedContainer.component";
import SideBar from "../components/sideBar/SideBar.component";
import tw from "twin.macro";

const Container = tw.main`
  flex
  flex-col
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* SideBar */}
        <SideBar />
        {/* feed */}
        <FeedContainer />
        {/* widgets */}
      </Container>
    </div>
  );
};

export default Home;
