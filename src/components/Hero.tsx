import Image from "next/image";
import HeroImage from "/public/images/hero.png";
import HeroLineIcon from "/public/icons/heroLine.svg";
import GmailIcon from "/public/icons/gmail.svg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full py-10 md:py-24">
      <div className="contain">
        <div className="w-full grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[400px_1fr] gap-5 md:gap-0">
          <div className="w-full">
            <h1 className="text-6xl md:text-8xl font-normal !font-abril-fatface">
              Hi!
            </h1>
          </div>
          <div className="w-full relative flex flex-col items-center justify-center md:items-start md:justify-start gap-5">
            <h4 className="text-3xl md:text-5xl font-normal relative md:left-10">
              I am
            </h4>
            <h2 className="text-center text-5xl md:text-[80px] md:leading-20 font-bold !font-agbalumo relative z-10 md:-left-14">
              Odeyemi <br /> ‘Nifemi’ <br /> Kehinde
            </h2>
            <div className="relative md:absolute md:-top-24 md:left-42 max-w-[350px] md:h-[570px]">
              <Image
                src={HeroImage}
                alt="Odeyemi ‘Nifemi’ Kehinde Profile Image"
                className="object-contain"
              />
            </div>
            <div className="relative flex items-start justify-start gap-3 md:-left-14">
              <h4 className="text-[40px] md:text-5xl font-normal">a</h4>
              <p className="text-[20px] md:text-[22px] font-normal text-start">
                Social Media Specialist <br />
                Brand Storyteller <br />
                Content Strategist
              </p>
              <Image
                src={HeroLineIcon}
                alt="vector line"
                className="object-contain absolute -bottom-8 left-2.5"
              />
            </div>
            <div className="w-full flex items-center justify-center pt-8">
              <button
                type="button"
                className="flex items-center justify-center gap-x-2 ourline-none bg-dark rounded-lg px-4 py-2 min-h-12"
              >
                <Image src={GmailIcon} alt="gmail icon" />
                <span className="text-base font-semibold">Hire me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
