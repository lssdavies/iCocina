-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: icocina_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Mexican Cuisine'),(2,'Chinese Cuisine'),(3,'Italian Cuisine'),(4,'Indian Cuisine'),(5,'Desserts');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_text` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `recipe_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `recipe_id` (`recipe_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'I am trying this recipe tonight, more to come!',1,1,'2022-01-24 02:07:29','2022-01-24 02:07:29'),(2,'My family loves this dish.',2,1,'2022-01-24 02:07:29','2022-01-24 02:07:29'),(3,'mmm, this was great! i substituted fresh basil and italian parsley for the thyme and oregano.',3,3,'2022-01-24 02:07:29','2022-01-24 02:07:29'),(4,'I\'ve tried MANY curry recipes and they don\'t even come close! This one nails the true curry flavors and consistency. My family loves it, I make it all the time.',4,7,'2022-01-24 02:07:29','2022-01-24 02:07:29'),(5,'love this dessert, make it all the time',1,10,'2022-01-24 03:33:59','2022-01-24 03:33:59'),(6,'I second that',2,10,'2022-01-24 04:34:36','2022-01-24 04:34:36'),(7,'love dim sum',3,5,'2022-01-24 04:36:25','2022-01-24 04:36:25'),(8,'this is a new comment',NULL,2,'2022-01-24 04:51:19','2022-01-24 04:51:19'),(9,'this is another',NULL,2,'2022-01-24 04:52:06','2022-01-24 04:52:06');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `difficulty`
--

