export interface RecipeType {
  id: number;
  isFeatured: boolean;
  creator: string;
  serves: number;
  category: string;
  imageFilename: string;
  title: string;
  description: string;
  ingredients: string[];
  isGlutenFree: boolean;
  isDairyFree: boolean;
  isSugarFree: boolean;
  stars: number;
  cookingTime: CookingTime;
  recipe: string;
  directions: string[];
}

type CookingTime = {
  prep: number;
  cook: number;
  total: number;
};

export interface RecipeCategoryType {
  id: number;
  category: string;
  imageFilename: string;
  title: string;
}

export const RecipeCategoriesData = [
  {
    id: 1,
    category: "meal",
    imageFilename: "snacks.png",
    title: "Snacks",
  },
];

export const RecipesData: RecipeType[] = [
  {
    id: 1,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "naked_baked_chicken_wings.png",
    title: "Naked Baked Chicken Wings",
    description:
      "These wings are a culinary celebration of simplicity and taste perfect for any game night. Each wing is meticulously seasoned with just salt and pepper, then lovingly coated in a light sheen of olive oil. Baked to a golden perfection, they boast a crispy exterior that yields to the succulent, tender meat within.",
    ingredients: [
      "2 lbs chicken wings",
      "2 tablespoons olive oil",
      "1 teaspoon salt, or to taste",
      "1/2 teaspoon black pepper, or to taste",
      "1/4 teaspoon garlic powder, or to taste",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 10,
      cook: 45,
      total: 55,
    },
    recipe: "Naked Baked Chicken Wings",
    directions: [
      "Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper or a silicone baking mat for easy cleanup.",
      "Prepare the wings: Pat the chicken wings dry with paper towels to ensure they get crispy when baked. Removing moisture is key to achieving perfection.",
      "Season the wings: Place the wings in a large bowl. Drizzle with olive oil, and sprinkle evenly with salt, pepper, and garlic powder. Toss the wings until they are well coated with the seasoning.",
      "Arrange the wings: Lay the wings out on the prepared baking sheet in a single layer, making sure they are not touching. This helps the heat circulate around each wing, cooking them evenly.",
      "Bake to perfection: Place the baking sheet in the preheated oven and bake for 45 minutes, or until the wings are golden brown and the skin is crispy. Halfway through, flip the wings to ensure even cooking.",
      "Rest and serve: Once done, remove the wings from the oven and let them rest for a few minutes. This allows the juices to redistribute, keeping the wings moist on the inside.",
      "Serve your Naked Baked Chicken Wings hot and crispy!  Serve with a side of roasted Cauliflower or sweet potato.",
    ],
  },

  {
    id: 2,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "chicken_mushroom_brown_rice.png",
    title: "Chicken and Portobello Mushroom Brown Rice Bowl",
    description:
      "Savor the rich flavors of this wholesome Chicken and Portabella Mushroom Brown Rice Bowl. Tender, juicy chicken breast pairs perfectly with earthy portobello mushrooms and nutty brown rice. Steamed broccoli adds a pop of color and a boost of nutrients, making this dish not only satisfying but also balanced. Ideal for a weeknight dinner or meal prep for the week ahead, this bowl is a delightful way to nourish your body and please your palate.",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "4 large portabella mushrooms, sliced",
      "1 cup brown rice",
      "2 tablespoons olive oil",
      "Salt and pepper, to taste",
      "1 head of broccoli, cut into florets",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 15,
      cook: 30,
      total: 45,
    },
    recipe: "Chicken and Portobello Mushroom Brown Rice Bowl",
    directions: [
      "Prep the ingredients: Wash and slice the mushrooms, cut the broccoli into florets, and season the chicken with salt and pepper.",
      "Cook the rice: Start by cooking the brown rice as it takes the longest. Follow the package instructions for best results.",
      "Cook the chicken: While the rice is cooking, heat a tablespoon of olive oil in a skillet over medium heat and cook the chicken breasts until they reach an internal temperature of 165°F (74°C), about 6-7 minutes per side. Let them rest before slicing.",
      "Sauté the mushrooms: In the same skillet, add the remaining olive oil and the portobello slices. Season with salt and pepper, and cook until golden and tender.",
      "Steam the broccoli: This can be done quickly in a steamer or in the microwave while the chicken is resting.",
      "Assemble the bowls: Layer the brown rice, sliced chicken, sautéed mushrooms, and steamed broccoli in bowls.",
      "Serve immediately and enjoy a deliciously balanced and flavorful meal that&apos;s sure to become a new favorite!",
    ],
  },
  {
    id: 3,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "avocado_toast.png",
    title: "Classic Avocado on Gluten Free Toast or Bagel:",
    description:
      "This simple and tasty recipe features ripe mashed avocado on gluten-free toast.  It is seasoned with salt, pepper, and can be topped with your favorite toppings like tomato or parsley.",
    ingredients: [
      "2 slices of gluten-free bread",
      "1 ripe avocado, smashed with a fork",
      "2 fried eggs cooked to your liking (optional).",
      "1/4 teaspoon kosher salt",
      "Freshly ground black pepper",
      "Olive oil",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 4,
    cookingTime: {
      prep: 10,
      cook: 2,
      total: 12,
    },
    recipe: "Classic Avocado on Gluten Free Toast or Bagel:",
    directions: [
      "Toast the bread or bagel.",
      "Mash avocado, mix with salt, pepper and olive oil.",
      "Spread the mashed avocado over the bread.",
      "Top with fried eggs (if wanting to add more protein).",
      "Enjoy! 🥑🍞",
    ],
  },
  {
    id: 4,
    isFeatured: true,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "lamb_chili.png",
    title: "Gluten-Free Lamb Chili",
    description:
      "Indulge in the hearty warmth of our Gluten-Free Lamb Chili, a comforting blend of tender ground lamb, aromatic onions, and garlic, simmered to perfection with a mix of kidney and black beans in a rich tomato base. This savory dish is seasoned with just the right amount of salt and pepper, and cooked in olive oil for a wholesome, gluten-free meal that promises to satisfy your cravings and nourish your soul.",
    ingredients: [
      "500g ground lamb",
      "1 large onion, diced",
      "3 cloves garlic, minced",
      "Salt and pepper, to taste",
      "1/2 teaspoon chili powder",
      "2 tablespoons olive oil",
      "1 can (400g) kidney beans, drained and rinsed",
      "1 can (400g) black beans, drained and rinsed",
      "1 can (400g) diced tomatoes",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 15,
      cook: 60,
      total: 75,
    },
    recipe: "Gluten-Free Lamb Chili",
    directions: [
      "Heat the olive oil in a large pot over medium heat.",
      "Add the diced onion and minced garlic to the pot. Cook until the onions are translucent, and the garlic is fragrant, about 5 minutes.",
      "Season the ground lamb with salt and pepper, chili powder, then add it to the pot. Cook until the lamb is browned, breaking it apart with a spoon, about 10 minutes.",
      "Once the lamb is cooked through, add the kidney beans, black beans, and diced tomatoes to the pot. Stir to combine all the ingredients.",
      "Bring the mixture to a boil, then reduce the heat to low and let it simmer. Cover the pot and cook for 45 minutes, stirring occasionally.",
      "After 45 minutes, check the seasoning and adjust the salt and pepper if necessary.",
      "Continue to simmer uncovered for an additional 15 minutes to thicken the chili if desired.",
      "Serve with a smile.",
    ],
  },
  {
    id: 5,
    isFeatured: false,
    creator: "Anonymous",
    serves: 5,
    category: "Dinner",
    imageFilename: "mac_minus_the_cheese.png",
    title: "Gluten-Free Vegan Mac Minus The Cheese with Sweet Potatoes:",
    description:
      "This creamy “mac minus the cheese” incorporates sweet potatoes for a delightful twist. It&apos;s perfect for fall and holiday gatherings. Plus, it&apos;s gluten-free and dairy-free! Here&apos;s how to make it.",
    ingredients: [
      "1 cup gluten-free pasta (elbows or shells)",
      "1 medium sweet potato, peeled and diced",
      "1/4 teaspoon garlic powder",
      "1/4 teaspoon onion powder",
      "1 tablespoon lemon juice (optional)",
      "1/4 teaspoon turmeric (for color)",
      "5 tablespoon of olive oil (more if desired)",
      "Salt and pepper to taste",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 20,
      cook: 10,
      total: 30,
    },
    recipe: "Gluten-Free Vegan Mac Minus The Cheese with Sweet Potatoes:",
    directions: [
      "Cook the gluten-free pasta according to the package instructions until al dente. Drain and set aside.",
      "In a medium pot, bring water to a boil. Add the diced potatoes and cook until they are fork-tender, about 10 minutes.",
      "Drain the vegetables, reserving some of the cooking water.",
      "In a blender, combine the cooked potatoes, garlic powder, onion powder, lemon juice, turmeric,  and olive oil. Blend until smooth, adding reserved cooking water as needed to achieve a creamy consistency.",
      "Season the sauce with salt and pepper to taste.",
      "Pour the sauce over the cooked pasta and stir until well combined.",
      "Serve hot and enjoy your comforting bowl of gluten-free vegan mac minus the cheese!",
    ],
  },
  {
    id: 6,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "turkey_burgers.png",
    title: "Gluten-Free Turkey Burgers",
    description:
      "Indulge in the wholesome goodness of Gluten-Free Turkey Burgers, a healthy twist on a classic favorite. These juicy burgers are seasoned with a simple blend of salt, pepper, chopped onion, and garlic powder. Each patty served on a gluten-free bun and crowned with fresh, creamy avocado slices for a satisfying meal that’s both familiar and delicious. Perfect for a quick lunch or a casual dinner, these turkey burgers are sure to delight everyone at the table.",
    ingredients: [
      "1 pound ground turkey",
      "1/2 cup gluten-free bread crumbs",
      "1/4 cup finely chopped onion",
      "1 teaspoon garlic powder",
      "1/2 teaspoon salt",
      "1/2 teaspoon ground black pepper",
      "4 gluten-free buns",
      "1 ripe avocado, sliced",
      "Optional toppings: lettuce, tomato,",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 15,
      cook: 10,
      total: 25,
    },
    recipe: "Gluten-Free Turkey Burgers",
    directions: [
      "Prepare the Patties: In a large bowl, combine the ground turkey, gluten-free bread crumbs, chopped onion, garlic powder, salt, and pepper. Mix the ingredients together until well combined.  Divide the mixture into four equal portions and shape each into a patty.",
      "Cook the Burgers:  Heat a grill pan or skillet over medium heat. Place the patties on the grill pan and cook for about 5 minutes on each side, or until the internal temperature reaches 165°F (74°C) and the juices run clear.",
      "Assemble the Burgers: Toast the gluten-free buns if desired. Place each cooked patty on a bun bottom. Top each patty with avocado slices and any other desired toppings. Cover with the bun tops.",
      "Serve: Serve the burgers hot with your choice of side dishes, such as a green salad or sweet potato fries.",
    ],
  },
  {
    id: 7,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "roasted_chicken.png",
    title: "Roasted Whole Chicken with Vegetables",
    description:
      "Savor the heartwarming flavors of home with this rustic and comforting recipe for roasted whole chicken, accompanied by the earthy sweetness of sweet potatoes, the aromatic savoriness of onions, and the pungent warmth of garlic. This dish is a celebration of simple ingredients coming together to create a symphony of flavors that evoke the essence of a family feast.",
    ingredients: [
      "1 whole chicken (about 4 to 5 pounds)",
      "4 sweet potatoes, peeled and cut into chunks",
      "1 large onion, peeled and quartered",
      "8 cloves of garlic, peeled",
      "4 tablespoons olive oil",
      "2 tablespoons fresh thyme leaves (add rosemary if preferred)",
      "Salt and freshly ground black pepper to taste",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 20,
      cook: 90,
      total: 110,
    },
    recipe: "Roasted Whole Chicken with Vegetables",
    directions: [
      "Preheat your oven to 375°F (190°C).",
      "Rinse the chicken inside and out with cold water, then pat dry with paper towels.",
      "Season the cavity of the chicken with salt and pepper, and stuff it with half of the onion quarters and 4 cloves of garlic.",
      "Rub the outside of the chicken with 2 tablespoons of olive oil, then season generously with salt, pepper, and thyme.",
      "Toss the sweet potatoes, remaining onion quarters, and garlic with the remaining 2 tablespoons of olive oil, salt, and pepper in a roasting pan.",
      "Place the chicken on top of the vegetables in the roasting pan.",
      "Roast in the preheated oven for about 1 hour and 30 minutes, or until the chicken is golden brown and the juices run clear when you cut between a leg and thigh.",
      "Baste the chicken with the pan juices every 30 minutes.",
      "Check the internal temperature of the chicken with a meat thermometer, which should read 165°F (74°C) when inserted into the thickest part of the thigh.",
      "Remove the chicken and vegetables from the oven and let them rest for 10 minutes before carving.",
    ],
  },
  {
    id: 8,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "shrimp_mango_salad.png",
    title: "Shrimp and Mango Salad",
    description:
      "A refreshing and light salad with grilled shrimp, sweet mango, avocado, and mixed greens, dressed in a citrus vinaigrette.",
    ingredients: [
      "1 pound shrimp, peeled and deveined",
      "1 ripe mango, diced",
      "1 avocado, diced",
      "4 cups mixed greens",
      "1/4 cup olive oil",
      "Juice of 1 lime",
      "Salt and pepper, to taste",
      "1 tablespoon honey (optional)",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: false,
    stars: 5,
    cookingTime: {
      prep: 15,
      cook: 10,
      total: 25,
    },
    recipe: "Shrimp and Mango Salad",
    directions: [
      "Grill the shrimp until pink and cooked through, set aside to cool.",
      "In a large bowl, combine the mixed greens, mango, and avocado.",
      "Whisk together the olive oil, lime juice, salt, pepper, and honey if using, to make the dressing.",
      "Add the grilled shrimp to the salad and toss with the dressing.",
      "Serve chilled or at room temperature.",
    ],
  },
  {
    id: 9,
    isFeatured: false,
    creator: "Anonymous",
    serves: 4,
    category: "Dinner",
    imageFilename: "turkey_meatballs_zucchini_noodles.png",
    title: "Turkey Meatballs with Zucchini Noodles",
    description:
      "Juicy turkey meatballs served over a bed of light and healthy zucchini noodles, topped with a flavorful tomato sauce.",
    ingredients: [
      "1 pound ground turkey",
      "1 cup breadcrumbs (gluten-free)",
      "1 egg",
      "2 garlic cloves, minced",
      "1 teaspoon salt",
      "1/2 teaspoon pepper",
      "2 tablespoons olive oil",
      "4 zucchinis, spiralized",
      "2 cups tomato sauce",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: false,
    stars: 5,
    cookingTime: {
      prep: 20,
      cook: 20,
      total: 40,
    },
    recipe: "Turkey Meatballs with Zucchini Noodles",
    directions: [
      "In a bowl, combine the ground turkey, breadcrumbs, egg, garlic, salt, and pepper. Form into meatballs.",
      "Heat olive oil in a skillet over medium heat and cook meatballs until browned and cooked through.",
      "In a separate pan, cook the spiralized zucchini noodles for 2-3 minutes, or until tender.",
      "Serve the meatballs over the zucchini noodles, topped with tomato sauce.",
    ],
  },
];
