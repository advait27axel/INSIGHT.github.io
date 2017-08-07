const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'fd9ab40a98b64cf1a5b878a76f5896f5'
});

btn = document.getElementById("btn")
disp_img = document.getElementById("disp_img");
var ul = document.getElementById("list");

btn.onclick = function(){

  console.log(disp_img.src);

  app.models.predict(Clarifai.GENERAL_MODEL, disp_img.src ).then(
  function(response) {
    var predict_json = response.outputs[0].data.concepts;

    console.log(predict_json.length);
    ul.innerHTML = "";

    for (i = 0; i<predict_json.length; i++ ){
        console.log(predict_json[i].name);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(predict_json[i].name));
        ul.appendChild(li);
    }
  },
  function(err) {
    console.error(err);
  }
);
}
