function onLoad() {
  const dependencies = {
    screen: Screen
  }
  const memoryGame = new MemoryGame(dependencies)
  memoryGame.start()
}
window.onload = onLoad