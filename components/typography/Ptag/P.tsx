import cn from "classnames";
 
import { PProps } from "./PProps";

export const P = ({ children, center, className = "" }: PProps) => {
  return (
    <p 
      className={cn(
        "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-[-2%] text-gray-800",
        {
          'text-center': center,
          'text-start': !center
        },
        className
      )}
    >
      {children}
    </p>
  );
};