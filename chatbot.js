const userMessage = [
    ["hi", "hey", "hello" ,"1"],
    ["11","Breakfast","breakfast"],
    ["22", "Lunch" ,"lunch"],
    ["33", "Dinner party", "dinner party", "Dinner Party","Dinner","dinner","party","Party"],
    ["44","veg", "Veg","Vegetarian" ,"vegetarian"],
    ["111","Spicy Oats Pancake Recipe","Spicy oats pancake","Pancake"],
    ["112","Chilli Cheese Garlic Paratha Recipe","Chilli Cheese","Garlic Paratha"],
    ["113", "Kanchipuram Idli Recipe", "kanchipuram idli recipe", "idli"],
    ["114","Vegetable Poha","poha"],
    ["115","Paneer Paratha"],
    ["221","Pudina Aloo Curry","aloo curry"],
    ["222", "Tawa Prawn Masala","prawn masala"],
    ["223", "Chana Tikka Masala", "chana tikka"],
    ["224", "Chicken Masale Bhaat", "chicken masale"],
    ["225", "Choliya Paneer", "paneer"],
    ["331", " Achari Mix Veg"],
    ["332", "No-Oil Mutton Curry"],
    ["333","Peshawari Chole"],
    ["334", "Lahori Kadhai Chicken", "kadhai chicken", "chicken"],
    ["335", "Prawn Koliwada"],
    ["441","Protein Bhel"],
    ["442", "Chana Palak Rice"],
    ["443","Cabbage Pulao"],
    ["444","Darbari Dal"]

  // dishes

  
  ];
  const botReply = [
    ["Select your Occasion Recipes from below...   (11) Breakfast    (22) Lunch    (33) Dinner Party (44) Vegetarian " ],
    ["Please Select your Breakfast Dish...  (111) Spicy Oats Pancake Recipe (112) Chilli Cheese Garlic Paratha Recipe  (113) Kanchipuram Idli Recipe  (114) Vegetable Poha (115) Paneer Paratha"],
    ["Please Select your Lunch Dish... (221) Pudina Aloo Curry  (222) Tawa Prawn Masala  (223) Chana Tikka Masala  (224) Chicken Masale Bhaat  (225) Choliya Paneer  "],
    ["Please Select your Dinner Party Dish... (331) Achari Mix Veg  (332) No-Oil Mutton Curry (333) Peshawari Chole  (334) Lahori Kadhai Chicken  (335) Prawn Koliwada "],
    ["Please Select your Vegetarian Dish... (441) Protein Bhel  (442) Chana Palak Rice (443) Cabbage Pulao (444) Darbari Dal " ],
  
    [
      "==>> Spicy Oats Pancake Recipe: This is a delicious pancake recipe, which is perfect for your breakfast. All you need oats, vegetables and some  spices....... ==>> Ingredients of Spicy Oats Pancake:   1 rolled oats,  1/2 whole wheat flour ,  1 buttermilk (or milk of your choice) , 1 egg ,  1/4 onions , finely chopped 1/4 grated carrot , 1/4 bell peppers, 1 tsp Baking Powder , 1/2 tsp baking soda , 1/2 tsp salt , 1/2 tsp cumin powder , Salt to taste , 1/4 tsp chilli powder (adjust to taste) Cooking oil or butter for frying.  ==>> How to Make Spicy Oats Pancake :  --> 1. Grind your oats in a blender to make coarse flour.  --> 2. In a bowl, combine the oat flour, whole wheat flour, baking powder, baking soda, salt, cumin powder, chilli powder, and paprika. Give it a good mix to ensure all the dry ingredients are well combined. --> 3. In another bowl, whisk together the buttermilk (or milk), egg, and chopped onions. Pour this mixture into the bowl with the dry ingredients and mix stir everything to mix them. Add grated carrot and chopped bell peppers. --> 4. Place a non-stick skillet or frying pan on medium heat and add a small amount of cooking oil or butter.  --> 5. Ladle some of the pancake batter onto it. Cook until you see bubbles forming on the surface, then flip the pancake and cook the other side until its golden brown.  --> 6. Serve with sauce, curd or dip of your choice and enjoy! "
    ],
    ["=> Ingredients of Chilli Cheese Garlic Paratha....  ==>> 2 Cups wheat flour, A pinch of salt... -> 1 cup grated cheese (use your favourite variety)... -> 2-3 fresh green chillies, -> finely chopped 3-4 fresh crushed or grated garlic cloves, -> A pinch of salt , -> A pinch of red chilli powder, -> A pinch of cumin powder ,  Ghee for cooking the parathas..   ===> How to Make Chilli Cheese Garlic Paratha::  -> 1. In a mixing bowl, combine the wheat flour and a pinch of salt.  -> 2. Gradually add water and knead the mixture into a soft, pliable dough.  -> 3. Cover the dough with a damp cloth and let it rest for about 15-20 minutes.  -> 4. In a separate bowl, combine the grated cheese, finely chopped green chillies, minced or grated garlic, a pinch of salt, and spices.  -> 5. Flatten the ball slightly and dust it with a little dry wheat flour. Roll out the dough into a small disc. -> 6. Place a spoonful of the prepared filling in the centre of the rolled-out dough. -> 7. Carefully fold the edges of the dough over the filling, enclosing it completely.  -> 8. Gently roll out the stuffed dough ball into a flat, round paratha. -> 9. Heat a pan or griddle over medium heat and add a little ghee or oil. -> 10. Once the pan is hot, carefully place the rolled-out paratha on it.  -> 11. Cook until the bottom side turns golden brown.  -> 12. Flip the paratha and cook the other side until it's golden brown and crispy. -> 13. Ensure that the cheese inside the paratha melts and becomes gooey. -> 14. Serve hot.Garlic Paratha "],
    [" ==> Ingredients of Kanchipuram Idli..--> 1 bowl Idli batter Salt, as per taste , 2 tsp ghee  , 1 spring curry leaves, chopped 1/2 tsp hing 1/2 tsp dry ginger powder 1 tsp cumin seeds 1 black peppercorn 2-3 Green Chillies, chopped 1 tsp soaked chana dal ==> How to Make Kanchipuram Idli... --> 1. Heat ghee in a kadhai and prepare a tadka with all the spices and herbs. --> 2. Once done, add to the idli batter. --> 3. Add some salt and give a final mix. --> 4. Allow the batter to ferment overnight. --> 5. Allow the batter to ferment overnight. --> 6. Prepare idli in idli steamer and serve"],
    [" ==> Ingredients of Vegetable poha.. -->  1 Cup poha , 1/2 cup mixed veg (beans, carrot, capsicum and peas), finely chopped  1 Onion , finely chopped 1 green chilli , finely chopped 2 springs curry leaves 1 tsp coriander leaves , finely chopped 1/2 tsp mustard seeds , A pinch of haldi , 1 whole red chillito taste Salt and sugar Lemon juice, as per taste Sev, to garnish Oil Fresh ground coconut or desiccated coconut , to garnish (optional) ==>  How to Make Vegetable poha...  --> 1. Add oil in a pan and to it, add whole red chilli and mustard seeds.--> 2. When it splutters, add curry leaves, onion and green chilli. Fry until onion turns translucent. --> 3. Add mixed vegetables and cook until it turns soft. Add some salt while cooking. --> 4. Rinse poha and add to it. --> 5 . Add some more salt, sugar and turmeric and cook everything well. --> 6. Add the coconut and mix. --> 7. Finally, lower the flame and add lemon juice and mix. --> 8. Garnish with sev and coriander leaves and serve."],
    [" ==> Ingredients of Paneer Paratha... --> 2 cups Whole Wheat flour (atta 2/3 cups Water 1 tsp Ghee For stuffing: 200 gram Paneer , 2 tbsp Onion, finely chopped 2 tbsp Coriander, finely chopped 1 Green Chillies, finely chopped 1 tsp Red Chilli Powder, 1/2 tsp Salt Ghee or oil for roasting..  ==>    How to Make Paneer Paratha... --> 1. Take whole wheat flour or atta in a bowl. Pour a small quantity of water and knead. Keep adding water as desired and knead smooth, soft dough. Let it rest for 20 minutes.--> 2. Prepare the stuffing by grating paneer into small particles. Add finely chopped green chillies, coriander, onion, and spices. Mix everything well and keep aside.  --> 3. Take a small portion of the dough and roll it out roughly. Place a spoonful of the paneer filling in the centre and seal it from all sides. Flatten and roll out again. Use dry flour as required during the process. Make as many parathas as you need with this process. --> 4. Once you get a half-inch thick paratha, heat the tawa. Transfer the paratha onto the tawa and let it cook on one side. Meanwhile, apply ghee or oil on the other side. --> 5. Flip it and cook on the other side. Press gently with a spatula so that it roasts properly. Apply some more ghee on the top side before flipping again. --> 6. Once the paratha is cooked properly on both sides and turns brown, take it off the flame. Serve with dahi, chutney or pickle of choice!"],
    ["==> Ingredients of Pudina Aloo Curry.. --> 4 medium potatoes, 1 cup fresh mint leaves, chopped 1 large onion, finely chopped 2 tomatoes, pureed 2-3 green chilies, chopped 1 tsp ginger-garlic paste,  1 tsp cumin seeds, 1 tsp mustard seeds, 1 tsp turmeric powder , Red chilli powder to taste, 1 tsp garam masala , 1/2 teaspoon coriander powder , Salt to taste...  ==> How to Make Pudina Aloo Curry.. --> 1. Heat oil in a large pan over medium heat. Add cumin seeds and mustard seeds. Allow them to splutter. --> 2. Add chopped onions and saute until they turn golden brown. --> 3. Add ginger-garlic paste and chopped green chilies. Saute for another minute until the raw smell disappears. --> 4. Add the tomato puree, spice powders and salt. Cook the masala until the oil starts to separate from it. --> 5. Add potatoes and coat them evenly with the masala. Cook for about 5 minutes. --> 6. Pour in enough water to cover the potatoes, and bring the mixture to a boil. Reduce the heat, cover, and let it simmer until the potatoes are tender (around 10-12 minutes). --> 7. Add the mint leaves and garam masala, and let it simmer for another 2-3 minutes. Serve hot!"],
    ["==> Ingredients of Tawa Prawn Masala.. -->  7-8 pieces Deveined prawns,  1 tbsp Ginger garlic , 1 Green chilli, chopped 1-2 cloves Garlic , chopped1 tsp Ginger, chopped Freshly chopped coriander Fresh lemon juice,  1 Onion, chopped Tomato, chopped 1 tsp Red chilli powder, 1 tsp Pepper powder, 1 tsp Haldi , 1 tsp Garam masala , 1 tsp Fennel seeds , 1 tsp Coriander powder , 1 tsp Cinnamon powder to taste Salt 3-5 spoons Oil.. ==> How to Make Tawa Prawn Masala --> 1. De-vein the prawns. In a bowl put the prawns and add turmeric. Mix it well. --> 2. In a hot pan add oil and red chili powder. Put the prawns and cook them for 10 minutes till the prawns change colour. --> 3. Keep them aside once cooked. In the same pan pour oil, add a cinnamon stick and the chopped ginger, garlic, chilis, onion, and tomato. Further, add the spices. --> 4. Make a thick gravy and add the cooked prawns. Now mix it well until it the masala releases oil. --> 5. Once done squeeze lemon juice and garnish it with chopped coriander."],
    ["==> Ingredients of Chana Tikka Masala For roasted chana: 1 cup Chana, 1 tsp Lemon juice, 1 tsp Haldi, 1 tsp Red chilli powder, 1 tbsp Oilto taste Salt..  -> For masala sauce:  1 Onion, chopped 2 Tomatoes, chopped, 6 Cashew nuts, 1/2 inch Ginger, grated 2 Garlic cloves, minced 1.5 tbsp Oil 1 tsp Coriander  powder, 1/2 tsp Cumin powder, 1 tsp Garam masala, 1/2 tsp Sugar, 1 tsp Red chilli powder, 1/2 inch Cinnamon stick, 3/4 tsp Poppy seeds, 1/2 tsp Saunf, 2 Black peppercorns, 2 Elaichi , 1/2 tsp Cumin seeds..  ==>>  How to Make Chana Tikka Masala ==>. 1.  To begin with, add chana (chickpea), haldi, red chilli powder, salt, lemon juice and vegetable oil in a bowl. Toss well to coat the chickpeas evenly with all the masalas.   -> 2.In a pan, heat some oil and add the marinated chana. Roast them for 4-5 minutes or until they look slightly charred. -> 3. Now, we need to prepare the tikka masala sauce. For this, add oil, onion, tomatoes, cashew nuts, ginger, garlic, and all the spices in a separate pan. Roast them until they become soft. -> 4. Once done, allow the sauce to cool. Transfer to a mixer grinder to form a smooth paste. (You can also add some water at this stage). -> 5. Now, add the paste to the pan again and let it come to a boil. Add the roasted chana and mix well. -> 6. Cook for 1-2 minutes and add fresh coriander leaves. Serve hot!"],
    ["Ingredients of Chicken Masale Bhaat ==>> 200 gm Ambe Mohar Rice, 200 gm Chicken Curry Cut , 30 gm Potato , 20 gm Fresh Coconut , 5 gm Khas Khas, 5 gm Sesame Seeds, 1 Lemon, 30 gm Ginger Garlic Paste , 150 gm Onion , 2 gm Star Anise , 2 gm Salt , 1 gm Bay Leaf , 50 gm Ghee , 2 Small Cardamoms , 2 Big Cardamoms , 100 ml Refined Oil , 1 gm Clove , 1 gm Cumin , 10 gm Fresh Coriander , 5 gm Mint Leaves , 5 gm , Green Chillies , 2 gm Coriander Powder , 2 gm Cumin Powder , 5 gm Red Chilli Powder , 1 gm Cinnamon  ==>> How to Make Chicken Masale Bhaat ==>> 1. To make this dish, first, we need to make a special masala. Take a cinnamon stick, coriander seeds, sesame seeds, poppy seeds, clove, coconut fresh and cumin seeds. Sauté in a dry pan and make a masala using a grinder. 2. Now take a saucepan and add oil, on medium heat. Add the whole garam masala, sliced onion, green chilies, ginger garlic paste and sauté well for 2-3 minutes. 3. Add the Indian spices and the specially made masala and stir well. Now add the chicken and simmer for 15 minutes. Now add the soaked ambe mohar rice and simmer for 10-15 minutes more. 4. Serve hot! Garnish the dish with sliced coconut and fresh coriander leaves."],
    [" ==>> Ingredients of Choliya Paneer.. --> 100 gms Paneer , 200 gms Choliya , 2 tbsp Oil , 3 Tomatoes, pureed 2 Onions , pureed 1 Green chilli , 150 ml Milk , 1 tbsp Garlic paste , 1 tsp Ginger paste , 3-4 tsp Hara dhania , chopped 1/2 tsp Garam masala , 1/2 tsp Coriander powder , 1 tsp Salt , 1/2 tsp Red chilli powder , 1 tbsp Kasuri methi , 500 ml Water ==>> How to Make Choliya Paneer --> 1. Heat oil in a pan set on medium flame. Once it becomes hot, add onion puree and saute till it becomes light pink in colour. --> 2. Add ginger-garlic paste and saute till it becomes light brown. Add salt, turmeric powder, red chilli powder and kasuri methi. Stir roast for half a minute. --> 3. Add tomato puree and stir for 1-2 minutes. Add the choliya and cook for 5 minutes. --> 4. Add milk, garam masala and dhania. Cook for 2 minutes. --> 5. Add water and mix well. Raise the heat to high and let it come to a boil. --> 6.Reduce heat to low and cover with a lid. Cook for around 10 minutes, checking in between. --> 7.Once done, add the paneer. Mix well and cook for another minute.--> 8. Garnish with fresh coriander leaves and serve hot!"],
    [" ==> Ingredients of Achari Mix Veg ==> 1/2 Cup cauliflower (blanched) , 1/2 cup Potato (boiled, cut incubes) , 1/2 cup Peas ( Boiled) , 1/2 cup Carrot (blanched) , 1/2 cup Paneer (Cubes) , 4 tbsp Oil , 1 large Onion, chopped 1 large Tomato, chopped 1 tbsp Garlic, chopped 1 tbsp Ginger, chopped 1/2 tsp Cumin , 1 Bay Leaf , A pinch of Hing , 1/2 cup Curd , 1 tbsp Kasuri Methi , 1 tsp Red chili powder , 1/2 tsp Fennel seeds , 1 tsp Coriander Powder , to taste Salt 1 tbsp , Fresh coriander.  ==>> How to Make Achari Mix Veg.. --> 1. Heat a tablespoon of oil in a pan and fry chopped onion, ginger and garlic for some time. Now you have to add tomato and cook it until it becomes soft. --> 2. Now you have to take fennel, coriander powder, red chilli and pickle masala in a grinding jar. Add onion and tomato mixture into it and make a smooth paste by adding a little water. --> 3. Place a pan again on the gas, heat oil in it, add cumin, asafoetida and bay leaves, after two seconds add chopped capsicum and fry. --> 4. As soon as the capsicum gets cooked a little, you have to add the prepared paste to it and cook while mixing everything. Now add some curd to it and cook till the oil separates. --> 5. After this, add potatoes, cauliflower, beans, carrots, peas and cheese and cook while mixing everything well. Sprinkle Kasuri fenugreek and add salt as per taste. Garnish with green coriander. --> 6. If you want, you can also add cream to it for richness. Hot Achari Mix Veg can be paired with Naan, Roti or Paratha."],
    ["==>> Ingredients of No-Oil Mutton Curry.. ==>> 400 gms mutton , 2 onions , chopped 2 tomatoes, chopped , 1 tbsp ginger-garlic paste , 1 tsp red chilli powder , 1/2 tsp haldi , 1 tsp coriander powder , 1/2 tsp cumin powder , 1/2 tsp garam masala,  Salt to taste , Water as required , Coriander leaves, for garnish ==>> How to Make No-Oil Mutton Curry.. --> 1. Start by marinating the mutton pieces with all the dry masalas and ginger-garlic paste. Make sure everything is well combined, and let it marinate for half an hour. --> 2. Now, add the marinated mutton pieces to a non-stick pan and cook them for a few minutes. --> 3. Once they start to brown, add the chopped onions and tomatoes. Mix well and cook until the onions become golden brown. --> 4. If you feel like the mixture is sticking to the pan, add some water and give it a nice mix. Cover the pan with a lid and allow it to cook on a low-medium flame until the mutton becomes tender. --> 5. Once done, add garam masala and garnish with fresh coriander leaves. Serve hot with rice, roti, or naan."],
    ["==>> Ingredients of Peshawari Chole.. ==>> 2 Cups chickpeas , 2 tbsp chana dal, 2 medium-sized onions, finely chopped , 2 large tomatoes, finely chopped 2-3 cloves of garlic, minced 1-inch piece of ginger, grated 2-3 green chilies , 1 tsp cumin seeds , 1 tsp turmeric powder , 1 tsp cumin powder , 1 tsp coriander powder , 1/2 tsp red chili powder (adjust to taste) , 1/2 tsp garam masala , Salt to taste , 2 tbsp cooking oil , Fresh coriander leaves for garnish , Sliced onions, lemon wedges, and fresh coriander leaves For the Garnish: How to Make Peshawari Chole ==>> 1. Soak the chickpeas and dal overnight or for at least 6-8 hours in plenty of water. Rinse them thoroughly before cooking. --> 2. In a pressure cooker, add the soaked chickpeas and dal, enough water to cover them, and a pinch of salt. Cook until the chickpeas are soft. --> 3. Drain the cooked chickpeas and dal and set them aside. --> 4. Heat the cooking oil in a large pan or pot over medium heat. Add the cumin seeds and let them sizzle for a few seconds. --> 5. Add the finely chopped onions and saute until they turn golden brown. --> 6. Stir in the minced garlic, grated ginger, and green chilies. Saute for a couple of minutes until the raw smell disappears. --> 7. Add the finely chopped tomatoes and cook until they become soft and the oil starts to separate from the mixture. --> 8. Add the spices and salt. Mix well and cook for a few minutes until the spices are aromatic. --> 9. Add the cooked chickpeas and dal and mix them with the spicy tomato mixture. Allow the chickpeas to simmer in the gravy for about 10-15 minutes. Add some water if the gravy becomes too thick. --> 10. Once the chickpeas are well-cooked and the gravy has thickened, your Peshawari Chole is ready to be served.11.Garnish with fresh coriander leaves, sliced onion and lemon wedges."],
    ["==>> Ingredients of Lahori Kadhai Chicken.. ==>> 500 gms chicken, cut into pieces , 2 tbsp oil , 1 large onion, chopped 2 tomatoes, chopped 2 green chillies, sliced 1 tsp ginger-garlic paste , 1 tsp red chilli powder , 1 tsp jeera , 1 tsp haldi , 1 tsp garam masala , 1 tsp kasuri methi , 1 tsp coriander powder , 1/4 cup yoghurt , Salt to taste , Coriander leaves, for garnish.. ==>> 1. How to Make Lahori Kadhai Chicken.. -->> 1.Start by heating oil in a kadhai. Add jeera and allow it to splutter. Add chopped onions and saute until they become golden brown in colour. --> 2. Now, add the ginger-garlic paste, tomatoes, and green chillies. Cook until the tomatoes become soft. --> 3. Once the oil separates from the tomatoes, add red chilli powder, haldi, salt, and coriander powder. Mix well and cook for a few minutes. --> 4. Next, add in the chicken pieces and coat them well with the masalas. Cook on high heat until partially cooked. Reduce the heat and add the yoghurt. --> 5. Give it a nice mix and simmer on low heat until the chicken is fully cooked. Once done, sprinkle kasuri methi and garam masala. Garnish with coriander leaves, and serve hot!"],
    ["==>> Ingredients of Prawn Koliwada... ==>> 300 gm Prawns , 1 tbsp Ginger-garlic paste , 1 tsp Red chilli powder , 3 tsp Besan , 2 tsp Maida , 4 tsp Yogurt , 1 tsp Oil , 2 tsp Lemon juice , 2 tsp Coriander powder , Salt to taste , Oil for deep-frying  , Chaat masala, as required.. ==>> How to Make Prawn Koliwada.. --> 1. To make this dish, first we need to wash and devein the prawns. Pat them dry and then marinate with ginger-garlic paste, 1/2 tsp red chilli powder, coriander powder, 1 tsp lemon juice, and salt. Set it aside for 20–25 minutes. --> 2. Now, squeeze out all the excess moisture from the prawns and add maida, besan, yoghurt, oil, and the remaining lemon juice and red chilli powder. --> 3. Mix well and coat the prawns nicely with all the masalas. --> 4. Heat oil in a kadhai set on a low-medium flame and start adding the marinated prawns to it in batches. Deep-fry them until they turn golden brown in colour. --> 5. Once done, transfer to a plate lined with tissue paper to remove excess oil. Sprinkle some chaat masala on top and enjoy! Maharashtrian prawn koliwada is ready!"],
    ["==>> Ingredients of Protein Bhel.. ==> 1 Cup Sprout beans , 1 cup Black Chickpea (boiled) , 1/2 cup Cucumber, chopped 1/2 cup Tomato, chopped 2 Green Chillies, finely chopped , 1 tbsp Roasted Peanuts , 1 large Boiled potato (cut into small cubes) , 1/2 cup Pomegranate seeds , 2 tbsp Fresh Coriander , finely chopped , 1 tsp Chaat Masalato taste Black Salt , 1 tbsp Lemon Juice , 1/2 tsp Roasted Cumin powder , 1 tbsp Green chutney , 1 tbsp Sweet Chutney , 2 tbsp Sev.. ==>> How to Make Protein Bhel ==> 1. Take boiled sprouts and black gram in a bowl. Add cucumber and tomato in it. --> 2. Now add peanuts, pomegranate seeds, boiled potatoes, green chillies, sev, chaat masala, black salt, lemon juice, green coriander, cumin powder, green chutney and sweet chutney.--> 3.Mix everything well, now take it out in a serving plate and garnish with sev and papdi and enjoy."],
    ["==>> Ingredients of Chana Palak Rice.. ==>> 1 Cup Chickpea (boiled) , 1 cup palak puree , 1 cup Rice, soaked , 2 Green Chillies , 1 Onion, sliced 2 tbsp Oil , 1/2 tsp Garam Masala , 1 Bay Leaf , 2 Green Cardamom , 2 Clove , 1 tsp Coriander Powder , to taste Salt , 1 tsp Ginger garlic paste , 1 tbsp Lemon Juice..  ==>> How to Make Chana Palak Rice... --> 1. First of all boil the chickpeas. On the other hand, blanch the spinach and make its puree. --> 2. Now add oil in a deep pan, add cumin, cloves, cardamom and bay leaves. After this add onion and fry till it turns translucent. --> 3. Add ginger garlic paste and fry for a few seconds, now add spinach puree and fry for some time. After this mix boiled chickpeas. --> 4. Now add salt, coriander powder and garam masala and fry everything. Add soaked rice and mix with everything. --> 5. Add 3 cups of water to rice and add lemon juice to it and mix. Now cover the pan with lid and let it cook for 15 to 20 minutes. --> 6. If you want, you can cook it in a pressure cooker till two whistles. Pair the hot pulao with chutney and raita."],
    ["==>> Ingredients of Cabbage Pulao... ==> 1 Cup basmati rice , 1 small small cabbage, finely chopped1 medium-sized onion, thinly sliced , 1 tomato chopped ,  1 tbsp ginger-garlic paste , 2-3 green chillies, chopped 2 tbsp oil or ghee , 1 tsp cumin seeds , 3-4 cloves , 2-3 green cardamom pods , 1 small cinnamon stick , 2 bay leaves , 2 cups water , Fresh coriander leaves for garnish , Salt to taste..  ==>> How to Make Cabbage Pulao..  --> 1. Start by washing the basmati rice thoroughly until the water runs clear. Then, soak the rice in water for about 30 minutes. --> 2. Heat oil or ghee in a pan or a pressure cooker over medium heat. --> 3. Add cumin seeds, cloves, green cardamom pods, cinnamon stick, and bay leaves. Sauté them until they release their aromatic fragrance. --> 4. Add the thinly sliced onions and chopped green chilies. Sauté until the onions turn golden brown. --> 5. Stir in the ginger-garlic paste and sauté for a minute or two until the raw smell disappears. Add the chopped tomatoes and cook until they become soft and blend with the onions. --> 6. Sauté the cabbage for a few minutes until it begins to soften. Drain the soaked rice and add it to the pan. Gently mix the rice and cabbage together. --> 7. Pour in two cups of water and add salt to taste. Stir well. If you're using a pressure cooker, cover it with the lid and cook for one whistle on medium heat. Then, reduce the heat and let it simmer for about 5-7 minutes. --> 8. Once the rice is cooked and the cabbage is tender, your Cabbage Pulao is ready to be served. Garnish with fresh coriander leaves."],
    ["==>> Ingredients of Darbari Dal.. ==>. 1/2 Cup masoor dal , 1/2 cup toor dal , 1/2 tsp turmeric powder , 2 tbsp ghee , 1 tsp ginger garlic paste , 1/2 tomato, chopped 1 tsp coriander powder , 1 tsp cumin powder , 1 tsp red chilli powder , 3-4 tbsp dahi , 1 tsp kasuri methi , 1 tsp coriander leaves , Salt as per taste , Sugar as per taste.. ==>> How to Make Darbari Dal. --> 1. Mix both the dal and boil with salt and turmeric. --> 2. Heat ghee in a pan and add ginger-garlic. --> 3. Saute and add tomato to it. --> 4. Add the spices, some salt and cook until it leaves oil. --> 5. Add dahi and mix. --> 6. Add dahi, mix and let it simmer for a while. Close the lid. --> 7. Now adjust salt and sugar, crush some kasuri methi and add. --> 8. Garnish with coriander leaves, ghee and serve."]
  ];
  
  const alternative = [
    
    "Ask something else... or write dish name properly as per given criteria or type 1 for suggestions", "Sorry for your concern... Database Error.. please type 1 for menu"
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }