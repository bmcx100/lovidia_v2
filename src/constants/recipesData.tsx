export interface RecipeType {
  id: number;
  isFeatured: boolean;
  creator: string;
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

export const RecipesData = [
  {
    id: 1,
    isFeatured: false,
    creator: "Anonymous",
    category: "Dinner",
    imageFilename: "quinoa_stuffed_bell_peppers.png",
    title: "Quinoa Stuffed Bell Peppers",
    description:
      "Bell peppers filled with quinoa, black beans, corn, and tomatoes, topped with melted cheese, creating a hearty and nutritious meal.",
    ingredients: [
      "4 large bell peppers, halved and seeds removed",
      "1 cup quinoa, cooked",
      "1 can black beans, drained and rinsed",
      "1 cup corn kernels",
      "1 cup diced tomatoes",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "Salt and pepper, to taste",
      "1 cup shredded cheese (optional for dairy-free)",
    ],
    isGlutenFree: true,
    isDairyFree: false,
    isSugarFree: true,
    stars: 4,
    cookingTime: {
      prep: 15,
      cook: 25,
      total: 40,
    },
    recipe: "Quinoa Stuffed Bell Peppers",
    directions: [
      "Preheat the oven to 375°F (190°C).",
      "Mix cooked quinoa, black beans, corn, tomatoes, cumin, paprika, salt, and pepper in a bowl.",
      "Stuff each bell pepper half with the quinoa mixture and place in a baking dish.",
      "Top with shredded cheese, if using, and cover with foil.",
      "Bake for 20 minutes, then remove the foil and bake for an additional 5 minutes or until the cheese is melted and bubbly.",
      "Serve hot and enjoy.",
    ],
  },

  {
    id: 2,
    isFeatured: true,
    creator: "Anonymous",
    category: "Dinner",
    imageFilename: "grilled_salmon_asparagus.png",
    title: "Grilled Salmon with Asparagus",
    description:
      "Fresh salmon fillets are grilled until tender and flaky, served alongside garlic-roasted asparagus for a nutritious and satisfying meal.",
    ingredients: [
      "4 salmon fillets (about 6 ounces each)",
      "1 pound asparagus, trimmed",
      "3 tablespoons olive oil",
      "2 garlic cloves, minced",
      "Salt and pepper, to taste",
      "Lemon wedges, for serving",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 10,
      cook: 20,
      total: 30,
    },
    recipe: "Grilled Salmon with Asparagus",
    directions: [
      "Preheat grill to medium-high heat. Rinse salmon fillets and pat dry. Toss asparagus with 2 tablespoons olive oil, garlic, salt, and pepper.",
      "Lay asparagus on the grill in a single layer. Grill for 3-4 minutes on each side, or until tender and slightly charred. Remove and keep warm.",
      "Brush salmon with remaining olive oil, season with salt and pepper. Place skin-side down on grill. Cook for 5-6 minutes per side or until cooked through.",
      "Serve grilled salmon with asparagus on the side. Garnish with lemon wedges.",
    ],
  },
  {
    id: 3,
    isFeatured: false,
    creator: "Anonymous",
    category: "Dinner",
    imageFilename: "chicken_broccoli_stir_fry.png",
    title: "Chicken and Broccoli Stir-Fry",
    description:
      "Tender chicken pieces and broccoli florets stir-fried in a savory gluten-free sauce, creating a quick and healthy meal.",
    ingredients: [
      "1 pound chicken breast, cut into bite-sized pieces",
      "2 cups broccoli florets",
      "1 tablespoon olive oil",
      "2 garlic cloves, minced",
      "1 tablespoon ginger, minced",
      "1/4 cup gluten-free soy sauce",
      "1 tablespoon cornstarch",
      "1/2 cup chicken broth",
      "Salt and pepper, to taste",
      "Sesame seeds, for garnish",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: false,
    stars: 4,
    cookingTime: {
      prep: 10,
      cook: 15,
      total: 25,
    },
    recipe: "Chicken and Broccoli Stir-Fry",
    directions: [
      "Heat the olive oil in a large skillet or wok over medium-high heat.",
      "Add the chicken pieces, season with salt and pepper, and stir-fry until golden brown and cooked through.",
      "Remove the chicken from the skillet and set aside.",
      "In the same skillet, add the broccoli, garlic, and ginger, stir-frying for about 3 minutes.",
      "Return the chicken to the skillet and mix with the broccoli.",
      "In a small bowl, whisk together the gluten-free soy sauce, cornstarch, and chicken broth.",
      "Pour the sauce over the chicken and broccoli, stirring to coat.",
      "Cook for an additional 2-3 minutes or until the sauce has thickened.",
      "Garnish with sesame seeds before serving.",
    ],
  },
  {
    id: 4,
    isFeatured: false,
    creator: "Anonymous",
    category: "Dinner",
    imageFilename: "beef_vegetable_kebabs.png",
    title: "Beef and Vegetable Kebabs",
    description:
      "Skewers of marinated beef and colorful vegetables, grilled to perfection for a flavorful and healthy meal.",
    ingredients: [
      "1 pound beef (sirloin or tenderloin), cut into 1-inch cubes",
      "1 red bell pepper, cut into 1-inch pieces",
      "1 green bell pepper, cut into 1-inch pieces",
      "1 yellow bell pepper, cut into 1-inch pieces",
      "1 large onion, cut into 1-inch pieces",
      "2 zucchinis, sliced",
      "1/4 cup olive oil",
      "3 tablespoons soy sauce (gluten-free)",
      "2 garlic cloves, minced",
      "1 teaspoon black pepper",
      "1 teaspoon salt",
      "Wooden or metal skewers",
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
    recipe: "Beef and Vegetable Kebabs",
    directions: [
      "In a large bowl, combine olive oil, gluten-free soy sauce, minced garlic, salt, and pepper to make the marinade.",
      "Add the beef cubes to the marinade and let sit for at least 15 minutes, or overnight in the refrigerator for more flavor.",
      "Preheat the grill to medium-high heat.",
      "Thread the marinated beef, bell peppers, onions, and zucchinis onto skewers, alternating between the meat and vegetables.",
      "Place the skewers on the grill and cook for 10-15 minutes, turning occasionally, until the beef is cooked to your liking and the vegetables are tender and slightly charred.",
      "Serve the kebabs hot off the grill.",
    ],
  },
  {
    id: 5,
    isFeatured: false,
    creator: "Anonymous",
    category: "Dinner",
    imageFilename: "ratatouille.png",
    title: "Ratatouille",
    description:
      "A classic French dish made with a medley of vegetables, simmered in a rich tomato sauce, embodying the essence of Provencal cuisine.",
    ingredients: [
      "2 eggplants, sliced into rounds",
      "3 zucchinis, sliced into rounds",
      "2 bell peppers (red and yellow), chopped",
      "2 onions, thinly sliced",
      "4 tomatoes, sliced into rounds",
      "4 garlic cloves, minced",
      "1 cup tomato sauce",
      "2 tablespoons olive oil",
      "1 teaspoon thyme",
      "1 teaspoon rosemary",
      "Salt and pepper, to taste",
      "Fresh basil, for garnish",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 3,
    cookingTime: {
      prep: 20,
      cook: 40,
      total: 60,
    },
    recipe: "Ratatouille",
    directions: [
      "Preheat the oven to 375°F (190°C).",
      "In a large baking dish, spread the tomato sauce evenly and sprinkle with half of the minced garlic, thyme, and rosemary.",
      "Arrange slices of eggplants, zucchinis, bell peppers, onions, and tomatoes in an alternating pattern on top of the sauce.",
      "Drizzle with olive oil and season with salt and pepper. Sprinkle the remaining garlic, thyme, and rosemary over the vegetables.",
      "Cover the dish with foil and bake for 40 minutes.",
      "Remove the foil and bake for an additional 20 minutes or until the vegetables are tender and the top is slightly browned.",
      "Garnish with fresh basil before serving.",
    ],
  },
  {
    id: 6,
    category: "Dinner",
    imageFilename: "butternut_squash_risotto.png",
    title: "Butternut Squash Risotto",
    description:
      "A creamy and comforting risotto with sweet butternut squash, Parmesan cheese, and aromatic herbs, perfect for a cozy dinner.",
    ingredients: [
      "1 medium butternut squash, peeled and diced",
      "1 cup Arborio rice",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "4 cups vegetable stock",
      "1 cup white wine",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons olive oil",
      "Salt and pepper, to taste",
      "Fresh sage, for garnish",
    ],
    isGlutenFree: true,
    isDairyFree: false,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 15,
      cook: 30,
      total: 45,
    },
    recipe: "Butternut Squash Risotto",
    directions: [
      "Heat olive oil in a large pan over medium heat. Add the onion and garlic, sautéing until translucent.",
      "Add the Arborio rice and stir to coat in the oil. Pour in the wine and cook until absorbed.",
      "Add the butternut squash and a cup of vegetable stock. Stir frequently, adding more stock as it absorbs, until the rice is creamy and the squash is tender.",
      "Stir in the Parmesan cheese and season with salt and pepper.",
      "Serve garnished with fresh sage.",
    ],
  },
  {
    id: 7,
    category: "Dinner",
    imageFilename: "thai_green_curry_tofu.png",
    title: "Thai Green Curry with Tofu",
    description:
      "A vibrant and spicy Thai green curry with tofu and mixed vegetables, infused with aromatic herbs and coconut milk.",
    ingredients: [
      "1 block of firm tofu, cubed",
      "2 cups mixed vegetables (like bell peppers, carrots, and broccoli)",
      "1 can coconut milk",
      "2 tablespoons green curry paste",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "1 tablespoon ginger, minced",
      "1 tablespoon vegetable oil",
      "Salt, to taste",
      "Fresh basil, for garnish",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 10,
      cook: 20,
      total: 30,
    },
    recipe: "Thai Green Curry with Tofu",
    directions: [
      "Heat oil in a large pan over medium heat. Sauté onion, garlic, and ginger until fragrant.",
      "Add the green curry paste and cook for 1 minute, stirring continuously.",
      "Pour in the coconut milk and bring to a simmer.",
      "Add the tofu and mixed vegetables, cooking until the vegetables are tender.",
      "Season with salt and serve hot, garnished with fresh basil.",
    ],
  },
  {
    id: 8,
    category: "Dinner",
    imageFilename: "lentil_soup_spinach.png",
    title: "Lentil Soup with Spinach",
    description:
      "A hearty and nutritious lentil soup packed with spinach, carrots, and aromatic spices, perfect for a warm and comforting meal.",
    ingredients: [
      "1 cup dried lentils, rinsed",
      "4 cups vegetable broth",
      "2 cups water",
      "1 large onion, chopped",
      "2 carrots, diced",
      "2 garlic cloves, minced",
      "2 cups spinach leaves",
      "1 teaspoon ground cumin",
      "1 teaspoon ground coriander",
      "Salt and pepper, to taste",
      "2 tablespoons olive oil",
    ],
    isGlutenFree: true,
    isDairyFree: true,
    isSugarFree: true,
    stars: 5,
    cookingTime: {
      prep: 10,
      cook: 30,
      total: 40,
    },
    recipe: "Lentil Soup with Spinach",
    directions: [
      "Heat the olive oil in a large pot over medium heat. Add the onion, carrots, and garlic, sautéing until the onions are translucent.",
      "Stir in the lentils, vegetable broth, water, cumin, and coriander. Bring to a boil, then reduce heat and simmer until lentils are tender.",
      "Add the spinach and cook until wilted. Season with salt and pepper to taste.",
      "Serve hot and enjoy.",
    ],
  },
  {
    id: 9,
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
    id: 10,
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
