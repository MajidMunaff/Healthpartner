import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    FlatList,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { recipesData } from "./Globle/Array";

export default function List({ navigation }: any) {
    const [selectedCategory, setSelectedCategory] = useState(recipesData[0]);
    const indicatorX = useRef(new Animated.Value(0)).current;

    // useRef for animated values so they persist between renders
    const translateY = useRef(new Animated.Value(20)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleCategorySelect = (item: any, index: number) => {
        setSelectedCategory(item);
        Animated.spring(indicatorX, {
            toValue: index * 110, // adjust to your button width/spacing
            useNativeDriver: false,
            friction: 6,
        }).start();
    };

    useEffect(() => {
        // reset starting values then animate to visible
        fadeAnim.setValue(0);
        translateY.setValue(20);

        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(translateY, {
                toValue: 0,
                friction: 15,
                useNativeDriver: true,
            }),
        ]).start();
    }, [selectedCategory, fadeAnim, translateY]);

    return (
        <SafeAreaProvider style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <View style={styles.container}>
                {/* Segmented Category Bar */}
                <View style={styles.segmentContainer}>
                    <FlatList
                        data={recipesData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.category}
                        contentContainerStyle={styles.segmentScroll}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={[
                                    styles.segmentButton,
                                    selectedCategory.category === item.category && styles.activeSegment,
                                ]}
                                onPress={() => handleCategorySelect(item, index)}
                            >
                                <Text
                                    style={[
                                        styles.segmentText,
                                        selectedCategory.category === item.category && styles.activeText,
                                    ]}
                                >
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Animated recipe list: apply animated styles here */}
                <Animated.FlatList
                    data={selectedCategory.recipes}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={styles.recipeList}
                    style={{
                        opacity: fadeAnim,
                        transform: [{ translateY }],
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Moredetails", { makeIt: selectedCategory.recipes[index] });
                            }}
                        >
                            <View style={styles.recipeCard}>
                                <Image source={item.img} style={styles.img} />
                                <View style={styles.text}>
                                    <Text style={styles.recipeName}>{item.name}</Text>
                                    <Text style={styles.recipeDesc}> {item.ingredients.join(", ")}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    segmentContainer: {
        height: 60,
        backgroundColor: "#fafafa",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        justifyContent: "center",
    },
    segmentScroll: { paddingHorizontal: 10, alignItems: "center" },
    segmentButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    activeSegment: {
        backgroundColor: "#a020f0",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    segmentText: { fontSize: 15, color: "#444", fontWeight: "500" },
    activeText: { color: "#fff", fontWeight: "600" },

    recipeList: { padding: 15 },
    recipeCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 0,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },
    img: {
        width: 100, height: 100, borderRadius: 10, borderWidth: 2,
        borderColor: '#666666b3'
    },
    text: { flex: 1, marginLeft: 10 },
    recipeName: { fontSize: 17, fontWeight: "bold", color: "#222" },
    recipeDesc: { fontSize: 14, color: "#555", marginTop: 4 },
});












// import React, { useState } from "react";
// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { recipesData } from "./Globle/Array";


// export default function List() {
//     const [selectedCategory, setSelectedCategory] = useState(recipesData[0]);

//     return (
//         <SafeAreaProvider>

//             <View style={styles.container}>
//                 <View style={{ height: 50 }}>

//                     <FlatList
//                         data={recipesData}
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         keyExtractor={(item) => item.category}
//                         contentContainerStyle={{ paddingHorizontal: 10 }}
//                         renderItem={({ item }) => (
//                             <TouchableOpacity
//                                 style={[
//                                     styles.categoryButton,
//                                     selectedCategory.category === item.category && styles.activeCategory,
//                                 ]}
//                                 onPress={() => setSelectedCategory(item)}
//                             >
//                                 <Text
//                                     style={[
//                                         styles.categoryText,
//                                         selectedCategory.category === item.category && styles.activeText,
//                                     ]}
//                                 >
//                                     {item.category}
//                                 </Text>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 </View>

//                 <FlatList
//                     data={selectedCategory.recipes}
//                     keyExtractor={(item) => item.name}
//                     contentContainerStyle={{ padding: 15 }}
//                     renderItem={({ item }) => (
//                         <View style={styles.recipeCard}>
//                             <Image source={item.img} style={[styles.img]} />
//                             <View style={[styles.text]}>
//                                 <Text style={styles.recipeName}>{item.name}</Text>
//                                 <Text style={styles.recipeDesc}>{item.instructions}</Text>
//                             </View>
//                         </View>
//                     )}
//                 />
//             </View>
//         </SafeAreaProvider>
//     );
// }

