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
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
};
var API_ROOT = "/api/"
var app = angular.module("scavenger_hunt", []);

function join_url_params(url, params) {
    return url + "?" + params
}
app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //  $httpProvider.interceptors.push('testInterceptor');
}).controller("scavenger_hunt_Ctrl", function($scope, $http) {
    debugger;
    //    var temp_api_root = "http://127.0.0.1:8000/api/scavenger_hunt/";
    //    var API_ROOT = temp_api_root;
    API_ROOT = '/api/'
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
            debugger;
            $scope.logged_in = Boolean(response.data.count);
            $scope.logged_out = !$scope.logged_in;
            $scope.is_staff = response.data.results[0].user.is_staff;
        },
        function(data) {

        });

    var penalty_endpoint = API_ROOT + 'penalties/current/?format=json';
    function ping(){
        $http.get(penalty_endpoint).then(
            function (response) {
                debugger
                if (Object.keys(response.data).length !== 0) {
                debugger
                    banner.style.display = 'block';
                } else {
                    banner.style.display = 'none';
                }
                setTimeout(ping, 1000);
                //$timeout(ping, 1000);
            },
            function(data) {

            });
        } 
    ping()


    var challenge_endpoint = API_ROOT + 'challenges/unsolved/?format=json';

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

    $http.get(award_endpoint).then(
        function(response) {
            $scope.awards = response.data.results;
        },
        function(data) {});


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



    $scope.submitAnswer = function(id) {
        debugger;
        var answer_endpoint = API_ROOT + 'challenges/' + id.toString() + '/solve/?format=json'

        var a = document.getElementById('answer_' + id.toString());

        data = {
            'answer': a.value
        }
        $http.post(answer_endpoint, data).then(
            function(response) {
                debugger;
                var banner = document.getElementById("banner");
                var banner_content = document.getElementById("banner-content");

                var view_port = document.getElementById("bracket_32");
                banner_content.innerText = response.data.msg;
                banner.style.display = 'block';

                if (response.data.state == 'penalty') {
                    if (response.data.penalty == 'general') {
                        debugger;
                        if (view_port.classList.contains('red-alert')) {
                            red_alert()
                        }
                    } else if (response.data.penalty == 'yellow') {
                        debugger;
                        if (view_port.classList.contains('red-alert')) {
                            red_alert()
                        }
                    } else if (response.data.penalty == 'red') {
                        debugger;
                        if (!view_port.classList.contains('red-alert')) {
                            red_alert()
                        }
                    }
                } else if (response.data.state == 'solved') {
                    debugger;
                    setTimeout(function() {
                        location.reload();
                    }, 10000); // <-- time in milliseconds
                }
            },
            function(data) {
                debugger;
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
