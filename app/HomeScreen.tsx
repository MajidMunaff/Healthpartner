import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from 'expo-blur';
import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, Keyboard, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fruit, profile, Recipe, recipesData } from './Globle/Array';
import Size from './Globle/Size';
// import { p}



const { nameSize, clickSize, black, infoFontSize, correctBorderColor, wrongBorderColor, white, linkColor, facebookButton, titleSize, subSize, grey, lableSize, blueGradientOne, blueGradientTwo } = Size();


export default function HomeScreen({ navigation, route }: any) {
    const name = 'Majid';
    const [open, setOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(fruit[0])
    const [profilePic, setProfilePic] = useState(profile.img)


    useEffect(
        () => {
            Animated.timing(
                animation, {
                toValue: open ? 1 : 0,
                duration: 400,
                useNativeDriver: true,
            }
            ).start();
        }, [open]
    );
    const topLine = {
        transform: [
            {
                rotateZ: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "44deg"],
                }),
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5],
                }),
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5],
                }),
            },
        ],
    };

    const middleLine = {
        opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        }),
    };

    const bottomLine = {
        transform: [
            {
                rotateZ: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "-46deg"],
                }),
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -3.5],
                }),
            },
            {
                translateX: animation.interpolate(
                    {
                        inputRange: [0, 1],
                        outputRange: [0, 3.5],
                    }
                ),
            }
        ],
    };
    const sidePanel = {
        opacity: animation.interpolate(
            {
                inputRange: [0, 1],
                outputRange: [0, 1],
            }
        )
    }
    useEffect(() => {
        // Load saved image from AsyncStorage when app starts
        const loadProfilePic = async () => {
            try {
                const savedPic = await AsyncStorage.getItem("profilePic");
                if (savedPic) setProfilePic({ uri: savedPic });
            } catch (e) {
                console.log("Error loading profile picture:", e);
            }
        };

        loadProfilePic();
    }, []);

    // const imageChoose = async () => {
    //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     if (permissionResult.granted === false) {
    //         alert("Permission to access gallery is required!");
    //         return;
    //     }

    //     const result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ['images'],
    //         allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 1,
    //     });

    //     if (!result.canceled) {
    //         setProfilePic({ uri: result.assets[0].uri });
    //     }
    // };

    const imageChoose = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setProfilePic({ uri });

            try {
                await AsyncStorage.setItem("profilePic", uri);
            } catch (e) {
                console.log("Error saving profile picture:", e);
            }
        }
    };
    const AllRecipesScreen: React.FC<{ search: string }> = ({ search }) => {


        // flatten the recipes array from all categories
        const allRecipes: Recipe[] = recipesData.flatMap(category => category.recipes);


        const filteredRecipes = allRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(search.toLowerCase()) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(search.toLowerCase()))
        );

        const [selectedDish, setSelectDish] = useState(filteredRecipes[0]);


        const renderItem = ({ item, index }: { item: Recipe, index: number }) => (
            <TouchableOpacity style={styles.card} onPress={() => {
                // setSelectDish({item}: {item: Recipe});
                console.log(filteredRecipes[index]);
                navigation.navigate('Moredetails', { makeIt: filteredRecipes[index] })
            }}>
                <Image source={item.img} style={styles.newimage} resizeMode="cover" />
                <View style={styles.info}>
                    <Text style={styles.newtitle}>{item.name}</Text>
                    <Text style={styles.ingredients}>
                        {item.ingredients.join(", ")}
                    </Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.newcontainer}>
                <FlatList
                    data={filteredRecipes} // 👈 use filtered list
                    keyExtractor={(item, index) => `${item.name}-${index}`}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };

    return (
        <SafeAreaProvider style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>


            <View style={[styles.navContainer]}>

                <View style={[styles.imgContainer]}>
                    <View style={[]}>
                        <TouchableOpacity onPress={imageChoose}>

                            <Image style={[styles.img]} source={profilePic} />
                            {/* <Button title="Edit" onPress={imageChoose} /> */}
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.title]}>Hey {name} Welcome!</Text>
                        <Text style={{ fontSize: RFValue(10) }} >Make a salad from your favorite fruit</Text>
                    </View>
                </View>
                <View style={[styles.iconContainer]}>
                    <TouchableOpacity
                        onPress={() => setOpen(!open)}>
                        <TouchableOpacity onPress={() => setOpen(!open)}>
                            <View style={[styles.burger]}>
                                <Animated.View style={[styles.line, topLine]} />
                                <Animated.View style={[styles.line, middleLine]} />
                                <Animated.View style={[styles.line, bottomLine]} />
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>

            {open && (
                < Animated.View style={[styles.sideView, sidePanel]}>
                    <BlurView intensity={5} tint='light' style={styles.glossyBox} >
                        <Image source={require('../assets/images/banner.jpg')} resizeMode='stretch' style={[styles.bannerImg]} />
                        <View style={[styles.links]}>
                            <TouchableOpacity onPress={() => {
                                setOpen(false);
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='home-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.mainLinks]}>
                                        Home</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('ServiceScreen')
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='construct-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.mainLinks]}>
                                        Service</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('SupportScreen')
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='help-circle-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.mainLinks]}>
                                        Support</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('AboutScreen')
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='person-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.mainLinks]}>
                                        About Me</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Privacy')
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='lock-closed-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.subLinks]}>
                                        Privacy Policy</Text>
                                </View>
                            </TouchableOpacity><TouchableOpacity onPress={() => {
                                navigation.navigate('Terms')
                            }}>
                                <View style={[styles.iconContainers]}>
                                    <Ionicons name='document-text-outline' size={20} style={[styles.icon]} color={"#fff"} />
                                    <Text style={[styles.subLinks]}>
                                        Terms of Service</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Animated.View>
            )
            }

            <View style={{ height: 80 }}>

                <FlatList
                    data={fruit}
                    horizontal
                    contentContainerStyle={{ marginLeft: 10 }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.category}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            // setSelectedCategory(item);
                            navigation.navigate('FruitView', { information: item })
                        }}
                            style={[styles.clickOns]}>
                            <Image resizeMode='contain' source={item.img} style={[styles.fruitImg]} />
                            <Text style={[styles.text]}>
                                {item.category}
                            </Text>
                        </TouchableOpacity>
                    )} />
            </View>
            {/* <TouchableWithoutFeedback style={{ flex: 1 }}
                onPress={() => { Keyboard.dismiss() }} > */}
            <View style={[styles.searchContainer]}>
                <TextInput
                    style={[styles.searchBar]}
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Enter Receipe to find!"
                    placeholderTextColor="#646060bb"
                />
                <TouchableOpacity onPress={() => Keyboard.dismiss()}>

                    <Image source={require('../assets/images/search.png')} style={[styles.searchImg]} />
                </TouchableOpacity>
            </View>
            <AllRecipesScreen search={search} />

            {/* </TouchableWithoutFeedback> */}
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create(
    {
        bannerImg: {
            height: RFPercentage(40),
            width: 'auto'
        },
        iconContainers: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        newcontainer: {
            flex: 1,
            backgroundColor: white,
            paddingHorizontal: 10,
            paddingTop: 10,
        },
        listContent: {
            paddingBottom: 50,
        },
        card: {

            flexDirection: "row",
            backgroundColor: white,
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 5,
            padding: 10,
            shadowColor: '#555454ff',
            // textShadowRadius: 10,
            shadowOffset: { width: -1, height: -1 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 2,
        },
        newimage: {
            borderWidth: 2,
            borderColor: '#0000008e',
            width: 80,
            height: 80,
            borderRadius: 10,
        },
        info: {
            flex: 1,
            marginLeft: 20,
            justifyContent: "center",
        },
        newtitle: {
            fontSize: subSize,
            fontWeight: "600",
            color: black,
        },
        ingredients: {
            fontSize: infoFontSize,
            color: grey,
            marginTop: 4,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        searchImg: {
            width: 30,
            height: 30,
        },
        searchBar: {
            // borderWidth: 1,
            width: '80%',
            borderWidth: 2,
            borderColor: '#66666649',
            height: 40,
            margin: 10,
            paddingLeft: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            // color: 'white',
        },
        fruitImg: {
            height: 50,
            width: 50,
            borderRadius: 10,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: '#66666649',

            // padding: 2,


        },
        text: {
            fontSize: clickSize,
            alignSelf: 'center',
            fontWeight: 'bold',

        },
        clickOns: {
            marginHorizontal: 5,
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.5,
            // shadowRadius: 2,
            // shadowColor: black,
            marginTop: 3,


            // borderRadius: 10,
            // borderWidth: 2,

        },
        imgContainer: {
            margin: 10,
            // paddingTop: 20,
            flexDirection: 'row',
        },
        img: {
            height: 50,
            width: 50,
            borderRadius: 50,

        },
        navContainer: {
            flexDirection: "row",
            padding: 10,
        },
        burger: {
            // height: '200',
            marginLeft: 15,
            // borderWidth: 2,
            backgroundColor: "#abbfeaff",
            width: 40,
            height: 40,
            padding: 5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',

        },
        iconContainer: {
            // borderWidth: 8,
            justifyContent: 'center',
            width: '20%',
            // marginLeft: 30,
        },
        icon: {
            marginRight: 10,
            // paddingRight: 100,
        },
        textContainer: {
            // borderWidth: 3,
            paddingLeft: 10,
            justifyContent: 'center',
        },
        title: {
            fontSize: RFValue(20),
        },
        line: {
            width: 20,
            height: 2,
            backgroundColor: "black",
            marginVertical: 2,
            borderRadius: 2,
            // marginTop: 1,
        },
        sideView: {
            // borderWidth: 3,
            // height: '100%',
            // width: '70%',
            // position: 'fixed',
            // top: -25,
            // left: 150,
            position: 'absolute',   // replaces 'fixed'
            top: Platform.OS === 'ios' ? RFValue(45) : RFValue(90),
            left: 120,                // start from left (or right: 0 if your menu slides from right)
            height: '100%',
            width: '80%',
            zIndex: 1000,           // ensures it stays on top of everything
            backgroundColor: 'rgba(0, 0, 0, 0.89)', // light overlay look
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 2, height: 0 },
            shadowRadius: 6,
            elevation: 10,
        },
        glossyBox: {
            // width: parent,
            height: '100%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.3)",
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
        },
        links: {
            margin: 20,
            // borderWidth: 2,
            height: 300,
            justifyContent: 'space-evenly'
        },
        mainLinks: {
            fontSize: 25,
            color: 'white'
            // padding: 10,
            // borderWidth: 2,
        },
        subLinks: {
            fontSize: 25,
            color: 'white'

            // marginLeft: 20,

        },
    }
)


//utils folder for globle files -> color,size,