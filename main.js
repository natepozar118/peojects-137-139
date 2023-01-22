img = ""; 
status = "";

function preload()  {
 img = loadImage('dog_cat.jpeg');
}

function setup()  {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetecter.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}

function draw()  {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML + "status : Object Detected";

            fill("#FF0000")
            percent = floor(objects[i].confidence * 100);
            text(objects.label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
  fill("FF0000");
  text("Dog", 45, 75)
  nofill();
  stroke("FF0000");
  rect(30, 60, 450, 350 );

  fill("FF0000");
  text("Cat", 320, 120);
  nofill();
  stroke("#FF0000")
  rect(300, 90, 270, 320 );
}