import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function SupportScreen({ navigation }: any) {
    const [expanded, setExpanded] = useState(false);
    const widthAnim = useRef(new Animated.Value(40)).current; // Start small width
    const textOpacity = useRef(new Animated.Value(0)).current; // Hide text initially

    // const toggleExpand = () => {
    //     const toWidth = expanded ? 40 : 150; // expand/collapse width
    //     const textTo = expanded ? 0 : 1;

    //     // Animate width
    //     Animated.timing(widthAnim, {
    //         toValue: toWidth,
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start();

    //     // Animate text opacity
    //     Animated.timing(textOpacity, {
    //         toValue: textTo,
    //         duration: 300,
    //         useNativeDriver: true,
    //     }).start();

    //     // console.log('hello');
    //     setExpanded(!expanded);

    // };

    const toWidth = expanded ? 40 : 150; // expand/collapse width
    const textTo = expanded ? 0 : 1;

    // Animate width
    Animated.timing(widthAnim, {
        toValue: toWidth,
        duration: 300,
        useNativeDriver: false,
    }).start();

    // Animate text opacity
    Animated.timing(textOpacity, {
        toValue: textTo,
        duration: 300,
        useNativeDriver: true,
    }).start();

    // console.log('hello');


    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => {
            console.log('heljjklo');
            setExpanded(false);
            console.log(expanded)
            console.log(toWidth, textTo)
        }}>
            <View style={[styles.container]}>



                <Text style={styles.title}>🛠️ Support</Text>
                <Text style={styles.text}>
                    Need help? We’re here to assist you with any issues or questions about
                    the app. Our support team is dedicated to making sure you have the best
                    experience possible.
                </Text>
                <View style={[styles.shadow]}>
                    <LinearGradient colors={["#e0f7fa", "#e0f2f1"]} style={[styles.infoBox]}>
                        <View style={[]}>
                            <Text style={styles.info}>📧 Email: support@synapssprak.com</Text>
                            <Text style={styles.info}>📞 Phone: +6012-345-6789</Text>
                            <Text style={styles.info}>🌐 Website: www.synapssprak.com</Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    setExpanded(!expanded);
                    console.log('i am also being clicked');

                }}>
                    <Animated.View style={[styles.arrowContainer, { width: widthAnim }]}>
                        <Text style={styles.arrow}>{expanded ? "←" : "←"}</Text>
                        <Animated.Text style={[styles.backText, { opacity: textOpacity }]} onPress={() => navigation.goBack()}>
                            {"  Back to Menu"}
                        </Animated.Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#333" },
    text: { textAlign: "center", fontSize: 16, color: "#444", marginBottom: 30 },
    infoBox: {
        // backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        width: "90%",

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 2, height: -2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3,
    },
    info: { fontSize: 16, color: "#333", marginBottom: 10 },
    back: { marginTop: 20, color: "#007AFF", fontSize: 16 },
    arrowContainer: {
        marginTop: 10,
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
