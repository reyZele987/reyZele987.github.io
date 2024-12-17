const gettingTable = document.getElementById("tableClass");
const gettingClick = document.getElementById("buttonCreating");
const gettingInput = document.getElementById("inputCreating");
const gettingDiv = document.querySelector(".div_container");
const gettingClose = document.getElementById("buttonInside");
const deleteAlert = document.getElementById("deleteAlert");
const deleteAlert1 = document.getElementById("deleteAlert1");


function alertFunction () {
  alert("Write a number bewteen 0 and 827 and then tap the red button to Show a character" + ` "If you want to delete this alert tap the blue Delete alert button"`)
}
gettingInput.addEventListener("click", alertFunction, false);
deleteAlert.addEventListener("click", function() {
  gettingInput.removeEventListener("click", alertFunction, false)
})
deleteAlert.addEventListener("click", function() {
  alert("Alert deleted")
})


function alertFunction1() {
  let working = gettingInput.value;
  if(working <= 0 || working >= 827) {
    alert("Insert a number bewteen 0 and 827 to Show a character" + ` "If you want to delete this alert tap the green Delete alert button"`)
  }
}
gettingClick.addEventListener("click", alertFunction1, false);
deleteAlert1.addEventListener("click", function() {
  gettingClick.removeEventListener("click",alertFunction1, false);
})
deleteAlert1.addEventListener("click",function() {
  alert("Alert deleted")
})


gettingClick.addEventListener("click", function () {
  let working = gettingInput.value;
   
  if(working > 0 || working < 827) {
    
    const concatId = `https://rickandmortyapi.com/api/character/` + working ;
  
    fetch(concatId)
    .then((response) => response.json())
    .then((object) => {
      let creating = `<td> ${object.name} </td>  <td>  ${object.id} </td>  <td> ${object.gender} </td> <td>  ${object.status} </td> 
                      <td> ${object.episode[0]} </td>`;

      gettingTable.innerHTML = `<tr> ${creating} </tr>`;

      let creatingImage = `${object.image}`;
      let gettingImg = document.querySelector(".imageCreating");
      gettingImg.setAttribute("src", creatingImage);
      gettingDiv.classList.add("show")
    
    });
    gettingInput.value = "";
  }

  else if(working <= 0 || working >= 827) {
    gettingDiv.classList.remove("show") 
  }
})





gettingClose.addEventListener("click", function() {
  gettingDiv.classList.remove("show")
})







