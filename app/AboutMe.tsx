import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AboutScreen({ navigation }: any) {
    const [expanded, setExpanded] = useState(false);
    const widthAnim = useRef(new Animated.Value(40)).current; // Start small width
    const textOpacity = useRef(new Animated.Value(0)).current; // Hide text initially

    const toggleExpand = () => {
        const toValue = expanded ? 40 : 150; // expand/collapse width
        const textTo = expanded ? 0 : 1;

        // Animate width
        Animated.timing(widthAnim, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start();

        // Animate text opacity
        Animated.timing(textOpacity, {
            toValue: textTo,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setExpanded(!expanded);
    };
    return (
        <LinearGradient colors={["#fff", "#f8f9fa"]} style={styles.container}>
            <Image
                source={require("../assets/images/profile.png")} // Replace with your image
                style={styles.image}
            />
            <Text style={styles.title}>👋 About Me</Text>
            <Text style={styles.text}>
                Hi, I’m Majid! I’m currently learning mobile app development using React
                Native through a training program offered by Synapssprak. I’m passionate
                about creating functional, beautiful, and efficient mobile applications.
            </Text>
            <Text style={styles.text}>
                This project is part of my journey to becoming a skilled React Native
                developer.
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleExpand}>
                <Animated.View style={[styles.arrowContainer, { width: widthAnim }]}>
                    <Text style={styles.arrow}>{expanded ? "←" : "←"}</Text>
                    <Animated.Text style={[styles.backText, { opacity: textOpacity }]} onPress={() => navigation.goBack()}>
                        {"  Back to Menu"}
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#333" },
    text: { fontSize: 16, color: "#555", textAlign: "center", marginBottom: 10 },
    back: { marginTop: 20, color: "#007AFF", fontSize: 16 },
    arrowContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4a90e2",
        padding: 8,
        alignSelf: 'center',
        // textAlign: 'center',
        height: 40,
        borderRadius: 20,
    },
    backText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
    arrow: {
        fontSize: 18,
        color: "white",
    },
});
