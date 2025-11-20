// --- Types ---
export interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
    img: any;
}

export interface RecipeCategory {
    category: string;
    recipes: Recipe[];
}

// --- Sample Data ---
// export const recipesData: RecipeCategory[] = [
//     {
//         category: "Juice",
//         recipes: [
//             { name: "Orange Juice", ingredients: ["oranges", "sugar", "water"], instructions: "Blend oranges with sugar and water.", img: require("../../assets/images/orange.jpg") },
//             { name: "Apple Juice", ingredients: ["apples", "water"], instructions: "Blend peeled apples with water.", img: require("../../assets/images/apple.jpg") },
//             { name: "Mango Juice", ingredients: ["mangoes", "milk", "sugar"], instructions: "Blend mango pulp with milk and sugar.", img: require("../../assets/images/mango.jpg") },
//             { name: "Pineapple Juice", ingredients: ["pineapple", "salt", "sugar"], instructions: "Juice pineapple and strain.", img: require("../../assets/images/pineapple.jpg") },
//             { name: "Watermelon Juice", ingredients: ["watermelon", "mint"], instructions: "Blend watermelon chunks with mint.", img: require("../../assets/images/watermelon.jpg") },
//             { name: "Lemon Juice", ingredients: ["lemon", "sugar", "salt"], instructions: "Mix lemon juice with sugar and salt.", img: require("../../assets/images/lemon.jpg") },
//             { name: "Pomegranate Juice", ingredients: ["pomegranate"], instructions: "Blend seeds and strain the juice.", img: require("../../assets/images/pomegranate.jpg") },
//             { name: "Grape Juice", ingredients: ["grapes", "sugar"], instructions: "Blend grapes and filter.", img: require("../../assets/images/grape.jpg") },
//             { name: "Carrot Juice", ingredients: ["carrot", "honey"], instructions: "Blend carrots and mix with honey.", img: require("../../assets/images/carrot.jpg") },
//             { name: "Beetroot Juice", ingredients: ["beetroot", "ginger"], instructions: "Blend beetroot and ginger for an energy boost.", img: require("../../assets/images/beetroot.jpg") },
//         ],
//     },

//     {
//         category: "Soup",
//         recipes: [
//             { name: "Tomato Soup", ingredients: ["tomatoes", "cream"], instructions: "Boil and blend tomatoes.", img: require("../../assets/images/tomato.jpg") },
//             { name: "Mushroom Soup", ingredients: ["mushrooms", "cream"], instructions: "Cook mushrooms and blend.", img: require("../../assets/images/mushroom.jpg") },
//             { name: "Corn Soup", ingredients: ["sweet corn", "milk"], instructions: "Cook corn and blend with milk.", img: require("../../assets/images/corn.jpg") },
//             { name: "Pumpkin Soup", ingredients: ["pumpkin", "garlic"], instructions: "Cook pumpkin with garlic and blend.", img: require("../../assets/images/pumpkin.jpg") },
//             { name: "Spinach Soup", ingredients: ["spinach", "onion"], instructions: "Boil spinach and blend smooth.", img: require("../../assets/images/spinach.jpg") },
//             { name: "Chicken Soup", ingredients: ["chicken", "ginger", "garlic"], instructions: "Boil chicken with spices.", img: require("../../assets/images/chickensoup.jpg") },
//             { name: "Vegetable Soup", ingredients: ["mixed vegetables"], instructions: "Simmer chopped vegetables in broth.", img: require("../../assets/images/vegetable.jpg") },
//             { name: "Lentil Soup", ingredients: ["lentils", "onion", "garlic"], instructions: "Boil lentils and mash.", img: require("../../assets/images/lentil.jpg") },
//             { name: "Broccoli Soup", ingredients: ["broccoli", "cream"], instructions: "Boil broccoli and blend with cream.", img: require("../../assets/images/broccoli.jpg") },
//             { name: "Pea Soup", ingredients: ["peas", "mint"], instructions: "Boil peas and blend with mint.", img: require("../../assets/images/pea.jpg") },
//         ],
//     },

//     {
//         category: "Gravy",
//         recipes: [
//             { name: "Paneer Butter Masala", ingredients: ["paneer", "tomato", "cream"], instructions: "Cook in creamy tomato gravy.", img: require("../../assets/images/paneer.jpg") },
//             { name: "Chicken Gravy", ingredients: ["chicken", "spices"], instructions: "Simmer in rich masala gravy.", img: require("../../assets/images/chicken.jpg") },
//             { name: "Egg Curry", ingredients: ["egg", "onion", "tomato"], instructions: "Boil eggs and cook in spiced gravy.", img: require("../../assets/images/egg.jpg") },
//             { name: "Mutton Gravy", ingredients: ["mutton", "onion"], instructions: "Cook tender mutton with onions and tomato.", img: require("../../assets/images/mutton.jpg") },
//             { name: "Dal Tadka", ingredients: ["lentils", "ghee", "spices"], instructions: "Tempered lentils cooked with garlic.", img: require("../../assets/images/dal.jpg") },
//             { name: "Chana Masala", ingredients: ["chickpeas", "onion", "tomato"], instructions: "Cook chickpeas with spices.", img: require("../../assets/images/chana.jpg") },
//             { name: "Kadai Paneer", ingredients: ["paneer", "capsicum"], instructions: "Cook paneer in kadai-style masala.", img: require("../../assets/images/kadai.jpg") },
//             { name: "Butter Chicken", ingredients: ["chicken", "cream"], instructions: "Cook chicken in buttery tomato gravy.", img: require("../../assets/images/butterchicken.jpg") },
//             { name: "Fish Curry", ingredients: ["fish", "coconut milk"], instructions: "Cook fish in coconut-based curry.", img: require("../../assets/images/fish.jpg") },
//             { name: "Mix Veg Gravy", ingredients: ["vegetables", "spices"], instructions: "Cook assorted veggies in gravy.", img: require("../../assets/images/mixveg.jpg") },
//         ],
//     },

//     {
//         category: "Biryani",
//         recipes: [
//             { name: "Chicken Biryani", ingredients: ["chicken", "rice", "spices"], instructions: "Cook rice with chicken and spices.", img: require("../../assets/images/chickenbiriyani.jpg") },
//             { name: "Veg Biryani", ingredients: ["rice", "vegetables"], instructions: "Cook rice with vegetables and masala.", img: require("../../assets/images/veg.jpg") },
//             { name: "Mutton Biryani", ingredients: ["mutton", "rice"], instructions: "Cook tender mutton with rice.", img: require("../../assets/images/muttonbiryani.jpg") },
//             { name: "Egg Biryani", ingredients: ["egg", "rice"], instructions: "Layer rice with boiled eggs and masala.", img: require("../../assets/images/eggbiryani.jpg") },
//             { name: "Prawn Biryani", ingredients: ["prawns", "rice"], instructions: "Cook prawns with spiced rice.", img: require("../../assets/images/prawnbiryani.jpg") },
//         ],
//     },

