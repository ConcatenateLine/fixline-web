"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import CustomSystem from "@/theme"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={CustomSystem} >
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

