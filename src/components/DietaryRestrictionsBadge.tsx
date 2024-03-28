"use client";

import React from "react";
import {
  glutenFreeSvgGrey,
  glutenFreeSvgGold,
  dairyFreeSvgGrey,
  dairyFreeSvgGold,
  sugarFreeSvgGrey,
  sugarFreeSvgGold,
} from "@/constants/dietaryRestrictionSvgs";

type ButtonDietaryRestrictionsProps = {
  buttonColour?: string;
  iconType?: string;
  onClick?: () => void;
};

const ButtonDietaryRestrictions: React.FC<ButtonDietaryRestrictionsProps> = ({
  buttonColour = "gold",
  iconType = "glutenFree",
  onClick,
}) => {
  switch (iconType) {
    case "dairyFree":
      return (
        <div>
          {buttonColour === "grey" ? (
            <div onClick={onClick}> {dairyFreeSvgGrey} </div>
          ) : (
            <div onClick={onClick}> {dairyFreeSvgGold}</div>
          )}
        </div>
      );
    case "sugarFree":
      return (
        <div>
          {buttonColour === "grey" ? (
            <div onClick={onClick}>{sugarFreeSvgGrey} </div>
          ) : (
            <div onClick={onClick}>{sugarFreeSvgGold}</div>
          )}
        </div>
      );
    case "glutenFree":
    default:
      return (
        <div>
          {buttonColour === "grey" ? (
            <div onClick={onClick}>{glutenFreeSvgGrey} </div>
          ) : (
            <div onClick={onClick}>{glutenFreeSvgGold}</div>
          )}
        </div>
      );
  }
};

export default ButtonDietaryRestrictions;
