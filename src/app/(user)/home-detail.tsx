import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { LoadingAnimation } from '@/app/component/LoadingAnimation'

export default function HomeDetail() {
  const params = useLocalSearchParams()
  const { data } = params
  const item = JSON.parse(data as string)
  const [linkVideo, setLinkVideo] = useState(
    'https://www.youtube.com/embed/SFpXwAbwP3Q?si=qNz7cs_X2yiRUA2W',
  )

  useEffect(() => {
    if (item?.videoThumbnail) {
      setLinkVideo(item.videoThumbnail)
    }
  }, [item])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-white flex-1">
        <View className="relative h-[200px] flex-1">
          <View className="w-full rounded-2xl my-2 h-[200px]">
            <WebView
              className="w-full h-full"
              originWhitelist={['*']}
              source={{
                uri: linkVideo,
              }}
              startInLoadingState={true}
              renderLoading={() => <LoadingAnimation />}
            />
          </View>
          <ScrollView className="flex-1 mb-3" showsVerticalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                className="mt-4 ml-2 flex-row items-center"
                onPress={() => router.back()}
              >
                <AntDesign name="left" size={20} color="#000000" />
                <Text>Quay lại</Text>
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-4">
              <Text className="text-[#0C5FFF] font-bold text-xl">{item.name}</Text>
              <Text className="mt-2">{item.shortDescription}</Text>
              <Text className="font-bold my-2">Mục tiêu</Text>
              {item.target.map((item: string, index: number) => (
                <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
              ))}

              <Text className="font-bold my-2">Học các kiến thức nhạc lý cơ bản</Text>
              {item.detailLearn.map((item: string, index: number) => (
                <Text key={index} className="mb-1">{`\u2022 ${item}`}</Text>
              ))}
              {/* <CustomButton
                title="Thực hành"
                onPress={() =>
                  router.push({
                    pathname: '/practice-screen',
                    params: {
                      data: JSON.stringify(item),
                    },
                  })
                }
                containerStyle="w-full mt-7 bg-primary-600 min-h-[48px] mb-10"
                textStyle="text-white"
              /> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
