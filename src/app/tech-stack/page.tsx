import { TechLogo } from "@/assets/svgeComponents/TechLogo";
import { Frame } from "@/components/frame/Frame";
import LinedButton from "@/components/lined-button/LinedBtn";
import { TechName } from "@/components/utils/constants";
import { ComponentOrientation } from "@/components/utils/enums";

export default function TechStack() {
  return (
    <main className="mt-[210px] flex h-screen w-screen flex-col items-center justify-start">
      <Frame className="flex h-[656px] w-full justify-between">
        <Frame>
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex flex-row justify-between">
              <Frame className="flex flex-col">
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="React" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.CSS}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="Typescript" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.Flutter}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="Tailwind" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.Vite}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="Figma" className="w-[120px]" />
                </LinedButton>
              </Frame>
              <Frame className="flex flex-col">
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.React}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="CSS" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.Typescript}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="Flutter" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.Tailwind}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="Vite" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.Figma}
                </LinedButton>
              </Frame>
            </Frame>
            <Frame className="flex h-[60px] justify-end font-exo2 text-[40px] font-semibold text-inactive">
              Front end
            </Frame>
          </Frame>
          <div className="ml-[20px] flex h-full">
            <div
              className={
                "h-full w-[2px] bg-gradient-to-b from-active to-inactive"
              }
            />
            <div className="relative right-[1px] h-full w-[2px] bg-gradient-to-b from-active to-inactive blur-sm" />
          </div>
        </Frame>
        <Frame>
          <div className="mr-[20px] flex h-full">
            <div
              className={
                "h-full w-[2px] bg-gradient-to-b from-active to-inactive"
              }
            />
            <div className="relative right-[1px] h-full w-[2px] bg-gradient-to-b from-active to-inactive blur-sm" />
          </div>
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex flex-row justify-between">
              <Frame className="flex flex-col">
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.Firebase}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="NextJS" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.MongoDB}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showLeftLine={false}>
                  <TechLogo type="GoogleCloud" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] mr-[10px] font-exo2"
                  showLeftLine={false}
                >
                  {TechName.OneSignal}
                </LinedButton>
              </Frame>
              <Frame className="flex flex-col">
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="Firebase" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.NextJS}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="MongoDB" className="w-[120px]" />
                </LinedButton>
                <LinedButton
                  textStyle="px-0 text-[20px] leading-[40px] h-[40px] ml-[10px] font-exo2"
                  showRightLine={false}
                >
                  {TechName.GoogleCloud}
                </LinedButton>
                <LinedButton textStyle="px-0 mx-[-3px]" showRightLine={false}>
                  <TechLogo type="OneSignal" className="w-[120px]" />
                </LinedButton>
              </Frame>
            </Frame>
            <Frame className="flex h-[60px] justify-start font-exo2 text-[40px] font-semibold text-inactive">
              Back end
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </main>
  );
}
