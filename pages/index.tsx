import type { NextPage } from "next";
import Head from "next/head";
import FeedContainer from "../components/feed/FeedContainer.component";
import SideBar from "../components/sideBar/SideBar.component";
import tw from "twin.macro";
import WidgetsContainer from "../components/widgets/WidgetsContainer.component";

const Container = tw.main`
grid
grid-cols-9
`;

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto ">
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
        <WidgetsContainer></WidgetsContainer>
      </Container>
    </div>
  );
};

export default Home;