//     {
//         category: "Dessert",
//         recipes: [
//             { name: "Gulab Jamun", ingredients: ["milk powder"], instructions: "Fry and soak in sugar syrup.", img: require("../../assets/images/gulab.jpg") },
//             { name: "Kheer", ingredients: ["rice", "milk", "sugar"], instructions: "Boil rice in milk and sugar.", img: require("../../assets/images/kheer.jpg") },
//             { name: "Rasmalai", ingredients: ["paneer", "milk"], instructions: "Soak rasgulla in sweet milk.", img: require("../../assets/images/rasmalai.jpg") },
//             { name: "Ladoo", ingredients: ["gram flour", "sugar"], instructions: "Roast flour and roll into ladoos.", img: require("../../assets/images/ladoo.jpg") },
//         ],
//     },
// ];


export const recipesData: RecipeCategory[] = [
    {
        category: "Juice",
        recipes: [
            {
                name: "Orange Juice",
                ingredients: ["oranges", "sugar", "water"],
                instructions: `1. Peel and segment the oranges.\n2. Add the orange pieces to a blender with sugar and water.\n3. Blend until smooth.\n4. Strain using a fine sieve to remove pulp.\n5. Serve chilled with ice cubes.`,
                img: require("../../assets/images/orange.jpg"),
            },
            {
                name: "Apple Juice",
                ingredients: ["apples", "water"],
                instructions: `1. Wash, peel, and core the apples.\n2. Cut into small pieces and blend with water.\n3. Strain the mixture for a smooth juice.\n4. Chill before serving.`,
                img: require("../../assets/images/apple.jpg"),
            },
            {
                name: "Mango Juice",
                ingredients: ["mangoes", "milk", "sugar"],
                instructions: `1. Peel and chop ripe mangoes.\n2. Blend mango pulp with chilled milk and sugar.\n3. Adjust sweetness as desired.\n4. Serve cold with ice cubes.`,
                img: require("../../assets/images/mango.jpg"),
            },
            {
                name: "Pineapple Juice",
                ingredients: ["pineapple", "salt", "sugar"],
                instructions: `1. Peel and core the pineapple.\n2. Cut into chunks and blend with sugar and a pinch of salt.\n3. Strain the juice.\n4. Chill and serve fresh.`,
                img: require("../../assets/images/pineapple.jpg"),
            },
            {
                name: "Watermelon Juice",
                ingredients: ["watermelon", "mint"],
                instructions: `1. Remove seeds and cut watermelon into cubes.\n2. Add to blender with mint leaves.\n3. Blend until smooth.\n4. Strain if needed and serve chilled.`,
                img: require("../../assets/images/watermelon.jpg"),
            },
            {
                name: "Lemon Juice",
                ingredients: ["lemon", "sugar", "salt"],
                instructions: `1. Squeeze juice from fresh lemons.\n2. Mix with cold water, sugar, and a pinch of salt.\n3. Stir until sugar dissolves.\n4. Add ice cubes and serve.`,
                img: require("../../assets/images/lemon.jpg"),
            },
            {
                name: "Pomegranate Juice",
                ingredients: ["pomegranate"],
                instructions: `1. Remove seeds from the pomegranate.\n2. Blend the seeds and strain through a muslin cloth.\n3. Serve chilled without adding sugar for natural sweetness.`,
                img: require("../../assets/images/pomegranate.jpg"),
            },
            {
                name: "Grape Juice",
                ingredients: ["grapes", "sugar"],
                instructions: `1. Wash grapes thoroughly.\n2. Blend with sugar and a little water.\n3. Strain the juice and refrigerate.\n4. Serve cold.`,
                img: require("../../assets/images/grape.jpg"),
            },
            {
                name: "Carrot Juice",
                ingredients: ["carrot", "honey"],
                instructions: `1. Wash, peel, and chop carrots.\n2. Blend with a small amount of water.\n3. Strain and mix in honey.\n4. Chill and enjoy.`,
                img: require("../../assets/images/carrot.jpg"),
            },
            {
                name: "Beetroot Juice",
                ingredients: ["beetroot", "ginger"],
                instructions: `1. Peel and chop beetroot and ginger.\n2. Blend with cold water.\n3. Strain and serve immediately for freshness.`,
                img: require("../../assets/images/beetroot.jpg"),
            },
        ],
    },

    {
        category: "Soup",
        recipes: [
            {
                name: "Tomato Soup",
                ingredients: ["tomatoes", "cream", "onion", "garlic"],
                instructions: `1. Boil chopped tomatoes with onion and garlic until soft.\n2. Blend the mixture and strain.\n3. Simmer again, add cream and salt.\n4. Serve hot with croutons.`,
                img: require("../../assets/images/tomato.jpg"),
            },
            {
                name: "Mushroom Soup",
                ingredients: ["mushrooms", "cream", "butter", "onion"],
                instructions: `1. Sauté chopped mushrooms and onion in butter.\n2. Blend half the mixture for thickness.\n3. Add cream, salt, and pepper.\n4. Simmer and serve warm.`,
                img: require("../../assets/images/mushroom.jpg"),
            },
            {
                name: "Corn Soup",
                ingredients: ["sweet corn", "milk", "cornflour"],
                instructions: `1. Blend half the corn to make a paste.\n2. Boil milk with corn paste and whole corn.\n3. Thicken with cornflour slurry.\n4. Add salt and pepper, then serve.`,
                img: require("../../assets/images/corn.jpg"),
            },
            {
                name: "Pumpkin Soup",
                ingredients: ["pumpkin", "garlic", "onion", "butter"],
                instructions: `1. Roast pumpkin cubes with garlic and onion.\n2. Blend until smooth.\n3. Add butter and simmer for 5 minutes.\n4. Serve hot with a dash of cream.`,
                img: require("../../assets/images/pumpkin.jpg"),
            },
            {
                name: "Spinach Soup",
                ingredients: ["spinach", "onion", "garlic"],
                instructions: `1. Blanch spinach leaves.\n2. Blend with sautéed onion and garlic.\n3. Boil for 5 minutes, season, and serve hot.`,
                img: require("../../assets/images/spinach.jpg"),
            },
            {
                name: "Chicken Soup",
                ingredients: ["chicken", "ginger", "garlic", "pepper"],
                instructions: `1. Boil chicken pieces with ginger, garlic, and pepper.\n2. Shred the chicken and return to broth.\n3. Add salt and simmer for flavor.\n4. Serve warm.`,
                img: require("../../assets/images/chickensoup.jpg"),
            },
            {
                name: "Vegetable Soup",
                ingredients: ["mixed vegetables", "broth"],
                instructions: `1. Chop assorted vegetables.\n2. Cook in vegetable broth until soft.\n3. Add herbs and seasonings.\n4. Serve warm.`,
                img: require("../../assets/images/vegetable.jpg"),
            },
            {
                name: "Lentil Soup",
                ingredients: ["lentils", "onion", "garlic", "spices"],
                instructions: `1. Boil lentils until tender.\n2. Sauté onion, garlic, and spices.\n3. Combine and simmer for 10 minutes.\n4. Serve hot.`,
                img: require("../../assets/images/lentil.jpg"),
            },
            {
                name: "Broccoli Soup",
                ingredients: ["broccoli", "cream", "onion"],
                instructions: `1. Boil broccoli and onion until tender.\n2. Blend with a little cream.\n3. Simmer and serve hot.`,
                img: require("../../assets/images/broccoli.jpg"),
            },
            {
                name: "Pea Soup",
                ingredients: ["peas", "mint", "onion"],
                instructions: `1. Boil peas and onion.\n2. Blend with mint leaves.\n3. Reheat, season, and serve warm.`,
                img: require("../../assets/images/pea.jpg"),
            },
        ],
    },

    {
        category: "Gravy",
        recipes: [
            {
                name: "Paneer Butter Masala",
                ingredients: ["paneer", "tomato", "cream", "butter"],
                instructions: `1. Cook tomatoes, onion, and spices until soft.\n2. Blend into smooth gravy.\n3. Add paneer cubes and cream.\n4. Simmer for 10 minutes and serve.`,
                img: require("../../assets/images/paneer.jpg"),
            },
            {
                name: "Chicken Gravy",
                ingredients: ["chicken", "spices", "tomato", "onion"],
                instructions: `1. Sauté onion and spices.\n2. Add chicken and cook until browned.\n3. Add tomato puree and simmer until gravy thickens.\n4. Serve with rice or bread.`,
                img: require("../../assets/images/chicken.jpg"),
            },
            {
                name: "Egg Curry",
                ingredients: ["egg", "onion", "tomato"],
                instructions: `1. Boil and peel eggs.\n2. Prepare masala with onion, tomato, and spices.\n3. Add boiled eggs and cook for 5 minutes.\n4. Serve hot.`,
                img: require("../../assets/images/egg.jpg"),
            },
            {
                name: "Mutton Gravy",
                ingredients: ["mutton", "onion", "tomato", "spices"],
                instructions: `1. Pressure cook mutton with salt and spices.\n2. In a pan, sauté onion and tomato.\n3. Add mutton and cook until gravy thickens.\n4. Serve hot.`,
                img: require("../../assets/images/mutton.jpg"),
            },
            {
                name: "Dal Tadka",
                ingredients: ["lentils", "ghee", "garlic", "spices"],
                instructions: `1. Boil lentils until soft.\n2. Prepare tempering with ghee, garlic, and spices.\n3. Pour over lentils and simmer.\n4. Serve with rice.`,
                img: require("../../assets/images/dal.jpg"),
            },
            {
                name: "Chana Masala",
                ingredients: ["chickpeas", "onion", "tomato"],
                instructions: `1. Boil chickpeas until soft.\n2. Sauté onion and tomato with masala.\n3. Add chickpeas and cook for 15 minutes.\n4. Serve with roti or rice.`,
                img: require("../../assets/images/chana.jpg"),
            },
            {
                name: "Kadai Paneer",
                ingredients: ["paneer", "capsicum", "onion"],
                instructions: `1. Roast spices and grind coarsely.\n2. Sauté onion and capsicum.\n3. Add paneer and spices.\n4. Cook until gravy coats paneer.`,
                img: require("../../assets/images/kadai.jpg"),
            },
            {
                name: "Butter Chicken",
                ingredients: ["chicken", "cream", "butter", "tomato"],
                instructions: `1. Grill marinated chicken.\n2. Make tomato-butter-cream gravy.\n3. Combine chicken and simmer until rich.\n4. Serve hot.`,
                img: require("../../assets/images/butterchicken.jpg"),
            },
            {
                name: "Fish Curry",
                ingredients: ["fish", "coconut milk", "spices"],
                instructions: `1. Sauté onion and spices.\n2. Add coconut milk and bring to boil.\n3. Add fish pieces and cook gently.\n4. Serve with rice.`,
                img: require("../../assets/images/fish.jpg"),
            },
            {
                name: "Mix Veg Gravy",
                ingredients: ["vegetables", "spices"],
                instructions: `1. Sauté mixed vegetables in oil.\n2. Add tomato puree and masala.\n3. Simmer until thick.\n4. Garnish and serve.`,
                img: require("../../assets/images/mixveg.jpg"),
            },
        ],
    },

    {
        category: "Biryani",
        recipes: [
            {
                name: "Chicken Biryani",
                ingredients: ["chicken", "rice", "spices"],
                instructions: `1. Marinate chicken with yogurt and spices.\n2. Cook half-boiled rice separately.\n3. Layer rice and chicken, cook on low heat (dum).\n4. Serve with raita.`,
                img: require("../../assets/images/chickenbiriyani.jpg"),
            },
            {
                name: "Veg Biryani",
                ingredients: ["rice", "vegetables", "spices"],
                instructions: `1. Fry mixed veggies with spices.\n2. Add partially cooked rice.\n3. Layer and cook for 15 minutes.\n4. Garnish with fried onions.`,
                img: require("../../assets/images/veg.jpg"),
            },
            {
                name: "Mutton Biryani",
                ingredients: ["mutton", "rice", "spices"],
                instructions: `1. Pressure cook mutton with spices.\n2. Parboil rice and layer with mutton gravy.\n3. Cook on dum for 20 minutes.\n4. Serve hot.`,
                img: require("../../assets/images/muttonbiryani.jpg"),
            },
            {
                name: "Egg Biryani",
                ingredients: ["egg", "rice", "spices"],
                instructions: `1. Boil and halve eggs.\n2. Prepare masala and layer with cooked rice.\n3. Steam on low for 10 minutes.\n4. Garnish with coriander.`,
                img: require("../../assets/images/eggbiryani.jpg"),
            },
            {
                name: "Prawn Biryani",
                ingredients: ["prawns", "rice", "spices"],
                instructions: `1. Cook prawns with masala briefly.\n2. Layer with half-cooked rice.\n3. Steam on dum for 10 minutes.\n4. Serve with lemon wedges.`,
                img: require("../../assets/images/prawnbiryani.jpg"),
            },
        ],
    },

    {
        category: "Dessert",
        recipes: [
            {
                name: "Gulab Jamun",
                ingredients: ["milk powder", "flour", "sugar", "ghee"],
                instructions: `1. Prepare dough from milk powder and flour.\n2. Shape into balls and deep fry on low flame.\n3. Soak in warm sugar syrup.\n4. Serve warm.`,
                img: require("../../assets/images/gulab.jpg"),
            },
            {
                name: "Kheer",
                ingredients: ["rice", "milk", "sugar", "cardamom"],
                instructions: `1. Boil rice in milk until soft.\n2. Add sugar and cardamom.\n3. Simmer until thick.\n4. Garnish with nuts and serve chilled.`,
                img: require("../../assets/images/kheer.jpg"),
            },
            {
                name: "Rasmalai",
                ingredients: ["paneer", "milk", "sugar", "saffron"],
                instructions: `1. Make paneer balls and cook in sugar syrup.\n2. Boil milk with saffron and reduce.\n3. Soak paneer balls in milk.\n4. Chill before serving.`,
                img: require("../../assets/images/rasmalai.jpg"),
            },
            {
                name: "Ladoo",
                ingredients: ["gram flour", "sugar", "ghee"],
                instructions: `1. Roast gram flour in ghee until golden.\n2. Add sugar syrup and mix well.\n3. Shape into balls when warm.\n4. Cool and store.`,
                img: require("../../assets/images/ladoo.jpg"),
            },
        ],
    },
];


