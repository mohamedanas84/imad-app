/*console.log('Loaded!');
var img = document.getElementById('modi');
var marginLeft = 0; 
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function () {
    var interval = setInterval(moveRight,30);
};*/
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Create a request object.
    var request = new XMLHttpRequest();
    
    // Capture the response and store into the variable
    request.onreadystatechange = function() {
       if(request.readyState == XMLHttpRequest.DONE){
           if(request.status == 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
       }
    };
    //Make the Request
    request.open('GET','http://imohamedanas.imad.hasura-app.io/counter',true)
    request.send(null);
};

