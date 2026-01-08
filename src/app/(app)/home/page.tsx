"use client";

import Link from "next/link";
import Image from "next/image";
import { clsxm } from "@/lib/helper";
import { useRef, useState } from "react";
import AncientStyleMenuButton from "./components/AncientStyleMenuButton";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function HomePage() {
  const [currIdx, setCurrIdx] = useState(0);
  const [showMask, setShowMask] = useState(true);
  const [imgs, setImgs] = useState([
    "https://www.sanga-ryokan.com/news/wp-content/uploads/2026/01/9b095180-b254-4c7d-9078-5f96dfc35a4b.jpg",
    "https://www.sanga-ryokan.com/news/wp-content/uploads/2025/12/IMG_4515-1536x2048.jpg",
    "https://www.sanga-ryokan.com/news/wp-content/uploads/2024/06/%E6%AD%A3%E6%9C%88%E4%BA%88%E7%B4%84.jpg",
  ]);

  const [menuList, setMenuList] = useState<MenuList>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currIdxRef = useRef(0);
  const movies = ["/home/videos/01.mp4", "/home/videos/onsen.mp4"];

  const updateIndex = (newIdx: number) => {
    if (newIdx >= 0 && newIdx <= 4 && newIdx !== currIdxRef.current) {
      currIdxRef.current = newIdx;
      setCurrIdx(newIdx);
      setShowMask(newIdx === 0);
      startAnimation();
    }
  };

  const startAnimation = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsAnimating(true);
    timerRef.current = setTimeout(() => {
      setIsAnimating(false);
      timerRef.current = null;
    }, 1000); // 与CSS动画时间一致
  };

  const schemaComps = [RecommendToday, RecentArticleGroups];

  return (
    <div className="h-dvh w-full flex flex-col bg-white overflow-hidden">
      {/* <header className="bg-gray-800 text-white p-4">navbar</header> */}
      <div className="h-full flex flex-1 min-h-0">
        <aside
          className={clsxm(
            "w-32  p-4  border-amber-200",
            isOpen ? "border-r" : ""
          )}
        >
          <Link
            href="/"
            className={clsxm(
              "border-2  rounded-sm border-gray-100 inline-block transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] translate-x-4 translate-y-2",
              showMask ? "opacity-0" : "opacity-100"
            )}
          >
            <Image
              src="/logo/logo-shuying-black.svg"
              alt="疏影轩"
              width={320}
              height={240}
              priority
              className="h-30 w-auto"
            />
          </Link>

          {!isOpen && (
            <ul className="mt-72 h-40 flex flex-col justify-start pt-5 z-50">
              {Array.from({ length: 5 }).map((item, index) => (
                <li
                  key={index}
                  className="w-10 flex justify-center cursor-pointer group mb-1 mx-auto"
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <div
                    className={clsxm(
                      "w-px h-5 bg-gray-300 rounded-xs",
                      "transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]",
                      "group-hover:w-2",
                      currIdx === index
                        ? "bg-black h-15 group-hover:w-px duration-1000"
                        : ""
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
        </aside>
        <main
          className="flex-1 my-10 relative text-white overflow-hidden rounded-lg"
          onWheel={(e) => {
            if (isAnimating) {
              return;
            }

            const current = currIdxRef.current;

            if (e.deltaY > 0) {
              updateIndex(current + 1);
            } else if (e.deltaY < 0) {
              updateIndex(current - 1);
            }
          }}
        >
          <div
            className={clsxm(
              "bg-white/90 w-full h-full absolute top-0 left-0 z-7",
              "transition-transform duration-1000 ease-in-out",
              showMask ? "translate-y-0" : "-translate-y-full"
            )}
          >
            <Link
              href="/"
              className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
            >
              <Image
                src="/logo/logo-shuying-black.svg"
                alt="疏影轩"
                width={320}
                height={240}
                priority
                className="h-30 w-auto"
              />
            </Link>
          </div>

          {schemaComps.map((component, index) => {
            return (
              <PageScrollItem
                key={index}
                movie={movies[index]}
                currIdx={currIdx}
                markIdx={index + 1}
                zIndex={2 - index}
                scrollPosition={
                  index === 0
                    ? { top: "0", middle: "0", bottom: "-1179" }
                    : { top: "589.5", middle: "0", bottom: "-1179" }
                }
                Schema={component}
              />
            );
          })}
        </main>
        {/* {!isOpen && (
            <div
              className={clsxm(
                "before:content-[''] before:w-full before:h-full before:bg-white before:absolute before:top-0 before:left-0 before:origin-top before:animate-scrollIndicator",
                "transition-opacity duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] z-999 overflow-hidden",
                "w-px h-20 bg-white/30 mix-blend-exclusion absolute -bottom-8.5 left-1/2 -translate-x-1/2  -translate-y-1/2"
              )}
            ></div>
          )} */}
        <aside
          className={clsxm(
            "w-32 flex flex-col justify-between items-center py-5 border-amber-200",
            isOpen ? "border-l" : ""
          )}
        >
          <AncientStyleMenuButton isOpen={isOpen} onBtnToggle={setIsOpen} />
          <div className={clsxm("flex flex-col items-center gap-6 pb-8")}>
            {/* <div
                className={clsxm(
                  "font-shufa font-bold text-lg text-black",
                  "border-2 border-black text-center tracking-[4px] rounded-sm px-1",
                  "hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
                )}
                style={{ writingMode: "vertical-rl" }}
              >
                联系
              </div> */}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </aside>
      </div>

      <div
        className={clsxm(
          "w-[calc(100%-256px)] ml-32 h-screen flex fixed top-0 bg-white z-55",
          "transition-opacity duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] overflow-hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <ImageList imgs={imgs} />
        <div className="flex flex-col flex-1 h-full py-20 min-w-0 pr-20">
          <VerticalMenu menuList={menuList} />
          <div
            className="w-[calc(100%-130px)] h-2 mt-5 mb-10 mx-auto bg-contain opacity-70 shrink-0"
            style={{ backgroundImage: 'url("/svg/icn_rhombus.svg")' }}
          ></div>
          <BottomInfo data={undefined} />
        </div>
      </div>
      {/* <footer className="bg-white text-black p-4 text-center h-10 shrink-0 ">
        </footer> */}
    </div>
  );
}

type ScrollPosition = {
  top: string;
  middle: string;
  bottom: string;
};

const PageScrollItem: React.FC<
  React.PropsWithChildren & {
    movie: string;
    currIdx: number;
    markIdx?: number;
    scrollPosition?: ScrollPosition;
    zIndex: number;
    Schema: SchemaCompType;
  }
> = ({
  movie,
  currIdx,
  markIdx = 1,
  scrollPosition = { top: "589.5", middle: "0", bottom: "-1179" },
  zIndex,
  Schema,
}) => {
  const showMask = currIdx === markIdx;
  const transformValue =
    currIdx < markIdx
      ? `translateY(${scrollPosition.top}px)`
      : currIdx > markIdx
      ? `translateY(${scrollPosition.bottom}px)`
      : `translateY(${scrollPosition.middle}px)`;

  return (
    <article
      className={clsxm(
        "prose max-w-none w-full h-full",
        "transition-transform duration-1000 ease-in-out",
        "absolute top-0 left-0"
      )}
      style={{ zIndex, transform: transformValue }}
    >
      <div className="w-full h-full rounded-lg bg-black ">
        <Schema showMask={showMask} />
        <video
          className="w-full h-full object-cover rounded-lg opacity-80 z-0"
          autoPlay
          muted
          loop
          playsInline // iOS必须！
          preload="auto" // 或 "metadata"
        >
          <source src={movie} type="video/mp4" />
          {/* <source src="/videos/background.webm" type="video/webm" /> */}
          {/* 备用图片 */}
          {/* <img src="/images/fallback.jpg" alt="背景" /> */}
        </video>
      </div>
    </article>
  );
};

type SchemaCompType = React.FC<
  React.PropsWithChildren & {
    showMask: boolean;
  }
>;

const RecommendToday: SchemaCompType = ({ showMask }) => {
  return (
    <>
      <h1
        className={clsxm(
          "writing-vertical-rl",
          "before:content-[''] before:w-15 before:h-px before:block before:bg-white before:mb-7.5",
          "after:content-[''] after:w-15 after:h-px after:block after:bg-white after:mt-7.5",
          "text-4xl font-shufa font-black absolute top-[calc((40px+4vw)*1.5)] right-[calc((40px+4vw)*2)] tracking-[20px] text-center flex items-center z-10",
          "transition-all duration-1500 ease-[cubic-bezier(0.37, 0, 0.63, 1)]",
          showMask ? "opacity-100  delay-1000" : "opacity-0"
        )}
      >
        当年红月
      </h1>
      <div
        className={clsxm(
          "writing-vertical-rl h-80 absolute z-10 bottom-1/9 left-1/8 leading-9  tracking-wide",
          showMask ? "" : "pointer-events-none"
        )}
      >
        <p
          className={clsxm(
            "writing-vertical-rl",
            "text-2xl tracking-wide ml-20 leading-12 font-xingshu font-extrabold",
            "transition-all duration-1500 ease-[cubic-bezier(0.37, 0, 0.63, 1)]",
            showMask
              ? "opacity-100 translate-x-0 delay-1300"
              : "opacity-0 translate-x-8 delay-0"
          )}
        >
          疏影横渡水清浅 <br />
          暗香浮动月黄昏
        </p>
        <p
          className={clsxm(
            "writing-vertical-rl font-shoujin font-bold text-lg leading-10",
            "transition-all duration-1500 ease-[cubic-bezier(0.37, 0, 0.63, 1)]",
            showMask
              ? "opacity-100 translate-x-0 delay-1200"
              : "opacity-0 translate-x-8 delay-0"
          )}
        >
          十五年中，这古园的形体被不能理解它的人肆意雕琢，幸好有些东西是任谁也不能改变它的。譬如祭坛石门中的落日，寂静的光辉平铺的一刻，地上的每一个坎坷都被映照得灿烂；譬如在园中最为落寞的时间，一群雨燕便出来高歌，把天地都叫喊得苍凉；譬如冬天雪地上孩子的脚印，总让人猜想他们是谁，曾在哪儿做过些什么，然后又都到哪儿去了；譬如那些苍黑的古柏，你忧郁的时候它们镇静地站在那儿，你欣喜的时候它们依然镇静地站在那儿，它们没日没夜地站在那儿，从你没有出生一直站到这个世界上又没了你的时候；譬如暴雨骤临园中，激起一阵阵灼烈而清纯的草木和泥土的气味，让人想起无数个夏天的事件；譬如秋风忽至，再有一场早霜，落叶或飘摇歌舞或坦然安卧，满园中播散着熨
          帖舒服，舒适。而微苦的味道。味道是最说不清楚的，味道不能写只能闻，要你身临其境去闻才能明了。味道甚至是难于记忆的，只有你又闻到它你才能记起它的全部情感和意蕴。所以我常常要到那园子里去。
        </p>
        <div
          className={clsxm(
            "writing-vertical-rl font-shufa font-bold text-lg",
            "border-2 text-center mr-20  tracking-[4px] rounded-sm",
            "transition-opacity duration-1500 ease-[cubic-bezier(0.37, 0, 0.63, 1)]",
            "hover:bg-black hover:text-white",
            showMask
              ? "opacity-100 translate-x-0 delay-2000"
              : "opacity-0 translate-x-0 delay-0"
          )}
        >
          了解详情
        </div>
      </div>
    </>
  );
};

const RecentArticleGroups: SchemaCompType = () => {
  return (
    <>
      <div className="absolute ">
        <div>
          <section>
            <h2></h2>
            <ul>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
            <a href="">
              <i className="i-mingcute-arrow-right-circle-line" />
              <span className="ml-2">还有更多</span>
            </a>
            <hr />
            <h2></h2>
            <ul>
              <li>333</li>
              <li>2323</li>
              <li>weew</li>
              <li>233223</li>
            </ul>
            <a href="">
              <i className="i-mingcute-arrow-right-circle-line" />
              <span className="ml-2">还有更多</span>
            </a>
          </section>
        </div>
        <div></div>
      </div>
    </>
  );
};

const ImageList: React.FC<
  React.PropsWithChildren & {
    imgs: string[];
  }
> = ({ imgs }) => {
  return (
    <ScrollArea.Root className="min-w-[300px] h-full overflow-hidden mx-60">
      <ScrollArea.Viewport className="w-full h-full">
        {imgs.map((v, idx) => (
          <div
            key={v}
            className={clsxm(
              "w-full mb-10 text-black",
              idx === 0 ? "mt-28" : ""
            )}
          >
            <Image
              src={v}
              alt={""}
              width={0}
              height={0}
              sizes="11vw"
              className="w-full h-auto"
            />
            <dl className="mt-4">
              <dt className="text-sm text-gray-500">2026.11</dt>
              <dd className="text-lg font-bold">打的千瓦时</dd>
            </dl>
            <h2 className="text-xl font-serif mt-2">萨卡斯塞萨家私</h2>

            {idx < imgs.length - 1 && (
              <div
                className="w-24 h-2 my-10 mx-auto bg-contain opacity-70"
                style={{ backgroundImage: 'url("/svg/icn_rhombus.svg")' }}
              ></div>
            )}
          </div>
        ))}
      </ScrollArea.Viewport>
      {/* <ScrollArea.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      >
        <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar> */}
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

type MenuList = MenuItem[];
type MenuItem = {
  id: "";
  name: "";
};

const VerticalMenu: React.FC<
  React.PropsWithChildren & {
    menuList: MenuList;
  }
> = ({ menuList }) => {
  return (
    <ScrollArea.Root
      className="flex-1 w-full overflow-hidden relative min-h-0 text-black"
      type="hover"
      dir="rtl"
      scrollHideDelay={200}
    >
      <ScrollArea.Viewport className="w-full h-full [&>div]:block! [&>div]:h-full">
        <ul className="flex h-full w-max px-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <li
              key={i}
              className={clsxm(
                "writing-vertical-rl flex flex-row-reverse justify-between items-center w-43 border-r border-gray-300/60 p-6 shrink-0 h-full min-h-0 transition-colors duration-500 hover:bg-stone-50 cursor-pointer group",
                i === 7 ? "border-l" : ""
              )}
            >
              <div className="font-serif text-xl tracking-[0.2em] text-stone-800 group-hover:text-black transition-colors">
                啊阿萨斯
              </div>
              <div className="text-xs text-stone-400 tracking-widest group-hover:text-stone-600 transition-colors">
                DESCRIPTION
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className={clsxm(
          "flex select-none touch-none p-0.5 bg-stone-100/50 transition-colors duration-160 ease-out hover:bg-stone-200 h-2.5 flex-col absolute bottom-0 left-0 right-0 z-10"
        )}
      >
        <ScrollArea.Thumb className="flex-1 bg-stone-400/50 rounded-[10px] relative" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

const BottomInfo: React.FC<
  React.PropsWithChildren & {
    data: any;
  }
> = ({ data }) => {
  return (
    <div className="flex flex-row-reverse justify-between text-black">
      <ul className="writing-vertical-rl flex flex-col gap-6">
        <li>交通</li>
        <li>在线商店</li>
        <li>一篇日记</li>
      </ul>
      <div className="writing-vertical-rl ">
        江苏省苏州市
        <br />
        常熟市
      </div>
      <dl className="writing-vertical-rl ">
        <dt>电话</dt>
        <dd>1212112</dd>
        <dt>邮箱</dt>
        <dd>1212xxx@112</dd>
      </dl>
      <span className="writing-vertical-rl border-y text-center p-3">
        <a href="">关于xxxxxxx</a>
      </span>
    </div>
  );
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.525.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.285-1.23 3.285-1.23.66 1.655.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
