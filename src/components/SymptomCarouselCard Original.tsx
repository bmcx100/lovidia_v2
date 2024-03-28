import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
// import { SymptomDataType } from "@/constants/symptomsData";

interface SymptomDataPropsType {
  symptom: SymptomDataType;
}

const SymptomCarouselCard: React.FC<SymptomDataPropsType> = ({ symptom }) => {
  return (
    <div>
      <Link href={`/symptoms/${symptom.title.toLowerCase()}`}>
        <div className="embla__slide__number ">
          <div className="mb-1 mt-3  text-sm  font-normal uppercase">{symptom.title}</div>
          <div className="h-[110px] w-auto overflow-clip">
            <Image
              src={`/images/symptoms/${symptom.imageUrl}`}
              alt={`${symptom.title} Image`}
              width={183}
              height={110}
              className="mt-4"
            />
          </div>
          <Button variant="outline" className="mt-4 h-6 w-3/4 text-xs font-bold">
            Learn More
          </Button>
          <Button className="mt-4 h-6 w-3/4 text-xs font-bold">Need Help</Button>
        </div>
      </Link>
    </div>
  );
};

export default SymptomCarouselCard;
