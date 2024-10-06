import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const NavDropdown = ({ address, disconnect, isConnected, logo }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
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
              src={logo}
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-transparent border-none hover:bg-transparent">
        <DropdownMenuItem>
          <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-5xl bg-background-primary p-2 transition-all placeholder:text-content-primary-inactive border border-stroke-primary focus:pl-16 focus:outline-none focus:placeholder:text-transparent md:w-[372px]">
            <div
              role="menuitem"
              className="relative focus:outline-none focus:placeholder:text-transparent"
              tabIndex="-1"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <div
                className="overflow-hidden"
                style={{
                  opacity: 1,
                  height: "auto",
                  overflow: "hidden",
                  willChange: "opacity",
                }}
              >
                <div className="relative flex h-full flex-col gap-2 overflow-hidden border border-stroke-primary rounded-[20px] p-4 transition-colors focus:outline-none w-full bg-background-secondary">
                  <div className="relative z-20 mb-2 flex cursor-pointer items-center justify-between rounded-6xl focus:outline-none w-full">
                    <div className="relative flex items-center justify-start gap-3">
                      <div className="relative h-[40px] w-[40px]">
                        <img
                          alt="avatar"
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-full"
                          src={logo}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 whitespace-nowrap text-start">
                        <div className="break-words text-md font-bold text-content-primary font-inter leading-5 max-w-[200px]">
                          {address && address.slice(0, 6)}...{address.slice(-4)}
                        </div>
                      </div>
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
                      className="relative h-4 w-4 text-content-primary"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                  <div className="relative z-20 flex flex-col items-start gap-2">
                    <div className="flex w-full flex-1 gap-[10px]">
                      <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex justify-center h-[68px] rounded-3xl border border-stroke-primary py-2 px-4 transition ease-in-out hover:border-transparent hover:bg-background-secondaryHover flex-col gap-1 items-center group w-[107px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 16 16"
                          className="h-4 w-4 text-content-primary"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12.421 1.008c-.775.06-1.592.477-2.575 1.315-.212.182-.311.306-.347.434-.03.107-.04.263-.027.368A.77.77 0 0 0 10 3.72c.117.032.32.032.434-.001.114-.033.19-.085.443-.297.472-.397.904-.679 1.248-.813.252-.098.543-.127.744-.074.21.055.449.21.657.426.206.213.331.415.383.613.03.118.031.35.002.488-.087.402-.377.892-.895 1.512-.195.233-.261.353-.284.516a.745.745 0 0 0 .428.783c.123.061.125.061.317.061.176 0 .2-.003.285-.043.154-.072.23-.138.425-.372.688-.825 1.056-1.487 1.205-2.171.05-.227.054-.809.008-1.022-.119-.54-.38-.996-.834-1.449a3.118 3.118 0 0 0-.823-.613 2.54 2.54 0 0 0-1.322-.256ZM5.077 3.6c-.845.03-1.404.067-1.629.11a2.682 2.682 0 0 0-1.452.796c-.37.388-.633.894-.734 1.42-.034.179-.14 1.183-.184 1.736a22.229 22.229 0 0 0 .032 4.073c.12 1.333.164 1.572.37 2.007.33.7.935 1.238 1.653 1.473.318.104.52.13 1.296.167 1.61.078 3.378.078 4.992 0 .584-.028.8-.047 1-.088 1.05-.215 1.903-1.054 2.152-2.12.051-.218.131-.935.2-1.784.07-.866.068-.911-.031-1.113-.265-.539-1.048-.547-1.332-.013-.067.126-.079.186-.1.51-.049.745-.168 1.927-.21 2.097-.115.449-.483.824-.92.936-.134.034-.465.058-1.35.099-.62.028-3.19.028-3.809 0-.88-.04-1.217-.065-1.348-.099-.465-.119-.848-.536-.94-1.022-.016-.09-.094-.833-.135-1.29-.126-1.42-.123-2.61.008-4.04.087-.945.117-1.195.16-1.36.125-.46.534-.839.983-.911.165-.026.838-.062 1.534-.082.336-.009.657-.024.713-.033a.738.738 0 0 0 .606-.79.521.521 0 0 0-.066-.27.868.868 0 0 0-.315-.335c-.163-.095-.296-.104-1.144-.074Zm6.68.13a.811.811 0 0 0-.184.095c-.044.033-.588.57-1.21 1.192-1.197 1.2-1.186 1.188-1.24 1.39a.799.799 0 0 0 .07.551.757.757 0 0 0 1.004.3c.083-.04.25-.2 1.222-1.17a49.414 49.414 0 0 0 1.196-1.215.69.69 0 0 0 .134-.435.726.726 0 0 0-.357-.643.804.804 0 0 0-.635-.064Zm-3.513.365c-.21.037-.329.123-.57.41-.694.832-1.08 1.533-1.214 2.205-.053.268-.06.647-.017.898.063.369.201.712.416 1.032.13.193.208.288.4.485.459.47.955.755 1.515.868.112.023.214.03.463.028.283 0 .344-.005.52-.043.706-.15 1.448-.572 2.298-1.31.228-.197.316-.346.336-.57a.748.748 0 0 0-.852-.807c-.173.024-.282.085-.55.309-.604.504-1.02.76-1.434.88-.167.05-.464.054-.598.01-.213-.072-.368-.173-.581-.379-.297-.287-.437-.544-.454-.834-.03-.47.268-1.05.956-1.865.19-.226.256-.375.255-.578a.974.974 0 0 0-.074-.328.82.82 0 0 0-.426-.377.893.893 0 0 0-.39-.034Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <div className="break-words text-xs font-semibold text-content-secondary group-hover:text-content-primary">
                          Copy
                        </div>
                      </button>
                      <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex justify-center h-[68px] rounded-3xl border border-stroke-primary py-2 px-4 transition ease-in-out hover:border-transparent hover:bg-background-secondaryHover flex-col gap-1 items-center group w-[107px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-content-primary"
                        >
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                        <div className="break-words text-xs font-semibold text-content-secondary group-hover:text-content-primary">
                          Explorer
                        </div>
                      </button>
                      <button
                        onClick={() => disconnect()}
                        className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex justify-center h-[68px] rounded-3xl border border-stroke-primary py-2 px-4 transition ease-in-out hover:border-transparent hover:bg-background-secondaryHover flex-col gap-1 items-center group w-[107px]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 16 16"
                          className="h-4 w-4 text-content-primary"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.75 4.5h10.5M12.083 4.5v8.167a1.166 1.166 0 0 1-1.166 1.166H5.083a1.167 1.167 0 0 1-1.166-1.166V4.5m1.75 0V3.333a1.167 1.167 0 0 1 1.166-1.166h2.334a1.167 1.167 0 0 1 1.166 1.166V4.5"
                          ></path>
                        </svg>
                        <div className="break-words text-xs font-semibold text-content-secondary group-hover:text-content-primary">
                          Disconnect
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
