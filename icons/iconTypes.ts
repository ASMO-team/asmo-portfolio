export type IconName = "ai" | "application"  | "bot" | "mail" | "tg" | "website" | "whatsapp" | "close";

export type IconLoader = () => Promise<{
    default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}>;