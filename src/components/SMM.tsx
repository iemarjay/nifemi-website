import Image from "next/image";

const SMM: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full">
      <h3 className="text-xl md:text-[40px] font-semibold text-primary">
        SMM
        <span className="block text-primary-2"> Results</span>
      </h3>
      <div className="w-full hidden md:grid grid-cols-3 gap-3">
        <div className="h-fit grid grid-cols-1 gap-2">
          <Image
            src="/images/results/result1.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result4.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result7.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="h-fit grid grid-cols-1 gap-4">
          <Image
            src="/images/results/result2.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result5.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result8.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result10.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="h-fit grid grid-cols-1 gap-4">
          <Image
            src="/images/results/result3.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result6.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result9.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result11.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result12.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="w-full md:hidden grid grid-cols-2 gap-3">
        <div className="h-fit grid grid-cols-1 gap-2">
          <Image
            src="/images/results/result1.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result3.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result5.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result9.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result11.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result8.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="h-fit grid grid-cols-1 gap-2">
          <Image
            src="/images/results/result2.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result4.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result6.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result7.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result10.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
          <Image
            src="/images/results/result12.png"
            alt="smm image"
            width={150}
            height={150}
            className="w-full h-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SMM;
