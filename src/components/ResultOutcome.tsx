import { copyrightData } from "@/constant";
import Campaign from "./Campaign";
import ContentWriting from "./ContentWriting";
import SMM from "./SMM";
import VideoContent from "./VideoContent";
import Link from "next/link";

const ResultOutcome: React.FC = () => {
  return (
    <section className="py-10">
      <div className="contain flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-2xl md:text-[56px] font-semibold text-center">
          Results and Outcomes
        </h2>
        <div className="w-full bg-white p-4 rounded-3xl flex flex-col items-start justify-start gap-12">
          <SMM />
          <ContentWriting />
          <VideoContent />
          <Campaign />
          <div className="flex flex-col items-start justify-start gap-8 w-full py-6">
            <h3 className="text-xl md:text-[40px] font-semibold text-primary">
              Copywriting
            </h3>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center">
              {copyrightData.map((content) => (
                <Link
                  key={content.id}
                  href={content.href}
                  className="w-[341px] min-h-[72px] md:min-h-[100px] border border-primary shadow-sm flex items-center justify-center text-base md:text-2xl font-semibold text-dark rounded-3xl"
                >
                  {content.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultOutcome;
