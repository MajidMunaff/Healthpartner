import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Privacy({ navigation }: any) {
    return (
        <LinearGradient colors={["#fefcea", "#f1f2b5"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>🔒 Privacy Policy</Text>
                <Text style={styles.text}>
                    Your privacy is important to us. We collect only essential information
                    to improve app performance and user experience. We never share your
                    data with third parties without your consent.
                </Text>

                <Text style={styles.subTitle}>Data We Collect</Text>
                <Text style={styles.text}>
                    - App usage statistics {"\n"}- Basic device info {"\n"}- Optional user feedback
                </Text>

                <Text style={styles.subTitle}>Your Rights</Text>
                <Text style={styles.text}>
                    You can request to view or delete your data anytime by contacting our
                    support team.
                </Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>← Back to Menu</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { padding: 20 },
    title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#333" },
    subTitle: { fontSize: 18, fontWeight: "600", marginTop: 15, marginBottom: 5 },
    text: { fontSize: 15, color: "#444", lineHeight: 22 },
    back: { marginTop: 25, color: "#007AFF", fontSize: 16, textAlign: "center" },
});
