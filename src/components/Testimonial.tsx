import { testimonialData } from "@/constant";
import Image from "next/image";

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-12">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl md:text-[56px] font-semibold text-center">
          Testimonials
        </h2>
        <p className="text-dark text-base md:text-2xl text-center">
          WORD ON THE STREET
        </p>
      </div>
      <div className="w-full flex flex-col gap-8">
        {testimonialData.map((content) => (
          <div
            key={content.id}
            className={`flex flex-col items-start justify-start w-[88%] md:w-[70%] ${
              content.left ? "mr-auto" : "ml-auto"
            }`}
          >
            <div className="px-4 md:px-6 flex items-center justify-start gap-4">
              <div className="w-20 h-20 translate-y-4 md:translate-y-8 md:w-40 md:h-40">
                <Image
                  src={content.avatar}
                  alt={`${content.name} avatar`}
                  width={150}
                  height={150}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h3 className="text-base md:text-4xl font-semibold">
                  {content.name}
                </h3>
                <p className="text-xs md:text-lg font-normal">{content.role}</p>
              </div>
            </div>
            <div
              className={`w-full bg-primary-2 p-4 md:p-14 ${
                content.left
                  ? "rounded-tr-3xl rounded-br-3xl"
                  : "rounded-tl-3xl rounded-bl-3xl"
              }`}
            >
              <p className="text-xs md:text-[20px] font-normal max-w-[680px] text-justify">
                {content.quotes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
