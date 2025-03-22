import { StrategyData } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Campaign: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full py-6">
      <div className="flex flex-col items-start justify-start gap-1">
        <h3 className="text-xl md:text-[40px] font-semibold text-primary">
          Campaigns
          <span className="block text-primary-2"> Strategies</span>
        </h3>
        <p className="text-sm md:text-base text-dark font-normal text-justify md:text-start max-w-[725px]">
          This section highlights social media strategies, content plans, and
          campaigns I’ve developed and executed to drive brand growth,
          engagement, and conversions.
        </p>
      </div>
      <div className="w-full grid gird-cols-2 lg:grid-cols-4 gap-4">
        {StrategyData.map((content) => (
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

export default Campaign;
