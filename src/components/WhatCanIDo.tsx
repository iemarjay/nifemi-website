import { whatIDoData } from "@/constant";

const WhatCanIDo: React.FC = () => {
  return (
    <section className="py-12">
      <div className="contain flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl md:text-[56px] font-semibold text-center">
          What I can do for you
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-start justify-start">
          {whatIDoData.map((action) => (
            <div
              key={action.id}
              className="w-full h-fit bg-white rounded-3xl p-5 flex flex-col items-start justify-start gap-5"
            >
              {action.title}
              {action.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatCanIDo;
