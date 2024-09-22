import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RecoveryScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = (password) => {
    return password.length >= 6; // Example: Password should be at least 6 characters
  };

  const handleResetPassword = () => {
    if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Simulate password reset success
    setMessage('Your password has been reset successfully!');

    // Navigate back to Sign In screen after a short delay
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 2000); // Delay for 2 seconds to show success message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password</Text>
      
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#bcc1ca"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#bcc1ca"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      {message ? <Text style={styles.messageText}>{message}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backLink}>Back to Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    height: 43,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#535ce8',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  backLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#535ce8',
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
});

export default RecoveryScreen;
