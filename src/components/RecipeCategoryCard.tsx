import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RecipeCategoryType } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RecipeCategoryPropsType {
  category: RecipeCategoryType;
}

const RecipeCategoryCard: React.FC<RecipeCategoryPropsType> = ({
  category,
}) => {
  // <div className="h-32 w-32 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
  return (
    <div>
      <Card
        key={category.id}
        // className="flex h-full max-w-[600px] flex-col justify-between overflow-hidden rounded-md border-none shadow-md sm:max-w-[300px]"
        className="m-0 h-full w-full rounded-none border-none bg-transparent p-0"
      >
        <CardHeader className="m-0 h-full w-full rounded-none border-none bg-transparent p-0 ">
          <Link
            href={`/recipes/category/${category.title.toLowerCase()}`}
            className=" relative h-[200px]"
          >
            <div className="relative">
              <div className="relative h-[200px] lg:h-[300px]">
                <Image
                  src={`/images/recipes/categories/${category.imageFilename}`}
                  alt={`${category.title} image`}
                  fill={true}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 z-50">
                <h3 className=" w-screen bg-gradient-to-r from-brandDark/60 to-brandDark/20 py-2 pl-5 text-xl font-normal  text-brandLight drop-shadow-xl ">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
};

export default RecipeCategoryCard;
