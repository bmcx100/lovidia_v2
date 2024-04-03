import React from "react";
import RecipeCarouselCard from "@/components/RecipeCarouselCard";
import { RecipeCategoriesData, RecipesData } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface RecipeCarouselPropsType {
  category: string;
}

const RecipeCarousel: React.FC<RecipeCarouselPropsType> = ({ category }) => {
  return (
    <div className="">
      <div
        id="cards"
        className="mt-8 w-screen overflow-clip"
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
            {RecipesData.map((recipe) => {
              if (category === recipe.category && !recipe.isFeatured) {
                return (
                  <CarouselItem
                    key={recipe.id}
                    // className="ml-0.5 h-[213px] basis-3/5 bg-orange-200"
                    className="ml-4 basis-3/5 p-0 lg:basis-1/3"
                  >
                    <RecipeCarouselCard key={recipe.id} recipe={recipe} />
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

export default RecipeCarousel;
