import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as React from "react";
import { useMemo } from "react";

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL("/")],
          config: {
            initialRouteName: "home",
            screens: {
              home: "",
              about: "about",
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  );
}
