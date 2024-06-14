import { Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/common/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full h-full flex justify-center px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-34px'
          />

          <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>
            Log in Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => {
              console.log(e);
              setForm({...form, email: e })
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder='Please enter your email address'
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => {
              console.log(e);
              setForm({...form, password: e })
            }}
            otherStyles="mt-7"
            placeholder='Please enter your password'
          />

          <CustomButton
            title='Sign In'
            handlePress={(v: any) => {console.log(v)}}
            containerStyles={'mt-7'}
          />

          

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn