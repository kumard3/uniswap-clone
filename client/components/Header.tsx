import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../assets/eth.png";
import uniswapLogo from "../assets/uniswap.png";
import { TransactionContext } from "../context/TransactionContext";

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center z-10`,
  headerLogo: `flex z-10  items-center justify-start`,
  nav: ` flex z-10 justify-between items-center`,
  navItemsContainer: `flex bg-[#191B1F] z-10 rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center z-10 text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex justify-end items-center z-10`,
  button: `flex items-center bg-[#191B1F] rounded-2xl z-10 mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center z-10`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8 z-10`,
  buttonAccent: `bg-[#172A42] border border-[#163256] z-10 hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
};

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("swap");
  const [userName, setUserName] = useState<string>("connected");
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image
          src={uniswapLogo}
          alt="uniswap"
          height={40}
          width={40}
          className="w-10 h-10"
        />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav("swap")}
            className={`${style.navItem} ${
              selectedNav === "swap" && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav("pool")}
            className={`${style.navItem} ${
              selectedNav === "pool" && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav("vote")}
            className={`${style.navItem} ${
              selectedNav === "vote" && style.activeNavItem
            }`}
          >
            Vote
          </div>
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} hidden ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
        <div
          className={`${style.button} hidden ${style.buttonPadding}`}
        >
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
