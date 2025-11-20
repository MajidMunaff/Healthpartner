import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ServiceScreen({ navigation }: any) {
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
        <LinearGradient colors={["#fdfbfb", "#ebedee"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>💼 Our Services</Text>
                <Text style={styles.text}>
                    We offer a variety of mobile app development services focusing on
                    creating fast, reliable, and user-friendly applications. From
                    front-end UI design to backend integration, we cover the entire app
                    lifecycle.
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>📱 App Development</Text>
                    <Text style={styles.cardText}>
                        Build native apps using React Native for both Android and iOS.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>⚙️ UI/UX Design</Text>
                    <Text style={styles.cardText}>
                        Beautiful and intuitive interfaces tailored for the best user
                        experience.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>☁️ API Integration</Text>
                    <Text style={styles.cardText}>
                        Seamless integration with cloud services and APIs.
                    </Text>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={toggleExpand}>
                    <Animated.View style={[styles.arrowContainer, { width: widthAnim }]}>
                        <Text style={styles.arrow}>{expanded ? "←" : "←"}</Text>
                        <Animated.Text style={[styles.backText, { opacity: textOpacity }]} onPress={() => navigation.goBack()}>
                            {"  Back to Menu"}
                        </Animated.Text>
                    </Animated.View>
                </TouchableOpacity>

            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { padding: 20 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 15, color: "#333" },
    text: { fontSize: 16, color: "#444", lineHeight: 22, marginBottom: 20 },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    arrow: {
        fontSize: 18,
        color: "white",
    },
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
    cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
    cardText: { fontSize: 14, color: "#555" },

});
