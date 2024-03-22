import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image1 from "@/assets/images/1.jpg";
import Image1Thumbnail from "@/assets/images/thumbnails/1_thumbnail.jpg";
import Image2 from "@/assets/images/2.jpg";
import Image2Thumbnail from "@/assets/images/thumbnails/2_thumbnail.jpg";
import Image3 from "@/assets/images/3.jpg";
import Image3Thumbnail from "@/assets/images/thumbnails/3_thumbnail.jpg";
import Image4 from "@/assets/images/4.jpg";
import Image4Thumbnail from "@/assets/images/thumbnails/4_thumbnail.jpg";
import Image5 from "@/assets/images/5.jpg";
import Image5Thumbnail from "@/assets/images/thumbnails/5_thumbnail.jpg";
import Image6 from "@/assets/images/6.jpg";
import Image6Thumbnail from "@/assets/images/thumbnails/6_thumbnail.jpg";

const Gallery = () => {
  const images = [
    {
      img: Image1,
      thumbnail: Image1Thumbnail,
    },
    {
      img: Image2,
      thumbnail: Image2Thumbnail,
    },
    {
      img: Image3,
      thumbnail: Image3Thumbnail,
    },
    {
      img: Image4,
      thumbnail: Image4Thumbnail,
    },
    {
      img: Image5,
      thumbnail: Image5Thumbnail,
    },
    {
      img: Image6,
      thumbnail: Image6Thumbnail,
    },
  ];

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10 mt-10">
        {images.map(({ img, thumbnail }, index) => (
          <PhotoView key={index} src={img}>
            <img
              src={thumbnail}
              alt={`Ezeiza Traslados Vip Taxi ${index + 1}`}
              className="mx-auto w-40 h-40 2xl:w-52 2xl:h-52 cursor-pointer object-cover"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
