import Image from "next/image";
import Link from "next/link";

const ContentWriting: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full">
      <div className="flex flex-col items-start justify-start gap-1">
        <h3 className="text-xl md:text-[40px] font-semibold text-primary">
          Content
          <span className="block text-primary-2"> Writing</span>
        </h3>
        <p className="text-sm md:text-base text-dark font-normal text-justify md:text-start max-w-[725px]">
          A collection of published articles, blog posts, content calendars, and
          marketing materials showcasing my expertise in storytelling, SEO, and
          brand messaging across various industries.
        </p>
      </div>
      <div className="w-full hidden md:grid grid-cols-3 gap-4">
        <div className="h-fit grid grid-cols-1 gap-4">
          <Link
            href="https://www.linkedin.com/posts/platnova_platnova-settingsail-financialplanning-activity-7285974181261811712-_6lK?utm_source=share&utm_medium=member_ios"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content1.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link
            href="https://blog.platnova.com/4-things-to-keep-track-of-to-achieve-your-financial-goals-cf61d9ae5855"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content4.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
        </div>
        <div className="h-fit grid grid-cols-1 gap-4">
          <Link
            href="https://www.linkedin.com/posts/platnova_platnova-settingsail-financialplanning-activity-7285974181261811712-_6lK?utm_source=share&utm_medium=member_ioshttps://www.linkedin.com/posts/platnova_platnova-octobermilestones-fintech-activity-7247953732846452738-tb_5?utm_source=share&utm_medium=member_ios"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content2.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link href="https://nifecreates.art.blog/" target="_blank" className="shadow-sm">
            <Image
              src="/images/writing/content5.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
        </div>
        <div className="h-fit grid grid-cols-1 gap-4">
          <Link
            href="https://blog.platnova.com/understanding-inflation-how-it-affects-your-money-and-what-you-can-do-about-it-e0801b3f88ec?gi=e57555618183"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content3.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link
            href="https://docs.google.com/document/d/16hSCMt6MIoTob4oO0gvSFNgS3QAFl70XCf2p0k_KJEY/edit?tab=t.0"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content6.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
        </div>
      </div>
      {/* Mobile View */}
      <div className="w-full md:hidden grid grid-cols-2 gap-4">
        <div className="h-fit grid grid-cols-1 gap-4">
          <Link
            href="https://www.linkedin.com/posts/platnova_platnova-settingsail-financialplanning-activity-7285974181261811712-_6lK?utm_source=share&utm_medium=member_ios"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content1.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link
            href="https://blog.platnova.com/4-things-to-keep-track-of-to-achieve-your-financial-goals-cf61d9ae5855"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content4.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>{" "}
          <Link
            href="https://docs.google.com/document/d/16hSCMt6MIoTob4oO0gvSFNgS3QAFl70XCf2p0k_KJEY/edit?tab=t.0"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content6.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
        </div>
        <div className="h-fit grid grid-cols-1 gap-4">
          <Link
            href="https://www.linkedin.com/posts/platnova_platnova-settingsail-financialplanning-activity-7285974181261811712-_6lK?utm_source=share&utm_medium=member_ioshttps://www.linkedin.com/posts/platnova_platnova-octobermilestones-fintech-activity-7247953732846452738-tb_5?utm_source=share&utm_medium=member_ios"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content2.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link
            href="https://nifecreates.art.blog/"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content5.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
          <Link
            href="https://blog.platnova.com/understanding-inflation-how-it-affects-your-money-and-what-you-can-do-about-it-e0801b3f88ec?gi=e57555618183"
            target="_blank"
            className="shadow-sm"
          >
            <Image
              src="/images/writing/content3.png"
              alt="contents image"
              width={150}
              height={150}
              className="w-full h-fit object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentWriting;
