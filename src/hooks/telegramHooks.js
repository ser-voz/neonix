const tg = window.Telegram.WebApp;

export function useTelegram () {
  const copyClick = (link) => {
    //isSnackbarVisible.value = true;
    navigator.clipboard.writeText(link);
  }

  const disabledClosingOnSwipe = () => {
    const overflow = 100
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.height = window.innerHeight + overflow + "px"
    document.body.style.paddingBottom = `${overflow}px`
    window.scrollTo(0, overflow)
  };
  const onClose = () => {
    tg.close();
  }

  return {
    tg,
    onClose,
    disabledClosingOnSwipe,
    user: tg.initDataUnsafe?.user,
    copyClick,
  }
}


/*
  "id": 6445954309,
  "first_name": "Ronan",
  "last_name": "",
  "username": "ronan_boy",
  "language_code": "en",
  "allows_write_to_pm": true
*/
