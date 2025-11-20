import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Moredetails({ navigation, route }: any) {
    const { makeIt } = route.params;

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>

                <Image
                    source={makeIt.img}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{makeIt.name}</Text>

                <Text style={styles.subheading}>Ingredients</Text>
                {makeIt.ingredients.map((item: string, index: number) => (
                    <Text key={index} style={styles.listItem}>• {item}</Text>
                ))}

                <Text style={styles.subheading}>Preparation Steps</Text>
                {Array.isArray(makeIt.instructions)
                    ? makeIt.instructions.map((step: string, index: number) => (
                        <View key={index} style={styles.stepContainer}>
                            <Text style={styles.stepNumber}>Step {index + 1}</Text>
                            <Text style={styles.stepText}>{step}</Text>
                        </View>
                    ))
                    : <Text style={styles.stepText}>{makeIt.instructions}</Text>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#ffffffff" },
    content: { padding: 20 },
    title: { fontSize: 28, fontWeight: "700", color: "#222", marginBottom: 15 },
    image: {
        width: "100%",
        height: 220,
        borderRadius: 12,
        marginBottom: 20,
    },
    subheading: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        marginTop: 10,
        marginBottom: 8,
    },
    listItem: {
        fontSize: 16,
        color: "#444",
        marginLeft: 10,
        marginBottom: 6,
    },
    stepContainer: { marginBottom: 10 },
    stepNumber: { fontWeight: "600", color: "#222", marginBottom: 2 },
    stepText: { fontSize: 16, color: "#555", lineHeight: 22 },
});
