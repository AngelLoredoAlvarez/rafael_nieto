import { styled, StyledProps } from "nativewind";
import * as React from "react";
import { ComponentProps, forwardRef } from "react";
import {
  Linking,
  Platform,
  Text as ReactNativeText,
  TextStyle,
} from "react-native";
import { TextLink as SolitoTextLink } from "solito/link";

export const Text = styled(ReactNativeText);

/**
 * You can use this pattern to create components with default styles
 */
export const P = styled(ReactNativeText, "text-base text-black my-4");

/**
 * Components can have defaultProps and styles
 */
export const H1 = styled(ReactNativeText, "text-3xl font-extrabold my-4");
H1.defaultProps = {
  // @ts-ignore
  accessibilityLevel: 1,
  accessibilityRole: "header",
};

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
  href?: string;
  target?: "_blank";
}

export const A = forwardRef<ReactNativeText, StyledProps<AProps>>(function A(
  { className = "", href, target, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
      // @ts-ignore
      hrefAttrs: {
        rel: "noreferrer",
        target,
      },
    },
    default: {
      onPress: (event) => {
        // eslint-disable-next-line no-unused-expressions
        props.onPress && props.onPress(event);
        if (Platform.OS !== "web" && href !== undefined) {
          Linking.openURL(href);
        }
      },
    },
  });

  return (
    <Text
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  );
});

/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled<
  ComponentProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  );
}, "text-base font-bold hover:underline text-blue-500");
