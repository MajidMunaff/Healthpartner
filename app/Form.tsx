import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Alert, Animated, FlatList, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import * as ImagePicker from "expo-image-picker";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { recipesData } from './Globle/Array';
import Size from './Globle/Size';


const { nameSize, clickSize, black, infoFontSize, correctBorderColor, wrongBorderColor, white, linkColor, facebookButton, titleSize, subSize, grey, lableSize, blueGradientOne, blueGradientTwo } = Size();


export default function Form() {
    const refName = useRef<TextInput>(null);
    const refEmail = useRef<TextInput>(null);
    const refNumber = useRef<TextInput>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const animation = new Animated.Value(0);
    // const animationTwo = useRef(new Animated.Value(1)).current;
    const animationTwo = new Animated.Value(1);
    const [running, setRunning] = useState(false);
    const [isValidEmail, setValidEmail] = useState<boolean>(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [selectedCategory, setSelectedCategory] = useState(recipesData[0].category)
    const [dropPanel, setDropPanel] = useState(false);
    const [ingredientsText, setIngredientsText] = useState("");
    const [instructions, setInstructions] = useState("");
    const [imageUri, setImageUri] = useState<string | null>(null);
    // console.log(selectedCategory);


    useEffect(
        () => {
            Animated.timing(
                animation, {
                toValue: running ? 1 : 0,
                duration: 600,
                useNativeDriver: true,
            }
            ).start()
        }, [running]
    );
    useEffect(
        () => {
            Animated.timing(
                animationTwo, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true,
            }
            ).start()
        }, [running]
    );

    const appear = {
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 40]
                })
            }
        ]
    }

    const reduce = {
        transform: [
            { translateX: Animated.multiply(Animated.subtract(1, animationTwo), -200) }, // 50 = half of width (100/2)
            { scaleX: animationTwo },
        ],
    }

    const emailCheck = (text: string) => {
        setEmail(text)
        setValidEmail(emailRegex.test(text))
    }

    const confirm = () => {
        Keyboard.dismiss();
        if (name === '' || instructions === '' || ingredientsText === '' || !imageUri) {
            Alert.alert('Missing fields', 'Fill the Form', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        } else {

            setRunning(true);
            const ingredientsArray = ingredientsText
                .split(",")
                .map(item => item.trim())
                .filter(item => item.length > 0);
            console.log(ingredientsArray);
            recipesData.find(item => item.category === selectedCategory)
                ?.recipes.push({
                    name: name,
                    ingredients: ingredientsArray,
                    instructions: instructions,
                    img: { uri: imageUri },
                });
            setName('')
            setIngredientsText('')
            setInstructions('')
            setImageUri(null)
            setTimeout(() => {
                setRunning(false);
            }, 5000);
        }
        // setRunning(false)
    }
    const dropDown = () => {
        setDropPanel(!dropPanel);
        console.log(dropPanel);
    }
    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };
    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                setDropPanel(false);
            }}>
                <KeyboardAvoidingView>
                    <ScrollView>

                        <View style={[styles.titleContainer]}>
                            <Text style={[styles.title]}>Add your Recipe!</Text>
                        </View>
                        <View style={[styles.formContainer]}>
                            <TouchableOpacity>
                                <Text style={[styles.lable]}>Category</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={dropDown} style={[styles.input]}>
                                <Text style={[styles.categoryText]}>{selectedCategory}</Text>
                            </TouchableOpacity>
                            {dropPanel && (
                                <View style={[styles.drop]}>
                                    <FlatList
                                        data={recipesData}
                                        keyExtractor={(item, index) => item.category}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity style={[styles.dropText]}
                                                onPress={() => {
                                                    setSelectedCategory(item.category)
                                                    setDropPanel(false);
                                                }
                                                }>
                                                <Text style={[styles.dpText]}>{item.category}</Text>
                                            </TouchableOpacity>

                                        )}
                                    />
                                </View>

                            )}
                            <TouchableOpacity>
                                <Text style={[styles.lable]} onPress={() => {
                                    refName.current?.focus();
                                }}>Name</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={[styles.input]}
                                value={name}
                                onChangeText={setName}
                                placeholder="Egg omlet"
                                placeholderTextColor="#a7a5a5bb"
                                keyboardType="default"
                                ref={refName}
                                onSubmitEditing={() => {
                                    refEmail.current?.focus();
                                }} />
                            <TouchableOpacity>
                                <Text style={[styles.lable]} onPress={() => {
                                    refEmail.current?.focus();
                                }}>Ingredients</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={[styles.input]}
                                value={ingredientsText}
                                onChangeText={setIngredientsText}
                                placeholder="Egg, Oil, Salt, Pepper"
                                placeholderTextColor="#a7a5a5bb"
                                keyboardType="default"
                                ref={refEmail}
                                onSubmitEditing={() => {
                                    refNumber.current?.focus();
                                }} />

                            <TouchableOpacity>
                                <Text style={[styles.lable]} onPress={() => {
                                    refNumber.current?.focus();
                                }}>Instructions</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={[styles.textArea]}
                                value={instructions}
                                onChangeText={setInstructions}
                                // secureTextEntry={true}
                                placeholder="1.Break the egg. 
