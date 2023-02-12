function startClassification(){
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tKbOHgHIy/model.json',modelReady);
}
function modelReady(){
  classifier.classify(gotResults);
}
if (error){
  console.error(error);
}else{
  console.log(results);
}


