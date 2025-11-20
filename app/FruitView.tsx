import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
export default function FruitView({ navigation, route }: any) {
    const { information } = route.params;

    // console.log(information.recipes[0]);

    const renderRecipe = ({ item }: any) => (
        <TouchableOpacity style={styles.card} onPress={() => {
            console.log(item);
            navigation.navigate('Cook', { recipe: item })
        }}>
            <Image source={item.img} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaProvider style={{ backgroundColor: '#ffff' }}>

            {/* Top Image */}
            <Image source={information.backImg} style={styles.topImage} />

            {/* Title */}
            <View style={styles.header}>
                <Text style={styles.title}>{information.category}</Text>
            </View>

            {/* Recipes Section */}
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>
                    Recipes in {information.category.toLowerCase()}
                </Text>

                <FlatList
                    data={information.recipes}
                    renderItem={renderRecipe}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

    topImage: { width: "100%", height: 220, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    header: { padding: 16 },
    title: { fontSize: 24, fontWeight: "bold", textTransform: "capitalize" },
    recipeSection: { paddingHorizontal: 16, marginTop: 8 },

    card: {
        width: (width - 48) / 2, // two cards per row
        backgroundColor: "#0000001a",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 3,
    },
    recipeImage: { width: "100%", height: 120 },
    recipeName: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        paddingVertical: 8,
        color: "#333",
    },
    container: {
        flex: 1, // 🔥 allows FlatList to take full height
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
        marginVertical: 15,
        marginLeft: 5,
    },
    listContent: {
        paddingBottom: 120, // 🧍space for scrolling past bottom
    },
    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 15,
    },
});