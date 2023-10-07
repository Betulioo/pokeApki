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
const getPokemons = async (index=1,numerogeneracion=150) => {
  let pokemap = [];

  for (let i = index; i < numerogeneracion; i++) {
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
const getOnePokemon = async (i) => {
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  const results = await response.json();

  

  return results;
};
const mappeaPokemon = (pokemonNoMap) => {
  return pokemonNoMap.map((character) => ({
    Nombre: character.name,
    Tipos: character.types[0].type.name,
    fotos: character.sprites.versions["generation-v"]["black-white"].animated.front_default,
    Habilidad: character.abilities[0],
    Habilidad2: character.abilities[1],
  }));
};

const pintaPokemon = (caracteresWiMap) => {
  // console.log(caracteresWiMap)
  main$$.innerHTML = "";
  for (const characterMapeado of caracteresWiMap) {
    // console.log(characterMapeado.Nombre)
    const miDiv$$ = document.createElement("div");
    miDiv$$.className = `main__div flip-card ${characterMapeado.Tipos}`;
    miDiv$$.id = "card";
    main$$.appendChild(miDiv$$);

    const miDiv2$$ = document.createElement("div");
    miDiv2$$.className = "main__div flip-card-inner";
    miDiv$$.appendChild(miDiv2$$);

    let mih2$$ = document.createElement("h2");
    mih2$$.textContent = `${characterMapeado.Nombre}`;
    miDiv$$.appendChild(mih2$$);

    let miFigure$$ = document.createElement("figure");
    let miImg$$ = document.createElement("img");
    miFigure$$.className = "flip-card-front";
    miImg$$.setAttribute("src", characterMapeado.fotos);

    // let mip$$ = document.createElement("p");
    // mip$$.textContent = `Tipo: ${characterMapeado.Tipos}`;
    // const habilidades2 = {...characterMapeado.Habilidad[0].ability,...characterMapeado.Habilidad[1].ability}
    // console.log(habilidades2)
    /////////////////////////////////////////////////////////
    // let mip2$$ = document.createElement("p");
    // if (characterMapeado.Habilidad2) {
    //   mip2$$.textContent = `Habilidad: ${characterMapeado.Habilidad.ability.name}, ${characterMapeado.Habilidad2.ability.name} `;
    // } else {
    //   mip2$$.textContent = `Habilidad: ${characterMapeado.Habilidad.ability.name}`;
    // }
    const miDiv3$$ = document.createElement("div");
    miDiv3$$.className = "main__div flip-card-back";

    let mih22$$ = document.createElement("h2");
    mih22$$.textContent = `${characterMapeado.Nombre}`;
    miDiv3$$.appendChild(mih2$$);

    // let miFigure2$$ = document.createElement("figure");
    // let miImg2$$ = document.createElement("img");
    // miFigure2$$.className = "";
    // miImg2$$.setAttribute("src", characterMapeado.fotos);

    let mip4$$ = document.createElement("p");
    mip4$$.textContent = `Tipo: ${characterMapeado.Tipos}`;
    miDiv3$$.appendChild(mip4$$);
    // const habilidades2 = {...characterMapeado.Habilidad[0].ability,...characterMapeado.Habilidad[1].ability}
    // console.log(habilidades2)
    let laP$$ = document.createElement("p");
    if (characterMapeado.Habilidad2) {
      laP$$.textContent = `Habilidad: ${characterMapeado.Habilidad.ability.name}, ${characterMapeado.Habilidad2.ability.name} `;
    } else {
      laP$$.textContent = `Habilidad: ${characterMapeado.Habilidad.ability.name}`;
    }
    miDiv3$$.appendChild(laP$$);
    miFigure$$.appendChild(miImg$$);
    miDiv2$$.appendChild(miFigure$$);
    miDiv2$$.appendChild(miDiv3$$);
 
  }
};
const agarraInput = (pokemonesMapeados) => {
  const input$$ = document.querySelector("input");

  input$$.addEventListener("input", () =>
    searchPokemon(input$$.value, pokemonesMapeados)
  );
};
const agarraInputTipo = (pokemonesMapeadosTipo) => {
  const input$$ = document.querySelector(".miInput");

  input$$.addEventListener("input", () =>
    searchPokemonTipo(input$$.value, pokemonesMapeadosTipo)
  );
};
const searchPokemon = (filtro, pokemons) => {
  let pokemonfiltrado = pokemons.filter((pokemon) =>
    pokemon.Nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  pintaPokemon(pokemonfiltrado);
};
const searchPokemonTipo = (filtro, pokemons) => {
  let pokemonfiltrado = pokemons.filter((pokemon) =>
    pokemon.Tipos.toLowerCase().includes(filtro.toLowerCase())
  );

  pintaPokemon(pokemonfiltrado);
};
const searchPokemonTipo2 = (filtro, pokemons) => {
  let pokemonfiltrado = pokemons.filter((pokemon) =>
    pokemon.Tipos.toLowerCase().includes(filtro.toLowerCase())
  );
return pokemonfiltrado
  // pintaPokemon(pokemonfiltrado);
};
const numeroRandom = () => {
  return Math.floor(Math.random() * 150);
};
// const pintaPoke = (pokemonRecogido) => {
//   // console.log(pokemonRecogido)
//   const miDiv$$ = document.createElement("div");
//   miDiv$$.className = "main__div flip-card";
//   miDiv$$.id = "card";
//   main$$.appendChild(miDiv$$);

//   const miDiv2$$ = document.createElement("div");
//   miDiv2$$.className = "main__div flip-card-inner";
//   miDiv$$.appendChild(miDiv2$$);

//   let mih2$$ = document.createElement("h2");
//   mih2$$.textContent = `${pokemonRecogido.Nombre}`;
//   miDiv$$.appendChild(mih2$$);

//   let miFigure$$ = document.createElement("figure");
//   let miImg$$ = document.createElement("img");
//   miFigure$$.className = "flip-card-front";
//   miImg$$.setAttribute("src", pokemonRecogido.fotos);

//   let mip$$ = document.createElement("p");
//   mip$$.textContent = `Tipo: ${pokemonRecogido.Tipos}`;
//   // const habilidades3 = {...characterMapeado.Habilidad.ability,...characterMapeado.Habilidad.ability}
//   // console.log(habilidades2)
//   /////////////////////////////////////////////////////////
//   let mip2$$ = document.createElement("p");
//   // if (pokemonRecogido.Habilidad2[1]) {
//   //   mip2$$.textContent = `Habilidad: ${pokemonRecogido.Habilidad.ability.name}, ${pokemonRecogido.Habilidad2.ability.name} `;
//   // } else {
//   //   mip2$$.textContent = `Habilidad: ${pokemonRecogido.Habilidad.ability.name}`;
//   // }
//   const miDiv3$$ = document.createElement("div");
//   miDiv3$$.className = "main__div flip-card-back";

//   let mih22$$ = document.createElement("h2");
//   mih22$$.textContent = `${pokemonRecogido.Nombre}`;
//   miDiv3$$.appendChild(mih2$$);

//   let miFigure2$$ = document.createElement("figure");
//   let miImg2$$ = document.createElement("img");
//   miFigure$$.className = "flip-card-front";
//   miImg2$$.setAttribute("src", pokemonRecogido.fotos);

//   let mip4$$ = document.createElement("p");
//   mip4$$.textContent = `Tipo: ${pokemonRecogido.Tipos}`;
 
//   let laP$$ = document.createElement("p");
//   // if (pokemonRecogido.Habilidad2[1]) {
//   //   laP$$.textContent = `Habilidad: ${pokemonRecogido.Habilidad[0].ability.name}, ${pokemonRecogido.Habilidad2[1].ability.name} `;
//   // } else {
//   //   laP$$.textContent = `Habilidad: ${pokemonRecogido.Habilidad[0].ability.name}`;
//   // }

//   miFigure$$.appendChild(miImg$$);
//   miDiv2$$.appendChild(miFigure$$);
//   miFigure$$.appendChild(mip$$);
//   miFigure$$.appendChild(mip2$$);
//   main$$.appendChild(miDiv3$$);
//   miDiv3$$.appendChild(miFigure2$$);
 
// };
const pintaPoke = (pokemonRecogido) => {
  main$$.innerHTML = "";
  const miDiv$$ = document.createElement("div");
  miDiv$$.className = `main__div flip-card ${pokemonRecogido.types[0].type.name}`;

  const miDiv2$$ = document.createElement("div");
  miDiv2$$.className = "main__div flip-card-inner";
  miDiv$$.appendChild(miDiv2$$);



  let miFigure$$ = document.createElement("figure");
  let miImg$$ = document.createElement("img");
  miFigure$$.className = "flip-card-front";
  miImg$$.setAttribute("src", pokemonRecogido.sprites.versions["generation-v"]["black-white"].animated.front_default);
  miFigure$$.appendChild(miImg$$);
  miDiv2$$.appendChild(miFigure$$);



  const miDiv3$$ = document.createElement("div");
  miDiv3$$.className = "main__div flip-card-back";
    let mih2$$ = document.createElement("h2");
  mih2$$.textContent = `${pokemonRecogido.name}`;
  miDiv3$$.appendChild(mih2$$);
  let mip$$ = document.createElement("p");
  mip$$.textContent = `Tipo: ${pokemonRecogido.types[0].type.name}`;
  miDiv3$$.appendChild(mip$$);

  let mip2$$ = document.createElement("p");
  mip2$$.textContent = `Habilidad: ${pokemonRecogido.abilities[0].ability.name}`;
  if (pokemonRecogido.abilities[1]) {
    mip2$$.textContent += `, ${pokemonRecogido.abilities[1].ability.name}`;
  }
  miDiv3$$.appendChild(mip2$$);
  miDiv2$$.appendChild(miDiv3$$);

  
  main$$.appendChild(miDiv$$);

};
const agarraButton = () => {
  const btn$$ = document.querySelector(".miButton");
  
  btn$$.addEventListener("click", async () => {
   
    const pokemonRecogido = await getOnePokemon(numeroRandom());
    
    //  console.log(pokemonRecogido)
    // const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
   
     pintaPoke(pokemonRecogido);
  });
};
const agarraButton2 = () => {
  const btn$$ = document.querySelector(".miButton2");
  btn$$.addEventListener("click", async () => {
    const pokemonRecogido = await getPokemons();
    //  console.log(pokemonRecogido)
    const pokemonesMapeados = mappeaPokemon(pokemonRecogido);
    pintaPokemon(pokemonesMapeados);
  });
};
const agarraButton3 = () => {
  const btn$$ = document.querySelector(".miButton3");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
    const pokemonRecogido = await getPokemons(151,340);
    //  console.log(pokemonRecogido)
    const pokemonesMapeados = mappeaPokemon(pokemonRecogido);
    pintaPokemon(pokemonesMapeados);
    // console.log(pokemonesMapeados)
  });
};
const agarraButtonGrass = () => {
  const btn$$ = document.querySelector(".miButton-Grass");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("grass",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
// const agarraButtonFlying = () => {
//   const btn$$ = document.querySelector(".miButton-flying");
//   // console.log('boton agarrado')
//   btn$$.addEventListener("click", async () => {
//     // console.log("Button clicked")
   
//     const pokemonRecogido = await getPokemons();
//     // console.log(pokemonRecogido)
    
//     //  console.log(pokemonRecogido)
//     const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
//       const pokeFiltrado = searchPokemonTipo2("flying",pokemonrecogidomapeado)
//     // console.log(pokeFiltrado)

//       pintaPokemon(pokeFiltrado)
// })};
const agarraButtonFire = () => {
  const btn$$ = document.querySelector(".miButton-fire");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("fire",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonWater = () => {
  const btn$$ = document.querySelector(".miButton-water");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("water",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonGround = () => {
  const btn$$ = document.querySelector(".miButton-ground");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("ground",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonIce = () => {
  const btn$$ = document.querySelector(".miButton-ice");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("ice",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonBug = () => {
  const btn$$ = document.querySelector(".miButton-bug");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("bug",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonElectric = () => {
  const btn$$ = document.querySelector(".miButton-electric");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("electric",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonRock = () => {
  const btn$$ = document.querySelector(".miButton-rock");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("rock",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonFight = () => {
  const btn$$ = document.querySelector(".miButton-fight");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("fight",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonNormal = () => {
  const btn$$ = document.querySelector(".miButton-normal");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("normal",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonPsychic = () => {
  const btn$$ = document.querySelector(".miButton-psychic");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("psychic",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonPoison = () => {
  const btn$$ = document.querySelector(".miButton-poison");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("poison",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonDragon = () => {
  const btn$$ = document.querySelector(".miButton-dragon");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("dragon",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const agarraButtonGhost = () => {
  const btn$$ = document.querySelector(".miButton-ghost");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    // console.log("Button clicked")
   
    const pokemonRecogido = await getPokemons();
    // console.log(pokemonRecogido)
    
    //  console.log(pokemonRecogido)
    const pokemonrecogidomapeado = mappeaPokemon(pokemonRecogido)
      const pokeFiltrado = searchPokemonTipo2("ghost",pokemonrecogidomapeado)
    // console.log(pokeFiltrado)

      pintaPokemon(pokeFiltrado)
})};
const init = async () => {
  const characters = await getPokemons();
  const pokemonesMapeados = mappeaPokemon(characters);

  pintaPokemon(pokemonesMapeados);
  agarraInput(pokemonesMapeados);
  // agarraInputTipo(pokemonesMapeados);
  agarraButton();
  agarraButton2();
  agarraButton3();
  agarraButtonGrass()
  // agarraButtonFlying()
  agarraButtonWater()
  agarraButtonGround()
  agarraButtonIce()
  agarraButtonBug()
  agarraButtonElectric()
  agarraButtonRock()
  agarraButtonFight()
  agarraButtonNormal()
  agarraButtonPsychic()
  agarraButtonPoison()
  agarraButtonDragon()
  agarraButtonGhost()
  agarraButtonFire()

};
init();
