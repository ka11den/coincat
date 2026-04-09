"use client";

import Link from "next/link";

export function Footer() {
  const navigation = {
    product: {
      title: "Product",
      links: [
        { name: "Cryptocurrencies", href: "/cryptocurrencies" },
        { name: "Categories", href: "/categories" },
        { name: "NFT", href: "/nft" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Articles", href: "/articles" },
        { name: "Guides", href: "/guides" },
        { name: "Glossary", href: "/glossary" },
      ],
    },
  };

  return (
    <footer className="relative mt-auto border-t border-border bg-surface">
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-4"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:scale-105"
              >
                <path
                  d="M37.9876 18.3007C37.9808 18.1203 37.9712 17.9399 37.9603 17.761V17.7542C37.8318 15.7774 37.4016 13.884 36.7145 12.1176V12.1161C36.5395 11.664 36.3469 11.2213 36.138 10.787C35.5738 10.873 35.048 11.0819 34.5915 11.3854C34.3743 11.5275 34.1722 11.6927 33.9889 11.8758C33.538 11.6094 33.0586 11.3854 32.5572 11.2091C31.7007 10.9059 30.7798 10.7419 29.8194 10.7419C29.575 10.7419 29.3317 10.7528 29.0926 10.7748C29.0653 10.7762 29.0365 10.7789 29.0092 10.7816C28.5707 10.1681 28.0776 9.59577 27.5365 9.07391C26.2359 9.58749 25.2785 10.7843 25.1088 12.2229C23.6839 13.2188 22.5897 14.6545 22.0213 16.3334C21.9845 16.5425 21.9243 16.7405 21.8451 16.9264C21.4188 17.936 20.4202 18.6436 19.255 18.6436C19.1758 18.6436 19.0978 18.6409 19.0213 18.6326C19.1156 20.0437 19.5293 21.3658 20.1891 22.531C19.0079 22.146 17.7503 21.9386 16.4422 21.9386C13.3137 21.9386 10.4626 23.1271 8.31646 25.0766C6.98171 23.0793 6.2044 20.6791 6.2044 18.0984C6.2044 11.1531 11.8356 5.52327 18.781 5.52327C19.8356 5.52327 20.8589 5.65317 21.837 5.8989C21.9818 5.93303 22.1266 5.97274 22.2699 6.01369C22.4352 6.04513 22.6061 6.06148 22.7808 6.06148C24.334 6.06148 25.5937 4.80326 25.5937 3.25009C25.5937 1.9987 24.7767 0.938644 23.6469 0.572535C23.6454 0.572535 23.6454 0.572535 23.6442 0.572535C23.5158 0.541096 23.3887 0.509656 23.2603 0.479664C23.2576 0.476975 23.2549 0.476975 23.2508 0.476975C21.8838 0.165473 20.4617 0 19 0C8.50696 0 0 8.50675 0 19C0 23.754 1.74739 28.1039 4.63531 31.4357C8.11892 35.4561 13.2622 38 19 38C22.4358 38 25.6599 37.0874 28.4413 35.4918C33.7627 32.4393 37.4637 26.8833 37.9444 20.4311C37.9568 20.3354 37.9659 20.2406 37.9659 20.149C37.989 19.7678 38 19.3853 38 19C38 18.7665 37.9959 18.5327 37.9876 18.3007Z"
                  fill="currentColor"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M37.9656 20.149C37.5735 26.7214 33.84 32.3949 28.441 35.4919C25.6596 37.0875 22.4356 38 18.9998 38C13.262 38 8.11869 35.4563 4.63507 31.4359C5.17886 28.94 6.49292 26.7338 8.31664 25.0766C10.4628 23.1271 13.3139 21.9386 16.4424 21.9386C17.7511 21.9386 19.0093 22.1463 20.191 22.5314C20.2615 22.5314 20.6841 23.3102 20.7546 23.4072C20.9666 23.6989 21.1958 23.9781 21.4403 24.2431C21.9297 24.773 22.4811 25.2452 23.0801 25.6469C25.8675 27.5163 29.7503 27.6841 32.8674 26.6118C33.9428 26.242 34.948 25.5077 35.7359 24.6929C36.932 23.456 37.7218 21.8526 37.9656 20.149Z"
                  fill="white"
                />
                <path
                  d="M25.5943 3.25025C25.5943 4.80363 24.3346 6.06163 22.7815 6.06163C22.6067 6.06163 22.4358 6.04529 22.2706 6.01385C22.127 5.9729 21.9824 5.93319 21.8374 5.89906C20.8593 5.65312 19.836 5.52343 18.7814 5.52343C11.8361 5.52343 6.20482 11.1532 6.20482 18.0985C6.20482 20.6791 6.98212 23.0795 8.31687 25.0767C6.49315 26.7337 5.17889 28.9401 4.63531 31.4361C1.74739 28.1041 0 23.7544 0 19.0004C0 8.50732 8.50675 0.000366211 19 0.000366211C20.4617 0.000366211 21.8838 0.165632 23.2514 0.477135C23.2555 0.477135 23.2582 0.477135 23.2609 0.479824C23.3894 0.509816 23.5164 0.541255 23.6448 0.572695C23.6463 0.572695 23.6463 0.572695 23.6475 0.572695C24.7773 0.938803 25.5943 1.99886 25.5943 3.25025Z"
                  fill="white"
                />
                <path
                  d="M37.9603 17.7542C37.7785 16.537 37.3319 15.4072 36.6789 14.4249C36.6789 14.4235 36.6775 14.4222 36.6775 14.4208C36.5244 14.1899 36.3591 13.9686 36.1844 13.7556C35.5709 13.007 34.8277 12.3689 33.989 11.8758C34.172 11.6927 34.3743 11.5275 34.5915 11.3854C35.0478 11.0822 35.5738 10.873 36.138 10.787C36.3469 11.2214 36.5397 11.664 36.7145 12.1161V12.1176C37.4016 13.884 37.8318 15.7774 37.9603 17.7542Z"
                  fill="white"
                />
              </svg>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-primary">
                  CoinCat
                </h2>
                <p className="text-[10px] text-text-secondary -mt-0.5">
                  crypto explorer
                </p>
              </div>
            </Link>
          </div>

          {Object.values(navigation).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-active transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative my-8 w-full border-t border-border"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary">CoinCat. Pet project.</div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>Live Data</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Real-time updates</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
