'use client';
import { H } from "../typography/Htag/H";
import { P } from "../typography/Ptag/P";
import SkillCart from "../cards/SkillCart/SkillCart";
import cn from "classnames";
import { useTheme } from "@/hooks/useTheme";

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
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <section className="relative py-12 md:py-16 lg:py-20 bg-gray-200 dark:bg-gray-800 animate-pulse overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-48 bg-gray-300 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn(
      "relative py-12 md:py-16 lg:py-20 overflow-hidden px-4 sm:px-6 lg:px-8",
      theme === 'light' ? "bg-white" : "bg-gray-900"
    )}>
      {/* Декоративные элементы */}
      <div className={cn(
        "absolute top-20 left-5 w-24 h-24 rounded-full blur-2xl opacity-60",
        theme === 'light' 
          ? "bg-gradient-to-br from-[#D24A43]/5 to-[#b53a34]/10"
          : "bg-gradient-to-br from-[#D24A43]/15 to-[#b53a34]/10"
      )}></div>
      <div className={cn(
        "absolute bottom-20 right-5 w-20 h-20 rounded-full blur-2xl opacity-40",
        theme === 'light' 
          ? "bg-gradient-to-br from-[#D24A43]/5 to-[#b53a34]/10"
          : "bg-gradient-to-br from-[#D24A43]/15 to-[#b53a34]/10"
      )}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex flex-col items-center gap-4 md:gap-6">
            <H type="h1" className={theme === 'light' ? "text-gray-900" : "text-white"}>
              Что мы создаем
            </H>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D24A43] to-[#b53a34] rounded-full"></div>
          </div>
          <P 
            center={true} 
            className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto mt-4 md:mt-6",
              theme === 'light' ? "text-gray-600" : "text-white"
            )}
          >
            Наши ключевые направления работы охватывают весь спектр современных цифровых решений
          </P>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {skillItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Эффект при наведении */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:scale-105",
                theme === 'light'
                  ? "bg-linear-to-br from-[#D24A43]/5 to-[#b53a34]/5"
                  : "bg-linear-to-br from-[#D24A43]/10 to-[#b53a34]/10"
              )}></div>
              
              <div className={cn(
                "relative h-full rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]",
                "p-6 md:p-8 lg:p-10",
                theme === 'light'
                  ? "bg-white border-gray-100 group-hover:border-[#D24A43]/20"
                  : "bg-gray-800 border-gray-700 group-hover:border-[#D24A43]/30"
              )}>
                <SkillCart 
                  iconName={item.iconName}
                  description={item.description}
                  headerText={item.headerText}
                  mobileIconSize={item.mobileIconSize}
                  desktopIconSize={item.desktopIconSize}
               
                />
                
                {/* Индикатор при наведении */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#D24A43] to-[#b53a34] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительный призыв к действию */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <P className={cn(
            "mb-4",
            theme === 'light' ? "text-gray-500" : "text-white"
          )}>
            Готовы обсудить ваш проект?
          </P>
          <button className="bg-linear-to-r from-[#D24A43] to-[#b53a34] text-white font-semibold rounded-xl px-8 py-3 hover:from-[#b53a34] hover:to-[#9a2d28] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Начать проект
          </button>
        </div>
      </div>
    </section>
  );
}