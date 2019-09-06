


function display_time() {
  document.getElementById('disp').innerHTML = Date()
  }

function text_change(){
document.getElementById("text1").innerHTML = "This text came from the script file!"
}
// function changeImage() {
//   var image = document.getElementById('myImage');
//   if (image.src.match("bulbon")) {
//     image.src = "pic_bulboff.gif";
//   } else {
//     image.src = "pic_bulbon.gif";
//   }
// }

function visualize_moto1(ev) {
  var vis_img = document.getElementById('vis_img');
  // var moto1 = document.getElementById('moto1');
  if (vis_img.src.match("nut")) {
    vis_img.src = "../../assets/images/kan/begin_legs.png";
  }
  else vis_img.src = "../../assets/images/pleases_nut.jpg";
}

function translate_moto1() {
  var ans = document.getElementById('kan_answer_concealer');
  var ex = document.getElementById('kan_ex1');
  var vis = document.getElementById('kan_vis_explained');
  var story = document.getElementById('kan_story');
  if (ans.innerHTML.match("reveal")) {
    ans.innerHTML = "Beginning / Origin";
    ex.innerHTML = " - Temoto -> At hand/readily available";
    vis.innerHTML = "[Belt and hem of skirt + legs]";
    story.innerHTML =
"There are [two] places just above the [legs] <br> where you'll look again [gen]. The sight gets my motor [moto] runnin'"
  } else {
    ans.innerHTML = "^click to reveal^";
    ex.innerHTML = "";
    vis.innerHTML = "";
    story.innerHTML = "";
    }
}


// e.currentTarget.style.visibility = 'hidden'
//
// ../../assets/images/kan/begin_legs.png
