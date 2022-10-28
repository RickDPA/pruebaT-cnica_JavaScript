

let url = " https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
    .then(response => response.json())
    .then(data => {

        let element = document.getElementById("habilidades");
        
        element.innerHTML += `
            <h3 style="text-transform: uppercase;"> Es: ${data.name} </h3> 
            <p>Las habilidades de ditto son: </p>
        `;

        for(let i = 0; i<data.abilities.length;i++){
            
            element.innerHTML += `
            <ul>
                <li> ${data.abilities[i].ability.name} </li>
            </ul>
            `;
        }
        element.innerHTML += `<img src= '${data.sprites.front_default}'>`;
    })
    .catch(error => console.log(error))
        


