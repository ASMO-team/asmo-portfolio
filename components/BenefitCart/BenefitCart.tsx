// BenefitCart.tsx
import { H } from "../Htag/H"
import { P } from "../Ptag/P"
import { BenefitCartProps } from "./BenefitCart.props"

interface BenefitCartWithIndex extends BenefitCartProps {
  index: number;
}

const BenefitCart = ({ description, title, index }: BenefitCartWithIndex) => {
    return (
        <li className="flex items-start w-full pb-6 md:pb-8 last:pb-0 gap-4 md:gap-6">
            {/* Красный квадратик с номером */}
            <div className="shrink-0 w-10 h-10 bg-[#D24A43] text-white rounded-lg flex items-center justify-center font-bold text-lg mt-1">
                {index}
            </div>
            
            {/* Контент */}
            <div className="flex flex-col gap-3 md:gap-4 justify-start items-start w-full">
                <H type="h3">
                    {title}
                </H>
                <P>
                    {description}
                </P>
            </div>
        </li>
    )
}

export default BenefitCart