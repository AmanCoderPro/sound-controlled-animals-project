function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/T4KpIsFbz/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResult(error,  results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
    }
}