// // --- Styles ---
// const styles = StyleSheet.create({
//     text: {
//         marginLeft: 10,
//     },
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     categoryButton: {
//         paddingVertical: 8,
//         paddingHorizontal: 15,
//         backgroundColor: "#f2f2f2",
//         borderRadius: 20,
//         height: 35,
//         marginHorizontal: 5,
//         marginBottom: 10,
//     },
//     activeCategory: {
//         backgroundColor: "#aa2cac",
//     },
//     categoryText: {
//         fontSize: 16,
//         color: "#333",
//     },
//     activeText: {
//         color: "#fff",
//         fontWeight: "600",
//     },
//     recipeCard: {
//         backgroundColor: "#f9f9f9",
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 10,
//         elevation: 2,
//         flexDirection: 'row',
//     },
//     img: {
//         width: 100,
//         height: 100,
//     },
//     recipeName: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "#222",
//     },
//     recipeDesc: {
//         fontSize: 14,
//         color: "#555",
//         marginTop: 4,
//     },
// });











// import React, { useEffect, useRef, useState } from "react";

// import {
//     Animated,
//     FlatList,
//     Image,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { recipesData } from "./Globle/Array";

// export default function List({ navigation, route }: any) {
//     const [selectedCategory, setSelectedCategory] = useState(recipesData[0]);
//     const indicatorX = useRef(new Animated.Value(0)).current;

//     // useRef for animated values so they persist between renders
//     const translateY = useRef(new Animated.Value(20)).current;
//     const fadeAnim = useRef(new Animated.Value(0)).current;
//     const handleCategorySelect = (item: any, index: number) => {
//         setSelectedCategory(item);
//         Animated.spring(indicatorX, {
//             toValue: index * 110, // Adjust based on button width
//             useNativeDriver: false,
//             friction: 6,
//         }).start();
//     };

//     useEffect(() => {
//         fadeAnim.setValue(0);
//         translateY.setValue(20);
//         Animated.parallel([
//             Animated.timing(fadeAnim, {
//                 toValue: 1,
//                 duration: 350,
//                 useNativeDriver: true,
//             }),
//             Animated.spring(translateY, {
//                 toValue: 0,
//                 friction: 6,
//                 useNativeDriver: true,
//             }),
//         ]).start();
//     }, [selectedCategory]);

//     return (
//         <SafeAreaProvider>
//             <View style={styles.container}>
//                 {/* 🟣 Segmented Category Bar */}
//                 <View style={styles.segmentContainer}>
//                     <FlatList
//                         data={recipesData}
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         keyExtractor={(item) => item.category}
//                         contentContainerStyle={styles.segmentScroll}
//                         renderItem={({ item, index }) => (
//                             <TouchableOpacity
//                                 style={[
//                                     styles.segmentButton,
//                                     selectedCategory.category === item.category && styles.activeSegment,
//                                 ]}
//                                 onPress={() => handleCategorySelect(item, index)}
//                             >
//                                 <Text
//                                     style={[
//                                         styles.segmentText,
//                                         selectedCategory.category === item.category && styles.activeText,
//                                     ]}
//                                 >
//                                     {item.category}
//                                 </Text>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 </View>

//                 {/* 🟣 Recipes List */}
//                 <Animated.FlatList
//                     data={selectedCategory.recipes}
//                     keyExtractor={(item) => item.name}
//                     contentContainerStyle={styles.recipeList}
//                     renderItem={({ item, index }) => (
//                         <TouchableOpacity onPress={() => {
//                             navigation.navigate('Moredetails', { makeIt: selectedCategory.recipes[index] })
//                         }}>
//                             <View style={styles.recipeCard}>
//                                 <Image source={item.img} style={styles.img} />
//                                 <View style={styles.text}>
//                                     <Text style={styles.recipeName}>{item.name}</Text>
//                                     <Text style={styles.recipeDesc}> {item.ingredients.join(", ")}</Text>
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         </SafeAreaProvider>
//     );
// }

// // --- 💅 Styles ---
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },

//     // --- Segmented Control ---
//     segmentContainer: {
//         height: 60,
//         backgroundColor: "#fafafa",
//         borderBottomWidth: 1,
//         borderBottomColor: "#eee",
//         justifyContent: "center",
//     },
//     segmentScroll: {
//         paddingHorizontal: 10,
//         alignItems: "center",
//     },
//     segmentButton: {
//         paddingVertical: 8,
//         paddingHorizontal: 20,
//         backgroundColor: "#f2f2f2",
//         borderRadius: 20,
//         marginHorizontal: 5,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     activeSegment: {
//         backgroundColor: "#a020f0",
//         shadowColor: "#000",
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         shadowOffset: { width: 0, height: 2 },
//         elevation: 3,
//     },
//     segmentText: {
//         fontSize: 15,
//         color: "#444",
//         fontWeight: "500",
//     },
//     activeText: {
//         color: "#fff",
//         fontWeight: "600",
//     },

//     // --- Recipes ---
//     recipeList: {
//         padding: 15,
//     },
//     recipeCard: {
//         backgroundColor: "#fff",
//         borderRadius: 16,
//         padding: 16,
//         marginVertical: 8,
//         marginHorizontal: 0,
//         flexDirection: "row",
//         alignItems: "center",
//         // ✨ shadow for iOS
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.15,
//         shadowRadius: 6,
//         // ✨ shadow for Android
//         elevation: 6,
//         // border for subtle definition
//         borderWidth: 1,
//         borderColor: "rgba(0,0,0,0.05)",
//     },
//     img: {
//         width: 100,
//         height: 100,
//         borderRadius: 10,
//     },
//     text: {
//         flex: 1,
//         marginLeft: 10,
//     },
//     recipeName: {
//         fontSize: 17,
//         fontWeight: "bold",
//         color: "#222",
//     },
//     recipeDesc: {
//         fontSize: 14,
//         color: "#555",
//         marginTop: 4,
//     },
// });
