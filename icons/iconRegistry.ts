import type { IconLoader, IconName } from "./iconTypes";

export const iconRegistry: Record<IconName, IconLoader> = {
    ai: () => import("@/icons/svg-collection/ai.svg"),
    application: () => import("@/icons/svg-collection/application.svg"),
   
    bot: () => import("@/icons/svg-collection/bot.svg"),
    mail: () => import("@/icons/svg-collection/mail.svg"),
    tg: () => import("@/icons/svg-collection/tg.svg"),
    website: () => import("@/icons/svg-collection/website.svg"),
    whatsapp: () => import("@/icons/svg-collection/whatsapp.svg"),
    close: () =>import("@/icons/svg-collection/close.svg"),
};