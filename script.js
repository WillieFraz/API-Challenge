let pokemonAegslash = document.querySelector("wrapper");
let two = document.getElementsByClassName("two");
fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash")
   .then(response => response.json())
   .then(data => {
   console.log(data);

    getGenera(data);
    getVarieties(data);
    getColor(data);
    showChain(data.evolution_chain.url);
    getFormDescription(data);
    getText(data);
    getEvolution(data);

   })

  function getColor(pokemon){
    console.log(pokemon.color.name);
  }


  function getGenderRate(pokemon){
    console.log(pokemon.genderrate);
  }

  function showChain(url){
    fetch(url)
      .then((response) => { return response.json();})
      .then((data) => {
        console.log(data.chain.species.name);
    })
  }


  function getFormDescription(pokemon){
    console.log(pokemon.form_descriptions[0].description);
    let parent = document.getElementById("three");
    let listItems = document.createElement("p");
    listItems.innerText = pokemon.form_descriptions[0].description;
    parent.appendChild(listItems);
    console.log(three);
    
  }


  function getVarieties(pokemon){
    console.log(pokemon.varieties[0].pokemon.name);
    console.log(pokemon.varieties[1].pokemon.name);
    let parent = document.getElementById("four");
    let listInfo = document.createElement("p");
    listInfo.innerText = pokemon.varieties[1].pokemon.name;
    parent.appendChild(listInfo);
    console.log(four);

    let parents = document.getElementById("five");
    let lisInformation = document.createElement("p");
    lisInformation.innerText = pokemon.varieties[0].pokemon.name;
    parents.appendChild(lisInformation);
    console.log(five);
    }


  function getGenera(pokemon){
    console.log(pokemon.genera[7].genus);
    let parent = document.getElementById("two");
    let listItem = document.createElement("p");
    listItem.innerText = pokemon.genera[7].genus;
    parent.appendChild(listItem);
    console.log(two);
  }

  function getText(pokemon){
    console.log(pokemon.flavor_text_entries[6].flavor_text);
    let parent = document.getElementById("one");
    let listItem = document.createElement("p");
    listItem.innerText = pokemon.flavor_text_entries[6].flavor_text;
    parent.appendChild(listItem);
    console.log(one);
  }

  function getEvolution(pokemon){
    console.log(pokemon.evolves_from_species.name);
    let parent = document.getElementById("six");
    let listItem = document.createElement("p");
    listItem.innerText = pokemon.evolves_from_species.name;
    parent.appendChild(listItem);
    console.log(six);
  }

  function switchImage() {
    if (document.getElementById("image").src == "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png")
    {
      document.getElementById("image").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681_f2.png";
    } else {
      document.getElementById("image").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png";
    }
  }