export const profile: any = {

    img: require('../../assets/images/user.png'),

}


export interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
    img: any;
}
export interface Reci {
    name: string;
    ingredients: string[];
    instructions: string[];
    img: any;
}

export interface fruitCategory {
    category: string;
    img: any;
    backImg: any;
    recipes: Reci[];
}
// export const fruit: fruitCategory[] = [
//     // 🍎 APPLE
//     {
//         category: 'Apple',
//         img: require('../../assets/images/applepng.jpg'),
//         backImg: require('../../assets/images/backapple.jpg'),
//         recipes: [
//             { name: "Apple Juice", ingredients: ["apples", "water", "sugar"], instructions: "Blend peeled apples with water and sugar until smooth.", img: require("../../assets/images/apple.jpg") },
//             { name: "Apple Custard", ingredients: ["apples", "milk", "custard powder"], instructions: "Boil milk and add custard powder with apple puree.", img: require("../../assets/images/apple1.jpg") },
//             { name: "Apple Pie", ingredients: ["apples", "flour", "butter"], instructions: "Bake apples in a pastry crust until golden brown.", img: require("../../assets/images/apple2.jpg") },
//             { name: "Apple Smoothie", ingredients: ["apples", "yogurt", "honey"], instructions: "Blend apples with yogurt and honey.", img: require("../../assets/images/apple3.jpg") },
//             { name: "Caramel Apple", ingredients: ["apples", "caramel"], instructions: "Dip apples in melted caramel and let cool.", img: require("../../assets/images/apple4.jpg") },
//             { name: "Apple Salad", ingredients: ["apples", "mayonnaise", "nuts"], instructions: "Mix diced apples with mayo and crushed nuts.", img: require("../../assets/images/apple5.jpg") },
//             { name: "Apple Milkshake", ingredients: ["apples", "milk", "ice cream"], instructions: "Blend apples, milk, and vanilla ice cream.", img: require("../../assets/images/apple6.jpg") },
//             { name: "Apple Pudding", ingredients: ["apples", "cream", "sugar"], instructions: "Cook apples with sugar and cream for a smooth pudding.", img: require("../../assets/images/apple7.jpg") },
//         ],
//     },

