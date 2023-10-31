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
const getPokemons = async (index = 1, numerogeneracion = 150) => {
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
    fotos:
      character.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
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


    const miDiv3$$ = document.createElement("div");
    miDiv3$$.className = "main__div flip-card-back";

    let mih22$$ = document.createElement("h2");
    mih22$$.textContent = `${characterMapeado.Nombre}`;
    miDiv3$$.appendChild(mih2$$);


    let mip4$$ = document.createElement("p");
    mip4$$.textContent = `Tipo: ${characterMapeado.Tipos}`;
    miDiv3$$.appendChild(mip4$$);

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
  return pokemonfiltrado;

};

const numeroRandom = () => {
  return Math.floor(Math.random() * 150);
};

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
  miImg$$.setAttribute(
    "src",
    pokemonRecogido.sprites.versions["generation-v"]["black-white"].animated
      .front_default
  );
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
    const pokemonRecogido = await getPokemons(151, 340);
    //  console.log(pokemonRecogido)
    const pokemonesMapeados = mappeaPokemon(pokemonRecogido);
    pintaPokemon(pokemonesMapeados);
    // console.log(pokemonesMapeados)
  });
};

const agarraButtonGrass = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-Grass");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("grass", pokemonesMapeados);

    pintaPokemon(pokeFiltrado);
  });
};

const agarraButtonFire = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-fire");

  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("fire", pokemonesMapeados);

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonWater = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-water");

  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("water", pokemonesMapeados);

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonGround = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-ground");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("ground", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonIce = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-ice");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("ice", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonBug = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-bug");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("bug", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonElectric = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-electric");

  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("electric", pokemonesMapeados);

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonRock = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-rock");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("rock", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonFight = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-fight");
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("fight", pokemonesMapeados);

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonNormal = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-normal");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("normal", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonPsychic = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-psychic");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("psychic", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonPoison = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-poison");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("poison", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonDragon = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-dragon");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("dragon", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};
const agarraButtonGhost = (pokemonesMapeados) => {
  const btn$$ = document.querySelector(".miButton-ghost");
  // console.log('boton agarrado')
  btn$$.addEventListener("click", async () => {
    const pokeFiltrado = searchPokemonTipo2("ghost", pokemonesMapeados);
    // console.log(pokeFiltrado)

    pintaPokemon(pokeFiltrado);
  });
};

const init = async () => {
  const characters = await getPokemons();
  const pokemonesMapeados = mappeaPokemon(characters);

  pintaPokemon(pokemonesMapeados);
  agarraInput(pokemonesMapeados);
  // agarraInputTipo(pokemonesMapeados);
  agarraButton();
  agarraButton2();
  agarraButton3();
  agarraButtonGrass(pokemonesMapeados);
  // agarraButtonFlying()
  agarraButtonWater(pokemonesMapeados);
  agarraButtonGround(pokemonesMapeados);
  agarraButtonIce(pokemonesMapeados);
  agarraButtonBug(pokemonesMapeados);
  agarraButtonElectric(pokemonesMapeados);
  agarraButtonRock(pokemonesMapeados);
  agarraButtonFight(pokemonesMapeados);
  agarraButtonNormal(pokemonesMapeados);
  agarraButtonPsychic(pokemonesMapeados);
  agarraButtonPoison(pokemonesMapeados);
  agarraButtonDragon(pokemonesMapeados);
  agarraButtonGhost(pokemonesMapeados);
  agarraButtonFire(pokemonesMapeados);
};
init();
