import Link from "next/link";
import MenuIcons from "./MenuIcons";
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigation = [
    "Vitamins & Supplements",
    "Food & Drink",
    "Sports Nutrition",
    "Gut Health Hub",
    "Beauty",
    "CBD",
    "Weight Management",
    "Offers",
    "Wellness Needs",
    "Outlet",
    "The Health Hub",
  ];

  useEffect(() => {
    let scrollpos = window.scrollY;

    const header = document.querySelector("nav");
    const scrollChange = 1;

    const add_class_on_scroll = () => header.classList.add("bg-white");
    const remove_class_on_scroll = () => header.classList.remove("bg-white");

    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) {
        add_class_on_scroll();
        setIsScrolled(true);
      } else {
        remove_class_on_scroll();
        setIsScrolled(false);
      }
    });
  }, []);

  // setTimeout(() => {
  //   setShowPopup(false);
  // }, 5000);

  return (
    <>
      <div className="w-full">
        <nav className="fixed top-0 z-50 p-5 w-full">
          <div className="container mx-auto">
            {/* Logo */}
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full">
                    <Link href="/">
                      <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                        <span>
                          <img src="/img/logo.svg" alt="logo" width="200" />
                        </span>
                      </a>
                    </Link>

                    <form
                      className="rounded-lg p-2.5 bg-white flex max-w-xs w-full mx-auto hidden md:flex"
                      style={{ border: "1px solid #ffedea" }}
                    >
                      <input
                        type="search"
                        name="query"
                        className="bg-white w-full	"
                        placeholder="Search products, brands, articles"
                        value=""
                      />
                      <button type="submit" disabled="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 11a7 7 0 1 1 12.041 4.856 1.01 1.01 0 0 0-.184.185A7 7 0 0 1 4 11Zm12.618 7.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 1 1-1.414 1.414l-3.675-3.675Z"
                            fill="#00594C"
                          ></path>
                        </svg>
                      </button>
                    </form>

                    <div className="flex items-center gap-3 hidden md:flex">
                      <div
                        className="flex items-center flex-col text-xs font-semibold "
                        style={{
                          color: !isScrolled ? "white" : "#00594c",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPopup(true)}
                      >
                        <img
                          src={
                            !isScrolled
                              ? "https://images.hollandandbarrettimages.co.uk/header/account2021.svg"
                              : "https://images.hollandandbarrettimages.co.uk/header/header-icon-green/account.svg"
                          }
                          alt=""
                          width="20"
                          height="20"
                          decoding="async"
                        />
                        Account
                        {showPopup && (
                          <div className="login__tooltip">
                            <span style={{ display: "flex", width: "90%" }}>
                              Sign in to personalise your account
                            </span>
                            <div
                              style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowPopup(false);
                              }}
                            >
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 20 20"
                                version="1.1"
                              >
                                <g>
                                  <path d="M 17.328125 15.121094 L 12.203125 9.976562 L 17.339844 4.898438 C 17.550781 4.6875 17.550781 4.34375 17.339844 4.132812 L 15.878906 2.664062 C 15.777344 2.5625 15.640625 2.507812 15.496094 2.507812 C 15.351562 2.507812 15.214844 2.566406 15.113281 2.664062 L 10 7.726562 L 4.878906 2.667969 C 4.777344 2.566406 4.640625 2.511719 4.496094 2.511719 C 4.351562 2.511719 4.214844 2.570312 4.113281 2.667969 L 2.65625 4.136719 C 2.445312 4.347656 2.445312 4.691406 2.65625 4.902344 L 7.792969 9.980469 L 2.671875 15.121094 C 2.570312 15.222656 2.511719 15.359375 2.511719 15.503906 C 2.511719 15.648438 2.566406 15.785156 2.671875 15.886719 L 4.132812 17.355469 C 4.238281 17.460938 4.375 17.515625 4.515625 17.515625 C 4.652344 17.515625 4.792969 17.464844 4.898438 17.355469 L 10 12.230469 L 15.105469 17.351562 C 15.210938 17.457031 15.347656 17.511719 15.488281 17.511719 C 15.625 17.511719 15.765625 17.460938 15.871094 17.351562 L 17.332031 15.882812 C 17.433594 15.78125 17.492188 15.644531 17.492188 15.5 C 17.488281 15.359375 17.429688 15.222656 17.328125 15.121094 Z M 17.328125 15.121094 " />
                                </g>
                              </svg>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                gap: "8px",
                                paddingTop: "10px",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#00594c",
                                  color: "white",
                                  padding: "12px",
                                  borderRadius: "8px",
                                  fontWeight: 500,
                                }}
                              >
                                Create account
                              </div>
                              <div
                                style={{
                                  border: "2px solid #00594c",
                                  color: "#00594c",
                                  padding: "12px 16px",
                                  borderRadius: "8px",
                                  fontWeight: 500,
                                }}
                              >
                                Sign in
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex items-center flex-col text-xs font-semibold"
                        style={{
                          color: !isScrolled ? "white" : "#00594c",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={
                            !isScrolled
                              ? "https://images.hollandandbarrettimages.co.uk/header/Basket_icon.svg"
                              : "https://images.hollandandbarrettimages.co.uk/header/header-icon-green/basket3.svg"
                          }
                          alt=""
                          width="20"
                          height="20"
                          decoding="async"
                        />
                        Basket
                      </div>
                    </div>
                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className={` ml-3 px-2 py-1  text-gray-500 rounded-md ${
                        isScrolled ? "menu__green" : "menu__white"
                      }`}
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        {open && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                        )}
                        {!open && (
                          <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 ">
                      <>
                        {navigation.map((item, index) => (
                          <Link key={index} href="/">
                            <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                              {item}
                            </a>
                          </Link>
                        ))}
                      </>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex"></ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
