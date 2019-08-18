


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


// e.currentTarget.style.visibility = 'hidden'
//
// ../../assets/images/kan/begin_legs.png
