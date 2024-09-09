import { InactiveCircle } from "@/assets/svgeComponents/InactiveCircle";
import LinedButton from "../lined-button/LinedBtn";

export const TransitionPlaceholder = () => {
  return (
    <div className="flex h-screen w-screen flex-none bg-bgColor">
      <LinedButton />
      <div>
        <LinedButton />
        <InactiveCircle />
        <LinedButton />
      </div>
      <LinedButton />
    </div>
  );
};