//     // 🍌 BANANA
//     {
//         category: 'Banana',
//         img: require('../../assets/images/banana.jpg'),
//         backImg: require('../../assets/images/backbanana.jpg'),
//         recipes: [
//             { name: "Banana Milkshake", ingredients: ["bananas", "milk", "ice cream"], instructions: "Blend bananas, milk, and ice cream until creamy.", img: require("../../assets/images/banana1.jpg") },
//             { name: "Banana Smoothie", ingredients: ["bananas", "yogurt", "honey"], instructions: "Blend bananas with yogurt and honey.", img: require("../../assets/images/banana2.jpg") },
//             { name: "Banana Pancake", ingredients: ["bananas", "flour", "eggs"], instructions: "Mash bananas and mix with flour and eggs to make pancakes.", img: require("../../assets/images/banana3.jpg") },
//             { name: "Creamy Banana Salad", ingredients: ["bananas", "cream", "nuts"], instructions: "Slice bananas and mix with cream and nuts.", img: require("../../assets/images/banana4.jpg") },
//             { name: "Banana Custard", ingredients: ["bananas", "milk", "custard powder"], instructions: "Prepare custard and add mashed bananas.", img: require("../../assets/images/banana5.jpg") },
//             { name: "Banana Bread", ingredients: ["bananas", "flour", "sugar"], instructions: "Bake mashed bananas with flour and sugar.", img: require("../../assets/images/banana6.jpg") },
//             { name: "Banana Chips", ingredients: ["bananas", "oil", "salt"], instructions: "Slice and fry bananas until crispy.", img: require("../../assets/images/banana7.jpg") },
//             { name: "Banana Ice Cream", ingredients: ["bananas", "milk", "sugar"], instructions: "Freeze blended bananas with milk and sugar.", img: require("../../assets/images/banana8.jpg") },
//         ],
//     },

//     // 🍒 CHERRY
//     {
//         category: 'Cherry',
//         img: require('../../assets/images/cherry.jpg'),
//         backImg: require('../../assets/images/backcherry.jpg'),
//         recipes: [
//             { name: "Cherry Juice", ingredients: ["cherries", "water", "sugar"], instructions: "Blend cherries with water and sugar.", img: require("../../assets/images/cherry1.jpg") },
//             { name: "Cherry Pie", ingredients: ["cherries", "flour", "butter"], instructions: "Bake cherries in a crust until golden.", img: require("../../assets/images/cherry2.jpg") },
//             { name: "Cherry Smoothie", ingredients: ["cherries", "yogurt", "milk"], instructions: "Blend cherries with milk and yogurt.", img: require("../../assets/images/cherry3.jpg") },
//         ],
//     },

