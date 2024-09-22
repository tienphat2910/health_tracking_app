import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-web';

const SignInScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.greeting}>
                <Text style={styles.greetingText}>Welcome back! 👋</Text>
            </View>
            <View style={styles.signIn}>
                <View style={styles.signInForm}>
                    <Text style={styles.signInEmail}>Email</Text>
                    <TextInput style={styles.signInEmailInput} placeholder='Enter email'/>
                    <Text style={styles.signInPassword}>Password</Text>
                    <TextInput style={styles.signInPasswordInput} placeholder='Enter password'/>
                    <Image source={require('../assets/icons/eye.png')}/>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.alternateLogIn}>OR LOG IN WITH</Text>
                    <View style={styles.icons}>
                        <Image source={require('../assets/icons/google.png')}/>
                        <Image source={require('../assets/icons/facebook.png')}/>
                        <Image source={require('../assets/icons/apple.png')}/>
                    </View>
                </View>
                <View style={styles.signUp}>
                    <Text style={styles.signUpText}>
                        Don't have an account? 
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={{ color: 'blue' }}> Sign up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({

});
export default SignInScreen;