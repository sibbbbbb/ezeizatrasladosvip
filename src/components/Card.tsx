interface CardProps {
  title: string;
  principalPrice: string;
  secondaryPrice: string;
}

const Card = ({ title, principalPrice, secondaryPrice }: CardProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full lg:w-11/12 h-40 lg:h-56 bg-black bg-opacity-90 p-5 lg:p-8">
      <h2 className="text-[#F9BC49] text-4xl md:text-5xl uppercase font-semibold w-20">
        {title}
      </h2>
      <div className="flex flex-col justify-center items-center font-semibold">
        <span className="text-4xl 2xl:text-5xl text-white">
          {principalPrice}
        </span>
        <span className="text-[#5B408F]">{secondaryPrice}</span>
      </div>
    </div>
  );
};

export default Card;