//     // 🥭 MANGO
//     {
//         category: 'Mango',
//         img: require('../../assets/images/mangoimg.jpg'),
//         backImg: require('../../assets/images/backmango.jpg'),
//         recipes: [
//             { name: "Mango Juice", ingredients: ["mangoes", "water", "sugar"], instructions: "Blend mangoes with water and sugar.", img: require("../../assets/images/mango1.jpg") },
//             { name: "Mango Pie", ingredients: ["mangoes", "flour", "butter"], instructions: "Bake mango filling in a crust.", img: require("../../assets/images/mango2.jpg") },
//             { name: "Mango Smoothie", ingredients: ["mangoes", "yogurt", "milk"], instructions: "Blend mangoes with milk and yogurt.", img: require("../../assets/images/mango3.jpg") },
//             { name: "Mango Ice Cream", ingredients: ["mangoes", "cream", "sugar"], instructions: "Mix mango puree with cream and freeze.", img: require("../../assets/images/mango4.jpg") },

//         ],
//     },

//     // 🍇 GRAPES
//     {
//         category: 'Grapes',
//         img: require('../../assets/images/grape.jpg'),
//         backImg: require('../../assets/images/backgrapes.jpg'),
//         recipes: [
//             { name: "Grape Juice", ingredients: ["grapes", "water", "sugar"], instructions: "Blend grapes with water and sugar.", img: require("../../assets/images/grape1.jpg") },
//             { name: "Grape Pie", ingredients: ["grapes", "flour", "butter"], instructions: "Bake grape filling in a crust.", img: require("../../assets/images/grape2.jpg") },

//         ],
//     },

//     // 🥝 KIWI
//     {
//         category: 'Kiwi',
//         img: require('../../assets/images/kiwi.jpg'),
//         backImg: require('../../assets/images/backkiwi.jpg'),
//         recipes: [
//             { name: "Kiwi Juice", ingredients: ["kiwi", "water", "sugar"], instructions: "Blend kiwi with water and sugar.", img: require("../../assets/images/kiwi1.jpg") },
//             { name: "Kiwi Pie", ingredients: ["kiwi", "flour", "butter"], instructions: "Bake kiwi filling in a crust until golden.", img: require("../../assets/images/kiwi2.jpg") },
//             { name: "Kiwi Smoothie", ingredients: ["kiwi", "banana", "yogurt"], instructions: "Blend kiwi, banana, and yogurt until smooth.", img: require("../../assets/images/kiwi3.jpg") },
//         ],
//     },

//     // 🍈 DURIAN
//     {
//         category: 'Durian',
//         img: require('../../assets/images/durian.jpg'),
//         backImg: require('../../assets/images/backdurian.jpg'),
//         recipes: [

//             { name: "Durian Custard", ingredients: ["durian", "milk", "custard powder"], instructions: "Add durian pulp to custard mix.", img: require("../../assets/images/durian1.jpg") },
//             { name: "Durian Shake", ingredients: ["durian", "milk", "sugar"], instructions: "Blend durian with milk and sugar.", img: require("../../assets/images/durian2.jpg") },
//             { name: "Durian Tart", ingredients: ["durian", "pastry dough", "jam"], instructions: "Fill tart shell with durian cream and bake.", img: require("../../assets/images/durian3.jpg") },
//             { name: "Durian Pancake", ingredients: ["durian", "flour", "egg"], instructions: "Fill pancakes with durian puree and roll.", img: require("../../assets/images/durian4.jpg") },
//         ],
//     },

//     // 🍇 FIG
//     {
//         category: 'Fig',
//         img: require('../../assets/images/fig.jpg'),
//         backImg: require('../../assets/images/backfig.jpg'),
//         recipes: [

//             { name: "Fig Custard", ingredients: ["figs", "milk", "custard powder"], instructions: "Add fig puree into custard mix.", img: require("../../assets/images/fig1.jpg") },
//             { name: "Fig Shake", ingredients: ["figs", "milk", "sugar"], instructions: "Blend figs with milk and sugar.", img: require("../../assets/images/fig2.jpg") },
//             { name: "Fig Tart", ingredients: ["figs", "pastry dough", "jam"], instructions: "Fill tart shell with fig jam and bake.", img: require("../../assets/images/fig3.jpg") },
//         ],
//     },

//     // 🥒 CUCUMBER
//     {
//         category: 'Cucumber',
//         img: require('../../assets/images/cucumber.jpg'),
//         backImg: require('../../assets/images/backcucumber.jpg'),
//         recipes: [
//             { name: "Cucumber Juice", ingredients: ["cucumber", "mint", "lemon"], instructions: "Blend cucumber with mint and lemon.", img: require("../../assets/images/cucumber1.jpg") },
//             { name: "Cucumber Salad", ingredients: ["cucumber", "tomato", "onion"], instructions: "Mix sliced cucumber with tomato and onion.", img: require("../../assets/images/cucumber2.jpg") },
//         ],
//     },

//     // 🍎 POMEGRANATE
//     {
//         category: 'Pomegranate',
//         img: require('../../assets/images/pomegranateimg.jpg'),
//         backImg: require('../../assets/images/backpome.jpg'),
//         recipes: [
//             { name: "Pomegranate Juice", ingredients: ["pomegranate", "water", "sugar"], instructions: "Blend pomegranate seeds with water and sugar.", img: require("../../assets/images/pome1.jpg") },
//             { name: "Pomegranate Pie", ingredients: ["pomegranate", "flour", "butter"], instructions: "Bake pomegranate filling in a pie crust.", img: require("../../assets/images/pome2.jpg") },
//             { name: "Pomegranate Smoothie", ingredients: ["pomegranate", "yogurt", "milk"], instructions: "Blend pomegranate seeds with milk and yogurt.", img: require("../../assets/images/pome3.jpg") },
//             { name: "Pomegranate Ice Cream", ingredients: ["pomegranate", "cream", "sugar"], instructions: "Mix pomegranate juice with cream and freeze.", img: require("../../assets/images/pome4.jpg") },
//         ],
//     },
// ];



