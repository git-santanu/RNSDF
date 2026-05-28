import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from './Styles';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

export default function Login({ onSignupPress }) {
  // const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      Alert.alert('Missing details', 'Enter your email and password to continue.');
      return;
    }

    Alert.alert('Login submitted', `Welcome back, ${trimmedEmail}.`);
    // navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <View style={styles.brandMark}>
                <View style={styles.brandSpark} />
              </View>
              <Text style={styles.brandText}>The Fluid Executive</Text>
            </View>
            <Text style={styles.title}>Sign in to your account</Text>
            <Text style={styles.subtitle}>Enter your details below to access the atelier</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Email address</Text>
              <View style={styles.inputShell}>
                <Text style={styles.inputIcon}>@</Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  placeholder="alex.rivera@fluid.com"
                  placeholderTextColor="#c8c8d8"
                  style={styles.input}
                  textContentType="emailAddress"
                  value={email}
                />
              </View>
            </View>

            <View style={styles.field}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <Pressable hitSlop={8} style={styles.forgotButton}>
                  <Text style={styles.inlineAction}>Forgot password?</Text>
                </Pressable>
              </View>
              <View style={styles.inputShell}>
                <Text style={styles.inputIcon}>*</Text>
                <TextInput
                  autoCapitalize="none"
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#c8c8d8"
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  textContentType="password"
                  value={password}
                />
                <Pressable hitSlop={8} onPress={() => setShowPassword((current) => !current)}>
                  <Text style={styles.visibilityAction}>{showPassword ? 'Hide' : 'Show'}</Text>
                </Pressable>
              </View>
            </View>

            <Pressable onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Sign in</Text>
            </Pressable>

            <View style={styles.secureRow}>
              <View style={styles.secureLine} />
              <Text style={styles.secureText}>Secure Enterprise Access</Text>
              <View style={styles.secureLine} />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Do not have an account?</Text>
            <Pressable onPress={onSignupPress}>
              <Text style={styles.footerAction}> Create one</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


