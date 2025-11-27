'use client';
import { H } from "../typography/Htag/H";
import { P } from "../typography/Ptag/P";
import { useTheme } from "@/hooks/useTheme";
import classNames from 'classnames';
import Image from 'next/image';

export default function First() {
    const { theme, mounted } = useTheme();

    if (!mounted) {
        return (
            <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gray-200 dark:bg-gray-800 animate-pulse">
                <div className="flex flex-col items-center justify-center h-full py-8 md:py-16 lg:py-20 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
                    <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-full max-w-2xl space-y-2">
                        <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={classNames(
            "relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden transition-all duration-500",
            theme === 'dark' ? "bg-gradient-to-br from-gray-900/20 to-gray-800/20" : "bg-gradient-to-br from-white/5 to-gray-100/5"
        )}>
            {/* Фоновое изображение */}
            <div className="absolute inset-0">
                <Image
                    src="/backrounedForSection1.jpg"
                    alt="Фоновая картинка"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={90}
                />
            </div>
            
            {/* Оверлей с изменением в зависимости от темы */}
            <div className={classNames(
                "absolute inset-0 bg-gradient-to-br backdrop-blur-[1px] transition-all duration-500",
                theme === 'dark' 
                    ? "from-black/75 via-black/55 to-black/65" 
                    : "from-black/65 via-black/45 to-black/55"
            )} />
            
            {/* Дополнительный слой с изменением в зависимости от темы */}
            <div className={classNames(
                "absolute inset-0 transition-all duration-500",
                theme === 'dark' ? "bg-purple-900/10" : "bg-blue-900/5"
            )} />
            
            {/* Контент */}
            <div className="relative flex flex-col items-center justify-center h-full py-8 md:py-16 lg:py-20 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 md:gap-6 text-center w-full max-w-4xl mx-auto">
                    <H type="h2" className="text-white font-bold [text-shadow:0_4px_8px_rgb(0_0_0/60%)]">
                        Создаём цифровые решения,{" "}
                        <br className="hidden sm:block" />
                        которые двигают бизнес вперёд
                    </H>
                    <P 
                        center={true} 
                        className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium [text-shadow:0_2px_4px_rgb(0_0_0/50%)] max-w-3xl"
                    >
                        Боты, сайты, приложения и ИИ-системы — всё, что нужно для роста вашего проекта.{" "}
                        <br className="hidden sm:block" /> 
                        Мы объединяем дизайн, технологии и искусственный интеллект,{" "}
                        <br className="hidden lg:block" /> 
                        чтобы ваши проекты выглядели современно, работали идеально{" "}
                        <br className="hidden lg:block" /> 
                        и развивались вместе с рынком
                    </P>
                </div>
                
                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto justify-center mt-2 md:mt-4">
                    <button className={classNames(
                        "group relative bg-gradient-to-r text-white font-semibold rounded-xl py-3 px-8 text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto min-w-40",
                        theme === 'dark' 
                            ? "from-[#D24A43] to-[#b53a34] hover:from-[#b53a34] hover:to-[#9a2d28]" 
                            : "from-[#E25B54] to-[#c54a43] hover:from-[#c54a43] hover:to-[#a93a34]"
                    )}>
                        <span className="flex items-center justify-center gap-2">
                            Обсудить проект
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <button className={classNames(
                        "group relative border-2 font-semibold rounded-xl py-3 px-8 text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-40",
                        theme === 'dark' 
                            ? "border-white text-white hover:bg-white hover:text-black" 
                            : "border-white text-white hover:bg-white hover:text-black"
                    )}>
                        <span className="flex items-center justify-center gap-2">
                            Портфолио
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
                
                {/* Индикатор прокрутки */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="animate-bounce">
                        <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}