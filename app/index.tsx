import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/common/CustomButton'

const Index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full flex justify-center items-center h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='w-[380px] h-[298px]'
            resizeMode='contain'
          />

          <View>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with{" "}
              <Text>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            handlePress={(e: any) => router.push("/sign-in")}
            title='Continue with Email'
            containerStyles={'w-full mt-7'}
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor={"#161622"} barStyle={'light-content'} />
    </SafeAreaView>
  )
}

export default Index