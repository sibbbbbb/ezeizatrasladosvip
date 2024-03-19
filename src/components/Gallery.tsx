import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image1 from "@/assets/images/1.jpg";
import Image2 from "@/assets/images/2.jpg";
import Image3 from "@/assets/images/3.jpg";
import Image4 from "@/assets/images/4.jpg";
import Image5 from "@/assets/images/5.jpg";
import Image6 from "@/assets/images/6.jpg";

const Gallery = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10 mt-10">
        {images.map((image, index) => (
          <PhotoView key={index} src={image}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="mx-auto w-40 h-40 2xl:w-52 2xl:h-52 cursor-pointer object-cover"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
