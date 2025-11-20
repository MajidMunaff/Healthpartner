import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Size from "./Globle/Size";



const { black, correctBorderColor, wrongBorderColor, white, linkColor, facebookButton, titleSize, subSize, grey, lableSize, blueGradientOne, blueGradientTwo } = Size();
// console.log(titleSize)


export default function Login({ navigation, route }: any) {


    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [isValidEmail, setValidEmail] = useState<boolean>(false);
    const [isValidPassword, setValidPassword] = useState<boolean>(false);
    const [isPassedEmail, setPassedemail] = useState<boolean>(false);
    const [isPassedPassword, setPassedpassword] = useState<boolean>(false);
    const pic = {
        tick: require('../assets/images/tick.png'),
        wrong: require('../assets/images/wrong.png')
    }
    const refEmail = useRef<TextInput>(null)
    const refPassword = useRef<TextInput>(null)



    const emailCheck = (text: string) => {
        setEmail(text)
        setValidEmail(emailRegex.test(text))
        if (isValidEmail) {

            setPassedemail(true)
        } else {
            setPassedemail(false)

        }
    }
    const passwordRegex =
        /^(?=.*\d).{8,}$/;  //8+char and 1 number 
    const passwordCheck = (text: string) => {
        setPassword(text)
        setValidPassword(passwordRegex.test(text))

        if (isValidPassword) {

            setPassedpassword(true)
        } else {
            setPassedpassword(false)

        }

    }

    const login = function () {
        if (isValidEmail && isValidPassword) {
            navigation.navigate('Maintabs');
        }
    }

    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <KeyboardAvoidingView>

                    <View style={[styles.titleContainer]}>
                        <Text style={[styles.title]}>Login to your account</Text>
                        <Text style={[styles.subText]}>It's great to see you again.</Text>
                    </View>
                    <View style={[styles.formContainer]}>
                        <TouchableOpacity>
                            <Text style={[styles.lable]} onPress={() => {
                                refEmail.current?.focus();
                            }}>Email</Text>
                        </TouchableOpacity>
                        <View style={[styles.emailContainer]}>

                            <TextInput
                                style={[styles.input, isValidEmail ? styles.true : styles.false]}
                                value={email}
                                onChangeText={emailCheck}
                                placeholder="John@gmail.com"
                                placeholderTextColor={grey}
                                keyboardType="email-address"
                                ref={refEmail}
                                onSubmitEditing={() => {
                                    refPassword.current?.focus();
                                }} />

                            <View style={[styles.imageContainer]}>

                                <Image source={isPassedEmail ? pic.tick : pic.wrong} style={[styles.img]} />
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text style={[styles.lable]} onPress={() => {
                                refPassword.current?.focus();
                            }}>Password</Text>
                        </TouchableOpacity>
                        <View style={[styles.emailContainer]}>

                            <TextInput
                                style={[styles.input, isValidPassword ? styles.true : styles.false]}
                                value={password}
                                onChangeText={passwordCheck}
                                secureTextEntry={true}
                                placeholder="*********"
                                placeholderTextColor={grey}
                                keyboardType="email-address"
                                ref={refPassword} />

                            <View style={[styles.imageContainer]}>

                                <Image source={isPassedPassword ? pic.tick : pic.wrong} style={[styles.img]} />
                            </View>
                        </View>
                        <Text>Forgot your password? <Text style={[styles.link]} onPress={() => {
                            console.log('password reseted')
                        }}>Reset your password</Text></Text>
                    </View>
                    <View style={[styles.buttonContainer]}>
                        <TouchableOpacity style={[styles.loginButton]} onPress={login}>
                            <LinearGradient
                                colors={[blueGradientOne, blueGradientTwo]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={[styles.gradientContainer]}
                            >
                                <Text style={[styles.loginText]}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={[styles.divider]}>or</Text>
                        <TouchableOpacity style={[styles.googleButton]}>
                            <Image source={require('../assets/images/googleLogo.png')} style={[styles.googleImage]} />
                            <Text style={[styles.googleText]}>Login with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.facebookButton]}>
                            <Image source={require('../assets/images/facebookLogo.png')} style={[styles.googleImage]} />

                            <Text style={[styles.facebookText]}>Login with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    titleContainer: {
        margin: 15,

    },
    title: {
        fontSize: titleSize,
    },
    subText: {
        fontSize: subSize,
        color: grey
    },
    formContainer: {
        margin: 15,
    },
    lable: {
        fontSize: lableSize,

    },
    emailContainer: {
        flexDirection: "row",
    },
    input: {
        borderWidth: 1,
        height: 50,
        width: '90%',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,

    },
    imageContainer: {
        margin: 10,
        marginTop: 13,
        // borderWidth: 2,
        alignSelf: 'center'
    },
    img: {
        width: 40,
        height: 40,
        // borderWidth: 2,
    },
    true: {
        borderColor: correctBorderColor
    },
    false: {
        borderColor: wrongBorderColor

    },
    link: {
        textDecorationLine: 'underline',
        color: linkColor
    },
    buttonContainer: {
        margin: 15,
        // alignItems: 'center',
        // borderWidth: 2,
        height: 200,
        justifyContent: 'space-evenly',

    },
    loginButton: {
        borderWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        // backgroundColor: '#08488e'
    },
    gradientContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        alignSelf: 'center',
        // color: '#fff',
        fontSize: subSize
    },
    divider: {
        alignSelf: 'center',
        fontSize: subSize,
    },
    googleButton: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: white
    },
    googleText: {
        alignSelf: 'center',
        color: black,
        fontSize: subSize
    },

    facebookButton: {
        borderWidth: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: facebookButton,
        marginTop: 10,
    },
    facebookText: {
        alignSelf: 'center',
        color: white,
        fontSize: subSize
    },
    googleImage: {
        height: 30,
        width: 30,
    },



})