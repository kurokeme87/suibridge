import { Link } from "react-router-dom";
import Logo from "../assets/sui_bridge_logo.svg";
import ArrowRight from "../assets/arrow_right.svg";
import EthLogo from "../assets/eth_logo.svg";
import Sui_Logo from "../assets/sui_logo.svg";
const Navbar = () => {
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
            <a href="/#faq">
              <div className="break-words text-sm font-normal text-content-secondary font-inter leading-4">
                FAQ
              </div>
            </a>
          </div>
          <div className="hidden md:flex gap-4">
            <button
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
                <div className="break-words text-lg font-medium text-content-primary">
                  Connect
                </div>
              </div>
            </button>
            <button
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
                <div className="break-words text-lg font-medium text-content-primary">
                  Connect
                </div>
              </div>
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              id="radix-:r5:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <img
                alt="menu"
                fetchPriority="high"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src={Sui_Logo}
                style={{ color: "transparent" }}
              />
            </button>
          </div>
        </div>
        <div className="flex md:hidden gap-4 bg-offBlack/5 p-2 justify-center">
          <button
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
              <div className="break-words text-lg font-medium text-content-primary">
                Connect
              </div>
            </div>
          </button>
          <button
            className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-stroke-primary hover:bg-background-tertiaryHover text-content-primary h-10 px-4 py-4 flex gap-2 items-center"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r9:"
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
              <div className="break-words text-lg font-medium text-content-primary">
                Connect
              </div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
