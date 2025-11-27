'use client';
import { H } from "../typography/Htag/H";
import { P } from "../typography/Ptag/P";
import { useTheme } from "@/hooks/useTheme";
import classNames from 'classnames';

export default function Second() {
    const { theme, mounted } = useTheme();

    if (!mounted) {
        return (
            <section className="relative flex flex-col py-12 md:py-16 lg:py-20 justify-center items-center bg-gray-200 dark:bg-gray-800 animate-pulse gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 max-w-4xl lg:max-w-5xl mx-auto w-full">
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
            "relative flex flex-col py-12 md:py-16 lg:py-20 justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8",
            theme === 'light' 
                ? "bg-white text-gray-900" 
                : "bg-gray-900 text-white" 
        )}>
            {/* Декоративные фоновые элементы */}
            <div className={classNames(
                "absolute top-10 left-10 w-20 h-20 rounded-full blur-xl opacity-60",
                theme === 'light'
                    ? "bg-linear-to-br from-[#D24A43]/10 to-[#b53a34]/5"
                    : "bg-linear-to-br from-[#D24A43]/20 to-[#b53a34]/10"
            )}></div>
            <div className={classNames(
                "absolute bottom-10 right-10 w-16 h-16 rounded-full blur-xl opacity-40",
                theme === 'light'
                    ? "bg-linear-to-br from-[#D24A43]/10 to-[#b53a34]/5"
                    : "bg-linear-to-br from-[#D24A43]/20 to-[#b53a34]/10"
            )}></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 max-w-4xl lg:max-w-5xl mx-auto">
                <div className="text-center space-y-4">
                    <H 
                        type="h2" 
                        className={classNames(
                            "leading-tight",
                            theme === 'light' ? "text-gray-900" : "text-white" // Изменено на text-white
                        )}
                    >
                        Мы — ASMO. Команда, которая объединяет
                        <br className="hidden sm:inline" /> 
                        <span className="bg-linear-to-r from-[#D24A43] to-[#b53a34] bg-clip-text text-transparent">
                            технологии и эстетику
                        </span>
                    </H>
                    
                    {/* Декоративный разделитель */}
                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-linear-to-r from-[#D24A43] to-[#b53a34] rounded-full opacity-80"></div>
                    </div>
                </div>

                <P 
                    center={true} 
                    className={classNames(
                        "text-lg md:text-xl leading-relaxed md:leading-loose max-w-3xl lg:max-w-4xl",
                        theme === 'light' ? "text-gray-700" : "text-white" // Изменено на более светлый серый
                    )}
                >
                    Мы помогаем предпринимателям и продуктовым
                    <br className="hidden md:inline" />
                    командам масштабировать свой бизнес и переходить
                    <br className="hidden md:inline" />
                    на новый цифровой уровень. Мы охватываем весь цикл создания продукта: от детальной
                    <br className="hidden lg:inline" /> 
                    проработки концепции и дизайна до высокотехнологичной разработки и запуска.
                    <br className="hidden lg:inline" />
                    Работаем быстро, чётко и с вниманием к каждой детали, используя последние достижения в
                    <br className="hidden lg:inline" /> 
                    области ИИ для повышения качества и эффективности.
                </P>

                {/* Дополнительные метрики или фичи */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4 md:mt-6">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">50+</div>
                        <div className={classNames(
                            "text-sm md:text-base mt-1",
                            theme === 'light' ? "text-gray-600" : "text-gray-300" // Изменено на более светлый серый
                        )}>
                            успешных проектов
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">3+</div>
                        <div className={classNames(
                            "text-sm md:text-base mt-1",
                            theme === 'light' ? "text-gray-600" : "text-gray-300" // Изменено на более светлый серый
                        )}>
                            года опыта
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#D24A43]">15+</div>
                        <div className={classNames(
                            "text-sm md:text-base mt-1",
                            theme === 'light' ? "text-gray-600" : "text-gray-300" // Изменено на более светлый серый
                        )}>
                            технологий
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}