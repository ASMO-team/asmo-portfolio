import { HProps } from "./h.props";
import cn from "classnames";

export const H = ({ 
  type, 
  children, 
  isNotCenter = false, 
  uppercase = false, 
  className = "" 
}: HProps) => {
    const baseClasses = {
        h1: "text-black text-[28px] md:text-[36px] lg:text-[50px] font-bold", // Добавил font-bold для лучшей иерархии
        h2: "text-black text-[24px] md:text-[32px] lg:text-[40px] font-semibold",
        h3: "text-black text-[20px] md:text-[26px] lg:text-[32px] font-medium"
    };

    const finalClassName = cn(
        baseClasses[type],
        {
            'text-center': !isNotCenter,
            'text-start': isNotCenter,
            'uppercase': uppercase,
            'normal-case': !uppercase
        },
        className // Добавляем переданный className в конец
    );

    switch(type) {
        case 'h1':
            return <h1 className={finalClassName}>{children}</h1>
        case 'h2':
            return <h2 className={finalClassName}>{children}</h2>
        case 'h3':
            return <h3 className={finalClassName}>{children}</h3>
        default:
            return <></>
    }
}