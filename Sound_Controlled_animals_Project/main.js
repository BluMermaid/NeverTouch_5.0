function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r_wFbQYSe/', modelReady);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        img = document.getElementById('TigerPic.png') 
        img1 = document.getElementById('CatPic.png')
        img2 = document.getElementById('DogPic.png') 
        img3 = document.getElementById('CowPic.png')
         if (results[0].label == "Roaring") {
         img.src = 'TigerAnimation'; 
         img1.src = 'CatPic.png'; 
         img2.src = 'DogPic.png'; 
         img3.src = 'CowPic.png'; 
        } else if (results[0].label == "Meowing") { 
        img.src = 'TigerPic.png'; 
        img1.src = 'CatAnimation'; 
        img2.src = 'DogPic.png'; 
        img3.src = 'CowPic.png'; 
        } else if (results[0].label == "Barking") { 
        img.src = 'TigerPic.png'; 
        img1.src = 'CatPic.png'; 
        img2.src = 'DogAnimation'; 
        img3.src = 'CowPic.png'; 
        }else{    (results[0].label == "Mooing")
        img.src = 'TigerPic.png'; 
        img1.src = 'CatPic.png'; 
        img2.src = 'DogPic.png'; 
        img3.src = 'CowAnimation'; }
    }
}