"use client";
import { H } from "@/components/typography/Htag/H";
import { P } from "@/components/typography/Ptag/P";
import { SkillCartProps } from "./SkillCart.props";
import Icon from "@/icons/icon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";

const SkillCart = ({
  iconName,
  description,
  headerText,
  mobileIconSize,
  desktopIconSize
}: SkillCartProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { theme, mounted } = useTheme();
  
  const iconSize = isMobile ? mobileIconSize : desktopIconSize;

  // Скелетон загрузки
  if (!mounted) {
    return (
      <div className="flex flex-col gap-3 md:gap-[15px] w-full max-w-md scale-90 md:scale-100">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-16 h-14 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
<div className="flex flex-col gap-3 md:gap-[15px] w-full max-w-md scale-90 md:scale-100">
  <div className="flex items-center gap-3 md:gap-4">
    <Icon 
      name={iconName}
      width={iconSize.width}
      height={iconSize.height}
      className="transition-colors duration-300"
    />
    <H 
      type="h3" 
      isNotCenter={true}
      className={classNames(
        "transition-colors duration-300",
        theme === 'light' ? "text-gray-900" : "text-white"
      )}
    >
      {headerText}
    </H>
  </div>
  <P 
    className={classNames(
      "transition-colors duration-300",
      theme === 'light' ? "text-gray-600" : "text-white"
    )}
  >
    {description}
  </P>      
</div>
  );
};

export default SkillCart;