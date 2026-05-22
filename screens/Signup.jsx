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

export default function Signup({ onLoginPress }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password) {
      Alert.alert('Missing details', 'Enter your name, email, and password to continue.');
      return;
    }

    Alert.alert('Account created', `Welcome, ${trimmedName}.`);
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
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>Enter your details below to join the atelier</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Full name</Text>
              <View style={styles.inputShell}>
                <Text style={styles.inputIcon}>Aa</Text>
                <TextInput
                  autoCapitalize="words"
                  autoComplete="name"
                  onChangeText={setName}
                  placeholder="Alex Rivera"
                  placeholderTextColor="#c8c8d8"
                  style={styles.input}
                  textContentType="name"
                  value={name}
                />
              </View>
            </View>

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
                  textContentType="newPassword"
                  value={password}
                />
                <Pressable hitSlop={8} onPress={() => setShowPassword((current) => !current)}>
                  <Text style={styles.visibilityAction}>{showPassword ? 'Hide' : 'Show'}</Text>
                </Pressable>
              </View>
            </View>

            <Pressable onPress={handleSignup} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Create account</Text>
            </Pressable>

            <View style={styles.secureRow}>
              <View style={styles.secureLine} />
              <Text style={styles.secureText}>Secure Enterprise Access</Text>
              <View style={styles.secureLine} />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={onLoginPress}>
              <Text style={styles.footerAction}> Sign in</Text>
            </Pressable>
          </View>
        </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  brandRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  brandMark: {
    alignItems: 'center',
    backgroundColor: '#003aa0',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    borderTopLeftRadius: 17,
    height: 34,
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    width: 34,
  },
  brandSpark: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    borderLeftColor: '#ffffff',
    borderLeftWidth: 3,
    borderRadius: 7,
    height: 13,
    transform: [{ rotate: '-45deg' }],
    width: 13,
  },
  brandText: {
    color: '#003aa0',
    fontSize: 24,
    fontWeight: '800',
  },
  title: {
    color: '#191c1e',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
    textAlign: 'center',
  },
  subtitle: {
    color: '#444855',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 28,
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
    color: '#0f1115',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  inputShell: {
    alignItems: 'center',
    backgroundColor: '#e6e8ea',
    flexDirection: 'row',
    minHeight: 54,
    paddingHorizontal: 16,
  },
  inputIcon: {
    color: '#787c88',
    fontSize: 18,
    fontWeight: '800',
    marginRight: 12,
    minWidth: 22,
    textAlign: 'center',
  },
  input: {
    color: '#152536',
    flex: 1,
    fontSize: 18,
    minHeight: 54,
  },
  inlineAction: {
    color: '#003aa0',
    fontSize: 16,
    fontWeight: '700',
  },
  visibilityAction: {
    color: '#787c88',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#004fd2',
    justifyContent: 'center',
    minHeight: 56,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  secureRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginTop: 26,
  },
  secureLine: {
    backgroundColor: '#e6e8ea',
    flex: 1,
    height: 2,
  },
  secureText: {
    color: '#393d49',
    fontSize: 15,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  footerText: {
    color: '#444855',
    fontSize: 16,
  },
  footerAction: {
    color: '#003aa0',
    fontSize: 16,
    fontWeight: '800',
  },
});
