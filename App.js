import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Auth/Login/Login';
import Signup from './screens/Auth/Signup/Signup';

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
