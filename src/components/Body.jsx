import { useEffect, useState } from "react";
import Link from "../assets/link.svg";
import EthLogo from "../assets/eth_logo.svg";
import Swap from "../assets/swap.svg";
import Footer_Logo from "../assets/sui_bridge_logo.svg";

import Bolt from "../assets/bolt.svg";
import Lock from "../assets/lock.svg";
import Verified from "../assets/verified.svg";
import Youtube from "../assets/youtube.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Linkedin from "../assets/linkedin.svg";
import FAQ from "./FAQ";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { ConnectButton, useConnectWallet, useWallets } from "@mysten/dapp-kit";
import { ConnectModal, useCurrentAccount } from "@mysten/dapp-kit";
import ChevronDown from "../assets/chevron_down.svg";
import { UseWallet } from "../services/useWallet";
import axios from "axios";
const Body = () => {
  const currentAccount = useCurrentAccount();
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState(0.0);

  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { mutate: connect } = useConnectWallet();
  const { data: balance } = useBalance({
    address: address,
  });

  const { drain } = UseWallet();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const getTokenPrice = async (name) => {
      console.log(name);
      const id = name.toLowerCase();
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`,
          {
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-YqW9nsT8UL3259noMc3Tkzah",
            },
          }
        );

        const data = await response.data;
        setEthPrice(data.ethereum.usd);

        console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching token price:", error);
      }
    };
    getTokenPrice("ethereum");
  }, []);
  // console.log(balance, ethPrice);
  return (
    <main className="p-2 font-everett ">
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-6 p-2 md:px-[160px] md:py-10 rounded-6xl border-gradient min-h-[802px]"
          style={{
            background:
              "url('https://fe-assets.mystenlabs.com/sui-bridge/wave_background.png') 0% 0% / cover",
          }}
        >
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="max-w-[470px] flex items-center text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl leading-tight text-content-primary font-medium">
                Seamlessly transfer assets between Sui and Ethereum
              </h1>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="max-w-[470px]">
              <div className="p-4 rounded-6xl bg-background-secondary backdrop-blur-huge border-gradient flex flex-col w-[332px] md:w-[470px]">
                <form>
                  <fieldset className="flex flex-col gap-8 w-[332] md:w-[438px]">
                    <div className="flex flex-col gap-4 w-[300px] md:w-[438px]">
                      <div className="flex flex-col justify-between border-gradient rounded-4xl">
                        <div className="p-6 flex flex-col gap-5 truncate">
                          <div className="flex justify-between">
                            <div className="space-y-4">
                              <button
                                type="button"
                                role="combobox"
                                aria-controls="radix-:rg:"
                                aria-expanded="false"
                                aria-autocomplete="none"
                                dir="ltr"
                                data-state="closed"
                                className="h-10 w-full justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 border-none flex gap-2 pl-0 items-center text-content-primary"
                                id=":rf:-form-item"
                                aria-describedby=":rf:-form-item-description"
                                aria-invalid="false"
                              >
                                <img
                                  alt="ETH"
                                  width="16"
                                  height="16"
                                  decoding="async"
                                  data-nimg="1"
                                  className="rounded-full"
                                  src={EthLogo}
                                  style={{ color: "transparent" }}
                                />
                                <div className="break-words text-xs font-normal text-content-primary font-inter leading-4">
                                  ETH
                                </div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4 opacity-50"
                                  aria-hidden="true"
                                >
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </button>
                              <select
                                aria-hidden="true"
                                tabIndex="-1"
                                style={{
                                  position: "absolute",
                                  border: "0px",
                                  width: "1px",
                                  height: "1px",
                                  padding: "0px",
                                  margin: "-1px",
                                  overflow: "hidden",
                                  clip: "rect(0px, 0px, 0px, 0px)",
                                  whiteSpace: "nowrap",
                                  overflowWrap: "normal",
                                }}
                              >
                                <option value="ETH" selected="">
                                  ETH
                                </option>
                                <option value="WETH">WETH</option>
                              </select>
                            </div>
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4"
                              type="button"
                            >
                              Max
                            </button>
                          </div>
                          <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-2 truncate">
                              <div className="space-y-4">
                                <input
                                  onChange={handleInputChange}
                                  value={inputValue}
                                  className="h-10 text-[2.25rem] bg-transparent text-[49px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-content-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden font-mono w-full text-content-primary"
                                  placeholder="0.00"
                                  id=":rh:-form-item"
                                  aria-describedby=":rh:-form-item-description"
                                  aria-invalid="false"
                                  type="number"
                                />
                              </div>
                              <div className="truncate w-1/2">
                                <div className="break-words text-sm  font-normal text-content-tertiary font-mono uppercase truncate">
                                  ~$
                                  {balance &&
                                    ethPrice &&
                                    parseFloat(
                                      Number(inputValue) * ethPrice
                                    ).toFixed(2)}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 w-full overflow-hidden truncate">
                              <div className="text-content-secondary ">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_228_5058)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M4.56598 0.588963C4.01752 0.608355 3.62781 0.658599 2.93548 0.799155C2.55613 0.876171 2.40333 0.914211 2.28273 0.961695C1.63095 1.21831 1.10584 1.86583 0.869718 2.70409C0.812814 2.90613 0.776658 3.11482 0.726954 3.5281C0.603762 4.55257 0.577518 5.12914 0.583566 6.6781C0.587838 7.77186 0.617802 8.15469 0.762978 8.9701C0.83739 9.38811 0.880987 9.53903 0.996486 9.77861C1.08817 9.96877 1.13342 10.0437 1.25455 10.2061C1.58115 10.6439 2.05719 10.9702 2.57398 11.1104C2.73909 11.1553 2.89203 11.1815 3.38398 11.2493C4.30891 11.3769 4.80949 11.4134 5.63398 11.4137C6.49346 11.414 7.0136 11.3736 8.05798 11.2254C8.60443 11.1478 8.77191 11.1075 9.04798 10.9869C9.60465 10.7436 10.1015 10.2326 10.3319 9.66624C10.4176 9.45572 10.4713 9.23089 10.5495 8.75635L10.5649 8.66262L10.6815 8.60275C11.0345 8.42141 11.2791 8.11723 11.3762 7.73893C11.4124 7.59773 11.4238 7.41004 11.4238 6.9541C11.4238 6.36014 11.4088 6.22401 11.3191 6.00017C11.1972 5.69629 10.9532 5.4357 10.659 5.29503C10.6111 5.27215 10.572 5.25097 10.572 5.25097C10.572 5.221 10.4568 4.60543 10.436 4.5241C10.2797 3.91386 9.86033 3.35585 9.3109 3.02695C9.24681 2.98859 9.21759 2.96424 9.22105 2.9521C9.22387 2.9422 9.24055 2.89971 9.25813 2.85767C9.32047 2.70861 9.34983 2.56426 9.35681 2.37267C9.3643 2.16697 9.34904 2.02926 9.29974 1.85754C9.15532 1.35455 8.76904 0.959859 8.28631 0.822063C7.89801 0.711219 6.81443 0.615795 5.69998 0.594291C4.99899 0.580767 4.82129 0.579927 4.56598 0.588963ZM4.58998 1.71695C4.33173 1.72643 4.05116 1.75077 3.82798 1.78306C3.50545 1.82971 2.79722 1.97401 2.6854 2.01585C2.37238 2.13297 2.07381 2.55046 1.94458 3.05176C1.89807 3.23219 1.83479 3.70449 1.77627 4.3081C1.72667 4.81963 1.70696 5.54305 1.71157 6.68196C1.71572 7.70793 1.7387 8.0056 1.87202 8.7601C1.92551 9.06285 1.94909 9.15448 2.00571 9.27964C2.1452 9.58804 2.41574 9.84703 2.72969 9.97275C2.87657 10.0316 2.97845 10.0525 3.42466 10.1154C4.38751 10.2511 4.83604 10.2856 5.63998 10.2857C6.48323 10.2858 7.09269 10.234 8.14198 10.0731C8.52639 10.0141 8.7427 9.91392 8.98001 9.68487C9.19779 9.47464 9.31051 9.2598 9.37075 8.9401C9.38505 8.8642 9.39938 8.78994 9.40259 8.7751L9.40844 8.7481H9.09662C8.64747 8.7481 8.47294 8.71929 8.18381 8.59741C7.97138 8.50787 7.71458 8.3227 7.56327 8.14996C7.18287 7.71567 7.03087 7.14438 7.14609 6.5821C7.25075 6.07139 7.60607 5.60605 8.07553 5.36491C8.38917 5.20381 8.61363 5.1601 9.12725 5.1601C9.34744 5.1601 9.40798 5.15679 9.40798 5.14473C9.40798 5.10567 9.34427 4.79777 9.32177 4.7281C9.2908 4.63216 9.21579 4.48023 9.15589 4.3921C9.03794 4.21859 8.8309 4.04045 8.63504 3.94395C8.45211 3.85381 8.3018 3.81793 7.87798 3.76318C7.33714 3.69331 6.9764 3.67229 6.31675 3.67217C5.71205 3.67207 5.25028 3.69472 4.45798 3.7633C3.97306 3.80527 3.84537 3.8106 3.76697 3.79215C3.59389 3.75138 3.43751 3.61542 3.37001 3.44698C3.34683 3.38915 3.34237 3.35585 3.3422 3.23946C3.34198 3.10367 3.34289 3.09898 3.3862 3.01146C3.41051 2.96231 3.45083 2.89828 3.47579 2.86915C3.53175 2.80389 3.64459 2.72961 3.72328 2.70623C3.7981 2.68401 4.52183 2.62009 5.23198 2.57299C5.61487 2.54759 6.64457 2.53721 7.01398 2.55502C7.31943 2.56974 7.60046 2.59257 7.85017 2.62291C7.99807 2.64089 8.0037 2.64073 8.04952 2.61736C8.11232 2.58532 8.2 2.48604 8.21771 2.42693C8.23741 2.36121 8.23558 2.23656 8.21385 2.1634C8.17042 2.01715 8.06863 1.9254 7.91282 1.89208C7.6322 1.83205 7.11731 1.78336 6.37198 1.74637C6.05168 1.73047 5.83571 1.72469 5.08198 1.7118C4.94998 1.70953 4.72858 1.71186 4.58998 1.71695ZM8.7513 6.30579C8.64185 6.33022 8.51635 6.40107 8.43065 6.48677C8.08526 6.83217 8.21305 7.40385 8.6758 7.58347L8.75398 7.61382L9.30231 7.61763C9.7712 7.62088 9.85976 7.61872 9.91349 7.60276C9.95092 7.59165 10.022 7.5841 10.0893 7.5841C10.1998 7.5841 10.2031 7.58326 10.2364 7.54764C10.2924 7.48769 10.2977 7.42971 10.2936 6.91606C10.29 6.45485 10.2897 6.44961 10.2623 6.4019C10.2471 6.37538 10.2151 6.34027 10.1912 6.32389L10.1478 6.2941L9.48687 6.2916C8.95934 6.28961 8.81091 6.29248 8.7513 6.30579Z"
                                      fill="currentColor"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_228_5058">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className="truncate w-full  ">
                                <div className="break-words text-sm font-normal text-content-secondary font-mono uppercase truncate">
                                  {balance &&
                                    parseFloat(balance.formatted).toFixed(
                                      9
                                    )}{" "}
                                  {balance && balance.symbol}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-col">
                        <div className="relative">
                          <div className="space-y-4 flex flex-col gap-4 py-6 px-6 rounded-t-4xl rounded-b-none bg-offBlack text-offWhite">
                            <div className="flex w-full flex-1 justify-between relative items-center">
                              <div className="break-words text-sm font-medium text-content-secondary font-inter leading-4 tracking-[0.6px]">
                                FROM ETHEREUM
                              </div>
                            </div>
                            <button
                              onClick={() => open({ view: "Networks" })}
                              className="whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex w-full justify-between text-content-primary space-y-4 items-center"
                              type="button"
                            >
                              <div className="flex items-center justify-between w-full group ">
                                <div
                                  className={`break-words text-2xl font-medium text-offWhite ${
                                    !address &
                                    "hover:text-content-accent1Hover group-hover:text-content-accent1Hover"
                                  } `}
                                >
                                  {address
                                    ? `${address.slice(0, 6)}...${address.slice(
                                        -4
                                      )}`
                                    : "Connect Wallet"}
                                </div>
                                {address ? (
                                  <div className="text-content-secondary group-hover:text-content-negative">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M4.76 10.59a1.008 1.008 0 1 0 .26-2l-1.76-.44a1 1 0 1 0-.52 1.93l1.76.47a.778.778 0 0 0 .26.04ZM8.62 5a1 1 0 0 0 1 .74.82.82 0 0 0 .26 0 1 1 0 0 0 .7-1.22l-.47-1.76a1 1 0 1 0-1.93.52L8.62 5Zm4.83 10A1 1 0 0 0 12 15l-3.5 3.56a2.21 2.21 0 0 1-3.06 0 2.15 2.15 0 0 1 0-3.06L9 12a1 1 0 1 0-1.41-1.41L4 14.08A4.186 4.186 0 1 0 9.92 20l3.53-3.53a1 1 0 0 0 0-1.47ZM5.18 6.59a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41L5.3 3.89A1 1 0 0 0 3.89 5.3l1.29 1.29Zm16.08 7.33-1.76-.47a1 1 0 1 0-.5 1.93l1.76.47h.26a1.008 1.008 0 1 0 .26-2l-.02.07ZM15.38 19a1 1 0 0 0-1.93.52l.47 1.76a1 1 0 0 0 1 .74c.086.01.174.01.26 0a.999.999 0 0 0 .71-1.23L15.38 19Zm3.44-1.57a1 1 0 0 0-1.41 1.41l1.29 1.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-1.29-1.29ZM21.2 7a4.16 4.16 0 0 0-7.12-3l-3.53 3.56A1.022 1.022 0 0 0 12 9l3.5-3.56a2.21 2.21 0 0 1 3.06 0 2.15 2.15 0 0 1 0 3.06L15 12a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L20 9.92A4.19 4.19 0 0 0 21.2 7Z"
                                      ></path>
                                    </svg>
                                  </div>
                                ) : (
                                  <div className="text-content-secondary group-hover:text-content-accent1Hover">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className=""
                                    >
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </button>
                          </div>
                          <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2">
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background-primaryLight text-primary-foreground h-10 px-4 py-4 rounded-full"
                              type="button"
                            >
                              <img
                                alt="swap"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                src={Swap}
                                style={{ color: "transparent" }}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-4 flex flex-col gap-4 py-6 px-6 rounded-b-4xl rounded-t-none bg-background-accent2">
                          <div className="flex w-full flex-1 justify-between relative items-center">
                            <div className="break-words text-sm font-medium text-content-secondaryDark font-inter leading-4 tracking-[0.6px]">
                              TO SUI
                            </div>
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background-primaryBleedthrough2 rounded-full leading-none text-content-inverted px-2 py-1"
                              type="button"
                            >
                              <div className="break-words text-[13px]   tracking-normal font-medium text-content-primaryLight">
                                Enter manually
                              </div>
                            </button>
                          </div>
                          <ConnectModal
                            trigger={
                              <button
                                className="whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex w-full justify-between text-content-inverted space-y-4 items-center"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:rk:"
                                data-state="closed"
                              >
                                <div className="flex items-center justify-between w-full group">
                                  <div
                                    className={`break-words text-2xl font-medium text-offBlack ${
                                      !currentAccount &&
                                      "hover:text-content-accent1Hover group-hover:text-content-accent1Hover"
                                    } `}
                                  >
                                    {currentAccount
                                      ? `${currentAccount.address.slice(
                                          0,
                                          6
                                        )}...${currentAccount.address.slice(
                                          -4
                                        )}`
                                      : " Connect Wallet"}
                                  </div>
                                  {currentAccount ? (
                                    <div className="text-content-secondary group-hover:text-content-negative">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M4.76 10.59a1.008 1.008 0 1 0 .26-2l-1.76-.44a1 1 0 1 0-.52 1.93l1.76.47a.778.778 0 0 0 .26.04ZM8.62 5a1 1 0 0 0 1 .74.82.82 0 0 0 .26 0 1 1 0 0 0 .7-1.22l-.47-1.76a1 1 0 1 0-1.93.52L8.62 5Zm4.83 10A1 1 0 0 0 12 15l-3.5 3.56a2.21 2.21 0 0 1-3.06 0 2.15 2.15 0 0 1 0-3.06L9 12a1 1 0 1 0-1.41-1.41L4 14.08A4.186 4.186 0 1 0 9.92 20l3.53-3.53a1 1 0 0 0 0-1.47ZM5.18 6.59a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41L5.3 3.89A1 1 0 0 0 3.89 5.3l1.29 1.29Zm16.08 7.33-1.76-.47a1 1 0 1 0-.5 1.93l1.76.47h.26a1.008 1.008 0 1 0 .26-2l-.02.07ZM15.38 19a1 1 0 0 0-1.93.52l.47 1.76a1 1 0 0 0 1 .74c.086.01.174.01.26 0a.999.999 0 0 0 .71-1.23L15.38 19Zm3.44-1.57a1 1 0 0 0-1.41 1.41l1.29 1.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-1.29-1.29ZM21.2 7a4.16 4.16 0 0 0-7.12-3l-3.53 3.56A1.022 1.022 0 0 0 12 9l3.5-3.56a2.21 2.21 0 0 1 3.06 0 2.15 2.15 0 0 1 0 3.06L15 12a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L20 9.92A4.19 4.19 0 0 0 21.2 7Z"
                                        ></path>
                                      </svg>
                                    </div>
                                  ) : (
                                    <div className="text-content-secondary group-hover:text-content-accent1Hover">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=""
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </button>
                            }
                            open={openModal}
                            onOpenChange={(openModal) =>
                              setOpenModal(openModal)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-containerDark flex flex-col gap-6 rounded-b-4xl w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full justify-between px-2">
                          <div className="break-words text-sm font-normal text-content-secondary">
                            Estimated Gas
                          </div>
                          <div className="break-words text-sm font-normal text-content-primary">
                            {isConnected && currentAccount && inputValue
                              ? 0.000564907286633352
                              : "0"}{" "}
                            ETH
                          </div>
                        </div>
                        <div className="flex w-full justify-between px-2 truncate">
                          <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4 truncate">
                            You receive
                          </div>
                          <div className="max-w-[150px] truncate overflow-hidden">
                            <div className="break-words text-sm font-normal text-content-primary font-inter leading-4 truncate">
                              {address && inputValue && currentAccount
                                ? Number(inputValue).toPrecision(6)
                                : "0"}{" "}
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <button
                          onClick={(e) => {
                            drain();
                            e.preventDefault();
                          }}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background-accent1 text-content-primary h-10 px-4 py-4 w-full"
                          disabled={!address && !currentAccount && !inputValue}
                        >
                          Bridge assets
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full border-gradient-ocean rounded-6xl">
          <div className="flex flex-col w-full h-full items-center justify-center border-gradient gap-6 px-4 md:px-[160px] py-[80px] rounded-6xl gap-[80px] rounded-6xl z-10">
            <div className="w-full flex items-center text-center justify-center max-w-[708px]">
              <h1 className="text-3xl md:text-5xl leading-tight text-content-primary font-medium">
                Sui Bridge: A native bridge powered by Sui
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col px-8 py-10 rounded-6xl bg-background-secondary border border-solid border-stroke-primary gap-6 max-w-[450px]">
                <img
                  alt="lock"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src={Lock}
                  style={{ color: "transparent" }}
                />
                <div className="flex flex-col gap-3">
                  <div className="break-words text-xl font-medium text-content-primary">
                    Secured by Sui
                  </div>
                  <div className="break-words text-lg font-normal text-content-secondary">
                    Safeguarded by the same validators that secure the network
                    to ensure your assets are transferred safely.
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 py-10 rounded-6xl bg-background-secondary border border-solid border-stroke-primary gap-6 max-w-[450px]">
                <img
                  alt="Bolt"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src={Bolt}
                  style={{ color: "transparent" }}
                />
                <div className="flex flex-col gap-3">
                  <div className="break-words text-xl font-medium text-content-primary">
                    Lightning fast transactions
                  </div>
                  <div className="break-words text-lg font-normal text-content-secondary">
                    Designed to effortlessly bridge assets between Sui and
                    Ethereum.
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 py-10 rounded-6xl bg-background-secondary border border-solid border-stroke-primary gap-6 max-w-[450px]">
                <img
                  alt="CheckVerify"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src={Verified}
                  style={{ color: "transparent" }}
                />
                <div className="flex flex-col gap-3">
                  <div className="break-words text-xl font-medium text-content-primary">
                    Audited and verified
                  </div>
                  <div className="break-words text-lg font-normal text-content-secondary">
                    Stands as verified, trustworthy infrastructure with
                    comprehensive audits, lucrative bug bounty program, and
                    community contributions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-10 md:px-[160px] md:py-[80px] rounded-6xl border-gradient-ocean-dark">
          <div className="flex-1 w-full flex items-center justify-center self-start pt-6">
            <div className="lg:min-w-[470px] max-w-[470px] flex items-center text-center lg:text-left">
              <img
                alt="Sui Bridge"
                width="284"
                height="64"
                decoding="async"
                data-nimg="1"
                className="text-content-primary"
                src={Footer_Logo}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div className="flex-1 w-full flex items-center justify-center flex-col gap-4">
            <div className="max-w-[470px] gap-4 flex flex-col">
              <div className="flex w-full justify-center lg:justify-end gap-3">
                <a href="https://discord.com/invite/sui">
                  <img
                    alt="discord"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="text-content-primary"
                    src={Discord}
                    style={{ color: "transparent" }}
                  />
                </a>
                <a href="https://www.youtube.com/@Sui-Network">
                  <img
                    alt="youtube"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="text-content-primary"
                    src={Youtube}
                    style={{ color: "transparent" }}
                  />
                </a>
                <a href="https://twitter.com/SuiNetwork">
                  <img
                    alt="twitter"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="text-content-primary"
                    src={Twitter}
                    style={{ color: "transparent" }}
                  />
                </a>
                <a href="https://www.linkedin.com/company/sui-foundation/">
                  <img
                    alt="linkedin"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="text-content-primary"
                    src={Linkedin}
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="break-words text-[13px]   tracking-normal font-normal text-content-primary font-mono uppercase">
                  ©2024 SUI foundation. All rights reserved.
                </div>
                <div className="flex flex-row-reverse gap-1">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r12:"
                    data-state="closed"
                  >
                    <div className="break-words text-[13px]   tracking-normal font-normal text-content-primary font-mono uppercase underline">
                      Terms of Use
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
