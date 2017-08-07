var config = {
  apiKey: "AIzaSyAJaf442qCVq9dg4p1ht0wGF9qTaMrlJ_4",
  authDomain: "image-rec-64ae5.firebaseapp.com",
  databaseURL: "https://image-rec-64ae5.firebaseio.com",
  projectId: "image-rec-64ae5",
  storageBucket: "image-rec-64ae5.appspot.com",
  messagingSenderId: "865180561969"
};
firebase.initializeApp(config);

btn = document.getElementById("btn");
img_container = document.getElementById("img_container");
upload_btn = document.getElementById("upload_btn");

disp_img.onclick = function(){
  upload_btn.click();
}

upload_btn.addEventListener('change', function(e){

  //Get file
   var file = e.target.files[0];
   //Create refrence
   var storageRef = firebase.storage().ref('images/' + file.name);
   console.log(file.name);
   //Upload file
   var task = storageRef.put(file);

   task.on('state_changed',
     function complete(){
        console.log('upload complete');

        var path = 'images/' + file.name

        storageRef.getDownloadURL().then(function(url) {
          disp_img.src = url;
        });
     }
   );
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

