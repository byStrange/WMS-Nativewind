
import { tv } from "tailwind-variants";
import { Pressable } from "react-native"; 


const button = tv({
  base: "flex items-center justify-center whitespace-nowrap",
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary:
        "border border-stroke-primary bg-[#F2F3F6] bg-transparent text-font-color-primary",
    },
    size: {
      sm: "px-3 py-2.5 text-sm md:py-3",
      md: "px-3  py-2.5 text-base md:py-4",
      "md+": "px-3  py-3 text-base md:py-4",
    },
    mode: {
      full: "w-full",
    },
    corner: {
      normal: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    corner: "normal",
  },
});

const Button = ({ color, size, mode, corner, children }) => {
    return (
        <Pressable className={button({ color, size, mode, corner })}>
            {children}
        </Pressable>
    )
}

export default Button