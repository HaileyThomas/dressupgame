window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.l=1;
    state.m=1;
    state.n=1;
}

var state = {
    i : 0,
    j : 0,
    k : 0,
    l : 0,
    m : 0,
    n : 0,
};

function nexthats()
{
    console.log("inside function nexthats");
    console.log(state.i);
    var hats=document.getElementById("hats");
    if(state.i===0){
        hats.setAttribute("class","hats1");
        state.i++;
        console.log(state.i);
    }
    else
      if(state.i===1){
          hats.setAttribute("class","hats2");
          state.i++;
          console.log(state.i);
      }
    else
      if(state.i===2){
          hats.setAttribute("class","hats3");
          state.i++;
          console.log(state.i);
      }
    else
      if(state.i===3){
          hats.setAttribute("class","hats4");
          state.i++;
          console.log(state.i);
      }
    else
      if(state.i===4){
          hats.setAttribute("class","hats5");
          state.i=0;
      }
}

function nextglasses()
{
    console.log("inside function nextglasses");
    console.log(state.j);
    var glasses=document.getElementById("glasses");
    if(state.j===0){
        glasses.setAttribute("class","glasses1");
        state.j++;
        console.log(state.j);
    }
    else
      if(state.j===1){
          glasses.setAttribute("class","glasses2");
          state.j++;
          console.log(state.j);
      }   
    else
      if(state.j===2){
          glasses.setAttribute("class","glasses3");
          state.j++;
          console.log(state.j);
      }
    else
      if(state.j===3){
          glasses.setAttribute("class","glasses4");
          state.j++;
          console.log(state.j);
      }
    else
      if(state.j===4){
          glasses.setAttribute("class","glasses5");
          state.j=0;
      }
}

function nextnecks()
{
    console.log("inside function nextnecks");
    console.log(state.k);
    var necks=document.getElementById("necks");
    if(state.k===0){
        necks.setAttribute("class","necks1");
        state.k++;
        console.log(state.k);
    }
    else
      if(state.k===1){
          necks.setAttribute("class","necks2");
          state.k++;
          console.log(state.k);
      }
    else
      if(state.k===2){
          necks.setAttribute("class","necks3");
          state.k++;
          console.log(state.k);
      }
    else
      if(state.k===3){
          necks.setAttribute("class","necks4");
          state.k++;
          console.log(state.k);
      }
    else
      if(state.k===4){
          necks.setAttribute("class","necks5");
          state.k=0;
      }
}

function nextwrists()
{
    console.log("inside function nextwrists");
    console.log(state.l);
    var wrists=document.getElementById("wrists");

    if(state.l===0){
        wrists.setAttribute("class","wrists1");
        state.l++;
        console.log(state.l);
    }
    else
      if(state.l===1){
          wrists.setAttribute("class","wrists2");
          state.l++;
          console.log(state.l);
      }
    else
      if(state.l===2){
          wrists.setAttribute("class","wrists3");
          state.l++;
          console.log(state.l);
      }
    else
      if(state.l===3){
          wrists.setAttribute("class","wrists4");
          state.l++;
          console.log(state.l);
      }
    else
      if(state.l===4){
          wrists.setAttribute("class","wrists5");
          state.l=0;
      }
}

function nextwings()
{
    console.log("inside function nextwings");
    console.log(state.m);
    var wings=document.getElementById("wings");
    if(state.m===0){
        wings.setAttribute("class","wings1");
        state.m++;
        console.log(state.m);
    }
    else
      if(state.m===1){
          wings.setAttribute("class","wings2");
          state.m++;
          console.log(state.m);
      }
    else
      if(state.m===2){
          wings.setAttribute("class","wings3");
          state.m++;
          console.log(state.m);
      }
    else
      if(state.m===3){
          wings.setAttribute("class","wings4");
          state.m++;
          console.log(state.m);
      }
    else
      if(state.m===4){
          wings.setAttribute("class","wings5");
          state.m=0;
      }
}

function nextfriends()
{
    console.log("inside fuction nextfriends");
    console.log(state.n);
    var friends=document.getElementById("friends");
    if(state.n===0){
        friends.setAttribute("class","friends1");
        state.n++;
        console.log(state.n);
    }
    else
      if(state.n===1){
          friends.setAttribute("class","friends2");
          state.n++;
          console.log(state.n);
      }
    else
      if(state.n===2){
          friends.setAttribute("class","friends3");
          state.n++;
          console.log(state.n);
      }
    else
      if(state.n===3){
          friends.setAttribute("class","friends4");
          state.n++;
          console.log(state.n);
      }
    else
      if(state.n===4){
          friends.setAttribute("class","friends5");
          state.n=0;
      }
}