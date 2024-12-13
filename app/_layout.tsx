import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import { TamaguiProvider, View } from '@tamagui/core'
import { PortalProvider, useTheme } from 'tamagui'
import appConfig from '@/tamagui.config'
import { SafeAreaView } from 'react-native-safe-area-context'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  // const theme = useTheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  console.log('theme')

  return (
    <TamaguiProvider config={appConfig}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PortalProvider shouldAddRootHost>
          <View
            flex={1}
            backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'}
          >
            <SafeAreaView
              style={{
                flex: 1,
                // backgroundColor: theme.gray1 || '#fff',
              }}
            >
              <StatusBar
                style={colorScheme === 'dark' ? 'light' : 'dark'}
                animated
                translucent
              />
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="index" />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar style="auto" />
            </SafeAreaView>
          </View>
        </PortalProvider>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
