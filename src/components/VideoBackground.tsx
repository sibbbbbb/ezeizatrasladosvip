import videoSource from "@/assets/videos/video.mp4";

const VideoBackground = () => {
  return (
    <div className="relative h-full hidden lg:block">
      <video
        className="w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        {/* Agrega más fuentes de video según sea necesario para compatibilidad con diferentes navegadores */}
      </video>
    </div>
  );
};

export default VideoBackground;
