document.addEventListener("DOMContentLoaded", function(){

  const searchButton = document.getElementById("button");
  const queryResult = document.getElementById("result");
  const userInput = document.getElementById("search");

  //AJAX Request
  function superheroList(){
  
    const userRequest = new XMLHttpRequest();
    const userQuery = userInput.value

    userRequest.open('GET', `superheroes.php?query=${encodeURIComponent(userQuery)}`, true);
    userRequest.onreadystatechange = function() {
      if (userRequest.readyState === XMLHttpRequest.DONE) {
        if (userRequest.status === 200) {
          let response = userRequest.responseText;
          queryResult.innerHTML = response;
        }
        else {
          alert('There was an issue with the request receieved');
        }
      }
    }
    userRequest.send()
  };

 searchButton.addEventListener('click', function(e){
  e.preventDefault();
  superheroList();
 });
                               
});
