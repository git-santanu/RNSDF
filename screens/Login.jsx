import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Login() {
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
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.brand}>RNSDF</Text>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to continue to your account.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="#8b98a7"
                style={styles.input}
                textContentType="emailAddress"
                value={email}
              />
            </View>

            <View style={styles.field}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <Pressable onPress={() => setShowPassword((current) => !current)}>
                  <Text style={styles.inlineAction}>{showPassword ? 'Hide' : 'Show'}</Text>
                </Pressable>
              </View>
              <TextInput
                autoCapitalize="none"
                onChangeText={setPassword}
                placeholder="Enter password"
                placeholderTextColor="#8b98a7"
                secureTextEntry={!showPassword}
                style={styles.input}
                textContentType="password"
                value={password}
              />
            </View>

            <Pressable style={styles.forgotButton}>
              <Text style={styles.inlineAction}>Forgot password?</Text>
            </Pressable>

            <Pressable onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Sign in</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Do not have an account?</Text>
            <Pressable>
              <Text style={styles.footerAction}> Create one</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f8fb',
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 32,
  },
  brand: {
    alignSelf: 'flex-start',
    backgroundColor: '#dde9f4',
    borderRadius: 6,
    color: '#35546e',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 18,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  title: {
    color: '#152536',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
  },
  subtitle: {
    color: '#657386',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
  },
  form: {
    backgroundColor: '#ffffff',
    borderColor: '#e5ebf1',
    borderRadius: 8,
    borderWidth: 1,
    padding: 18,
    shadowColor: '#152536',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  field: {
    marginBottom: 18,
  },
  labelRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#23364a',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9fbfd',
    borderColor: '#d7e0ea',
    borderRadius: 7,
    borderWidth: 1,
    color: '#152536',
    fontSize: 16,
    minHeight: 50,
    paddingHorizontal: 14,
  },
  inlineAction: {
    color: '#35546e',
    fontSize: 14,
    fontWeight: '700',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#35546e',
    borderRadius: 7,
    justifyContent: 'center',
    minHeight: 52,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#657386',
    fontSize: 14,
  },
  footerAction: {
    color: '#35546e',
    fontSize: 14,
    fontWeight: '800',
  },
});
