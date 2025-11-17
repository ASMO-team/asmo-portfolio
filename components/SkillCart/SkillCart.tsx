// SkillCart.tsx
"use client";
import { H } from "../Htag/H";
import { P } from "../Ptag/P";
import { SkillCartProps } from "./SkillCart.props";
import Icon from "@/icons/icon";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SkillCart = ({
  iconName,
  description,
  headerText,
  mobileIconSize,
  desktopIconSize
}: SkillCartProps  ) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  const iconSize = isMobile ? mobileIconSize : desktopIconSize;

  return (
    <div className="flex flex-col gap-3 md:gap-[15px] w-full max-w-md scale-90 md:scale-100">
      <div className="flex items-center gap-3 md:gap-4">
        <Icon 
          name={iconName}
          width={iconSize.width}
          height={iconSize.height}
        />
        <H type="h3" isNotCenter={true}  >
          {headerText}
        </H>
      </div>
      <P  >{description}</P>      
    </div>
  );
};

export default SkillCart;