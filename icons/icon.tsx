"use client";
import dynamic from "next/dynamic";
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

export default function Icon({
  name,
  width,
  height,
  className,
  title,
  ssr = false,
}: Props) {
  const loader = iconRegistry[name] as IconLoader;

  const SvgIcon = React.useMemo(() => {
    return dynamic<IconProps>(
      () =>
        loader().then((mod) => {
          if (mod.default) return mod.default;
          return mod;
        }),
      {
        ssr,
        loading: () => <span className={className} aria-hidden />,
      }
    );
  }, [loader, ssr, className]);

  const ariaProps = title
    ? ({ role: "img", "aria-label": title } as const)
    : ({ "aria-hidden": true } as const);

  return (
    // eslint-disable-next-line react-hooks/static-components
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