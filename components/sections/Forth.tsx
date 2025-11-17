// Forth.tsx
import { H } from "../Htag/H";
import { P } from "../Ptag/P";
import style from './sections.module.css';
import BenefitCart from "../BenefitCart/BenefitCart";
import cn from "classnames";

// Массив данных для 5 карточек
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
  return (
    <section className="flex flex-col items-center gap-8 md:gap-16 lg:gap-[110px] px-4 md:px-10">
      <div className="text-center max-w-4xl">
        <H type="h1">Почему выбирают ASMO</H>
        <P center={true}>
          Наш подход сочетает креативность и строгое внимание к технологическому качеству. 
          Мы не просто создаём, мы инвестируем в успех вашего проекта
        </P>
      </div>
<ul className={cn(style.customNumberedList, "w-full")}>
  {benefitItems.map((item, index) => (
    <BenefitCart 
      key={index}
      title={item.title}
      description={item.description}
      index={index+1}
    />
  ))}
</ul>
    </section>
  );
}