export const fruit: fruitCategory[] = [
    // 🍎 APPLE
    {
        category: "Apple",
        img: require("../../assets/images/applepng.jpg"),
        backImg: require("../../assets/images/backapple.jpg"),
        recipes: [
            {
                name: "Apple Juice",
                ingredients: ["apples", "water", "sugar"],
                instructions: [
                    "Wash apples thoroughly and remove any bruises.",
                    "Peel and core the apples, chop into chunks.",
                    "Place apple pieces in a blender, add water and sugar.",
                    "Blend until smooth (30–45 seconds).",
                    "Strain through a fine sieve if you prefer pulp-free juice.",
                    "Chill and serve over ice.",
                ],
                img: require("../../assets/images/apple.jpg"),
            },
            {
                name: "Apple Custard",
                ingredients: ["apples", "milk", "custard powder", "sugar"],
                instructions: [
                    "Peel, core and dice the apples into small cubes.",
                    "In a saucepan, heat milk until warm (do not boil).",
                    "Mix custard powder with a little cold milk to a smooth paste.",
                    "Add the paste to the warm milk, stirring continuously to thicken.",
                    "Add cooked apple cubes and sugar, simmer 2–3 minutes.",
                    "Serve warm or chilled.",
                ],
                img: require("../../assets/images/apple1.jpg"),
            },
            {
                name: "Apple Pie",
                ingredients: ["apples", "flour", "butter", "sugar", "cinnamon"],
                instructions: [
                    "Preheat oven to 180°C (350°F).",
                    "Peel, core and thinly slice apples. Toss with sugar and cinnamon.",
                    "Prepare pastry dough and roll out half to line a pie tin.",
                    "Fill with apple mixture, dot with butter, cover with top crust.",
                    "Seal edges, cut vents in top, brush with egg wash.",
                    "Bake 35–45 minutes until golden. Cool before slicing.",
                ],
                img: require("../../assets/images/apple2.jpg"),
            },
            {
                name: "Apple Smoothie",
                ingredients: ["apples", "yogurt", "honey", "ice"],
                instructions: [
                    "Core and chop apples (peel optional).",
                    "Add apple pieces, yogurt, honey and a few ice cubes to a blender.",
                    "Blend until smooth and creamy.",
                    "Adjust sweetness with honey if needed.",
                    "Pour into a glass and serve immediately.",
                ],
                img: require("../../assets/images/apple3.jpg"),
            },
            {
                name: "Caramel Apple",
                ingredients: ["apples", "caramel", "stick or skewers"],
                instructions: [
                    "Wash and thoroughly dry apples; insert a stick into each apple top.",
                    "Melt caramel (or use ready caramel) until pourable.",
                    "Dip each apple into caramel, turning to coat evenly.",
                    "Allow excess caramel to drip off, place on parchment to set.",
                    "Chill briefly if needed, then serve.",
                ],
                img: require("../../assets/images/apple4.jpg"),
            },
            {
                name: "Apple Salad",
                ingredients: ["apples", "mayonnaise", "nuts", "celery (optional)"],
                instructions: [
                    "Core and dice apples into bite-sized cubes.",
                    "Chop nuts and celery if using.",
                    "Mix apples, nuts, celery and mayonnaise in a bowl.",
                    "Season lightly with salt and a squeeze of lemon to prevent browning.",
                    "Serve chilled on greens or as a side.",
                ],
                img: require("../../assets/images/apple5.jpg"),
            },
            {
                name: "Apple Milkshake",
                ingredients: ["apples", "milk", "ice cream", "sugar (optional)"],
                instructions: [
                    "Peel, core and chop apples.",
                    "Blend apple pieces with milk, a scoop of vanilla ice cream and sugar if desired.",
                    "Blend until frothy and smooth.",
                    "Pour into a tall glass and top with a scoop of ice cream if wished.",
                ],
                img: require("../../assets/images/apple6.jpg"),
            },
            {
                name: "Apple Pudding",
                ingredients: ["apples", "cream", "sugar", "vanilla"],
                instructions: [
                    "Peel and slice apples; cook in a pan with a little water and sugar until soft.",
                    "In another pan, heat cream with vanilla until warm.",
                    "Mix softened apples into the warm cream and simmer for 2–3 minutes.",
                    "Transfer to serving bowls and chill to set slightly.",
                    "Garnish with cinnamon or nutmeg before serving.",
                ],
                img: require("../../assets/images/apple7.jpg"),
            },
        ],
    },

    // 🍌 BANANA
    {
        category: "Banana",
        img: require("../../assets/images/banana.jpg"),
        backImg: require("../../assets/images/backbanana.jpg"),
        recipes: [
            {
                name: "Banana Milkshake",
                ingredients: ["bananas", "milk", "ice cream", "honey"],
                instructions: [
                    "Peel and slice ripe bananas.",
                    "Combine bananas, milk, ice cream and honey in a blender.",
                    "Blend until smooth and creamy.",
                    "Pour into glasses and serve immediately.",
                ],
                img: require("../../assets/images/banana1.jpg"),
            },
            {
                name: "Banana Smoothie",
                ingredients: ["bananas", "yogurt", "honey", "ice"],
                instructions: [
                    "Slice bananas and add to blender with yogurt and honey.",
                    "Add a few ice cubes and blend until smooth.",
                    "Taste and adjust honey if necessary.",
                    "Serve chilled.",
                ],
                img: require("../../assets/images/banana2.jpg"),
            },
            {
                name: "Banana Pancake",
                ingredients: ["bananas", "flour", "eggs", "milk"],
                instructions: [
                    "Mash bananas in a bowl until fairly smooth.",
                    "Add eggs, milk and flour to form a batter of pouring consistency.",
                    "Heat a non-stick pan and pour small rounds of batter.",
                    "Cook until bubbles form and flip, cook until golden.",
                    "Serve warm with syrup or fruit.",
                ],
                img: require("../../assets/images/banana3.jpg"),
            },
            {
                name: "Creamy Banana Salad",
                ingredients: ["bananas", "cream or yogurt", "nuts"],
                instructions: [
                    "Slice bananas into rounds.",
                    "Whip cream or use thick yogurt and fold in sliced bananas.",
                    "Add chopped nuts for crunch.",
                    "Chill briefly and serve as a dessert salad.",
                ],
                img: require("../../assets/images/banana4.jpg"),
            },
            {
                name: "Banana Custard",
                ingredients: ["bananas", "milk", "custard powder", "sugar"],
                instructions: [
                    "Prepare custard by mixing custard powder with cold milk to a paste.",
                    "Heat remaining milk with sugar, then add the paste, stirring until thick.",
                    "Fold in mashed bananas and simmer for 2 minutes.",
                    "Cool slightly and serve warm or chilled.",
                ],
                img: require("../../assets/images/banana5.jpg"),
            },
            {
                name: "Banana Bread",
                ingredients: ["bananas", "flour", "sugar", "eggs", "baking powder"],
                instructions: [
                    "Preheat oven to 175°C (350°F).",
                    "Mash ripe bananas in a bowl, add sugar and beaten eggs.",
                    "Stir in flour and baking powder until just combined.",
                    "Pour batter into a greased loaf tin and bake 45–55 minutes.",
                    "Cool on a rack before slicing.",
                ],
                img: require("../../assets/images/banana6.jpg"),
            },
            {
                name: "Banana Chips",
                ingredients: ["bananas", "oil", "salt"],
                instructions: [
                    "Slice plantain-type bananas thinly on a mandoline or knife.",
                    "Heat oil in a deep pan and fry slices until crisp and golden.",
                    "Drain on paper towels and season with salt while hot.",
                    "Cool and store in an airtight container.",
                ],
                img: require("../../assets/images/banana7.jpg"),
            },
            {
                name: "Banana Ice Cream",
                ingredients: ["bananas", "milk or cream", "sugar"],
                instructions: [
                    "Freeze slices of ripe banana until solid.",
                    "Blend frozen banana with a little milk or cream and sugar until creamy.",
                    "Transfer to a container and freeze briefly to firm up, then scoop.",
                ],
                img: require("../../assets/images/banana8.jpg"),
            },
        ],
    },

    // 🍒 CHERRY
    {
        category: "Cherry",
        img: require("../../assets/images/cherry.jpg"),
        backImg: require("../../assets/images/backcherry.jpg"),
        recipes: [
            {
                name: "Cherry Juice",
                ingredients: ["cherries", "water", "sugar"],
                instructions: [
                    "Wash and pit the cherries.",
                    "Place cherries, a splash of water and sugar in a blender.",
                    "Blend until smooth, then strain through a sieve.",
                    "Chill and serve over ice.",
                ],
                img: require("../../assets/images/cherry1.jpg"),
            },
            {
                name: "Cherry Pie",
                ingredients: ["cherries", "flour", "butter", "sugar"],
                instructions: [
                    "Preheat oven to 190°C (375°F).",
                    "Pit cherries and mix with sugar and a little cornstarch.",
                    "Line a pie dish with pastry, add cherry filling and top with crust.",
                    "Bake 35–45 minutes until pastry is golden. Cool before serving.",
                ],
                img: require("../../assets/images/cherry2.jpg"),
            },
            {
                name: "Cherry Smoothie",
                ingredients: ["cherries", "yogurt", "milk", "honey"],
                instructions: [
                    "Pit and rinse cherries.",
                    "Add cherries, yogurt, milk and honey to a blender.",
                    "Blend until smooth and pour into glasses.",
                ],
                img: require("../../assets/images/cherry3.jpg"),
            },
        ],
    },

    // 🥭 MANGO
    {
        category: "Mango",
        img: require("../../assets/images/mangoimg.jpg"),
        backImg: require("../../assets/images/backmango.jpg"),
        recipes: [
            {
                name: "Mango Juice",
                ingredients: ["mangoes", "water", "sugar"],
                instructions: [
                    "Peel and chop ripe mangoes, remove the pit.",
                    "Place mango pieces in a blender with a splash of water and sugar.",
                    "Blend until smooth and strain if desired for a thinner juice.",
                    "Serve chilled with ice.",
                ],
                img: require("../../assets/images/mango1.jpg"),
            },
            {
                name: "Mango Pie",
                ingredients: ["mangoes", "flour", "butter", "sugar"],
                instructions: [
                    "Prepare pie crust and pre-bake partially if desired.",
                    "Make mango filling by chopping mangoes and mixing with sugar and a little lemon juice.",
                    "Fill crust, cover with top layer and bake until golden.",
                    "Cool before serving.",
                ],
                img: require("../../assets/images/mango2.jpg"),
            },
            {
                name: "Mango Smoothie",
                ingredients: ["mangoes", "yogurt", "milk", "honey"],
                instructions: [
                    "Peel and dice mangoes.",
                    "Add mango, yogurt, milk and honey to a blender.",
                    "Blend until creamy and smooth.",
                    "Serve immediately chilled.",
                ],
                img: require("../../assets/images/mango3.jpg"),
            },
            {
                name: "Mango Ice Cream",
                ingredients: ["mangoes", "cream", "sugar"],
                instructions: [
                    "Puree ripe mangoes until smooth.",
                    "Whip cream with sugar until slightly thickened and fold in mango puree.",
                    "Freeze in a container, stirring every 30 minutes for 2–3 cycles for a creamy texture.",
                ],
                img: require("../../assets/images/mango4.jpg"),
            },
        ],
    },

    // 🍇 GRAPES
    {
        category: "Grapes",
        img: require("../../assets/images/grape.jpg"),
        backImg: require("../../assets/images/backgrapes.jpg"),
        recipes: [
            {
                name: "Grape Juice",
                ingredients: ["grapes", "water", "sugar"],
                instructions: [
                    "Wash grapes and remove stems.",
                    "Blend grapes with a little water and sugar to taste.",
                    "Strain through a sieve to remove skins.",
                    "Serve chilled.",
                ],
                img: require("../../assets/images/grape1.jpg"),
            },
            {
                name: "Grape Pie",
                ingredients: ["grapes", "flour", "butter", "sugar"],
                instructions: [
                    "Preheat oven to 180°C (350°F).",
                    "Halve and seed grapes if needed; toss with sugar and a thickener like cornstarch.",
                    "Fill pastry-lined pie plate and bake until golden and set.",
                    "Cool before slicing.",
                ],
                img: require("../../assets/images/grape2.jpg"),
            },
        ],
    },

    // 🥝 KIWI
    {
        category: "Kiwi",
        img: require("../../assets/images/kiwi.jpg"),
        backImg: require("../../assets/images/backkiwi.jpg"),
        recipes: [
            {
                name: "Kiwi Juice",
                ingredients: ["kiwi", "water", "sugar"],
                instructions: [
                    "Peel and chop kiwi fruits.",
                    "Place kiwi, a splash of water and sugar into a blender.",
                    "Blend until smooth and strain if desired.",
                    "Serve chilled or over ice.",
                ],
                img: require("../../assets/images/kiwi1.jpg"),
            },
            {
                name: "Kiwi Pie",
                ingredients: ["kiwi", "flour", "butter", "sugar"],
                instructions: [
                    "Prepare pie crust and pre-bake if preferred.",
                    "Slice kiwis and toss with a little sugar and lemon juice.",
                    "Fill crust and bake briefly until set (kiwi is delicate — do not overbake).",
                    "Chill before serving.",
                ],
                img: require("../../assets/images/kiwi2.jpg"),
            },
            {
                name: "Kiwi Smoothie",
                ingredients: ["kiwi", "banana", "yogurt"],
                instructions: [
                    "Peel kiwis and slice; add banana and yogurt to blender.",
                    "Blend until smooth and creamy.",
                    "Serve immediately chilled.",
                ],
                img: require("../../assets/images/kiwi3.jpg"),
            },
        ],
    },

    // 🍈 DURIAN
    {
        category: "Durian",
        img: require("../../assets/images/durian.jpg"),
        backImg: require("../../assets/images/backdurian.jpg"),
        recipes: [
            {
                name: "Durian Custard",
                ingredients: ["durian", "milk", "custard powder", "sugar"],
                instructions: [
                    "Scoop durian pulp and remove fibers; mash into a smooth paste.",
                    "Prepare custard with milk and custard powder according to package instructions.",
                    "Stir durian pulp into warm custard and simmer 1–2 minutes.",
                    "Serve warm or chilled.",
                ],
                img: require("../../assets/images/durian1.jpg"),
            },
            {
                name: "Durian Shake",
                ingredients: ["durian", "milk", "sugar", "ice"],
                instructions: [
                    "Add durian pulp, milk, sugar and ice to a blender.",
                    "Blend until smooth and frothy.",
                    "Pour into glasses and serve immediately.",
                ],
                img: require("../../assets/images/durian2.jpg"),
            },
            {
                name: "Durian Tart",
                ingredients: ["durian", "pastry dough", "cream"],
                instructions: [
                    "Prepare tart shells from pastry dough and blind-bake until golden.",
                    "Make a durian cream filling by mixing durian pulp with whipped cream.",
                    "Fill cooled tart shells and chill to set.",
                ],
                img: require("../../assets/images/durian3.jpg"),
            },
            {
                name: "Durian Pancake",
                ingredients: ["durian", "flour", "egg", "milk"],
                instructions: [
                    "Prepare pancake batter and cook thin pancakes on a hot pan.",
                    "Spread durian pulp on a pancake, fold or roll, and serve warm.",
                ],
                img: require("../../assets/images/durian4.jpg"),
            },
        ],
    },

    // 🍇 FIG
    {
        category: "Fig",
        img: require("../../assets/images/fig.jpg"),
        backImg: require("../../assets/images/backfig.jpg"),
        recipes: [
            {
                name: "Fig Custard",
                ingredients: ["figs", "milk", "custard powder", "sugar"],
                instructions: [
                    "Chop figs and simmer briefly to soften.",
                    "Prepare custard with milk and custard powder, add cooked fig pieces.",
                    "Simmer 1–2 minutes and serve warm or chilled.",
                ],
                img: require("../../assets/images/fig1.jpg"),
            },
            {
                name: "Fig Shake",
                ingredients: ["figs", "milk", "sugar", "ice"],
                instructions: [
                    "Remove fig stems and quarter figs.",
                    "Blend figs with milk, sugar and ice until smooth.",
                    "Serve chilled.",
                ],
                img: require("../../assets/images/fig2.jpg"),
            },
            {
                name: "Fig Tart",
                ingredients: ["figs", "pastry dough", "jam", "butter"],
                instructions: [
                    "Prepare tart shell and spread a thin layer of jam.",
                    "Arrange sliced figs on top, dot with butter and bake until pastry is set.",
                    "Cool and serve.",
                ],
                img: require("../../assets/images/fig3.jpg"),
            },
        ],
    },

    // 🥒 CUCUMBER
    {
        category: "Cucumber",
        img: require("../../assets/images/cucumber.jpg"),
        backImg: require("../../assets/images/backcucumber.jpg"),
        recipes: [
            {
                name: "Cucumber Juice",
                ingredients: ["cucumber", "mint", "lemon"],
                instructions: [
                    "Wash cucumbers and chop into pieces.",
                    "Blend cucumber with mint leaves and a squeeze of lemon.",
                    "Strain if desired and serve chilled.",
                ],
                img: require("../../assets/images/cucumber1.jpg"),
            },
            {
                name: "Cucumber Salad",
                ingredients: ["cucumber", "tomato", "onion", "vinegar"],
                instructions: [
                    "Slice cucumbers, tomatoes and onions thinly.",
                    "Toss with a little vinegar, salt and pepper.",
                    "Chill briefly and serve as a refreshing side.",
                ],
                img: require("../../assets/images/cucumber2.jpg"),
            },
        ],
    },

    // 🍎 POMEGRANATE
    {
        category: "Pomegranate",
        img: require("../../assets/images/pomegranateimg.jpg"),
        backImg: require("../../assets/images/backpome.jpg"),
        recipes: [
            {
                name: "Pomegranate Juice",
                ingredients: ["pomegranate", "water", "sugar"],
                instructions: [
                    "Remove seeds (arils) from the pomegranate.",
                    "Blend seeds with a little water until liquid.",
                    "Strain through a fine sieve or muslin to remove solids.",
                    "Add sugar if desired, chill and serve.",
                ],
                img: require("../../assets/images/pome1.jpg"),
            },
            {
                name: "Pomegranate Pie",
                ingredients: ["pomegranate", "flour", "butter", "sugar"],
                instructions: [
                    "Prepare pie crust and preheat oven to 180°C (350°F).",
                    "Combine pomegranate arils with sugar and a thickener like cornstarch.",
                    "Fill crust and bake until filling is set and crust is golden.",
                    "Cool before slicing.",
                ],
                img: require("../../assets/images/pome2.jpg"),
            },
            {
                name: "Pomegranate Smoothie",
                ingredients: ["pomegranate", "yogurt", "milk"],
                instructions: [
                    "Blend pomegranate seeds with yogurt and a splash of milk.",
                    "Strain if you prefer a smoother texture.",
                    "Serve chilled.",
                ],
                img: require("../../assets/images/pome3.jpg"),
            },
            {
                name: "Pomegranate Ice Cream",
                ingredients: ["pomegranate", "cream", "sugar"],
                instructions: [
                    "Make pomegranate juice and reduce slightly for concentrated flavor.",
                    "Fold into sweetened whipped cream or custard base.",
                    "Freeze, stirring occasionally for a smooth texture, or use an ice cream maker.",
                ],
                img: require("../../assets/images/pome4.jpg"),
            },
        ],
    },
];