2.Mix the yok with salt and pepper."
                                placeholderTextColor="#a7a5a5bb"
                                keyboardType="default"
                                multiline
                                numberOfLines={8}
                                ref={refNumber} />

                            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                                {imageUri ? (
                                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                                ) : (
                                    <Text style={styles.imageText}>+ Pick an Image</Text>
                                )}
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.buttonContainer]}>
                            <View>
                                <TouchableOpacity style={[styles.buttonOverlay]} onPress={confirm} >
                                    <Text style={[styles.buttonText]}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                    {running && (
                        <View>
                            <BlurView intensity={5} tint='light' style={[styles.glossyBox]}>
                                <Animated.View style={[styles.toast, appear]}>
                                    <LinearGradient
                                        colors={['#03610bff', "#212020ff"]}
                                        start={{ x: 1, y: 1 }}
                                        end={{ x: 0, y: 0 }}
                                        style={[styles.gradientContainer]}>
                                        {/* <Text>hello</Text> */}
                                        <Ionicons name="checkmark-circle" size={50} color="#0b6e06ff" />
                                        <View style={[styles.toastMessageContainer]}>
                                            <Text style={[styles.mainMsg]}>Saved Successfully</Text>
                                            <Text style={[styles.subMsg]}>Your details have been saved Successfully</Text>
                                        </View>
                                    </LinearGradient>
                                    <Animated.View style={[styles.line, reduce]} />
                                </Animated.View>
                            </BlurView>
                        </View>
                    )}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    categoryText: {
        justifyContent: 'center',
    },
    textArea: {
        borderWidth: 1,
        borderColor: "#000000ff",
        borderRadius: 10,
        padding: 15,
        minHeight: 150,
        fontSize: 16,
        lineHeight: 22,
        backgroundColor: "#fff",
        color: "#333",

    },
    dpText: {
        fontSize: 18,

    },
    dropText: {
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    drop: {
        width: 390,
        // height: 100,
        position: 'absolute',   // replaces 'fixed'
        top: 80,
        left: 0,                // start from left (or right: 0 if your menu slides from right)
        zIndex: 1000,           // ensures it stays on top of everything
        backgroundColor: 'rgba(255, 255, 255, 1)', // light overlay look
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 6,
        elevation: 10,

    },
    line: {
        borderTopWidth: 8,

        // width: '90%',
        top: -99.5,
        left: 15,
        borderColor: correctBorderColor,
        borderRadius: 20,
    },
    toastMessageContainer: {
        paddingLeft: 20,
        // borderTopWidth: 8,

    },
    gradientContainer: {
        width: '100%',
        height: '100%',
        borderTopEndRadius: 20,
        // borderTopRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainMsg: {
        fontSize: nameSize,
        color: 'white'
    },
    subMsg: {
        fontSize: infoFontSize,
        color: '#a7a1a1ff',
        width: 250,
    },
    toast: {
        // borderWidth: 2,
        width: 400,
        height: 100,
        borderRadius: 20,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    glossyBox: {
        // width: "100%",
        // height: '100%',
        // borderWidth: 2,
        position: "absolute",
        top: -830,
        left: 0,
        right: 0,
        bottom: -265,
        // justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOverlay: {
        backgroundColor: '#000dffff',
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        height: 50,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        marginBottom: 20,

    },
    lable: {
        fontSize: 18,

    },
    formContainer: {
        margin: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleContainer: {
        margin: 30,
        marginTop: 60,
    },
    imagePicker: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    imagePreview: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    imageText: { color: "#888", fontSize: 16 },
});
