import * as React from "react";
import { TextLink } from "solito/link";

import { Text } from "./Typography";
import { View } from "./View";

function AboutScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">About Page</Text>
      <TextLink href={"/"}>Go Home</TextLink>
    </View>
  );
}

export { AboutScreen };