DROP TABLE IF EXISTS `difficulty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `difficulty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `difficulty_level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `difficulty`
--

LOCK TABLES `difficulty` WRITE;
/*!40000 ALTER TABLE `difficulty` DISABLE KEYS */;
INSERT INTO `difficulty` VALUES (1,'Basic'),(2,'Moderate'),(3,'Advanced');
/*!40000 ALTER TABLE `difficulty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `ingredient` varchar(5000) NOT NULL,
  `instruction` varchar(5000) NOT NULL,
  `calories` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `difficulty_id` int DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  KEY `difficulty_id` (`difficulty_id`),
  CONSTRAINT `recipe_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `recipe_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `recipe_ibfk_3` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulty` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'Spaghetti Carbonara','\n    4 slices of bacon \n \n    4 cloves of garlic, minced \n \n    2 tbsp Parsley, fresh leaves, chopped \n \n    2 large eggs \n \n    8oz spaghetti \n \n    kosher salt and black pepper \n \n    1/2 cup parmesan \n \n    2 tbs of water','\n    1. In a large pot, cook the spaghetti according to the instructions on the package \n \n    2. In a large sauce pan, cook the slices of bacon \n \n    3. Add minced garlic \n \n    4. Saute for about 1 minute \n \n    5. In a bowl, combine eggs and parmesan, mix well \n \n    6. Add the 8 oz of cooked spaghetti, a pinch of salt and pepper, the egg and cheese mixture. \n\n    7. Stir well \n \n    8. Add 2 tbs of water and continue to stir \n \n    9. Top with a pinch of salt, pepper and parsley',574,3,1,1,'https://res.cloudinary.com/dsplaxywu/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_300,w_300/v1642319955/spaghetti_carbonara_sxmdni.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(2,'Ricotti Manicotti with Tomato Sauce','\n    Course salt and pepper \n \n    1 package (8 ounces) manicotti, cooked, drained, and cooled \n \n    2 containers (15 ounces each) part-skim ricotta cheese \n \n    2 large eggs, lightly beaten \n \n    1/2 teaspoon dried thyme \n \n    1/2 teaspoon dried oregano \n \n    1 1/2 cups shredded Parmesan cheese \n \n    4 cups Basic Tomato Sauce','\n    1. Cook pasta, drain, and cool. Meanwhile, preheat oven to 375 degrees. In a large bowl, whisk together ricotta, eggs, thyme, oregano, and 1 cup Parmesan. Season with 1 teaspoon salt and 1/2 teaspoon pepper. \n \n    2. Using a plastic bag for filling, stuff cooled pasta shells (about 3 tablespoons ricotta mixture in each). \n \n    3. Coat bottom of a 9-by-13-inch baking dish with 2 cups tomato sauce. Line up manicotti in baking dish, and cover with 2 cups sauce. Sprinkle with remaining 1/2 cup shredded Parmesan. Bake until bubbly, about 30 minutes.',399,3,2,3,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,h_300,w_300/v1642376499/ricotti_manicotti_with_tomato_sauce_ufesjm.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(3,'Chicken Enchiladas','\n    1 tablespoon canola oil \n \n    1 small onion, finely chopped \n \n    1 garlic clove, minced \n \n    1 jalapeno, finely chopped \n \n    1/4 teaspoon chili powder \n \n    1 can (28 ounces) whole tomatoes in puree \n \n    Coarse salt and ground pepper \n \n    1 teaspoon fresh lime juice \n \n    8 corn tortillas \n 1 pound shredded cooked chicken, skin removed \n\n    4 cups shredded Monterey Jack cheese \n \n    2 tablespoons minced pickled jalapenos','\n    1. Heat oil in a medium saucepan over medium-low heat. Add onion, garlic, jalapeno, and chili powder; cook until onion is translucent, 8 minutes. \n \n    2. Add tomatoes and 1/2 cup water to saucepan; season with salt and pepper. Bring to a boil. Reduce heat to medium-low; cook, gently crushing tomatoes with a wooden spoon, until sauce is thickened, 15 to 20 minutes. Add lime juice. Let sauce cool completely before storing. \n \n    3. Heat a skillet over medium-high heat; warm each tortilla, about 10 seconds per side. Divide chicken, 3 cups cheese, and pickled jalapenos among tortillas; roll tightly. Place seam sides down in a 9-by-13-inch baking dish. \n \n    4. When ready to bake, preheat oven to 450 degrees. Top with sauce and remaining cup cheese. Bake until cheese is melted and tortillas heated through, 6 minutes or longer if refrigerated. For a crisper top, broil 1 to 2 minutes more.',236,1,3,2,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642379302/chicken_enchiladas_znizeg.jpg ','2022-01-24 02:07:29','2022-01-24 02:07:29'),(4,'Pozole Verde','\n    4 pounds boneless pork shoulder, cut into 2-inch pieces \n \n    Coarse salt and freshly ground pepper \n \n    4 cups low-sodium chicken broth \n \n    1 large white onion, peeled and quartered \n\n    1 head garlic, halved crosswise \n \n    2 dried bay leaves \n \n    6 whole cloves \n \n    2 teaspoons dried oregano \n \n    3/4 pound tomatillos, husked, rinsed, and quartered \n \n    2 poblano peppers, quartered, ribs and seeds removed \n \n    2 jalapenos, quartered, seeds removed for less heat, if desired, plus more for serving \n \n    1/3 cup packed coarsely chopped cilantro, plus more for serving \n \n    1 tablespoon safflower oil \n \n    2 cans (28 ounces each) white hominy, drained \n \n    Diced avocado, sliced radishes, finely shredded purple cabbage, lime wedges, and warm fresh corn tortillas or tortilla chips, for serving','\n    1. Season pork with 2 tablespoons salt and 1/2 teaspoon pepper. Place in a pot with broth, half the onion, garlic, and 10 cups water. Bring to a boil, skimming impurities from surface. Reduce heat to low; stir in bay leaves, cloves, and oregano. Simmer, partially covered, until pork is fork-tender, 1 1/2 to 2 hours. Remove onion, garlic, bay leaves, and cloves. \n \n    2. Meanwhile, combine remaining onion, tomatillos, poblanos, jalapenos, cilantro, and oil in a blender; puree until smooth. Transfer to a saucepan and simmer over medium heat, stirring occasionally, until thickened slightly and deep green, 12 to 15 minutes. Stir into soup with hominy and simmer for 10 minutes. Serve with jalapeno, cilantro, avocado, radishes, cabbage, lime wedges, and tortillas.',385,1,4,3,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642379715/pozole_verde_bfmfms.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(5,'Dim Sum','\n    Dough: \n \n    2 cups all purpose flour \n \n    1 tsp salt \n \n    1 tsp yeast \n \n    1 tsp sugar \n \n    3/4 cup room temperature water \n \n    Filling: \n \n    2 cups ground pork \n \n    1/4 cup minced onion \n \n    Filling Sauce: \n \n    1 tbsp. light soy \n \n    1 tbsp. oyster sauce \n \n    1 tbsp. hoisin sauce \n \n    1 tbsp. sugar \n \n    1/2 cup very warm water \n \n    1 tbsp. cornstarch','\n    1. In a small bowl combiner soy sauce, oyster sauce, hoisin sauce, sugar, corn starch, and water. \n \n    2. Stir to combine.\n \n    3. In the Instant Pot add the pork and onion. \n \n    4. Saute until the pork is nearly browned and add the sauce \n \n    5. Saute for 5 minutes, then remove and set aside. \n \n    6. Clean the Instant Pot liner and dry. \n \n    7. In a medium bowl add mix the water, yeast, and sugar. \n \n    8. Slowly add flour to the mixture until it forms a ball. \n \n    9. Knead the dough mixture for 5 minutes. Add the salt and continue to knead until the dough is smooth. \n \n    10. Covered the dough and let it rise until double in size, about 45 minutes. \n\n    11. Roll the dough out on a flour coated surface and, using a 4 or 5 inch circle cookie cutter or a ramekin, cut the buns out. \n \n    12. Place the filling at the center of each circle of dough and then gather the sides to enclose the bun. Pinch to seal. \n \n    13. Cover with a clean cloth and let the buns rise for 15 minutes. \n \n    14. Pour 1 cup of water into the inner pot of Instant Pot and place a metal trivet in the bottom of the pot.. \n \n    15. Place the buns in a steamer basket, on a plate, or in a pan and place onto pf the trivet. \n \n    16. Close the lid and steam for three minutes, followed by a quick release.',110,2,1,3,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642380739/dim_sum.jpg_lonbp1.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(6,'Chow Mein','\n    8 oz chicken broth \n \n    1/3 cup Tamari soy sauce \n \n    3 garlic cloves, minced \n \n    1 tsp ginger, minced \n \n    1 tsp white pepper \n \n    2 Tbsp vegetable oil \n \n    2 tsp sesame oil \n \n    2/3 cup celery, chopped \n \n    1 white onion, thinly sliced \n \n    2 cups cabbage, chopped \n \n    16 oz Chinese egg noodles \n \n    1/2 cup bean sprouts','\n    1. In a small bowl whisk together soy sauce, garlic, ginger, and white pepper. Set aside. \n \n    2. Cook noodles according to the package. Drain and set aside. *For this step, cook the noodles in chicken broth for added flavor! We used 8oz chicken broth, and 8oz water* \n \n    3. Meanwhile wash and chop celery into diagonal pieces. Thinly slice the white onion, and chop cabbage into thin strips. \n \n    4. Heat vegetable oil in a wok over medium high heat. Once the oil starts to shimmer, add celery and onion. Saute for 2 minutes, then add cabbage, bean sprouts, and sesame oil. Stir fry for 5 minutes. Add noodles and sauce and stir fry an additional 3 minutes. Add salt to taste. \n \n    5. Serve immediately and enjoy!',229,2,2,2,'https://res.cloudinary.com/dsplaxywu/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_300,w_300/v1642383523/chow_mein_dmr9fr.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(7,'Tikka Masala','\n    6 garlic cloves, finely grated \n \n    4 tsp. finely grated peeled ginger \n\n    4 tsp. ground turmeric \n\n    2 tsp. garam masala \n\n    2 tsp. ground coriander \n\n    2 tsp. ground cumin \n\n    1 1/2 cups whole-milk yogurt (not Greek) \n\n    1 Tbsp. kosher salt \n\n    2 lb. skinless, boneless chicken breasts, halved lengthwise \n\n    3 Tbsp. ghee (clarified butter) or vegetable oil \n\n    1 small onion, thinly sliced \n\n    1/4 cup tomato paste \n\n    6 cardamom pods, crushed \n\n    2 dried chiles de árbol or ½ tsp. crushed red pepper flakes \n\n    1 28-oz. can whole peeled tomatoes \n\n    2 cups heavy cream \n\n    3/4 cup chopped cilantro, plus sprigs for garnish \n\n    Steamed basmati rice (for serving)','\n    1. Combine garlic, ginger, turmeric, garam masala, coriander, and cumin in a small bowl. Whisk yogurt, salt, and half of spice mixture in a medium bowl; add chicken and turn to coat. Cover and chill 4-6 hours. Cover and chill remaining spice mixture. \n\n    2. Heat ghee in a large heavy pot over medium heat. Add onion, tomato paste, cardamom, and chiles and cook, stirring often, until tomato paste has darkened and onion is soft, about 5 minutes. Add remaining half of spice mixture and cook, stirring often, until bottom of pot begins to brown, about 4 minutes. \n\n    3. Add tomatoes with juices, crushing them with your hands as you add them. Bring to a boil, reduce heat, and simmer, stirring often and scraping up browned bits from bottom of pot, until sauce thickens, 8-10 minutes. \n\n    4. Add cream and chopped cilantro. Simmer, stirring occasionally, until sauce thickens, 30-40 minutes. \n\n    5. Meanwhile, preheat broiler. Line a rimmed baking sheet with foil and set a wire rack inside sheet. Arrange chicken on rack in a single layer. Broil until chicken starts to blacken in spots (it will not be cooked through), about 10 minutes. \n\n    6. Cut chicken into bite-size pieces, add to sauce, and simmer, stirring occasionally, until chicken is cooked through, 8-10 minutes. Serve with rice and cilantro sprigs. Do Ahead: Chicken can be made 2 days ahead. Cover; chill. Reheat before serving.',1249,4,3,2,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642440279/tikka_masala_cr0ner.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(8,'Samosas','\n    Filling: \n\n    1 cup dry peas, rinsed \n \n    2.5 cups water \n\n    2 medium potatoes \n\n    1 teaspoon salt \n \n    1 tablespoon canola oil \n\n    1 medium red onion, chopped \n\n    1.5 teaspoons minced fresh ginger \n\n    2 teaspoons ground coriander \n\n    1 teaspoon garam masala \n\n    1 to 2 teaspoons salt \n\n    Vegetable oil for deep frying \n\n    Chutney or ketchup, for dipping \n\n    Dough : \n\n    2 cups all-purpose flour (whole wheat flour preferred) \n\n    1/2 teaspoon salt \n\n    1/2 cup plain yogurt \n\n    1/4 cup canola oil','\n    1. In a medium saucepan, combine split peas and water. Bring them to a boil, reduce heat, cover, and simmer until peas are tender, about 35 to 45 minutes. Drain peas, and set aside. \n\n    2. Boil potatoes with 1 teaspoon salt until they are tender. Drain, and mash the potatoes. \n\n    3. Meanwhile, prepare the dough. Combine flour and salt in a medium-sized bowl. Make a well in the center and add yogurt and canola oil. Mix ingredients until they form a ball. \n\n    4. Turn the dough onto a lightly floured surface and knead it until it is smooth, about 2 to 3 minutes. Cover dough, and set it aside for 30 minutes. \n\n    5. Heat 1 tablespoon canola oil in a heavy skillet. Add onions and cook, stirring frequently, until they are translucent. Add ginger, and continue stirring for another minute. Add coriander, garam masala, and salt, and cook, stirring, for about a half minute more. Add potatoes and peas, and mix well. Set filling aside. \n\n    6. On lightly floured surface, roll out the dough into a rectangle measuring about 12 x 18 inches. Cut dough into 3-inch squares. \n\n    7. Place 1 scant tablespoon of filling on each square. Use your fingers to moisten edges of dough with water, and fold dough diagonally in half to make a triangle. Press edges firmly together to seal in the filling. \n\n    8. Heat 1 inch oil in a heavy skillet until it is hot but not smoking, about 350° to 380°. Fry samosas until golden, turning once. Drain samosas on paper towels, and keep them hot. \n\n    9. Transfer samosas to a heated serving dish, and serve them with chutney or ketchup.',82,4,4,3,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642442526/samosa_ybkiif.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(9,'Flan','\n    1 1 3/4 cup heavy cream \n \n    1 cup whole milk \n\n    1 tsp. pure vanilla extract \n\n    Pinch kosher salt \n\n    1 1/2 cup granulated sugar, divided \n\n    3 large eggs \n\n    3 large eggs yolks','\n    1. Preheat oven to 350 degrees. In a large bowl or measuring cup, whisk to combine cream, milk, vanilla, and salt. \n\n    2. In a medium saucepan over medium-high heat, combine 1 cup sugar with 1/3 cup water. Cook, gently swirling the pot but not stirring, until mixture turns a deep golden color, 10 to 15 minutes. Working quickly, divide caramel into seven 6-ounce ramekins. Gently lift and tilt ramekins to coat the inside with caramel. Place ramekins in a large baking dish. \n\n    3. Whisk eggs, egg yolks, and remaining ½ cup sugar together in a large bowl. Gently mix in cream mixture until just combined. Divide mixture evenly between ramekins, about ½ cup each.  \n\n    4. Pour enough hot water into baking dish to come halfway to top of ramekins. Bake until just set and flan slightly jiggles, 45 to 50 minutes. Transfer ramekins to a cooling rack and let cool completely, about 2 hours. If not serving right away, cover with plastic wrap and chill in the refrigerator until ready to serve. \n\n    5. When ready to serve, use a small knife or offset spatula to carefully loosen the edges of the flan. If refrigerated, warm in microwave in 10 second increments for 30 seconds. Turn flan over onto a plate with a shallow rim, shake gently to release flan, and remove ramekin.',223,5,1,2,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642621500/flan_la0il2.jpg','2022-01-24 02:07:29','2022-01-24 02:07:29'),(10,'Tiramisu','\n    6 egg yolks <br>\n    3/4 cup white sugar \n\n    2/3 cup milk \n\n    1 1/4 cups heavy cream \n\n    1/2 teaspoon vanilla extract \n\n    1 pound mascarpone cheese, at room temperature \n\n    1/4 cup strong brewed coffee, at room temperature \n\n    2 tablespoons rum \n\n    2 (3 ounce) packages ladyfinger cookies \n\n    1 tablespoon unsweetened cocoa powder','\n    1. In a medium saucepan, whisk together egg yolks and sugar until well blended. Whisk in milk and cook over medium heat, stirring constantly, until mixture boils. Boil gently for 1 minute, remove from heat and allow to cool slightly. Cover tightly and chill in refrigerator 1 hour. \n\n    2. In a medium bowl, beat cream with vanilla until stiff peaks form. \n\n    3. Whisk mascarpone into yolk mixture until smooth. \n\n    4. In a small bowl, combine coffee and rum. Split ladyfingers in half lengthwise and drizzle with coffee mixture. \n\n    5. Arrange half of soaked ladyfingers in bottom of a 7x11 inch dish. Spread half of mascarpone mixture over ladyfingers, then half of whipped cream over that. Repeat layers and sprinkle with cocoa. Cover and refrigerate 4 to 6 hours, until set.',387,5,5,2,'https://res.cloudinary.com/dsplaxywu/image/upload/c_scale,w_300/v1642622605/tiramisu_am8w57.jpg','2022-01-24 02:07:29','2022-01-24 03:33:49');
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('9MXp0g6rOw9yQJttHhgVJ9j9OUf2pn48','2022-01-25 04:01:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":5,\"username\":\"sophiauser\",\"loggedIn\":true}','2022-01-24 03:00:02','2022-01-24 04:01:26'),('Fbu9h84HHDtJhsfKZ_Tv9fASaPUguSHH','2022-01-25 04:52:10','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-01-24 03:07:37','2022-01-24 04:52:10'),('S_FwbG3u3Y-Nj2NruLls0zJln6EJA67W','2022-01-25 05:37:42','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":5,\"username\":\"sophiauser\",\"loggedIn\":true}','2022-01-24 05:14:11','2022-01-24 05:37:42');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kamaya','Kimberly','Amaya','kim@email.com','kamayapass'),(2,'ldavies','Larry','Davies','larry@email.com','ldaviespass'),(3,'klam','Khanh','Lam','khanh@email.com','klampass'),(4,'mjwair','Mohammad','Jwair','mohammad@email.com','mjwairpass'),(5,'sophiauser','sophia','user','sophia@email.com','$2b$10$YZEiEnDRCqH/87.L5QAG7eotbh1f7SaksKfR5PjwCwARrL2ATPUiy');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-23 22:39:32
