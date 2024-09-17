import { twMerge } from "tailwind-merge";
import { MenuBtn, MenuBtnProps } from "../menu-btn/MenuBtn";

export const FormButton = ({ ...props }: MenuBtnProps) => {
  return (
    <MenuBtn
      cornersClassName={twMerge(
        `${
          props.isActive
            ? "fill-formEl-bg-active stroke-formEl-outline-active"
            : "fill-formEl-bg-inactive stroke-formEl-outline-inactive group-hover/button:stroke-formEl-outline-hovered group-hover/button:fill-formEl-bg-hovered"
        }`,
        props.cornersClassName,
      )}
      textContainerClassName={twMerge(
        `${
          props.isActive
            ? "border-formEl-outline-active"
            : "border-formEl-outline-inactive group-hover/button:border-formEl-outline-hovered"
        } spacing box-border border border-b-[1px] border-l-0 border-r-0 border-t-[1px] font-chakraPetch text-base font-semibold uppercase ${props.flipText ? "rotate-180" : ""} ${props.isActive ? "bg-formEl-bg-active text-formEl-btnText-active" : "bg-formEl-bg-inactive text-formEl-btnText-inactive group-hover/button:bg-formEl-bg-hovered group-hover/button:text-formEl-btnText-hovered"} text-nowrap text-center ${/*transition-colors duration-300 ease-in */ ""}`,
        props.textContainerClassName,
      )}
      {...props}
    />
  );
};
