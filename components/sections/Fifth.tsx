import { H } from "../Htag/H";
import { P } from "../Ptag/P";
import style from './sections.module.css';
import BenefitCart from "../BenefitCart/BenefitCart";
import cn from "classnames";
 

export default function Fifth() {
  return (
    <section className="flex flex-col gap-0 mx-[60px]">
        <H type="h1" isNotCenter={true}>Давайте создадим ваш проект вместе</H>
        <P>Расскажите нам, чего вы хотите достичь — и мы предложим лучшее цифровое решение, которое принесёт реальную пользу вашему бизнесу.</P>
    </section>
  );
}