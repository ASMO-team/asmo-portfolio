import { H } from "../Htag/H";
import { P } from "../Ptag/P";

export default function Second(){
    return (
        <section className="flex flex-col py-8 md:py-12 lg:py-[58px] justify-center items-center bg-white gap-4 md:gap-6 lg:gap-7 px-4">
            <H type="h2"  >
                Мы — ASMO. Команда, которая объединяет<br className="hidden sm:inline" /> технологии и эстетику
            </H>
            <P center={true}  >
                Мы помогаем предпринимателям и продуктовым<br className="hidden md:inline" />
                командам масштабировать свой бизнес и переходить<br className="hidden md:inline" />
                на новый цифровой уровень. Мы охватываем весь цикл создания продукта: от детальной<br className="hidden md:inline" /> проработки концепции и дизайна до высокотехнологичной разработки и запуска.<br className="hidden md:inline" />
                Работаем быстро, чётко и с вниманием к каждой детали, используя последние достижения в<br className="hidden md:inline" /> области ИИ для повышения качества и эффективности.
            </P>
        </section>
    );
}