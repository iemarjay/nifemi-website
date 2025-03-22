import Image from "next/image";
import AboutImage from "/public/images/about.png";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-10">
      <div className="w-[90%] mr-auto flex flex-col items-start justify-start gap-5 md:gap-10">
        <div className="w-[90%] md:w-[55%] xl:w-[67%] ml-auto">
          <h2 className="text-4xl md:text-[80px] md:leading-24 font-semibold text-start">
            About <span className="text-primary-2 block">Me</span>
          </h2>
        </div>
        <div className="w-full bg-white grid grid-cols-1 md:grid-cols-[400px_1fr] rounded-tr-3xl rounded-br-3xl">
          <div className="order-2 md:order-1 relative px-4 md:pl-8 pb-4 flex flex-row md:flex-col items-center justify-center md:items-start md:justify-end gap-2">
            <div className="w-[208px] h-fit translate-y-8 md:w-[350px] md:h-[500px] md:absolute md:bottom-40">
              <Image
                src={AboutImage}
                alt="about image"
                className="object-contain"
              />
            </div>
            <p className="text-xs md:text-base font-normal text-primary max-w-[300px]">
              Crafting your compelling brand story, connecting your audience,
              driving real results.
            </p>
          </div>
          <div className="order-1 md:order-2 px-4 pt-8 md:py-8">
            <p className="text-xs md:text-[20px] font-normal text-dark max-w-[700px] text-justify">
              With 3+ years of experience as a seasoned social media manager and
              content strategist, I’ve helped brands & businesses elevate their
              online presence, drive engagement, and boost conversions. My
              expertise includes crafting compelling content, brand
              storytelling, and developing effective social media strategies.
              <br />
              <br />
              I&apos;ve delivered impressive results, including 25% follower
              growth in 6 months and 50% increase in website traffic. Notably, I
              grew Platnova&apos;s Instagram presence from scratch to 20k
              followers in under a year and helped VCAP exceed its goal of a 100
              course applications. Let&apos;s collaborate to amplify your
              brand&apos;s online presence!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
