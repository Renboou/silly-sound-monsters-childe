function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5HIMbPUBbc/model.json', modelReady);
    }
    
function modelReady(){
    classifier.classify(gotResults);
    }
    
function gotResults(error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML  = 'I can hear -' +
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -' +
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rbg(" +random_number_r +","+ random_number_g +","+ random_number_r+")";
    document.getElementById("result_confidence").style.color = "rbg(" +random_number_r +","+ random_number_g +","+ random_number_r+")";
    img1 = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');
    img5 = document.getElementById('childe');
    if (results[0].label == "Background Noise") {
img1.src = 'aliens-01.gif';
img2.src = 'aliens-02.png';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.png';
img5.src = 'silly childe.png';}
else if (results[0].label == "paper"){
img1.src = 'aliens-01.png';
img2.src = 'aliens-02.gif';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.png';
img5.src = 'silly childe.png';}
else if (results[0].label == "ice pack"){
img1.src = 'aliens-01.png';
img2.src = 'aliens-02.png';
img3.src = 'aliens-03.gif';
img4.src = 'aliens-04.png';
img5.src = 'silly childe.png';}
else if (results[0].label == "clapping :)"){
img1.src = 'aliens-01.png';
img2.src = 'aliens-02.png';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.gif';
img5.src = 'silly childe.png';}
else{
    img1.src = 'aliens-01.png';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.png';
    img5.src = 'silly childe gif.gif';}
} 

    }