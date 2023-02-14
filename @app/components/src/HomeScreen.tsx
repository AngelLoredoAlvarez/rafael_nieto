import { useHomeScreenQuery } from "@app/hooks";
import * as React from "react";
import { TextLink } from "solito/link";

import { Text } from "./Typography";
import { View } from "./View";

function HomeScreen() {
  const { data } = useHomeScreenQuery();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">Home Page</Text>
      {data?.currentUser ? (
        <Text className="mb-4 text-center font-bold">
          {data.currentUser.name}
        </Text>
      ) : null}
      <TextLink href={"/about"}>Go to About</TextLink>
    </View>
  );
}

export { HomeScreen };
