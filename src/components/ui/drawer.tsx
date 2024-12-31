import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type {
  ContentProps,
  DescriptionProps,
  DynamicProps,
  LabelProps,
  OverlayProps
} from "@corvu/drawer";
import DrawerPrimitive from "@corvu/drawer";

import { cn } from "~/lib/utils";

const Drawer = DrawerPrimitive;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

type DrawerOverlayProps<T extends ValidComponent = "div"> = OverlayProps<T> & { class?: string };

const DrawerOverlay = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerOverlayProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerOverlayProps, ["class"]);
  const drawerContext = DrawerPrimitive.useContext();
  return (
    <DrawerPrimitive.Overlay
      class={cn(
        "fixed inset-0 z-50 data-[transitioning]:transition-colors data-[transitioning]:duration-300",
        props.class
      )}
      style={{
        "background-color": `rgb(240 240 240 / ${0.7 * drawerContext.openPercentage()})`,
        "backdrop-filter": `blur(${5 * drawerContext.openPercentage()}px)`
      }}
      {...rest}
    />
  );
};

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
  class?: string;
  children?: JSX.Element;
  side?: "top" | "bottom" | "left" | "right";
};

const DrawerContent = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerContentProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerContentProps, ["class", "children", "side"]);
  const side = props.side || "top";

  const sideStyles = {
    top: "inset-x-0 top-0 pb-12 max-h-[90%] after:inset-x-0 after:bottom-[95%] after:h-[100px] ",
    bottom: "inset-x-0 bottom-0 pt-12 max-h-[90%] after:inset-x-0 after:top-[95%] after:h-[100px]",
    left: "inset-y-0 left-0 pr-8 w-[90%] max-w-xl after:inset-y-0 after:right-[95%] after:w-[100px]",
    right: "inset-y-0 right-0 pl-8 w-[90%] max-w-xl after:inset-y-0 after:left-[95%] after:w-[100px]"
  };

  const handleStyles = {
    top: "bottom-3 left-1/2 h-2 w-[100px] -translate-x-1/2",
    bottom: "top-3 left-1/2 h-2 w-[100px] -translate-x-1/2",
    left: "right-3 top-1/2 h-[100px] w-2 -translate-y-1/2",
    right: "left-3 top-1/2 h-[100px] w-2 -translate-y-1/2",
  };

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        class={cn(
          "fixed z-50 flex h-auto flex-col bg-background after:bg-inherit data-[transitioning]:transition-transform data-[transitioning]:duration-300 md:select-none after:absolute",
          sideStyles[side],
          props.class
        )}
        {...rest}
      >
        {props.children}
        <div class={cn("absolute transform rounded-full bg-muted", handleStyles[side])} />
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

const DrawerHeader: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return <div class={cn("grid gap-1.5 p-4 text-center sm:text-left", props.class)} {...rest} />;
};

const DrawerFooter: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return <div class={cn("t-auto flex flex-col gap-2 p-4", props.class)} {...rest} />;
};

type DrawerTitleProps<T extends ValidComponent = "div"> = LabelProps<T> & { class?: string };

const DrawerTitle = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerTitleProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerTitleProps, ["class"]);
  return (
    <DrawerPrimitive.Label
      class={cn("text-lg font-semibold leading-none tracking-tight", props.class)}
      {...rest}
    />
  );
};

type DrawerDescriptionProps<T extends ValidComponent = "div"> = DescriptionProps<T> & {
  class?: string;
};

const DrawerDescription = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerDescriptionProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerDescriptionProps, ["class"]);
  return (
    <DrawerPrimitive.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
};

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
};
