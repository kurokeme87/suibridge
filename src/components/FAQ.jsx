import React from "react";
// import Plus from '../assets/'
import { useState } from "react";
import Open from "../assets/open.svg";
import Close from "../assets/close.svg";
const FAQ = () => {
  const faqData = [
    {
      question: "What is a native bridge?",
      answer:
        "A bridge typically refers to a specialized protocol designed to seamlessly facilitate the transfer of assets between two different blockchain networks. Unlike third-party solutions, a native bridge is typically built into the core architecture of a blockchain, ensuring optimal integration and operation. It allows users to move digital assets from one chain to another, preserving security and maintaining interoperability between diverse ecosystems.",
    },
    {
      question: "What is Sui Bridge?",
      answer:
        "Sui Bridge is a cutting-edge native bridge on Sui, designed to enhance interoperability between Sui and Ethereum. It enables users to securely and efficiently transfer native and wrapped ETH to and from Sui. The bridge leverages the unique capabilities of the Sui network to offer fast transaction speeds, lower transaction costs, and a decentralized architecture.",
    },
    {
      question: "Who operates the Sui Bridge?",
      answer:
        "The Sui Bridge is operated by a decentralized network of validators who ensure the security and proper functioning of the bridge.",
    },
    {
      question: "How is the Sui Bridge secured?",
      answer:
        "Sui Bridge is secured through a combination of cryptographic proofs, multi-signature schemes, and a network of validators who monitor and verify transactions.",
    },
    {
      question: "What chains and assets does Sui Bridge Support?",
      answer:
        "Sui Bridge currently supports transfers between Sui and Ethereum, with plans to expand to other major blockchain networks. Supported assets include SUI, ETH, and various ERC-20 tokens.",
    },
    {
      question: "How long does it take to bridge assets?",
      answer:
        "The bridging process typically takes 10-30 minutes, depending on network congestion and the specific chains involved.",
    },
    {
      question: "What is the limiter?",
      answer:
        "The limiter is a safety mechanism that restricts the total value of assets that can be transferred through the bridge within a given time period to mitigate potential risks.",
    },
    {
      question: "Are there any fees associated with asset bridging?",
      answer:
        "Yes, there are fees associated with bridging assets. These include network gas fees on both the source and destination chains, as well as a small bridge usage fee.",
    },
    {
      question: "Is there a minimum or maximum limit for asset bridging?",
      answer:
        "Yes, there are minimum and maximum limits for asset bridging. The exact limits vary depending on the asset and current bridge utilization. Please check the bridge interface for current limits.",
    },
    {
      question: "Is there a global transaction maximum on the platform?",
      answer:
        "Yes, there is a global transaction maximum that limits the total value of assets that can be bridged within a certain timeframe. This is part of our security measures.",
    },
    {
      question: "How can I contact Support?",
      answer:
        "You can contact our support team through our official Discord channel or by submitting a ticket on our support website. We aim to respond to all inquiries within 24-48 hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:px-[160px] py-10">
      <div className="flex-1 w-full flex items-center justify-center self-start pt-6">
        <div className="lg:min-w-[470px] max-w-[470px] flex items-center text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl leading-tight text-content-primary">
            FAQ
          </h1>
        </div>
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="max-w-[470px]">
          <div id="faq" className="p-1 flex flex-col flex-1 w-full">
            {faqData.map((item, index) => (
              <div
                key={index}
                data-state="closed"
                className="text-left py-6 border-stroke-primary w-full border-b"
              >
                <button
                  onClick={() => {
                    toggleAnswer(index);
                    console.log(index, activeIndex);
                  }}
                  type="button"
                  aria-controls={`radix-:r${index}:`}
                  aria-expanded="false"
                  data-state="closed"
                  className="text-left w-full"
                >
                  <div className="flex justify-between gap-6">
                    <div className="break-words  font-normal text-[26px] text-content-primary">
                      {item.question}
                    </div>
                    <div className="flex min-w-[32px] w-[32px] min-h-[32px] max-h-[32px] items-center">
                      <div className="p-2 rounded-full bg-background-tertiary">
                        <img
                          alt="open"
                          loading="lazy"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          src={activeIndex === index ? Close : Open}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </button>
                {activeIndex === index && (
                  <div
                    data-state="closed"
                    id={`radix-:r${index}:`}
                    hidden=""
                    className="flex flex-col"
                    style={{ "--radix-collapsible-content-width": "462px" }}
                  >
                    <p className="mt-4 text-lg text-content-secondary">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
