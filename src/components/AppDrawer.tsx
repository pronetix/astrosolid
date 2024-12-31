import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "~/components/ui/drawer"
import { Button } from "~/components/ui/button"

import { AiOutlineMenu } from "solid-icons/ai";
import { createSignal, type JSX } from "solid-js";

interface MyDrawerProps {
  children: JSX.Element
}

export default function MyDrawer(props: MyDrawerProps) {

  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="ghost"><AiOutlineMenu /></Button>
      <Drawer open={isOpen()} onOpenChange={setIsOpen} side="top">
        <DrawerContent side="top">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          {props.children}
        </DrawerContent>
      </Drawer>
    </>
  );
}