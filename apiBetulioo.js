const main$$ = document.querySelector("main");
// console.log(main$$);
// fetch(`https://rickandmortyapi.com/api/character`)
// .then((response)=>response.json())
// .then((res)=>console.log(res))
// const getAllPokemon= async()=>{
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
//   const {results} = await response.json()
//   console.log(results)

// return results
// }
const getPokemons = async () => {
let pokemap = [];

  for (let i = 1; i < 151; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const results = await response.json();
    // const mapeado = mappeaPokemon(results)
    pokemap.push(results);
    // console.log(results)

    // return results;
  }
  // const pokemonesMapeados = mappeaPokemon(pokemap);
  // console.log(pokemonesMapeados)
  return pokemap;

  //  console.log(response)
  // console.log(results);
};
const mappeaPokemon = (pokemonNoMap) => {
  return pokemonNoMap.map((character) => ({
    Nombre: character.name,
    Tipos: character.types[0].type.name,
    fotos: character.sprites.front_default,
    Habilidad: character.abilities,
  }));
};
const pintaPokemon = (caracteresWiMap) => {
  // console.log(caracteresWiMap)
  main$$.innerHTML=""
  for (const characterMapeado of caracteresWiMap) {
    // console.log(characterMapeado.Nombre)
    const miDiv$$ = document.createElement("div");
    miDiv$$.className = "main__div";
    main$$.appendChild(miDiv$$);

    let mih2$$ = document.createElement("h2");
    mih2$$.textContent = `${characterMapeado.Nombre}`;
    miDiv$$.appendChild(mih2$$);

    let miFigure$$ = document.createElement("figure");
    let miImg$$ = document.createElement("img");
    miImg$$.setAttribute("src", characterMapeado.fotos);

    
    let mip$$ = document.createElement("p");
    mip$$.textContent = `Tipo: ${characterMapeado.Tipos}`;
    // const habilidades2 = {...characterMapeado.Habilidad[0].ability,...characterMapeado.Habilidad[1].ability}
    // console.log(habilidades2)
    let mip2$$ = document.createElement("p");
    if (characterMapeado.Habilidad[1]){
      mip2$$.textContent = `Habilidad: ${characterMapeado.Habilidad[0].name}, ${characterMapeado.Habilidad[1].name} `
    }else{
    mip2$$.textContent = `Habilidad: ${characterMapeado.Habilidad[0].name}`};
    miFigure$$.appendChild(miImg$$);
    miDiv$$.appendChild(miFigure$$);
    miDiv$$.appendChild(mip$$);
    miDiv$$.appendChild(mip2$$);

  }
};
const agarraInput = (pokemonesMapeados)=>{
  const input$$ = document.querySelector('input')
  
  input$$.addEventListener('input',()=> searchPokemon(input$$.value,pokemonesMapeados))
};
const agarraInputTipo = (pokemonesMapeadosTipo)=>{
  const input$$ = document.querySelector('.miInput')
  
  input$$.addEventListener('input',()=> searchPokemonTipo(input$$.value,pokemonesMapeadosTipo))
};
const searchPokemon = (filtro,pokemons) => {
  let pokemonfiltrado = pokemons.filter((pokemon)=>pokemon.Nombre.toLowerCase().includes(filtro.toLowerCase()))
  pintaPokemon(pokemonfiltrado)
};
const searchPokemonTipo = (filtro,pokemons) => {
  

  let pokemonfiltrado = pokemons.filter((pokemon)=>pokemon.Tipos.toLowerCase().includes(filtro.toLowerCase()))
  
  pintaPokemon(pokemonfiltrado)
};
const init = async () => {
  const characters = await getPokemons();
  // console.log(characters)
  const pokemonesMapeados = mappeaPokemon(characters)
// console.log(pokemonesMapeados[0].Tipos);
  
pintaPokemon(pokemonesMapeados);
agarraInput(pokemonesMapeados)
agarraInputTipo(pokemonesMapeados)
};
init();
