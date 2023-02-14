import {
  AboutScreen,
  HomeScreen,
  NavigationProvider,
  ReactQueryProvider,
  SafeArea,
} from "@app/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

const NativeStack = createNativeStackNavigator<{
  home: undefined;
  about: undefined;
}>();

export default function App() {
  return (
    <ReactQueryProvider>
      <SafeArea>
        <NavigationProvider>
          <NativeStack.Navigator>
            <NativeStack.Screen
              component={HomeScreen}
              name="home"
              options={{
                title: "Home Screen",
              }}
            />
            <NativeStack.Screen
              component={AboutScreen}
              name="about"
              options={{
                title: "About Screen",
              }}
            />
          </NativeStack.Navigator>
        </NavigationProvider>
      </SafeArea>
    </ReactQueryProvider>
  );
}
