'use client';
import { H } from "../typography/Htag/H";
import { P } from "../typography/Ptag/P";
import style from './sections.module.css';
import BenefitCart from "../cards/BenefitCart/BenefitCart";
import cn from "classnames";
import { useTheme } from "@/hooks/useTheme";

const benefitItems = [
  {
    title: "Инновационный подход",
    description: "Мы используем современные технологии и методологии для создания решений, которые остаются актуальными долгие годы."
  },
  {
    title: "Опытная команда", 
    description: "Наша команда состоит из сертифицированных специалистов с многолетним опытом в разработке сложных проектов."
  },
  {
    title: "Прозрачность процессов",
    description: "Вы всегда в курсе этапов разработки. Регулярные отчеты и демонстрации позволяют контролировать процесс."
  },
  {
    title: "Гибкость и адаптивность",
    description: "Мы быстро адаптируемся под изменения требований и готовы вносить корректировки в процессе работы."
  },
  {
    title: "Поддержка после запуска",
    description: "Мы не бросаем проекты после сдачи. Обеспечиваем техническую поддержку и дальнейшее развитие."
  }
];

export default function Forth() {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <section className="relative py-12 md:py-16 lg:py-20 bg-gray-200 dark:bg-gray-800 animate-pulse overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
          </div>
          <div className="w-full space-y-6 md:space-y-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-24 bg-gray-300 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn(
      "relative py-12 md:py-16 lg:py-20 overflow-hidden px-4 sm:px-6 lg:px-8",
      theme === 'light' ? "bg-gray-50/30" : "bg-gray-900"
    )}>
      {/* Декоративные элементы */}
      <div className={cn(
        "absolute top-10 left-5 w-24 h-24 rounded-full blur-2xl opacity-60",
        theme === 'light'
          ? "bg-gradient-to-br from-[#D24A43]/5 to-[#b53a34]/10"
          : "bg-gradient-to-br from-[#D24A43]/15 to-[#b53a34]/10"
      )}></div>
      <div className={cn(
        "absolute bottom-10 right-5 w-20 h-20 rounded-full blur-2xl opacity-40",
        theme === 'light'
          ? "bg-gradient-to-br from-[#D24A43]/5 to-[#b53a34]/10"
          : "bg-gradient-to-br from-[#D24A43]/15 to-[#b53a34]/10"
      )}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex flex-col items-center gap-4 md:gap-6">
            <H type="h1" className={theme === 'light' ? "text-gray-900" : "text-white"}>
              Почему выбирают ASMO
            </H>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D24A43] to-[#b53a34] rounded-full"></div>
          </div>
          <P 
            center={true} 
            className={cn(
              "text-lg md:text-xl mt-4 md:mt-6",
              theme === 'light' ? "text-gray-600" : "text-white"
            )}
          >
            Наш подход сочетает креативность и строгое внимание к технологическому качеству. 
            Мы не просто создаём, мы инвестируем в успех вашего проекта
          </P>
        </div>

        {/* Линейный список преимуществ */}
        <div className={cn(style.customNumberedList, "w-full space-y-6 md:space-y-8")}>
          {benefitItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "group relative rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-300",
                theme === 'light'
                  ? "bg-white border-gray-100 hover:border-[#D24A43]/30"
                  : "bg-gray-800 border-gray-700 hover:border-[#D24A43]/40"
              )}
            >
              <BenefitCart 
                title={item.title}
                description={item.description}
                index={index+1}
         
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}