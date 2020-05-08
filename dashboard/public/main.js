var uiColors = ['bg-blue-1', 'bg-blue-2', 'bg-blue-3', 'bg-blue-4', 'bg-green-1', 'bg-green-2', 'bg-green-3', 'bg-green-4'];

var bracket_ids = [
    "elbow_6",
    "bar_7",
    "elbow_8",
    "bar_9",
    "elbow_10",
    "bar_11",
    "elbow_12",
    "bar_13",
    "bar_15",
    "bar_16",
    "bar_17",
    "bar_18",
    "bar_20",
    "bar_21",
    "bar_22",
    "bar_24",
    "bar_25",
    "bar_26",
    "bar_27",
    "bar_29",
    "bar_30",
    "bar_31"
]

function main(){
  var login = document.getElementById("login");

  var logout = document.getElementById("logout");
  var delta = document.createElement("img");
  var profile_pic = document.getElementById('profile_pic');
  delta.setAttribute('src', 'delta.png');
  delta.setAttribute('id', 'delta');

//  red_alert();
  particlesJS('profile_pic',particle_config);
//  profile_pic.insertBefore(delta,profile_pic.childNodes[0]);
  profile_pic.appendChild(delta);
//pJSDom[0].pJS.particles.color.value ="#00cc99"
//pJSDom[0].pJS.particles.color.rgb= hexToRgb(pJSDom[0].pJS.particles.color.value)
  pJSDom[0].pJS.particles.line_linked.color="#00cc99"
  pJSDom[0].pJS.particles.line_linked.color_rgb_line =hexToRgb(pJSDom[0].pJS.particles.line_linked.color)


for (idx in bracket_ids) {
  id = bracket_ids[idx];
  element = document.getElementById(id);
//  debugger;
//  for (class_idx in element.classList){
//    class_name = element.classList[class_idx];
//    debugger;
 //   if (uiColors.includes(class_name)){
 //     debugger;
//      element.classList.remove(class_name);
//      element.classList.add(LCARS.colorGen(uiColors));
//    }
//  }
};
};

