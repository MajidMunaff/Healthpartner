import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Terms({ navigation }: any) {
    return (
        <LinearGradient colors={["#e0c3fc", "#b87defff"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>📜 Terms of Service</Text>
                <Text style={styles.text}>
                    By using this application, you agree to follow the terms and
                    conditions outlined below. Please read them carefully before using the
                    app.
                </Text>

                <Text style={styles.subTitle}>Usage</Text>
                <Text style={styles.text}>
                    The app is for educational and personal use only. Any misuse or
                    modification of its contents is prohibited.
                </Text>

                <Text style={styles.subTitle}>Liability</Text>
                <Text style={styles.text}>
                    We are not responsible for any data loss or misuse of the application.
                </Text>

                <Text style={styles.subTitle}>Updates</Text>
                <Text style={styles.text}>
                    We may update our terms from time to time. Please check this page
                    periodically for changes.
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
