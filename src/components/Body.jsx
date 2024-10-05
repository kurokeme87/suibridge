import Link from "../assets/link.svg";
import ArrowRight from "../assets/arrow_right.svg";
import EthLogo from "../assets/eth_logo.svg";
import Swap from "../assets/swap.svg";
import Footer_Logo from "../assets/sui_bridge_logo.svg";
import Sui_Logo from "../assets/sui_logo.svg";
import Close from "../assets/close.svg";
import Bolt from "../assets/bolt.svg";
import Lock from "../assets/lock.svg";
import Verified from "../assets/verified.svg";
import Youtube from "../assets/youtube.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Linkedin from "../assets/linkedin.svg";
import FAQ from "./FAQ";

const Body = () => {
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
                                  className="h-10 bg-transparent text-[49px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-content-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden font-mono w-full text-content-primary"
                                  placeholder="0.00"
                                  id=":rh:-form-item"
                                  aria-describedby=":rh:-form-item-description"
                                  aria-invalid="false"
                                  type="number"
                                />
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
                              className="whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex w-full justify-between text-content-primary space-y-4 items-center"
                              type="button"
                            >
                              <div className="flex items-center justify-between w-full group ">
                                <div className="break-words text-2xl font-medium text-offWhite hover:text-content-accent1Hover group-hover:text-content-accent1Hover">
                                  Connect wallet
                                </div>
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
                          <button
                            className="whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex w-full justify-between text-content-inverted space-y-4 items-center"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rk:"
                            data-state="closed"
                          >
                            <div className="flex items-center justify-between w-full group">
                              <div className="break-words text-2xl font-medium text-offBlack hover:text-content-accent1Hover group-hover:text-content-accent1Hover">
                                Connect wallet
                              </div>
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
                                  className="lucide lucide-arrow-right"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
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
                            - ETH
                          </div>
                        </div>
                        <div className="flex w-full justify-between px-2 truncate">
                          <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4 truncate">
                            You receive
                          </div>
                          <div className="max-w-[150px] truncate overflow-hidden">
                            <div className="break-words text-sm font-normal text-content-primary font-inter leading-4 truncate">
                              0 ETH
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background-accent1 text-content-primary h-10 px-4 py-4 w-full"
                          type="submit"
                          disabled
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
