'use client';
import { H } from "../Htag/H";
import { P } from "../Ptag/P";
import Image from "next/image";

export default function First() {
    return (
        <section className="relative flex flex-col w-full min-h-[300px] md:max-h-[431px] md:h-[431px]">
            {/* Оптимизированный фон с Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/backrounedForSection1.jpg"
                    alt="Фон секции"
                    fill
                    className="object-cover opacity-50 hover:opacity-60 transition-opacity duration-300"
                    priority
                    sizes="100vw"
                />
            </div>
            
            {/* Контент */}
            <div className="flex flex-col items-center justify-center h-full py-4 md:py-8 gap-4 md:gap-6 px-4">
                <div className="flex flex-col items-center gap-3 md:gap-4 text-center w-full max-w-4xl">
                    <H type="h2">
                        Создаём цифровые решения, <br className="hidden sm:block" />
                        которые двигают бизнес вперёд
                    </H>
                    <P center={true}   >
                        Боты, сайты, приложения и ИИ-системы — всё, что нужно для роста вашего проекта.<br className="hidden sm:block" /> 
                        Мы объединяем дизайн, технологии и искусственный интеллект,<br className="hidden sm:block" /> 
                        чтобы ваши проекты выглядели современно, работали идеально<br className="hidden sm:block" /> 
                        и развивались вместе с рынком 
                    </P>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center">
                    <button className="bg-[#D24A43] text-black font-semibold rounded-lg py-2 px-3 text-xs sm:text-sm hover:bg-[#b53a34] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                        Обсудить проект                
                    </button>
                    <button className="bg-black text-[#D24A43] rounded-lg py-2 px-4 text-xs sm:text-sm font-semibold hover:bg-white hover:border hover:border-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                        Портфолио
                    </button>
                </div>
            </div>
        </section>
    );
}