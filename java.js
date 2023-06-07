
let gettingButton = document.querySelector(".buttonCreating");
let gettingTable = document.querySelector(".tableClass");



let idCreated = prompt("Write your favorite number to watch your character from 1 to 826")



let concatId = `https://rickandmortyapi.com/api/character/${idCreated}`;


const forButton = function() { fetch(concatId)
.then(response => response.json())
.then(object => {
    let creating = ` <td> ${object.name} </td>  <td>  ${object.id} </td>  <td> ${object.gender} </td> <td>  ${object.status} </td> 
    <td> ${object.episode[0]} </td>`

     gettingTable.innerHTML = `<tr> ${creating} </tr>`;

     let creatingImage = `${object.image}`

     let gettingImg = document.querySelector(".imageCreating")
      gettingImg.setAttribute("src", creatingImage)
})} 


const alertFunction = function() {
    swal("Character successfully", "", "success")
}
  













