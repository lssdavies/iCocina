const { Recipe } = require("../models");

const dbRecipeData = [
  {
    title: "Spaghetti Carbonara",
    ingredient: `
    4 slices of bacon \n 
    4 cloves of garlic, minced \n 
    2 tbsp Parsley, fresh leaves, chopped \n 
    2 large eggs \n 
    8oz spaghetti \n 
    kosher salt and black pepper \n 
    1/2 cup parmesan \n 
    2 tbs of water`,       
    instruction: `
    1. In a large pot, cook the spaghetti according to the instructions on the package \n 
    2. In a large sauce pan, cook the slices of bacon \n 
    3. Add minced garlic \n 
    4. Saute for about 1 minute \n 
    5. In a bowl, combine eggs and parmesan, mix well \n 
    6. Add the 8 oz of cooked spaghetti, a pinch of salt and pepper, the egg and cheese mixture. \n
    7. Stir well \n 
    8. Add 2 tbs of water and continue to stir \n 
    9. Top with a pinch of salt, pepper and parsley`,
    calories: 574,
    category_id: 3,
    user_id: 1, 
    difficulty_id: 1,
    // does comment_id need to be in this table.
    //comment_id:
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_300,w_300/v1642319955/spaghetti_carbonara_sxmdni.jpg"
  },
  {
    title: "Ricotti Manicotti with Tomato Sauce",
    ingredient: `
    Course salt and pepper \n 
    1 package (8 ounces) manicotti, cooked, drained, and cooled \n 
    2 containers (15 ounces each) part-skim ricotta cheese \n 
    2 large eggs, lightly beaten \n 
    1/2 teaspoon dried thyme \n 
    1/2 teaspoon dried oregano \n 
    1 1/2 cups shredded Parmesan cheese \n 
    4 cups Basic Tomato Sauce`,
    instruction: `
    1. Cook pasta, drain, and cool. Meanwhile, preheat oven to 375 degrees. In a large bowl, whisk together ricotta, eggs, thyme, oregano, and 1 cup Parmesan. Season with 1 teaspoon salt and 1/2 teaspoon pepper. \n 
    2. Using a plastic bag for filling, stuff cooled pasta shells (about 3 tablespoons ricotta mixture in each). \n 
    3. Coat bottom of a 9-by-13-inch baking dish with 2 cups tomato sauce. Line up manicotti in baking dish, and cover with 2 cups sauce. Sprinkle with remaining 1/2 cup shredded Parmesan. Bake until bubbly, about 30 minutes.`,
    calories: 399,
    category_id: 3,
    user_id: 2, 
    difficulty_id: 3,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,h_300,w_300/v1642376499/ricotti_manicotti_with_tomato_sauce_ufesjm.jpg"
  },
  {
    title: "Chicken Enchiladas",
    ingredient: `
    1 tablespoon canola oil \n 
    1 small onion, finely chopped \n 
    1 garlic clove, minced \n 
    1 jalapeno, finely chopped \n 
    1/4 teaspoon chili powder \n 
    1 can (28 ounces) whole tomatoes in puree \n 
    Coarse salt and ground pepper \n 
    1 teaspoon fresh lime juice \n 
    8 corn tortillas \n 1 pound shredded cooked chicken, skin removed \n
    4 cups shredded Monterey Jack cheese \n 
    2 tablespoons minced pickled jalapenos`,
    instruction: `
    1. Heat oil in a medium saucepan over medium-low heat. Add onion, garlic, jalapeno, and chili powder; cook until onion is translucent, 8 minutes. \n 
    2. Add tomatoes and 1/2 cup water to saucepan; season with salt and pepper. Bring to a boil. Reduce heat to medium-low; cook, gently crushing tomatoes with a wooden spoon, until sauce is thickened, 15 to 20 minutes. Add lime juice. Let sauce cool completely before storing. \n 
    3. Heat a skillet over medium-high heat; warm each tortilla, about 10 seconds per side. Divide chicken, 3 cups cheese, and pickled jalapenos among tortillas; roll tightly. Place seam sides down in a 9-by-13-inch baking dish. \n 
    4. When ready to bake, preheat oven to 450 degrees. Top with sauce and remaining cup cheese. Bake until cheese is melted and tortillas heated through, 6 minutes or longer if refrigerated. For a crisper top, broil 1 to 2 minutes more.`,
    calories: 236,
    category_id: 1,
    user_id: 3, 
    difficulty_id: 2,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642379302/chicken_enchiladas_znizeg.jpg "
  },
  {
    title: "Pozole Verde",
    ingredient: `
    4 pounds boneless pork shoulder, cut into 2-inch pieces \n 
    Coarse salt and freshly ground pepper \n 
    4 cups low-sodium chicken broth \n 
    1 large white onion, peeled and quartered \n
    1 head garlic, halved crosswise \n 
    2 dried bay leaves \n 
    6 whole cloves \n 
    2 teaspoons dried oregano \n 
    3/4 pound tomatillos, husked, rinsed, and quartered \n 
    2 poblano peppers, quartered, ribs and seeds removed \n 
    2 jalapenos, quartered, seeds removed for less heat, if desired, plus more for serving \n 
    1/3 cup packed coarsely chopped cilantro, plus more for serving \n 
    1 tablespoon safflower oil \n 
    2 cans (28 ounces each) white hominy, drained \n 
    Diced avocado, sliced radishes, finely shredded purple cabbage, lime wedges, and warm fresh corn tortillas or tortilla chips, for serving`,
    instruction: `
    1. Season pork with 2 tablespoons salt and 1/2 teaspoon pepper. Place in a pot with broth, half the onion, garlic, and 10 cups water. Bring to a boil, skimming impurities from surface. Reduce heat to low; stir in bay leaves, cloves, and oregano. Simmer, partially covered, until pork is fork-tender, 1 1/2 to 2 hours. Remove onion, garlic, bay leaves, and cloves. \n 
    2. Meanwhile, combine remaining onion, tomatillos, poblanos, jalapenos, cilantro, and oil in a blender; puree until smooth. Transfer to a saucepan and simmer over medium heat, stirring occasionally, until thickened slightly and deep green, 12 to 15 minutes. Stir into soup with hominy and simmer for 10 minutes. Serve with jalapeno, cilantro, avocado, radishes, cabbage, lime wedges, and tortillas.`,
    calories: 385,
    category_id: 3,
    user_id: 4, 
    difficulty_id: 3,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642379715/pozole_verde_bfmfms.jpg"
  },
  {
    title: "Dim Sum",
    ingredient: `
    Dough: \n 
    2 cups all purpose flour \n 
    1 tsp salt \n 
    1 tsp yeast \n 
    1 tsp sugar \n 
    3/4 cup room temperature water \n 
    Filling: \n 
    2 cups ground pork \n 
    1/4 cup minced onion \n 
    Filling Sauce: \n 
    1 tbsp. light soy \n 
    1 tbsp. oyster sauce \n 
    1 tbsp. hoisin sauce \n 
    1 tbsp. sugar \n 
    1/2 cup very warm water \n 
    1 tbsp. cornstarch`,
    instruction: `
    1. In a small bowl combiner soy sauce, oyster sauce, hoisin sauce, sugar, corn starch, and water. \n 
    2. Stir to combine.\n 
    3. In the Instant Pot add the pork and onion. \n 
    4. Saute until the pork is nearly browned and add the sauce \n 
    5. Saute for 5 minutes, then remove and set aside. \n 
    6. Clean the Instant Pot liner and dry. \n 
    7. In a medium bowl add mix the water, yeast, and sugar. \n 
    8. Slowly add flour to the mixture until it forms a ball. \n 
    9. Knead the dough mixture for 5 minutes. Add the salt and continue to knead until the dough is smooth. \n 
    10. Covered the dough and let it rise until double in size, about 45 minutes. \n
    11. Roll the dough out on a flour coated surface and, using a 4 or 5 inch circle cookie cutter or a ramekin, cut the buns out. \n 
    12. Place the filling at the center of each circle of dough and then gather the sides to enclose the bun. Pinch to seal. \n 
    13. Cover with a clean cloth and let the buns rise for 15 minutes. \n 
    14. Pour 1 cup of water into the inner pot of Instant Pot and place a metal trivet in the bottom of the pot.. \n 
    15. Place the buns in a steamer basket, on a plate, or in a pan and place onto pf the trivet. \n 
    16. Close the lid and steam for three minutes, followed by a quick release.`
    ,
    calories: 110,
    category_id: 2,
    user_id: 1, 
    difficulty_id: 3,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642380739/dim_sum.jpg_lonbp1.jpg"
  },
  {
    title: "Chow Mein",
    ingredient: `
    8 oz chicken broth \n 
    1/3 cup Tamari soy sauce \n 
    3 garlic cloves, minced \n 
    1 tsp ginger, minced \n 
    1 tsp white pepper \n 
    2 Tbsp vegetable oil \n 
    2 tsp sesame oil \n 
    2/3 cup celery, chopped \n 
    1 white onion, thinly sliced \n 
    2 cups cabbage, chopped \n 
    16 oz Chinese egg noodles \n 
    1/2 cup bean sprouts`,
    instruction: `
    1. In a small bowl whisk together soy sauce, garlic, ginger, and white pepper. Set aside. \n 
    2. Cook noodles according to the package. Drain and set aside. *For this step, cook the noodles in chicken broth for added flavor! We used 8oz chicken broth, and 8oz water* \n 
    3. Meanwhile wash and chop celery into diagonal pieces. Thinly slice the white onion, and chop cabbage into thin strips. \n 
    4. Heat vegetable oil in a wok over medium high heat. Once the oil starts to shimmer, add celery and onion. Saute for 2 minutes, then add cabbage, bean sprouts, and sesame oil. Stir fry for 5 minutes. Add noodles and sauce and stir fry an additional 3 minutes. Add salt to taste. \n 
    5. Serve immediately and enjoy!`,
    calories: 229,
    category_id: 2,
    user_id: 2, 
    difficulty_id: 2,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_300,w_300/v1642383523/chow_mein_dmr9fr.jpg"
  },
  {
    title: "Tikka Masala",
    ingredient: `
    6 garlic cloves, finely grated \n 
    4 tsp. finely grated peeled ginger \n
    4 tsp. ground turmeric \n
    2 tsp. garam masala \n
    2 tsp. ground coriander \n
    2 tsp. ground cumin \n
    1 1/2 cups whole-milk yogurt (not Greek) \n
    1 Tbsp. kosher salt \n
    2 lb. skinless, boneless chicken breasts, halved lengthwise \n
    3 Tbsp. ghee (clarified butter) or vegetable oil \n
    1 small onion, thinly sliced \n
    1/4 cup tomato paste \n
    6 cardamom pods, crushed \n
    2 dried chiles de árbol or ½ tsp. crushed red pepper flakes \n
    1 28-oz. can whole peeled tomatoes \n
    2 cups heavy cream \n
    3/4 cup chopped cilantro, plus sprigs for garnish \n
    Steamed basmati rice (for serving)`,
    instruction: `
    1. Combine garlic, ginger, turmeric, garam masala, coriander, and cumin in a small bowl. Whisk yogurt, salt, and half of spice mixture in a medium bowl; add chicken and turn to coat. Cover and chill 4-6 hours. Cover and chill remaining spice mixture. \n
    2. Heat ghee in a large heavy pot over medium heat. Add onion, tomato paste, cardamom, and chiles and cook, stirring often, until tomato paste has darkened and onion is soft, about 5 minutes. Add remaining half of spice mixture and cook, stirring often, until bottom of pot begins to brown, about 4 minutes. \n
    3. Add tomatoes with juices, crushing them with your hands as you add them. Bring to a boil, reduce heat, and simmer, stirring often and scraping up browned bits from bottom of pot, until sauce thickens, 8-10 minutes. \n
    4. Add cream and chopped cilantro. Simmer, stirring occasionally, until sauce thickens, 30-40 minutes. \n
    5. Meanwhile, preheat broiler. Line a rimmed baking sheet with foil and set a wire rack inside sheet. Arrange chicken on rack in a single layer. Broil until chicken starts to blacken in spots (it will not be cooked through), about 10 minutes. \n
    6. Cut chicken into bite-size pieces, add to sauce, and simmer, stirring occasionally, until chicken is cooked through, 8-10 minutes. Serve with rice and cilantro sprigs. Do Ahead: Chicken can be made 2 days ahead. Cover; chill. Reheat before serving.`,
    calories: 1249,
    category_id: 4,
    user_id: 3, 
    difficulty_id: 2,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642440279/tikka_masala_cr0ner.jpg"
  },
  {
    title: "Samosas",
    ingredient: `
    Filling: \n
    1 cup dry peas, rinsed \n 
    2.5 cups water \n
    2 medium potatoes \n
    1 teaspoon salt \n 
    1 tablespoon canola oil \n
    1 medium red onion, chopped \n
    1.5 teaspoons minced fresh ginger \n
    2 teaspoons ground coriander \n
    1 teaspoon garam masala \n
    1 to 2 teaspoons salt \n
    Vegetable oil for deep frying \n
    Chutney or ketchup, for dipping \n
    Dough : \n
    2 cups all-purpose flour (whole wheat flour preferred) \n
    1/2 teaspoon salt \n
    1/2 cup plain yogurt \n
    1/4 cup canola oil`,
    instruction: `
    1. In a medium saucepan, combine split peas and water. Bring them to a boil, reduce heat, cover, and simmer until peas are tender, about 35 to 45 minutes. Drain peas, and set aside. \n
    2. Boil potatoes with 1 teaspoon salt until they are tender. Drain, and mash the potatoes. \n
    3. Meanwhile, prepare the dough. Combine flour and salt in a medium-sized bowl. Make a well in the center and add yogurt and canola oil. Mix ingredients until they form a ball. \n
    4. Turn the dough onto a lightly floured surface and knead it until it is smooth, about 2 to 3 minutes. Cover dough, and set it aside for 30 minutes. \n
    5. Heat 1 tablespoon canola oil in a heavy skillet. Add onions and cook, stirring frequently, until they are translucent. Add ginger, and continue stirring for another minute. Add coriander, garam masala, and salt, and cook, stirring, for about a half minute more. Add potatoes and peas, and mix well. Set filling aside. \n
    6. On lightly floured surface, roll out the dough into a rectangle measuring about 12 x 18 inches. Cut dough into 3-inch squares. \n
    7. Place 1 scant tablespoon of filling on each square. Use your fingers to moisten edges of dough with water, and fold dough diagonally in half to make a triangle. Press edges firmly together to seal in the filling. \n
    8. Heat 1 inch oil in a heavy skillet until it is hot but not smoking, about 350° to 380°. Fry samosas until golden, turning once. Drain samosas on paper towels, and keep them hot. \n
    9. Transfer samosas to a heated serving dish, and serve them with chutney or ketchup.`,
    calories: 82,
    category_id: 4,
    user_id: 4, 
    difficulty_id: 3,
    image: "https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642442526/samosa_ybkiif.jpg"
  }
];

const seedRecipe = () => Recipe.bulkCreate(dbRecipeData);

module.exports = seedRecipe;
