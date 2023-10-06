const ID_CONTENT = "content"
const ID_PLAY_BTN = "play"

class Screen {
  static getHtml(item) {
    return `
    <div class="col-md-4 mb-4">
      <div class="card" style="width: 16rem;">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
      </div>
      <br />
    </div>
    `
  }
  static changeHtmlContent(htmlCode){
    const content = document.getElementById(ID_CONTENT)
    content.innerHTML = htmlCode
  }

  static generateStringHtml(data) {
    //para cada item na lista, vai executar a função getHtml
    //ao final, vai concatenar tudo em uma única string
    //muda de array para string
    return data.map(Screen.getHtml).join('')
  }

  static updateImages(items) {
    const htmlCode = Screen.generateStringHtml(items)
    Screen.changeHtmlContent(htmlCode)
  }

  static configPlayButton(functionOnClick) {
    const playBtn = document.getElementById(ID_PLAY_BTN)
    playBtn.onclick = functionOnClick
  }
}