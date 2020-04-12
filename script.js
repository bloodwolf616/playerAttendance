//starting variables 
const playerList = document.getElementById('playerList');
const output = document.createElement('div');
output.className = 'player-container'





/*using javascript class syntax to create and manage numerous objects at the same time.
 the Class' first letter has to be upper case to differenciate from functions and variables*/
class Player {
    //creates properties of the object we can plug in
    constructor(name,age,online=false) {
        this.name = name;
        this.age = age;
        
    }
//creates a method we can use for these objects that do special tasks

    onlineStatus() {
        console.log(`${this.name} is ${this.online ? `online` : `offline`} at the moment`)
    }

    get online() {
        return this._online
    }
    set online(online) {
        this._online = online
    }
}

/*---------------------------------------------------------------
end of Class
------------------------------------------------------------------*/



//creating a new object from scratch using javascript class syntax. You can create objects very fast this way.
const player1 = new Player('Chris', '23');
const error = new Player('ERROR', 'ERROR');
const player2 = new Player('John', '34');
const player3 = new Player('Kelly', '18');
const player4 = new Player('Madison', '25');
const player5 = new Player('Constantine', '21');
const player6 = new Player('Elizabeth', '24');
const player7 = new Player('Marco', '28');
const player8 = new Player('Bill', '45');


//storing my objects in a array
const attendance = [player1, error, player2, player3, player5, player7, player6, player4, player8];





/*---------------------------------------------------------------
changing the values  of an player objects based on the time of day.
------------------------------------------------------------------*/

const today = new Date();
const hour = today.getHours();
const second = today.getSeconds();

//the online and offline times for player1-4
if  (hour > 10 && hour < 20) {
   player1._online = true;
   player2._online = true;
   player3._online = true;
   player4._online = true;
 }
 else {
   player1._online = false;
   player2._online = false;
   player3._online = false;
   player4._online = false;
 }

//the online and offline times for player6-8
 if  (hour > 18 && hour < 24) {
    player6._online = true;
    player7._online = true;
    player8._online = true;

  }
  else {
    player6._online = false;
    player7._online = false;
    player8._online = false;
  }



//the online and offline times for player5
  if  (hour > 3  && hour < 5) {
     player5._online = true;
   }
   else {
     player5._online = false;
   }

//error object that should switch between online and offline every 10 seconds
    if (second > 0 && second < 10) {
        if(error) {error._online = true;}}

    if (second > 10 && second < 20) {
        if(error) {error._online = false;}}

    if (second > 20 && second < 30) {
          if(error) {error._online = true;}}

    if (second > 30 && second < 40) {
          if(error) {error._online = false;}}

    if (second > 40 && second < 50) {
              if(error) {error._online = true;}}

    if (second > 50 && second < 60) {
              if(error) {error._online = false;}}




/*-------------------------------------------------------------------
Using a loop to create my player list by going through my attendance array. put the value of the objects into elements, attach them to an unordered list. 
----------------------------------------------------------------------*/



// Can style elements in the loop
for (let i = 0; i < attendance.length; i++) {

  var playerProfile = document.createElement('UL');
  playerProfile.className = 'flex-container';

  //creating 5 nodes that hold the players name, age, and onlnie status. Each node will be given a class so that they can be styled
    var node1 = document.createElement('strong');
    node1.innerHTML = '<strong>' + 'Name:' + '</strong>';
    node1.className = 'name';


    var node2 = document.createElement('LI');
    node2.innerHTML = '<li>' + attendance[i].name + '</li>';
    node2.className = 'profile-name';


    var node3 = document.createElement('strong');
    node3.innerHTML = '<strong>' + 'Age:' + '</strong>';
    node3.className = 'age';


    var node4 = document.createElement('LI');
    node4.innerHTML = '<li>' + attendance[i].age + '</li>';
    node4.className = 'profile-age';


    var node5 = document.createElement('LI');
    node5.innerHTML = '<li>' + attendance[i].online + '</li>';


    //If the value of the online is true it will have the textContent of 'online' and be styled one way. If not it have the texContent of 'offline' will be styled another way
    if (attendance[i].online  === true) {
        node5.textContent = 'Online';
        node5.className = 'style-online';
    }
    else {
        node5.textContent = 'Offline';
        node5.className = 'style-offline';
    }

    //attaching my elements to an unordered list
    playerProfile.appendChild(node1);
    playerProfile.appendChild(node2);
    playerProfile.appendChild(node3);
    playerProfile.appendChild(node4);
    playerProfile.appendChild(node5);
   //attaching my unordered list to a variable named output which is a div element
    output.appendChild(playerProfile);
}

//attaching my div element to the main element in index.html
playerList.appendChild(output);



//selecting the span button and the paragraph. then using jquery to make the paragraph disapppear when the user clicks on span element
const alertBox = $('.alert-box');
const $closeAlert = $('.close-alert').on('click', function() {
  alertBox.slideUp(2000);
})


