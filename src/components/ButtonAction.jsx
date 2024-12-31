import { createSignal, onMount } from "solid-js";
import { Button } from "~/components/ui/button";

export default function ButtonAction() {
  const [counter, setCounter] = createSignal(0);

  // Восстанавливаем состояние из localStorage только на клиенте
  onMount(() => {
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter) {
      setCounter(parseInt(savedCounter, 10));
    }
  });

  // Сохраняем состояние в localStorage при изменении
  const updateCounter = (value) => {
    setCounter(value);
    localStorage.setItem("counter", value.toString());
  };

  return (
    <Button onClick={() => updateCounter(counter() + 1)}>
      Счетчик: {counter()}
    </Button>
  );
}