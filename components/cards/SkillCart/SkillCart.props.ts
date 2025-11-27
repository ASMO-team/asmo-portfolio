import { IconName } from "@/icons/iconTypes";
// SkillCart.props.ts
export interface SkillCartProps {
    iconName: IconName;
    description: string;
    headerText: string;
    // Удаляем старые пропсы
    // iconHeight?: number;
    // iconWeight?: number;
    
    // Добавляем новые
    mobileIconSize: { width: number; height: number };
    desktopIconSize: { width: number; height: number };
}