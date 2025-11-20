import { VideoView, useVideoPlayer } from "expo-video";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const videoSource = require("../assets/images/splash.mp4");

// Create and control player
const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
    player.play();
});
export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            // onFinish();
            navigation.replace("Maintabs");
        }, 4000); // length of splash video in ms
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <VideoView
                // source={require("../assets/splash.mp4")}
                player={player}
                style={styles.video}
            // shouldPlay
            // isLooping={false}
            // onPlaybackStatusUpdate={(status) => {
            // if (status.didJustFinish) onFinish();
            // }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b7018",
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },
});
