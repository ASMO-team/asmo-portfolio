import { H } from "../Htag/H";
import { P } from "../Ptag/P";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 bg-[#D9D9D9] rounded-[25px] mx-4 md:mx-8 items-center ">
      {/* Первая секция */}
      <div className="py-6 md:py-10 px-4 md:pl-[28.5px] flex flex-col gap-2.5 border-b md:border-b-0 md:border-r border-[#000000]">
        <H type="h3" uppercase={true} isNotCenter={true}>ASMO</H>
        <P>Создаём будущее бизнеса с помощью ИИ.</P>
      </div>

      {/* Вторая секция */}
      <div className="py-6 md:py-10 px-4 md:pl-8 flex flex-col gap-2.5 md:border-b-0 border-b md:border-r border-[#000000]">
        <H type="h3" isNotCenter={true}>Контакты</H>
        <div className="flex flex-col">
          <a href="mailto:contact@mail.ru" className="hover:underline">contact@mail.ru</a>
          <a href="#" className="hover:underline">Telegram</a>
        </div>
      </div>

      {/* Третья секция */}
      <div className="py-6 md:py-10 px-4 md:pl-8 flex flex-col gap-2.5">
        <H type="h3" isNotCenter={true}>Права</H>
        <div className="flex flex-col">
          <div>© ASMO 2025</div>
          <div>Все права защищены</div>
        </div>
      </div>
    </footer>
  );
}