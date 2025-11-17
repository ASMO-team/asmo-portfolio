import { H } from "../Htag/H";
import { P } from "../Ptag/P";
import style from './sections.module.css';
import SkillCart from "../SkillCart/SkillCart";
import cn from "classnames";

// Данные для карточек с разными размерами иконок для мобильных и десктопа
const skillItems = [
  {
    id: 1,
    iconName: "bot" as const,
    headerText: "Боты и Автоматизация",
    description: "Telegram, WhatsApp, веб-интеграции, автоматизация общения с клиентами и внутренних процессов для повышения эффективности",
    mobileIconSize: { width: 80, height: 70 },
    desktopIconSize: { width: 94, height: 79 }
  },
  {
    id: 2,
    iconName: "website" as const,
    headerText: "Сайты и Лендинги",
    description: "Полноценная разработка: от маркетинговой идеи и прототипа до профессионального UX/UI-дизайна и быстрого запуска готового продукта",
    mobileIconSize: { width: 88, height: 84 },
    desktopIconSize: { width: 88, height: 88 }
  },
  {
    id: 3,
    iconName: "application" as const,
    headerText: "Приложения",
    description: "Разработка нативных мобильных и сложных веб-приложений. Создание продуктов, выдерживающие высокие нагрузки и готовые к масштабированию",
    mobileIconSize: { width: 80, height: 70 },
    desktopIconSize: { width: 91, height: 76 }
  },
  {
    id: 4,
    iconName: "ai" as const,
    headerText: "ИИ-Решения",
    description: "Внедрение искусственного интеллекта для бизнеса: аналитика, предиктивные модели, кастомизированные ИИ-ассистенты и интеграции GPT",
    mobileIconSize: { width: 80, height: 75 },
    desktopIconSize: { width: 88, height: 83 }
  }
];

export default function Third() {
  return (
    <section className={cn(style.thirdSection, "px-4 md:px-0")}>
      <div className={cn("flex flex-col justify-center gap-4 md:gap-5", style.headerArea)}>
        <H type="h1">Что мы создаем</H>
        <P center={true}  >
          Наши ключевые направления работы охватывают весь спектр современных цифровых потрешений
        </P>
      </div>
      
      {skillItems.map((item) => (
        <div 
          key={item.id}
          className={style[`thirdBox${item.id}`]}
        >
          <SkillCart 
            iconName={item.iconName}
            description={item.description}
            headerText={item.headerText}
            // Передаем оба размера, а в SkillCart уже решаем какой использовать
            mobileIconSize={item.mobileIconSize}
            desktopIconSize={item.desktopIconSize}
          />
        </div>
      ))}
    </section>
  );
}