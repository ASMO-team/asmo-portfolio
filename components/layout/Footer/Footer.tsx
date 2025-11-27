'use client';
import { H } from "@/components/typography/Htag/H";
import { P } from "@/components/typography/Ptag/P";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";

export default function Footer() {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <footer className="grid grid-cols-1 md:grid-cols-3 bg-gray-300 dark:bg-gray-700 rounded-[25px] mx-4 md:mx-8 animate-pulse">
        {[1, 2, 3].map((item) => (
          <div key={item} className="py-6 md:py-10 px-4 border-b md:border-b-0 md:border-r border-gray-400 dark:border-gray-600">
            <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded w-1/3 mb-2.5"></div>
            <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-2/3"></div>
          </div>
        ))}
      </footer>
    );
  }

  return (
    <footer className={classNames(
      "grid grid-cols-1 md:grid-cols-3 rounded-[25px] mx-4 md:mx-8 items-center transition-colors duration-300",
      theme === 'light' 
        ? "bg-[#D9D9D9] text-gray-900 border-black" 
        : "bg-gray-800 text-white border-gray-600"
    )}>
      {/* Первая секция */}
      <div className={classNames(
        "py-6 md:py-10 px-4 md:pl-[28.5px] flex flex-col gap-2.5 border-b md:border-b-0 md:border-r transition-colors duration-300",
        theme === 'light' ? "border-[#000000]" : "border-gray-600"
      )}>
        <H type="h3" uppercase={true} isNotCenter={true} className={theme === 'light' ? "text-gray-900" : "text-white"}>
          ASMO
        </H>
        <P className={theme === 'light' ? "text-gray-900" : "text-white"}>
          Создаём будущее бизнеса с помощью ИИ.
        </P>
      </div>

      {/* Вторая секция */}
      <div className={classNames(
        "py-6 md:py-10 px-4 md:pl-8 flex flex-col gap-2.5 border-b md:border-b-0 md:border-r transition-colors duration-300",
        theme === 'light' ? "border-[#000000]" : "border-gray-600"
      )}>
        <H type="h3" isNotCenter={true} className={theme === 'light' ? "text-gray-900" : "text-white"}>
          Контакты
        </H>
        <div className="flex flex-col">
          <a 
            href="mailto:contact@mail.ru" 
            className={classNames(
              "hover:underline transition-colors duration-300",
              theme === 'light' ? "text-gray-900 hover:text-[#D24A43]" : "text-gray-200 hover:text-white"
            )}
          >
            contact@mail.ru
          </a>
          <a 
            href="#" 
            className={classNames(
              "hover:underline transition-colors duration-300",
              theme === 'light' ? "text-gray-900 hover:text-[#D24A43]" : "text-gray-200 hover:text-white"
            )}
          >
            Telegram
          </a>
        </div>
      </div>

      {/* Третья секция */}
      <div className="py-6 md:py-10 px-4 md:pl-8 flex flex-col gap-2.5">
        <H type="h3" isNotCenter={true} className={theme === 'light' ? "text-gray-900" : "text-white"}>
          Права
        </H>
        <div className={classNames(
          "flex flex-col transition-colors duration-300",
          theme === 'light' ? "text-gray-900" : "text-gray-200"
        )}>
          <div>© ASMO 2025</div>
          <div>Все права защищены</div>
        </div>
      </div>
    </footer>
  );
}