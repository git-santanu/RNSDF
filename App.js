import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('login');

  return (
    <>
      {activeScreen === 'login' ? (
        <Login onSignupPress={() => setActiveScreen('signup')} />
      ) : (
        <Signup onLoginPress={() => setActiveScreen('login')} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
