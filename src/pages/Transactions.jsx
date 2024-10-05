import React from "react";

const Transactions = () => {
  return (
    <main className="p-2">
      <div className="flex items-center justify-center">
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
      </div>
    </main>
  );
};

export default Transactions;
