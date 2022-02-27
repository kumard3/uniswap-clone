import type { NextPage } from "next";
import Header from "../components/Header";
import Main from "../components/Main";
import TransactionHistory from "../components/TransactionHistory";

const style = {
  wrapper: `h-screen  max-h-screenh-screen  max-h-screen -z-10  h-min-screen w-screen bg-[url('/test.jpg')] bg-no-repeat bg-cover	 bg-center 	 ob text-white select-none flex flex-col justify-between`,
  wrapper2: `h-screen  max-h-screenh-screen `,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className=" after:content-[''] after:absolute after:w-full after:h-full  after:backdrop-blur-sm"></div>
      <div className={`${style.wrapper2} z-10`}>
        <Header />
        <Main />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Home;
/* 


    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background: blur;
    backdrop-filter: blur(1038px);

*/
