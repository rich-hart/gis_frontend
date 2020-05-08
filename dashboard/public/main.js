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

};

