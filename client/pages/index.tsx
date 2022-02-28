import type { NextPage } from "next";
import Header from "../components/Header";
import Main from "../components/Main";
import TransactionHistory from "../components/TransactionHistory";

const style = {
  wrapper: `h-screen    max-h-screen -z-10   w-screen bg-[url('/test.jpg')] bg-no-repeat bg-cover	 bg-center  text-white select-none flex flex-col justify-between`,
  wrapper2: `h-screen   `,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className=" after:content-[''] after:absolute after:w-full after:h-full  after:backdrop-blur-sm"></div>
      <div className={`${style.wrapper2} `}>
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
