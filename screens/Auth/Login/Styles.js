import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    paddingVertical: 28,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  brandRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 34,
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
    paddingVertical: 30,
  },
  field: {
    marginBottom: 22,
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
    minHeight: 56,
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
    minHeight: 56,
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
  forgotButton: {
    marginBottom: 16,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#004fd2',
    justifyContent: 'center',
    minHeight: 58,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  secureRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginTop: 30,
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