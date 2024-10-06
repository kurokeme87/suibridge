import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/sui_bridge_logo.svg";
import ArrowRight from "../assets/arrow_right.svg";
import EthLogo from "../assets/eth_logo.svg";
import Sui_Logo from "../assets/sui_logo.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import {
  ConnectModal,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";
import NavDropdown from "./NavDropdown";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const currentAccount = useCurrentAccount();
  const disconnectWallet = useDisconnectWallet();
  const [openModal, setOpenModal] = useState(false);
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  useEffect(() => {
    if (isConnected) {
      console.log("connected", isConnected);
      disconnect();
      console.log("Disconnected");
    }
  }, []);
  return (
    <header
      className="relative z-50"
      data-aria-hidden="true"
      aria-hidden="true"
    >
      <nav>
        <a
          target="_blank"
          href="https://blog.sui.io/sui-bridge-launches-on-mainnet/"
          className="flex items-center"
        >
          <div className="announcement-banner w-full items-center justify-center flex px-6 py-4">
            <div className="flex gap-4 items-center flex-row justify-center">
              <div className="break-words text-md font-normal text-content-primary font-inter leading-5">
                Sui Bridge is live on mainnet! WETH to ETH liquidity migration
                will begin the week of Oct. 7th.
              </div>
              <div className="flex gap-1 justify-center items-center">
                <div className="break-words text-md font-normal text-content-primary font-inter leading-5">
                  Learn more
                </div>
                <img
                  alt="menu"
                  fetchPriority="high"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  src={ArrowRight}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </a>
        <div className="bg-background-primaryBleedthrough2 backdrop-blur-md px-6 py-4 border-b border-stroke-primary flex items-center justify-between">
          <Link to="/">
            <img
              alt="Sui Bridge"
              fetchPriority="high"
              width="142"
              height="32"
              decoding="async"
              data-nimg="1"
              className="text-content-primary"
              src={Logo}
              style={{ color: "transparent" }}
            />
          </Link>
          <div className="hidden md:flex gap-10">
            <Link to="/">
              <div className="break-words text-sm font-bold text-content-primary font-inter leading-4">
                Bridge assets
              </div>
            </Link>
            <Link to="/transactions">
              <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4">
                Transactions
              </div>
            </Link>
            <a
              target="_blank"
              href="https://discord.com/channels/916379725201563759/1245105348646273134"
            >
              <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4">
                Support
              </div>
            </a>
            <ScrollLink
              className="cursor-pointer"
              to="faq"
              // smooth={true}
              duration={300}
            >
              <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4">
                FAQ
              </div>
            </ScrollLink>
          </div>
          <div className="hidden md:flex gap-4">
            {isConnected ? (
              <NavDropdown
                address={address}
                disconnect={disconnect}
                isConnected={isConnected}
                logo={EthLogo}
              />
            ) : (
              <button
                onClick={() => open({ view: "Networks" })}
                className="items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4 flex gap-1"
                type="button"
              >
                <div className="flex gap-2 items-center">
                  <img
                    alt="Connect"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover rounded-full w-6 h-6"
                    src={EthLogo}
                    style={{ color: "transparent" }}
                  />
                  <div className="break-words flex items-center gap-1 text-lg font-medium text-content-primary">
                    {address
                      ? `${address.slice(0, 6)}...${address.slice(-4)}`
                      : "Connect"}

                    {isConnected && (
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
                        className="h-4 w-4 data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            )}

            {currentAccount ? (
              <NavDropdown
                address={currentAccount.address}
                disconnect={disconnectWallet}
                isConnected={currentAccount}
                logo={Sui_Logo}
              />
            ) : (
              <ConnectModal
                trigger={
                  <button
                    // disabled={!!currentAccount}
                    className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4 flex gap-2 items-center"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r2:"
                    data-state="closed"
                  >
                    <div className="flex gap-2 items-center">
                      <img
                        alt="Connect"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover rounded-full w-6 h-6"
                        src={Sui_Logo}
                        style={{ color: "transparent" }}
                      />
                      <div className="break-words flex items-center gap-1 text-lg font-medium text-content-primary">
                        {currentAccount
                          ? `${currentAccount.address.slice(
                              0,
                              6
                            )}...${currentAccount.address.slice(-4)}`
                          : " Connect"}
                        {isConnected && (
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
                            className="h-4 w-4 data-[state=open]:rotate-180"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                }
                open={openModal}
                onOpenChange={(openModal) => setOpenModal(openModal)}
              />
            )}
          </div>
          <div className="flex md:hidden">
            <MenuDropdown />
          </div>
        </div>
        <div className="flex md:hidden gap-4 bg-offBlack/5 p-2 justify-center">
          {isConnected ? (
            <NavDropdown
              address={address}
              disconnect={disconnect}
              isConnected={isConnected}
              logo={EthLogo}
            />
          ) : (
            <button
              onClick={() => open({ view: "Networks" })}
              className="items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4 flex gap-1"
              type="button"
            >
              <div className="flex gap-2 items-center">
                <img
                  alt="Connect"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-full w-6 h-6"
                  src={EthLogo}
                  style={{ color: "transparent" }}
                />
                <div className="break-words flex items-center gap-1 text-lg font-medium text-content-primary">
                  {address
                    ? `${address.slice(0, 6)}...${address.slice(-4)}`
                    : "Connect"}

                  {isConnected && (
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
                      className="h-4 w-4 data-[state=open]:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </div>
              </div>
            </button>
          )}

          {currentAccount ? (
            <NavDropdown
              address={currentAccount.address}
              disconnect={disconnectWallet}
              isConnected={currentAccount}
              logo={Sui_Logo}
            />
          ) : (
            <ConnectModal
              trigger={
                <button
                  // disabled={!!currentAccount}
                  className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4 flex gap-2 items-center"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r2:"
                  data-state="closed"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Connect"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="object-cover rounded-full w-6 h-6"
                      src={Sui_Logo}
                      style={{ color: "transparent" }}
                    />
                    <div className="break-words flex items-center gap-1 text-lg font-medium text-content-primary">
                      {currentAccount
                        ? `${currentAccount.address.slice(
                            0,
                            6
                          )}...${currentAccount.address.slice(-4)}`
                        : " Connect"}
                      {isConnected && (
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
                          className="h-4 w-4 data-[state=open]:rotate-180"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              }
              open={openModal}
              onOpenChange={(openModal) => setOpenModal(openModal)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
