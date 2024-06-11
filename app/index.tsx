import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-black text-2xl font-pbold'>Index</Text>
      <Link href="/profile" style={{color: 'red'}}>Go to Profile</Link>
    </View>
  )
}

export default Index