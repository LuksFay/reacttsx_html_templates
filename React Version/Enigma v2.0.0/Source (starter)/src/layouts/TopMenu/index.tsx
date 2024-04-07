import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectTopMenu } from "../../stores/topMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import _ from "lodash";
import { FormattedMenu, linkTo, nestedMenu } from "./top-menu";
import Lucide from "../../base-components/Lucide";
import clsx from "clsx";
import TopBar from "../../components/TopBar";
import MobileMenu from "../../components/MobileMenu";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";

function Main() {
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu>>([]);
  const topMenuStore = useAppSelector(selectTopMenu);
  const topMenu = () => nestedMenu(topMenuStore, location);

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [topMenuStore, location.pathname]);

  return (
    <div className="py-5 md:py-0">
      <DarkModeSwitcher />
      <MainColorSwitcher />
      <MobileMenu />
      <TopBar layout="top-menu" />
      {/* BEGIN: Top Menu */}
      <nav
        className={clsx([
          "relative z-50 hidden pt-32 -mt-4 md:block",

          // Animation
          "opacity-0 animate-[0.4s_ease-in-out_0.2s_intro-top-menu] animate-fill-mode-forwards",
        ])}
      >
        <ul className="flex flex-wrap px-6 xl:px-[50px]">
          {formattedMenu.map((menu, menuKey) => (
            <li
              className={clsx([
                "relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:rotate-180",
                !menu.active &&
                  "[&:hover>a]:bg-slate-100 [&:hover>a]:dark:bg-transparent",
                !menu.active &&
                  "[&:hover>a]:before:content-[''] [&:hover>a]:before:block [&:hover>a]:before:inset-0 [&:hover>a]:before:rounded-full [&:hover>a]:xl:before:rounded-xl [&:hover>a]:before:absolute [&:hover>a]:before:z-[-1] [&:hover>a]:before:border-b-[3px] [&:hover>a]:before:border-solid [&:hover>a]:before:border-black/[0.08] [&:hover>a]:before:dark:bg-darkmode-700",
              ])}
              key={menuKey}
            >
              <MenuLink
                className={clsx({
                  // Animation
                  [`opacity-0 translate-y-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-${
                    (menuKey + 1) * 10
                  }`]: !menu.active,
                })}
                menu={menu}
                level="first"
              ></MenuLink>
              {/* BEGIN: Second Child */}
              {menu.subMenu && (
                <ul
                  className={clsx([
                    "shadow-[0px_3px_20px_#00000014] dark:shadow-[0px_3px_7px_#0000001c] bg-slate-100 dark:bg-darkmode-600 hidden w-56 absolute rounded-md z-20 px-0 mt-1",
                    "before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-white/[0.04] before:inset-0 before:rounded-md before:z-[-1] dark:before:bg-black/10",
                    "after:content-[''] after:w-full after:h-1 after:absolute after:top-0 after:left-0 after:-mt-1 after:cursor-pointer",
                  ])}
                >
                  {menu.subMenu.map((subMenu, subMenuKey) => (
                    <li
                      className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
                      key={subMenuKey}
                    >
                      <MenuLink menu={subMenu} level="second"></MenuLink>
                      {/* BEGIN: Third Child */}
                      {subMenu.subMenu && (
                        <ul
                          className={clsx([
                            "shadow-[0px_3px_20px_#00000014] dark:shadow-[0px_3px_7px_#0000001c] left-[100%] bg-slate-100 dark:bg-darkmode-600 hidden w-56 absolute rounded-md mt-0 ml-0 top-0 z-20 px-0",
                            "before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-white/[0.04] before:inset-0 before:rounded-md before:z-[-1] dark:before:bg-black/10",
                            "after:content-[''] after:w-full after:h-1 after:absolute after:top-0 after:left-0 after:-mt-1 after:cursor-pointer",
                          ])}
                        >
                          {subMenu.subMenu.map(
                            (lastSubMenu, lastSubMenuKey) => (
                              <li
                                className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
                                key={lastSubMenuKey}
                              >
                                <MenuLink
                                  menu={lastSubMenu}
                                  level="third"
                                ></MenuLink>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                      {/* END: Third Child */}
                    </li>
                  ))}
                </ul>
              )}
              {/* END: Second Child */}
            </li>
          ))}
        </ul>
      </nav>
      {/* END: Top Menu */}
      {/* BEGIN: Content */}
      <div
        className={clsx([
          "max-w-full md:max-w-none rounded-[30px] md:rounded-[35px_35px_0_0] px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 pb-10 mt-5 relative dark:bg-darkmode-700",
          "before:content-[''] before:w-full before:h-px before:block",
        ])}
      >
        <Outlet />
      </div>
      {/* END: Content */}
    </div>
  );
}

function MenuLink(props: {
  className?: string;
  menu: FormattedMenu;
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();
  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[55px] flex items-center px-5 mr-1 text-slate-600 relative rounded-full xl:rounded-xl",
        {
          "mt-[3px]": props.level == "first",
          "bg-slate-100 text-primary dark:bg-darkmode-700":
            props.level == "first" && props.menu.active,
          "before:content-[''] before:hidden xl:before:block before:inset-0 before:rounded-xl before:absolute before:border-b-[3px] before:border-solid before:border-black/[0.08] dark:before:border-black/[0.08] before:dark:bg-darkmode-700":
            props.level == "first" && props.menu.active,
          "after:content-[''] after:w-[20px] after:h-[80px] after:bg-menu-active after:bg-no-repeat after:bg-cover after:absolute after:left-0 after:right-0 after:bottom-0 after:mx-auto after:transform after:rotate-90 after:hidden xl:after:block after:dark:bg-menu-active-dark":
            props.level == "first" && props.menu.active,
          "px-0 mr-0": props.level != "first",

          // Animation
          "after:opacity-0 after:-mb-[74px] after:animate-[0.3s_ease-in-out_1s_active-top-menu-chevron] after:animate-fill-mode-forwards":
            props.level == "first" && props.menu.active,
        },
        props.className,
      ])}
      onClick={(event) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
      }}
    >
      <div
        className={clsx([
          "z-10 dark:text-slate-400",
          props.level == "first" && "-mt-[3px]",
          props.level == "first" &&
            props.menu.active &&
            "dark:text-white text-primary xl:text-primary",
        ])}
      >
        <Lucide icon={props.menu.icon} />
      </div>
      <div
        className={clsx([
          "ml-3 flex items-center whitespace-nowrap z-10 dark:text-slate-400",
          props.level == "first" && "-mt-[3px]",
          props.level == "first" &&
            props.menu.active &&
            "font-medium dark:text-white text-slate-800 xl:text-primary",
          props.level != "first" && "w-full",
        ])}
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <Lucide
            icon="ChevronDown"
            className={clsx([
              "hidden transition ease-in duration-100 w-4 h-4 xl:block",
              props.level == "first" && "ml-2",
              props.level != "first" && "ml-auto",
            ])}
          />
        )}
      </div>
    </a>
  );
}

export default Main;
