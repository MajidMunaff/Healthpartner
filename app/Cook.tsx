import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cook({ navigation, route }: any) {
    const { recipe } = route.params;

    return (
        <ScrollView style={styles.container}>
            {/* 🔙 Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>

            {/* 🍽️ Recipe Image */}
            <Image source={recipe.img} style={styles.image} resizeMode='cover' />

            {/* ✨ Gradient Overlay for Title */}
            <LinearGradient
                colors={["rgba(0,0,0,0.4)", "transparent"]}
                style={styles.gradientOverlay}
            >
                <Text style={styles.recipeTitle}>{recipe.name}</Text>
            </LinearGradient>

            {/* 🧾 Recipe Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                {recipe.ingredients.map((ingredient: string, index: number) => (
                    <Text key={index} style={styles.ingredientText}>• {ingredient}</Text>
                ))}

                <Text style={styles.sectionTitle}>Instructions</Text>
                <Text style={styles.instructions}>{recipe.instructions}</Text>
            </View>
        </ScrollView>
    );
}

// 💅 Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backButton: {
        padding: 12,
        position: "absolute",
        top: 40,
        left: 15,
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 8,
    },
    backText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    image: {
        width: "100%",
        height: 280,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    gradientOverlay: {
        position: "absolute",
        top: 220,
        left: 0,
        right: 0,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    recipeTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0,0,0,0.4)",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
    },
    detailsContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#a020f0",
        marginTop: 10,
        marginBottom: 6,
    },
    ingredientText: {
        fontSize: 16,
        color: "#444",
        marginVertical: 2,
        marginLeft: 10,
    },
    instructions: {
        fontSize: 16,
        color: "#555",
        lineHeight: 24,
        marginTop: 4,
        textAlign: "justify",
    },
});
