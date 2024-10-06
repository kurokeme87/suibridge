import { useAccount } from "wagmi";
import { useCurrentAccount } from "@mysten/dapp-kit";
import EthLogo from "../assets/eth_logo.svg";
import Sui_Logo from "../assets/sui_logo.svg";
import History from "../assets/history.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "../lib/utils";
const Transactions = () => {
  const currentAccount = useCurrentAccount();
  const { isConnected, address } = useAccount();
  const [activeTab, setActiveTab] = useState("eth");
  return (
    <main className="p-2">
      <div className="flex items-center justify-center">
        {!isConnected && !currentAccount ? (
          <div className="rounded-5xl rounded-6xl backdrop-blur-xl bg-background-secondary p-4 md:p-10 xl:mx-[10%] w-[708px] border-gradient my-[80px]">
            <div className="">
              <div className="rounded-5xl text-card-foreground">
                <div className="flex flex-col gap-6 items-center justify-center">
                  <div className="flex flex-col gap-10 items-center justify-center">
                    <h3 className="text-3xl font-normal leading-none tracking-tighter text-content-primary text-center">
                      Connect your wallet to view past transactions
                    </h3>
                    <div className="break-words text-md font-normal text-content-secondary text-center font-inter leading-4">
                      Historical transactions are linked to the wallet that
                      initiated the transfers. Connect the source wallet of the
                      transactions that you would like to view.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <main className="p-2 font-everett">
            <div className="border-gradient-ocean flex flex-col w-full items-center justify-center rounded-6xl">
              <div className="mx-[15%] xl:mx-[10%] my-[80px] w-[90%] md:w-[708px] flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
                  <div className="break-words font-everett text-2xl font-semibold text-content-primary">
                    <p>Transactions (0)</p>
                  </div>
                  <div className="flex gap-2 rounded-full border border-stroke-primary p-1 bg-background-primary">
                    <div>
                      <Link to="#">
                        <div
                          onClick={() => {
                            setActiveTab("eth");
                            console.log(activeTab);
                          }}
                          className={cn(
                            "flex py-2.5 px-3 rounded-full gap-2 ",
                            activeTab === "eth" &&
                              " border border-solid border-stroke-primary bg-background-secondary"
                          )}
                        >
                          <img
                            alt="chain"
                            width="16"
                            height="16"
                            decoding="async"
                            data-nimg="1"
                            src={EthLogo}
                            style={{ color: "transparent" }}
                          />
                          <div className="break-words text-xs font-bold text-content-primary font-inter leading-4">
                            {address.slice(0, 6)}...{address.slice(-4)}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link to="#">
                        <div
                          onClick={() => {
                            setActiveTab("sui");
                            console.log(activeTab);
                          }}
                          className={cn(
                            "flex py-2.5 px-3 rounded-full gap-2 ",
                            activeTab === "sui" &&
                              " border border-solid border-stroke-primary bg-background-secondary"
                          )}
                        >
                          <img
                            alt="chain"
                            width="16"
                            height="16"
                            decoding="async"
                            data-nimg="1"
                            src={Sui_Logo}
                            style={{ color: "transparent" }}
                          />
                          <div className="break-words text-xs font-bold text-content-secondary font-inter leading-4">
                            {currentAccount.address.slice(0, 6)}...
                            {currentAccount.address.slice(-4)}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="rounded-5xl rounded-6xl backdrop-blur-xl bg-background-secondary p-4 md:p-10 flex flex-col text-center items-center border-gradient gap-4">
                    <div className="flex flex-col space-y-1.5 p-0">
                      <div className="bg-lightBlue/40 rounded-full p-2">
                        <img
                          alt="History"
                          loading="lazy"
                          width="32"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          src={History}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="break-words text-base font-medium text-content-primary">
                        Complete your first bridge transaction to view history
                      </div>
                      <div className="break-words text-md font-normal text-content-secondary">
                        The selected wallet is not associated with any prior
                        SuiBridge transactions. Historical transactions are
                        linked to the wallet that initiated the transfers. If
                        you have used SuiBridge before, please be sure you have
                        connected and selected the correct wallet.
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <Link className="bg-sui px-3 py-2.5 rounded-lg" to="/">
                          <div className="break-words text-xs font-medium text-offWhite">
                            Bridge assets
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center"></div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </main>
  );
};

export default Transactions;
