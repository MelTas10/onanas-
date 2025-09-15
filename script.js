(() => {
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Скопировано: ' + text);
    } catch (e) {
      console.error(e);
      prompt('Скопируйте контакт: Ctrl+C, Enter', text);
    }
  };
  document.getElementById('copyHandle')?.addEventListener('click', () => copy('@miveey17'));
  document.getElementById('copyHandle2')?.addEventListener('click', () => copy('@miveey17'));

  // удалён блок копирования рекламного текста

  // локальная подгрузка прайса отключена по требованию — используем только Docs preview
})();


