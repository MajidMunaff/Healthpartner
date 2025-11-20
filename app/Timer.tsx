import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Timer() {
    const [segment, setSegment] = useState<"mixer" | "stopwatch">("mixer"); // button to  toggle between pages
    const [step, setStep] = useState(0);

    // Stopwatch states
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    // Animation refs
    const glow = useRef(new Animated.Value(0)).current;
    const fruit = useRef(new Animated.Value(0)).current;
    const water = useRef(new Animated.Value(0)).current;
    const blender = useRef(new Animated.Value(0)).current;

    //  Animation steps defined within array
    const steps = [
        {
            id: 1,
            label: "Preparing ingredients",
            ref: glow,
            animate: () =>
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(glow, { toValue: 1, duration: 800, useNativeDriver: true }),
                        Animated.timing(glow, { toValue: 0, duration: 800, useNativeDriver: true }),
                    ]),
                    { iterations: 3 }
                ),
            styleFn: () => ({
                opacity: glow,
                transform: [
                    {
                        scale: glow.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.4],
                        }),
                    },
                ],
            }),
        },
        {
            id: 2,
            label: "🍊 Cutting the fruit...",
            ref: fruit,
            animate: () =>
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(fruit, { toValue: 1, duration: 800, useNativeDriver: true }),
                        Animated.timing(fruit, { toValue: 0, duration: 800, useNativeDriver: true }),
                    ]),
                    { iterations: 3 }
                ),
            styleFn: () => ({
                opacity: fruit,
                transform: [
                    {
                        translateY: fruit.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0],
                        }),
                    },
                ],
            }),
        },
        {
            id: 3,
            label: "💧 Adding water...",
            ref: water,
            animate: () =>
                Animated.timing(water, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            styleFn: () => ({
                opacity: water,
                transform: [
                    {
                        translateY: water.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-30, 0],
                        }),
                    },
                ],
            }),
        },
        {
            id: 4,
            label: "🥤 Mixing juice...",
            ref: blender,
            animate: () =>
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(blender, { toValue: 1, duration: 400, useNativeDriver: true }),
                        Animated.timing(blender, { toValue: 0, duration: 400, useNativeDriver: true }),
                    ]),
                    { iterations: 4 }
                ),
            styleFn: () => ({
                opacity: blender,
                transform: [
                    {
                        rotate: blender.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "10deg"],
                        }),
                    },
                ],
            }),
        },
    ];

    // 🌀 Animation runner
    const startAnimation = async () => {
        for (let i = 0; i < steps.length; i++) {
            setStep(i + 1);
            await new Promise((resolve) => {
                steps[i].animate().start(() => resolve(null));
            });
        }
        setStep(steps.length + 1);
    };

    // ⏱ Stopwatch logic
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (isRunning) {
            interval = setInterval(() => setTime((t) => t + 1), 1000);
        }

        return () => {
            if (interval !== null) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    // 🧭 Top navigation buttons
    const HeaderTabs = () => (
        <View style={styles.tabRow}>
            <TouchableOpacity
                style={[
                    styles.tabBtn,
                    segment === "mixer" && styles.activeTab,
                ]}
                onPress={() => setSegment("mixer")}
            >
                <Text style={[styles.tabText, segment === "mixer" && styles.activeTabText]}>
                    🧃 Mixer
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.tabBtn,
                    segment === "stopwatch" && styles.activeTab,
                ]}
                onPress={() => setSegment("stopwatch")}
            >
                <Text style={[styles.tabText, segment === "stopwatch" && styles.activeTabText]}>
                    ⏱ Stopwatch
                </Text>
            </TouchableOpacity>
        </View>
    );

    // -----------------
    // Segment 1: Mixer Animation
    // -----------------
    const MixerView = () => (
        <View style={styles.container}>
            <HeaderTabs />
            <FlatList
                data={steps.filter((_, i) => i + 1 === step)}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ marginTop: 30 }}
                renderItem={({ item }) => (
                    <Animated.View style={[styles.stepContainer, item.styleFn()]}>
                        <Text style={styles.text}>{item.label}</Text>
                    </Animated.View>
                )}
            />

            {step > steps.length && (
                <Text style={styles.doneText}>✅ Juice ready to serve!</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={startAnimation}>
                <Text style={styles.buttonText}>Start Mixing</Text>
            </TouchableOpacity>
        </View>
    );

    // -----------------
    // Segment 2: Stopwatch
    // -----------------
    const StopwatchView = () => (
        <View style={styles.container}>
            <HeaderTabs />
            <Text style={styles.stopwatchText}>Stopwatch</Text>
            <Text style={styles.timer}>{formatTime(time)}</Text>

            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.smallBtn, { backgroundColor: "#4caf50" }]}
                    onPress={() => setIsRunning(true)}
                >
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.smallBtn, { backgroundColor: "#f44336" }]}
                    onPress={() => setIsRunning(false)}
                >
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.smallBtn, { backgroundColor: "#2196f3" }]}
                    onPress={() => setTime(0)}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Render selected view
    return segment === "mixer" ? <MixerView /> : <StopwatchView />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    // Top tabs
    tabRow: {
        position: "absolute",
        top: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 20,
    },
    tabBtn: {
        // paddingVertical: 1,
        padding: '2.5%',
        marginHorizontal: 3,
        // paddingHorizontal: 5,
        borderRadius: 20,
        width: '50%',
        // textAlign: 'center',
        // alignItems: 'center',
        backgroundColor: "#ddd",
    },
    activeTab: { backgroundColor: "#000dffff" },
    tabText: { fontSize: 18, fontWeight: "bold", color: "#555" },
    activeTabText: { color: "#fff" },

    stepContainer: {
        width: RFPercentage(50),
        height: RFPercentage(5),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0fe336ff",
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 80,
    },
    text: { fontSize: 20, fontWeight: "600" },
    doneText: { fontSize: 24, fontWeight: "bold", color: "#0a940a", marginBottom: 150 },
    button: {
        backgroundColor: "#000dffff",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        position: "absolute",
        bottom: 60,
    },
    buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },

    stopwatchText: { fontSize: 24, fontWeight: "bold", marginTop: 100, marginBottom: 10 },
    timer: { fontSize: 48, fontWeight: "bold", color: "#333", marginBottom: 30 },
    row: { flexDirection: "row", justifyContent: "space-between", width: "80%" },
    smallBtn: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },
});
