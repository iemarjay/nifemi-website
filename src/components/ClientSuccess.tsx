import { portfolioHighlights } from "@/constant";
import Image from "next/image";

const ClientSuccess: React.FC = () => {
  return (
    <section id="client" className="py-10">
      <div className="contain flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-2xl md:text-[56px] font-semibold text-center">
          Client’s Success
        </h2>
        <div className="w-full bg-white p-4 rounded-3xl flex flex-col items-start justify-start gap-8">
          <h3 className="text-xl md:text-[40px] font-semibold text-primary">
            Portfolio
            <span className="block text-primary-2"> Highlights</span>
          </h3>
          <div className="w-full flex flex-col items-start justify-start gap-6">
            {portfolioHighlights.map((portfolio) => (
              <div
                key={portfolio.id}
                className="bg-grey p-4 rounded-3xl grid grid-cols-1 md:grid-cols-[250px_1fr] items-start justify-start gap-6"
              >
                <div className="w-full flex flex-col items-start  md:items-center justify-center gap-3">
                  <Image
                    src={portfolio.imageSrc}
                    alt={`${portfolio.title} image`}
                    width={150}
                    height={150}
                    priority
                  />
                  <div className="w-full flex items-center justify-center max-w-[150px]">
                    <h3 className="max-w-[132px] text-center text-xl md:text-[30px] text-dark font-semibold">
                      {portfolio.title}
                    </h3>
                  </div>
                </div>
                <div className="w-full max-w-[778px] ml-auto">
                  {portfolio.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
