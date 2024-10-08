import { InactiveCircle } from "@/assets/svgeComponents/InactiveCircle";
import LinedButton from "../lined-button/LinedBtn";
import { ComponentOrientation } from "../utils/enums";
import { Frame } from "../frame/Frame";

export const TransitionPlaceholder = () => {
  return (
    <div className="hidden h-screen w-screen flex-none bg-bgColor md:flex">
      <LinedButton />
      <Frame className="flex max-w-[45vh] flex-col">
        <LinedButton orientation={ComponentOrientation.Vertical} />
        <Frame>
          <InactiveCircle />
        </Frame>
        <LinedButton orientation={ComponentOrientation.Vertical} />
      </Frame>
      <LinedButton />
    </div>
  );
};
