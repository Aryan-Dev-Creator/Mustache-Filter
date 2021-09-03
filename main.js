function preload()
{}

function setup()
{
    canvas = createCanvas (300, 300);
    canvas.center();
}
function modelLoaded()
{
    console.log('posenet is initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}


function draw()
{

}

function take_snapshot()
{
    save('MyFilterImage.png');
};
