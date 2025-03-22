import { VideoData } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const VideoContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full py-6">
      <h3 className="text-xl md:text-[40px] font-semibold text-primary">
        Video
        <span className="block text-primary-2"> Writing</span>
      </h3>
      <div className="w-full grid gird-cols-2 md:grid-cols-3 gap-4">
        {VideoData.map((content) => (
          <div key={content.id} className="h-fit w-full">
            <Link href={content.href} target="_blank">
              <Image
                src={content.imageSrc}
                alt="contents image"
                width={150}
                height={150}
                className="w-full h-fit object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContent;
