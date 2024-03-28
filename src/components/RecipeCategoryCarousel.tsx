import React from "react";
import RecipeCategoryCard from "@/components/RecipeCategoryCard";
import { RecipeCategoriesData } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RecipeCategoryCarouselPropsType {
  category: string;
}

const RecipeCategoryCarousel: React.FC<RecipeCategoryCarouselPropsType> = ({
  category,
}) => {
  return (
    <div className="">
      <div className="ml-2 mt-5 flex justify-start">
        <h3 className="text-lg font-light tracking-wide  text-brandLight">
          {category}
        </h3>
      </div>
      <div
        id="cards"
        className="mt-2 w-screen overflow-clip"
        // className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-10 border-none bg-none"
      >
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className=" w-screen max-w-[1024px] "
        >
          <CarouselContent className="">
            {RecipeCategoriesData.map((recipeCategory) => {
              if (category === recipeCategory.category) {
                return (
                  <CarouselItem
                    key={recipeCategory.id}
                    // className="ml-0.5 h-[213px] basis-3/5 bg-orange-200"
                    className="ml-4 basis-3/5 p-0 lg:basis-1/3"
                  >
                    <RecipeCategoryCard
                      key={recipeCategory.id}
                      category={recipeCategory}
                    />
                  </CarouselItem>
                );
              }
            })}
            {/* 
        <CarouselItem> this </CarouselItem>
        <CarouselItem> this </CarouselItem>
        <CarouselItem> this </CarouselItem>
        <CarouselItem> this </CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious className="left-2  opacity-100" />
          <CarouselNext className="right-2 opacity-100" />
        </Carousel>
      </div>
    </div>
  );
};

export default RecipeCategoryCarousel;

{
  /* <div className="mt-5">
  <h3>Meal Categories</h3>
  <div
    id="cards"
    // className="grid sm:grid-cols-4 gap-x-4 gap-y-10 border-none bg-none"
    className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-10 border-none bg-none"
  >
    {/* {RecipeCategoriesData.map((recipeCategory) => (
      <RecipeCategoryCarousel
        key={recipeCategory.id}
        category={recipeCategory}
      />
    ))} */
}
{
  /* <RecipeCategoryCarousel />; */
}
//   </div>
// </div> */}
