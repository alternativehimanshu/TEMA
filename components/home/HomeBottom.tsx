import { themes } from '@tamagui/config/v3'
import { Sheet, Text, useTheme, View, XStack } from 'tamagui'
import { Moon, Plus, Settings, Smartphone, Sun } from '@tamagui/lucide-icons'
import { IconSymbol } from '../ui/IconSymbol'
import Button from '../ui/Button'
import { Appearance, useColorScheme } from 'react-native'
import { useState } from 'react'

const HomeBottomBar = () => {
  const iconColor = useTheme().gray12
  const appearance = Appearance

  const [open, setOpen] = useState(false)

  return (
    <XStack
      position="absolute"
      bottom={0}
      backgroundColor={useTheme().gray1}
      padding={10}
      margin={10}
      borderRadius={26}
      shadowColor={'white'}
      shadowOpacity={0}
      shadowRadius={10}
      shadowOffset={{
        width: 2,
        height: 5,
      }}
      gap={4}
    >
      <Button
        onPress={() => setOpen(!open)}
        icon={Settings}
        borderRadius={16}
        color={iconColor}
      />
      <Button
        icon={appearance.getColorScheme() === 'dark' ? Moon : Sun}
        onPress={() => {
          appearance.getColorScheme() === 'dark'
            ? appearance.setColorScheme('light')
            : appearance.setColorScheme('dark')
        }}
        borderRadius={16}
        color={iconColor}
      />
      <Button
        icon={Settings}
        borderRadius={16}
        color={iconColor}
      />

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        native
        animation={'quicker'}
        dismissOnSnapToBottom
        snapPointsMode="percent"
        snapPoints={[30]}
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame
          padding={10}
          borderRadius={30}
        ></Sheet.Frame>
      </Sheet>
    </XStack>
  )
}

export default HomeBottomBar
