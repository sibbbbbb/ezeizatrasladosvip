import CheckIcon from "@/assets/icons/check.svg";

interface BenefitProps {
  title: string;
}

const Benefit = ({ title }: BenefitProps) => {
  return (
    <div className="flex flex-row justify-start lg:justify-center items-center gap-x-2">
      <img src={CheckIcon} alt="check" />
      <span className="text-lg 2xl:text-xl font-bold text-white">{title}</span>
    </div>
  );
};

export default Benefit;
