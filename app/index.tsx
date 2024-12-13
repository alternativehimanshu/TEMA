import HomeBottomBar from '@/components/home/HomeBottom'
import { Text, View } from 'tamagui'

const home = () => {
  return (
    <View
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text>Home</Text>
      <HomeBottomBar />
    </View>
  )
}

export default home
