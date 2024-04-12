import Star from "@/assets/icons/star.svg";
import StarHalf from "@/assets/icons/star-half.svg";
import StarEmpty from "@/assets/icons/star-empty.svg";

interface ReviewProps {
  name: string;
  date: string;
  rating: string;
  content: string;
}

const Review = ({ name, date, rating, content }: ReviewProps) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-700 p-4">
      <div className="flex justify justify-between">
        <div className="flex items-center justify-start gap-2">
          <div className="w-7 h-7 text-center rounded-full bg-red-500">
            {name[0]}
          </div>
          <span className="text-sm lg:text-base">{name}</span>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          {[1, 2, 3, 4, 5].map((i) => {
            const r = parseFloat(rating);

            if (i <= r) {
              return <img src={Star} alt="star" />;
            } else if (i - 0.5 === r) {
              return <img src={StarHalf} alt="star" />;
            } else {
              return <img src={StarEmpty} alt="star" />;
            }
          })}
        </div>
      </div>

      <div className="text-start">{content}</div>

      <div className="flex justify-start">
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Review;
