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

function main() {
    var login = document.getElementById("login");

    var logout = document.getElementById("logout");
    var delta = document.createElement("img");
    var profile_pic = document.getElementById('profile_pic');
    var solution_banner = document.getElementById('solution-banner');

    delta.setAttribute('src', 'delta.png');

    delta.setAttribute('id', 'delta');

    //  red_alert();
    particlesJS('profile_pic', particle_config);
    //  profile_pic.insertBefore(delta,profile_pic.childNodes[0]);
    profile_pic.appendChild(delta);
    //pJSDom[0].pJS.particles.color.value ="#00cc99"
    //pJSDom[0].pJS.particles.color.rgb= hexToRgb(pJSDom[0].pJS.particles.color.value)
    pJSDom[0].pJS.particles.line_linked.color = "#00cc99"
    pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(pJSDom[0].pJS.particles.line_linked.color)


    for (idx in bracket_ids) {
        id = bracket_ids[idx];
        element = document.getElementById(id);
        //  for (class_idx in element.classList){
        //    class_name = element.classList[class_idx];
        //   if (uiColors.includes(class_name)){
        //      element.classList.remove(class_name);
        //      element.classList.add(LCARS.colorGen(uiColors));
        //    }
        //  }
    };
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
    solution_banner.style.display = 'none';
};
var API_ROOT = "/api/"
var app = angular.module("scavenger_hunt", []);

function join_url_params(url, params) {
    return url + "?" + params
}

app.directive('pressEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.pressEnter);
                });

                event.preventDefault();
            }
        });
    };
});

