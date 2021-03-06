<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <!--<meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Color Pattern Generator | LCARS SDK</title>
    <!--<base href="/">-->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <!--<base href="/">-->
    <script type="text/javascript" src="lcarssdk/js/jquery.js"></script>
    <script type="text/javascript" src="lcarssdk/js/webviewinfo.js"></script>
    <script type="text/javascript" src="lcarssdk/js/arrive.js"></script>
    <script type="text/javascript" src="lcarssdk/js/lcarssdk.js"></script>
    <script type="text/javascript" src="lcarssdk/addons/scrollbutton/scrollbutton.js"></script>
    <script type="text/javascript" src="lcarssdk/addons/levelbar/levelbar.js"></script>
    <script type="text/javascript" src="lcarssdk/templates/bracket/bracket.js"></script>
    <script type="text/javascript" src="lcarssdk/templates/dialog/dialog.js"></script>
    <script type="text/javascript" src="lcarssdk/templates/framing/framing.js"></script>
    <script type="text/javascript" src="lcarssdk/templates/button/button.js"></script>
    <script type="text/javascript" src="particles/particles.js"></script>
    <script type="text/javascript" src="module.js"></script>
    <link rel="stylesheet" type="text/css" href="lcarssdk/css/lcarssdk.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/addons/scrollbutton/scrollbutton.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/addons/levelbar/levelbar.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/templates/bracket/bracket.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/templates/dialog/dialog.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/templates/framing/framing.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/templates/button/button.css">
    <link rel="stylesheet" type="text/css" href="lcarssdk/themes/theme_ussNotAffiliated.css">
    <link rel="stylesheet" type="text/css" href="module.css">
    <script type="text/javascript" src="animated_delta.js"></script> 4 
    <link rel="stylesheet" type="text/css" href="animated_delta.css">
    <script type="text/javascript" src="main.js"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css">
  </head>
  <body ontouchstart="" onload="main()" style="overflow:scroll">
    <div ng-app="scavenger_hunt" ng-controller="scavenger_hunt_Ctrl">
      <div class="wrapper sdk bracket typeA w3-container" ng-hide="logged_in" id="bracket_32" style="margin-top:40px;">
        <div class="wrapper content" id="profile_pic">
          <canvas class="particles-js-canvas-el"></canvas>
          <img src="delta.png" id="delta">
        </div>
        <div class="elbow top-left small {{colorGen()}} no-event horizontal" id="elbow_6">
          <div class="bar">
            <div class="block"></div>
          </div>
          <div class="bar" id="bar_7"></div>
        </div>
        <div class="elbow top-right small {{colorGen()}} no-event horizontal" id="elbow_8">
          <div class="bar">
            <div class="block"></div>
          </div>
          <div class="bar" id="bar_9"></div>
        </div>
        <div class="elbow bottom-left small {{colorGen()}} no-event horizontal" id="elbow_10">
          <div class="bar">
            <div class="block"></div>
          </div>
          <div class="bar" id="bar_11"></div>
        </div>
        <div class="elbow bottom-right small {{colorGen()}} no-event horizontal" id="elbow_12">
          <div class="bar">
            <div class="block"></div>
          </div>
          <div class="bar" id="bar_13"></div>
        </div>
        <div class="column flexv" id="column_14">
          <div class="bar flexcv {{colorGen()}}" id="bar_15"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_16">
            <div class="bar bg-white" id="bar_17"></div>
          </div>
          <div class="bar flexcv {{colorGen()}}" id="bar_18"></div>
        </div>
        <div class="column flexv" id="column_19">
          <div class="bar flexcv {{colorGen()}}" id="bar_20"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_21"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_22"></div>
        </div>
        <div class="column flexv" id="column_23">
          <div class="bar flexcv {{colorGen()}}" id="bar_24"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_25">
            <div class="bar bg-white" id="bar_26"></div>
          </div>
          <div class="bar flexcv {{colorGen()}}" id="bar_27"></div>
        </div>
        <div class="column flexv" id="column_28">
          <div class="bar flexcv {{colorGen()}}" id="bar_29"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_30"></div>
          <div class="bar flexcv {{colorGen()}}" id="bar_31"></div>
        </div>
      </div>
      <!-- Navbar -->
      <div class="w3-top ng-hide" ng-hide="logged_in">
        <div class="w3-bar w3-theme-d2 w3-left-align w3-large">
          <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
          <a href="#" class="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i class="fa fa-home w3-margin-right"></i>Logo</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i class="fa fa-globe"></i></a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i class="fa fa-user"></i></a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope"></i></a>
          <div class="w3-dropdown-hover w3-hide-small">
            <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>     
            <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">
              <a href="#" class="w3-bar-item w3-button">One new friend request</a>
              <a href="#" class="w3-bar-item w3-button">John Doe posted on your wall</a>
              <a href="#" class="w3-bar-item w3-button">Jane likes your post</a>
            </div>
          </div>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
          <img src="/w3images/avatar2.png" class="w3-circle" style="height:23px;width:23px" alt="Avatar">
          </a>
        </div>
      </div>
      <!-- Navbar on small screens -->
      <div id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a>
        <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a>
        <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a>
        <a href="#" class="w3-bar-item w3-button w3-padding-large">My Profile</a>
      </div>
      <!-- Page Container -->
      <div class="w3-container w3-content ng-hide" ng-hide="logged_in" style="max-width:1400px;margin-top:40px;">
        <!-- The Grid -->
        <div class="w3-row">
          <!-- Left Column -->
          <div class="w3-col m3">
            <!-- Profile -->
            <div class="w3-card w3-black">
              <div class="wrapper sdk bracket typeA w3-container" id="bracket_32">
                <div class="wrapper content" id="profile_pic">
                  <canvas class="particles-js-canvas-el"></canvas>
                  <img src="delta.png" id="delta">
                </div>
                <div class="elbow top-left small {{colorGen()}} no-event horizontal" id="elbow_6">
                  <div class="bar">
                    <div class="block"></div>
                  </div>
                  <div class="bar" id="bar_7"></div>
                </div>
                <div class="elbow top-right small {{colorGen()}} no-event horizontal" id="elbow_8">
                  <div class="bar">
                    <div class="block"></div>
                  </div>
                  <div class="bar" id="bar_9"></div>
                </div>
                <div class="elbow bottom-left small {{colorGen()}} no-event horizontal" id="elbow_10">
                  <div class="bar">
                    <div class="block"></div>
                  </div>
                  <div class="bar" id="bar_11"></div>
                </div>
                <div class="elbow bottom-right small {{colorGen()}} no-event horizontal" id="elbow_12">
                  <div class="bar">
                    <div class="block"></div>
                  </div>
                  <div class="bar" id="bar_13"></div>
                </div>
                <div class="column flexv" id="column_14">
                  <div class="bar flexcv {{colorGen()}}" id="bar_15"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_16">
                    <div class="bar bg-white" id="bar_17"></div>
                  </div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_18"></div>
                </div>
                <div class="column flexv" id="column_19">
                  <div class="bar flexcv {{colorGen()}}" id="bar_20"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_21"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_22"></div>
                </div>
                <div class="column flexv" id="column_23">
                  <div class="bar flexcv {{colorGen()}}" id="bar_24"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_25">
                    <div class="bar bg-white" id="bar_26"></div>
                  </div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_27"></div>
                </div>
                <div class="column flexv" id="column_28">
                  <div class="bar flexcv {{colorGen()}}" id="bar_29"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_30"></div>
                  <div class="bar flexcv {{colorGen()}}" id="bar_31"></div>
                </div>
              </div>
            </div>
            <br>
            <!-- Accordion -->
            <div class="w3-card w3-round">
              <div class="w3-white">
                <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
                <div id="Demo1" class="w3-hide w3-container">
                  <p>Some text..</p>
                </div>
                <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
                <div id="Demo2" class="w3-hide w3-container">
                  <p>Some other text..</p>
                </div>
                <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
                <div id="Demo3" class="w3-hide w3-container">
                  <div class="w3-row-padding">
                    <br>
                    <div class="w3-half">
                      <!-- <img src="/w3images/lights.jpg" style="width:100%" class="w3-margin-bottom">-->
                    </div>
                    <div class="w3-half">
                      <!-- <img src="/w3images/nature.jpg" style="width:100%" class="w3-margin-bottom">-->
                    </div>
                    <div class="w3-half">
                      <!--<img src="/w3images/mountains.jpg" style="width:100%" class="w3-margin-bottom">-->
                    </div>
                    <div class="w3-half">
                      <!--<img src="/w3images/forest.jpg" style="width:100%" class="w3-margin-bottom"> -->
                    </div>
                    <div class="w3-half">
                      <img src="/w3images/nature.jpg" style="width:100%" class="w3-margin-bottom">
                    </div>
                    <div class="w3-half">
                      <img src="/w3images/snow.jpg" style="width:100%" class="w3-margin-bottom">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <!-- Interests --> 
            <div class="w3-card w3-round w3-white w3-hide-small">
              <div class="w3-container">
                <p>Interests</p>
                <p>
                  <span class="w3-tag w3-small w3-theme-d5">News</span>
                  <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
                  <span class="w3-tag w3-small w3-theme-d3">Labels</span>
                  <span class="w3-tag w3-small w3-theme-d2">Games</span>
                  <span class="w3-tag w3-small w3-theme-d1">Friends</span>
                  <span class="w3-tag w3-small w3-theme">Games</span>
                  <span class="w3-tag w3-small w3-theme-l1">Friends</span>
                  <span class="w3-tag w3-small w3-theme-l2">Food</span>
                  <span class="w3-tag w3-small w3-theme-l3">Design</span>
                  <span class="w3-tag w3-small w3-theme-l4">Art</span>
                  <span class="w3-tag w3-small w3-theme-l5">Photos</span>
                </p>
              </div>
            </div>
            <br>
            <!-- Alert Box -->
            <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
              <span onclick="this.parentElement.style.display='none'" class="w3-button w3-theme-l3 w3-display-topright">
              <i class="fa fa-remove"></i>
              </span>
              <p><strong>Hey!</strong></p>
              <p>People are looking at your profile. Find out who.</p>
            </div>
            <!-- End Left Column -->
          </div>
          <!-- Middle Column -->
          <div class="w3-col m7">
            <div class="w3-row-padding">
              <div class="w3-col m12">
                <div class="w3-card w3-round w3-white">
                  <div class="w3-container w3-padding">
                    <h6 class="w3-opacity">Social Media template by w3.css</h6>
                    <p contenteditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
                    <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
                  </div>
                </div>
              </div>
            </div>
            <div class="w3-container w3-card w3-white w3-round w3-margin">
              <br>
              <img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
              <span class="w3-right w3-opacity">1 min</span>
              <h4>John Doe</h4>
              <br>
              <hr class="w3-clear">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div class="w3-row-padding" style="margin:0 -16px">
                <div class="w3-half">
                  <img src="/w3images/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
                </div>
                <div class="w3-half">
                  <img src="/w3images/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
                </div>
              </div>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
            </div>
            <div class="w3-container w3-card w3-white w3-round w3-margin">
              <br>
              <img src="/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
              <span class="w3-right w3-opacity">16 min</span>
              <h4>Jane Doe</h4>
              <br>
              <hr class="w3-clear">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
            </div>
            <div class="w3-container w3-card w3-white w3-round w3-margin">
              <br>
              <img src="/w3images/avatar6.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
              <span class="w3-right w3-opacity">32 min</span>
              <h4>Angie Jane</h4>
              <br>
              <hr class="w3-clear">
              <p>Have you seen this?</p>
              <img src="/w3images/nature.jpg" style="width:100%" class="w3-margin-bottom">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
            </div>
            <!-- End Middle Column -->
          </div>
          <!-- Right Column -->
          <div class="w3-col m2">
            <div class="w3-card w3-round w3-white w3-center">
              <div class="w3-container">
                <p>Upcoming Events:</p>
                <img src="/w3images/forest.jpg" alt="Forest" style="width:100%;">
                <p><strong>Holiday</strong></p>
                <p>Friday 15:00</p>
                <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
              </div>
            </div>
            <br>
            <div class="w3-card w3-round w3-white w3-center">
              <div class="w3-container">
                <p>Friend Request</p>
                <img src="/w3images/avatar6.png" alt="Avatar" style="width:50%"><br>
                <span>Jane Doe</span>
                <div class="w3-row w3-opacity">
                  <div class="w3-half">
                    <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
                  </div>
                  <div class="w3-half">
                    <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <div class="w3-card w3-round w3-white w3-padding-16 w3-center">
              <p>ADS</p>
            </div>
            <br>
            <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
              <p><i class="fa fa-bug w3-xxlarge"></i></p>
            </div>
            <!-- End Right Column -->
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Page Container -->
      </div>
      <br>
      <!-- Footer -->
      <footer class="w3-container w3-theme-d3 w3-padding-16 ng-hide" ng-hide="logged_in">
        <h5>Footer</h5>
      </footer>
      <footer class="w3-container w3-theme-d5 ng-hide" ng-hide="logged_in">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    </div>
    <script>
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
    </script>
    <script>
      var API_DOMAIN = "http://127.0.0.1:8000/";
      var API_ROOT = new URL('api/scavenger_hunt/', API_DOMAIN);
      var app = angular.module("scavenger_hunt", []);
      function join_url_params(url, params){ return url +"?"+ params }
      app.controller("scavenger_hunt_Ctrl", function($scope, $http) {
       
          $scope.uiColors = [
              "bg-blue-1",
              "bg-blue-2",
              "bg-blue-3",
              "bg-blue-4",
              "bg-green-1",
              "bg-green-2",
              "bg-green-3",
              "bg-green-4"
          ];
          $scope.colorGen = function(){
                return LCARS.colorGen($scope.uiColors)
          };
          debugger;
          
          url = new URL('avatar/',API_ROOT);
          const params = new URLSearchParams([["format", "json"]]);;
          url = join_url_params(url.toString(),params.toString());
          $http.get(url).then(
          function(response) {
              debugger;
              $scope.logged_in = Boolean(response.data.count);
          },
          function(data) {
              debugger; 
              // Handle error here
          })
      });
      
    </script>
  </body>
</html>
