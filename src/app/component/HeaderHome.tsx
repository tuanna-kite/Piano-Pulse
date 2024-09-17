import { View, Text, Image, TouchableOpacity } from 'react-native'
import { images } from '@/constants'
import { EvilIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface IHeaderHome {
  title: string
}

export default function HeaderHome({ title }: IHeaderHome) {
  return (
    <View className="flex-row flex justify-between items-center pb-2 px-4">
      <Image
        source={images.profile}
        className="w-[40px] h-[40px] rounded-full"
        resizeMode="contain"
      />
      <Text className="font-bold text-primary-600 text-xl">{title}</Text>
      <TouchableOpacity className="w-[40px] " onPress={() => router.push('/search')}>
        <EvilIcons name="search" size={30} color="#6B7280" />
      </TouchableOpacity>
    </View>
  )
}
