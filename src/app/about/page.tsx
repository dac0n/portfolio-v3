import { PolygonFrame } from "@/assets/svgeComponents/PolygonFrame";
import { Frame } from "@/components/frame/Frame";
import { MenuBtn } from "@/components/menu-btn/MenuBtn";
import Image from "next/image";
export default function About() {
  return (
    <main className="flex flex-grow flex-col justify-center text-center font-chakraPetch text-inactive">
      <div className="relative top-10 ml-20 grid w-[1000px] grid-cols-[636px_1fr] grid-rows-[334px_1fr] place-items-center gap-11">
        <PolygonFrame textStyle="text-xl font-extralight text-nonInteractive font-exo2">
          I am an enthusiastic programmer with three years of experience. I love
          art in its various forms, and I treat my work as art - striving for
          perfection in both my own code and the product I provide. Interested
          in technological innovations, the future of AI and developing modern
          designs. Always trying to look at my work and its outcomes from a
          broader perspective - and propose a useful insights to enhance user
          experience and satisfaction.
        </PolygonFrame>
        <div>
          <div className="relative flex h-[216px] w-[216px]">
            <Image
              priority
              src="/avatar.png"
              placeholder="empty"
              quality={100}
              alt="Placeholder"
              width={216}
              height={216}
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-full border-[1px] border-shape-alt" />
            <div className="absolute left-0 top-0 h-full w-full rounded-full border border-shape-alt shadow-[0_0_4px_0] shadow-shape-alt" />
          </div>
        </div>
        <div>
          <MenuBtn
            leftCorner={{
              cornerType: "corner",
              invertedX: true,
              invertedY: true,
            }}
            rightCorner={{ cornerType: "corner", invertedY: true }}
            className="w-[301px]"
          >
            <a
              href="/daniel-konstantinov-resume.pdf"
              className="cursor-pointer"
              download="cv"
            >
              Download resume
            </a>
          </MenuBtn>
        </div>
        <div></div>
      </div>
    </main>
  );
}
