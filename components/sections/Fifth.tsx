'use client';
import { H } from "../typography/Htag/H";
import { P } from "../typography/Ptag/P";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";

export default function Fifth() {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <section className="relative py-16 md:py-20 lg:py-24 bg-gray-200 dark:bg-gray-800 animate-pulse overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
            <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
          </div>
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-10 md:mb-12"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-48 h-12 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
            <div className="w-48 h-12 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classNames(
      "relative py-16 md:py-20 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8",
      theme === 'light' 
        ? "bg-gradient-to-br from-gray-50 to-white" 
        : "bg-gradient-to-br from-gray-900 to-gray-800"
    )}>
      {/* Декоративные элементы */}
      <div className={classNames(
        "absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-60",
        theme === 'light'
          ? "bg-gradient-to-br from-[#D24A43]/10 to-[#b53a34]/5"
          : "bg-gradient-to-br from-[#D24A43]/20 to-[#b53a34]/10"
      )}></div>
      <div className={classNames(
        "absolute bottom-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-40",
        theme === 'light'
          ? "bg-gradient-to-br from-[#D24A43]/10 to-[#b53a34]/5"
          : "bg-gradient-to-br from-[#D24A43]/20 to-[#b53a34]/10"
      )}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex flex-col items-center gap-4 md:gap-6">
            <H type="h1" className={theme === 'light' ? "text-gray-900" : "text-white"}>
              Давайте создадим ваш проект вместе
            </H>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D24A43] to-[#b53a34] rounded-full"></div>
          </div>
        </div>

        <P center={true} className={classNames(
          "text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed",
          theme === 'light' ? "text-gray-600" : "text-white"
        )}>
          Расскажите нам, чего вы хотите достичь — и мы предложим лучшее цифровое решение, которое принесёт реальную пользу вашему бизнесу.
        </P>

        {/* Форма или кнопка для связи */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-[#D24A43] to-[#b53a34] text-white font-semibold rounded-xl py-3 px-8 text-sm md:text-base hover:from-[#b53a34] hover:to-[#9a2d28] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full sm:w-auto min-w-48">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Обсудить проект
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
          
          <button className={classNames(
            "group relative bg-transparent border-2 font-semibold rounded-xl py-3 px-8 text-sm md:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-48",
            theme === 'light'
              ? "border-gray-300 text-gray-700 hover:border-[#D24A43] hover:text-[#D24A43]"
              : "border-gray-500 text-white hover:border-[#D24A43] hover:text-[#D24A43]"
          )}>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Посмотреть кейсы
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Дополнительная информация */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 md:mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">24/7</div>
            <div className={classNames(
              "text-sm mt-1",
              theme === 'light' ? "text-gray-600" : "text-white"
            )}>поддержка</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">1-3 дня</div>
            <div className={classNames(
              "text-sm mt-1",
              theme === 'light' ? "text-gray-600" : "text-white"
            )}>на оценку</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">0 ₽</div>
            <div className={classNames(
              "text-sm mt-1",
              theme === 'light' ? "text-gray-600" : "text-white"
            )}>предоплаты</div>
          </div>
        </div>
      </div>
    </section>
  );
}