app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //  $httpProvider.interceptors.push('testInterceptor');
}).controller("scavenger_hunt_Ctrl", function($scope, $http) {
    //    var temp_api_root = "http://127.0.0.1:8000/api/scavenger_hunt/";
    //    var API_ROOT = temp_api_root;
    var solution_banner = document.getElementById('solution-banner');
    API_ROOT = '/api/'
    solution_banner.style.display = 'none';
    $scope.logged_in = false;
    $scope.logged_out = true;
    $scope.is_staff = false;
    $scope.uiColors = uiColors;
    $scope.cookie = document.cookie.split('=')[1];
    $scope.colorGen = function() {
        return LCARS.colorGen($scope.uiColors)
    };

    var profile_endpoint = API_ROOT + 'profile?format=json';

    $http.get(profile_endpoint).then(
        function(response) {
            $scope.logged_in = Boolean(response.data.count);
            $scope.logged_out = !$scope.logged_in;
            $scope.is_staff = response.data.results[0].user.is_staff;
        },
        function(data) {

        });

    var penalty_endpoint = API_ROOT + 'penalties/current/?format=json';
    var banner = document.getElementById("banner");
    var banner_content = document.getElementById("banner-content");

    var view_port = document.getElementById("bracket_32");

    function countDown(expires, now){
        // Set the date we're counting down to

    }

    function getPenalty(){
        $http.get(penalty_endpoint).then(
            function (response) {
                if (Object.keys(response.data).length == 0) {
                    banner.style.display = 'none';
                       if (view_port.classList.contains('red-alert')){
                           red_alert()
                       }
                } else {
                    banner.style.display = 'block';
                    banner_content.innerText = response.data.description;
                    if (response.data.type=='red'){
                       banner.style.backgroundColor = "#ff0505"
//                       countDown(response.data.expires, response.data.now)
                       var countDownDate = Date.parse(response.data.expires);
                       // Update the count down every 1 second
                       var x = setInterval(function() {
                         var now = new Date().getTime(); 

                         // Find the distance between now and the count down date
                         var distance = countDownDate - now;
                       
                         // Time calculations for days, hours, minutes and seconds
                         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                       
                         // Display the result in the element with id="demo"
                         if (seconds<10) {
                             banner_content.innerText = "RED ALERT  "+minutes + ":0" + seconds;
                         } else {
                             banner_content.innerText = "RED ALERT  "+minutes + ":" + seconds;
                         }
                         // If the count down is finished, write some text
                         if (distance < 0) {
                           banner.style.display = 'none';
                           clearInterval(x);
                           //banner_content.innerText = "RED ALERT  0:00";

                         }
                       }, 1000);

                       if (!view_port.classList.contains('red-alert')){
                           red_alert()
                       }
                    } else if (response.data.type=='yellow'){
                       banner.style.backgroundColor = "#ebc034"
                       banner_content.innerText = "YELLOW ALERT"
                    } else {
                       banner.style.backgroundColor = "#005ccc"
                       banner_content.innerText = "ALERT"
                    }
                    setTimeout(getPenalty, response.data.remaining*1000);
                }
               // setTimeout(ping, 5000);
                //$timeout(ping, 1000);
            },
            function(data) {

            });
        } 
    setTimeout(getPenalty,2000)


    var challenge_endpoint = API_ROOT + 'challenges/player/?format=json';

    $http.get(challenge_endpoint).then(
        function(response) {
            $scope.challenges = response.data.results;
        },
        function(data) {});

    var completed_challenge_endpoint = API_ROOT + 'challenges/solved?format=json';

    $http.get(completed_challenge_endpoint).then(
        function(response) {
            $scope.completed_challenges = response.data.results;
        },
        function(data) {});


    var reward_endpoint = API_ROOT + 'rewards/?format=json';

    $http.get(reward_endpoint).then(
        function(response) {
            $scope.rewards = response.data.results;
        },
        function(data) {});


    var award_endpoint = API_ROOT + 'awards/?format=json';
    
    $scope.getAwards = function() {
        $http.get(award_endpoint).then(
            function(response) {
                // FIXME: should not have duplicates
                var awards = new Object();
                var results = response.data.results;
                var global_verified = true;
                var local_verified = new Object;

                for (i = 0; i < results.length; i++) {
                    awards[results[i].reward.id] = results[i]
                    local_verified[results[i].reward.id] = results[i].verified
                }
                for (const i in local_verified) {
                    if(!local_verified[i]){
                        global_verified = false
                    }
                }
                $scope.awards = awards;
                $scope.local_verified = local_verified;
                $scope.global_verified = global_verified;

            },
            function(data) {}
        );
    }
    $scope.getAwards()

    $scope.showElement = function(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
        } else {
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-theme-d1", "");
        }
    }
    $scope.verifyAwards = function(id) {
        var award_instance = API_ROOT + 'awards/'+id+'/?format=json';
        data = {
            'verified': true
        }

        $http.put(award_instance, data).then(
            function(response) {
                // FIXME: should not have duplicates
                $scope.getAwards()
            },
            function(data) {
            }
        );
    }
   
    $scope.verifyElement = function(id) {
        var x = document.getElementById(id);
        var number = id.split('_')[1];
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
        } else {
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-theme-d1", "");
        }
        $scope.verifyAwards(number) 
    }


    $scope.submitAnswer = function(id) {
        var answer_endpoint = API_ROOT + 'challenges/' + id.toString() + '/solve/?format=json'
        var a = document.getElementById('answer_' + id.toString());
        var challenge_title = document.getElementById("challenge_title_"+id.toString()) 
        var solution_banner = document.getElementById('solution-banner');
        var solution_banner_content = document.getElementById('solution-banner-content');

        data = {
            'answer': a.value
        }

        $http.post(answer_endpoint, data).then(
            function(response) {

                var view_port = document.getElementById("bracket_32");

                if (response.data.state == 'solved') {
                    solution_banner.style.display="block";
                    solution_banner_content.innerText = "CORRECT"
                    a.disabled = true
                    challenge_title.dataset.label = "Challenge "+ id.toString() + " (Complete)"
                    $scope.getAwards()
                    setTimeout(function(){solution_banner.style.display="none"}, 3000);

                } else {
                    getPenalty()
                }
            },
            function(data) {
            }
        );

//        setTimeout(function() {
//            var banner = document.getElementById("banner");
//            banner.style.display = 'none';
//        }, 7000); // <-- time in milliseconds

    }



});

// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
