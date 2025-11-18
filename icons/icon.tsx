"use client";
 
import * as React from "react";
import { iconRegistry } from "./iconRegistry";
import type { IconName, IconLoader } from "./iconTypes";

type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  width?: number | string;
  height?: number | string;
};

type Props = {
  name: IconName;
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
  ssr?: boolean;
};

// Кеш для уже загруженных иконок
const iconComponentCache = new Map<IconName, React.ComponentType<IconProps>>();

export default function Icon({
  name,
  width,
  height,
  className,
  title,
 
}: Props) {
  const [SvgIcon, setSvgIcon] = React.useState<React.ComponentType<IconProps> | null>(null);

  React.useEffect(() => {
    const loadIcon = async () => {
      // Проверяем кеш
      if (iconComponentCache.has(name)) {
        setSvgIcon(iconComponentCache.get(name)!);
        return;
      }

      try {
        const loader = iconRegistry[name] as IconLoader;
        const iconModule = await loader();
        const IconComponent = iconModule.default || iconModule;

        // Сохраняем в кеш
        iconComponentCache.set(name, IconComponent);
        setSvgIcon(() => IconComponent);
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
      }
    };

    loadIcon();
  }, [name]);

  const ariaProps = title
    ? ({ role: "img", "aria-label": title } as const)
    : ({ "aria-hidden": true } as const);

  // Пока иконка загружается, показываем плейсхолдер
  if (!SvgIcon) {
    return <span className={className} aria-hidden />;
  }

  return (
    <SvgIcon
      width={width}
      height={height}
      className={className}
      title={title}
      focusable={false}
      {...ariaProps}
    />
  );
}