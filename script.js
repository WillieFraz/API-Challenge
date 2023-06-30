let pokemonAegslash = document.querySelector("ul")

fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash")
    .then(function (response) {
        // console.log(response);
        return response.json()
    })
    .then(function(json){
        let name = json;
        
        for(const n of Object.values(name)) {
            let listItem = document.createElement("li");
            listItem.innerText = n;
            pokemonAegslash.appendChild(listItem);
        }
    })
    .then(function (genera){
        let general = genera;

        if  (genera ==  general){
            let listItems = document.createElement("li");
            pokemonAegslash.appendChild(listItems);
            console.log(genera)
        }

    })