Webcam.set({ 
    width:350,heigth:300,image_format:'png',png_quality:90
});
camera=document.getElementById("webcam_display");
Webcam.attach(camera);
function button()
{Webcam.snap(function(data_uri)
    
    {
        document.getElementById("screenshot").innerHTML="<img id='screenie' src='" + data_uri +"'>"
    }) ;}
    console.log("ml5version:",ml5.version);
    model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/V3OC0o_7B/model.json",modelloaded);
    function modelloaded()
    {console.log("model loaded")}

    function button1()
    {
        img=document.getElementById('screenie');
       model.classify(img,results);
    }
    function results(error,output){
        if(error){
            console.error(error);

        }
        else{
            console.log(output);
          document.getElementById("line").innerHTML=output[0].label;
          document.getElementById("percentile").innerHTML=output[0].confidence.toFixed(3);
        }

    }
