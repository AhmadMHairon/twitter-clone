import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/sideBar/SideBar.component";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* SideBar */}
        <SideBar />
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
};

export default Home;
