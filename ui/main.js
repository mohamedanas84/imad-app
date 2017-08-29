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

//Submit the name content
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //Create a request object.
    var request = new XMLHttpRequest();
    
    // Capture the response and store into the variable
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE){
             if(request.status == 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i < names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
             }
        }
    };
    request.open('GET','http://imohamedanas.imad.hasura-app.io/submit-name?name=' + name,true)
    request.send(null);
};



