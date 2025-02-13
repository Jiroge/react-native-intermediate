import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import CustomInput from './../components/CustomInput'
import CustomButton from './../components/CustomButton'
import SocialSignInButtons from './../components/SocialSignInButtons'

import { useNavigation } from '@react-navigation/core'

const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const navigation = useNavigation()

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed')
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>สร้างบัญชีใหม่</Text>

          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />

          <CustomButton
            text="ลงทะเบียน"
            onPress={onRegisterPressed}
            bgColor="#00838f"
          />

          <Text style={styles.text}>
            คุณได้อ่านและยอมรับ{' '}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              ข้อตกลงในการใช้งาน
            </Text>{' '}
            และ{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>
              นโยบายความเป็นส่วนตัว
            </Text>
          </Text>

          <SocialSignInButtons />

          <CustomButton
            text="มีบัญชีอยู่แล้ว ? เข้าสู่ระบบ"
            onPress={onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
})

export default SignUpScreen
