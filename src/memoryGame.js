class MemoryGame {
  constructor({ screen }) {
    this.screen = screen
    this.defaultIcon = './assets/pokemon.png'
    this.pokemons = [
      { img: './assets/bellsprout.png', name:'bellsprout'},
      { img: './assets/eevee.png', name:'eevee'},
      { img: './assets/egg.png', name:'egg'},
      { img: './assets/jigglypuff.png', name:'jigglypuff'},
      { img: './assets/mankey.png', name:'mankey'},
      { img: './assets/meowth.png', name:'meowth'},
      { img: './assets/pidgey.png', name:'pidgey'},
      { img: './assets/pikachu.png', name:'pikachu'},
      { img: './assets/psyduck.png', name:'psyduck'},
      { img: './assets/ratata.png', name:'ratata'},
      { img: './assets/snorlax.png', name:'snorlax'},
      { img: './assets/squirtle.png', name:'squirtle'},
      { img: './assets/venonat.png', name:'venonat'},
    ]

    this.hiddenPokemons = []
  }
  
  start() {
    this.screen.updateImages(this.pokemons)

    this.screen.configPlayButton(this.play.bind(this))
  }
  
  hidePokemon(pokemons) {
    //ocultar as imagens existentes
    const occultPokemons = pokemons.map(( { nome, id }) => ({
      id,
      nome,
      img: this.defaultIcon
    }))
    //atualizar a tela com os pokemons ocultos
    this.screen.updateImages(occultPokemons)
    this.hiddenPokemons = occultPokemons
  }

  sortCards() {
    const copys = this.pokemons
    //duplicar os cards
    .concat(this.pokemons)
    //entrar em cada item e criar um id aleatório
    .map(item => {
      return Object.assign({}, item, { id: (Math.random() / 0.5)})
    })
    //ordenar aleatoriamente
    .sort(() => Math.random() - 0.5)
    this.screen.updateImages(copys)

    //esperar 1 seg para atualizar a tela
    setTimeout(() => {
      this.hidePokemon(copys)
    }, 1000);
  }
  
  play() {
    this.sortCards()
  }
}