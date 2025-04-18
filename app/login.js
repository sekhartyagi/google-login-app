// app/login.js

import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '156691795017-nmjref93ek9i91amf5l6qhrpfoc0ld5v.apps.googleusercontent.com', // ← ✅ Web client ID डालो
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      router.replace('/(tabs)'); // ← ✅ Login ke baad tab screen ya home par le jao
    } catch (error) {
      console.error('Google Signin error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Google</Text>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
