import {onMounted, ref} from "vue";
import {useTelegram} from "@/hooks/telegramHooks";

export const loaded = ref(false);
const { tg } = useTelegram();

// Асинхронная функция загрузки данных
export const loadData = async () => {
  tg.ready(); // Вызов функции ready() при монтировании компонента
  tg.expand();
  // Имитация задержки загрузки в течение 1700 мс
  await new Promise(resolve => setTimeout(resolve, 1650));
  loaded.value = true;
};
