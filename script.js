var s = skrollr.init();
var contactdata=[
  // {
  //   media: "instagram",
  //   mediaurl: "https://www.instagram.com/clplayground/"
  // },
  {
    media:"linkedin",
    mediaurl: "https://www.linkedin.com/in/chi-lam-yeung-1b48b313b/"
  },
  {
    media:"medium",
    mediaurl: "https://medium.com/@clyeung0714"
  },
  {
    media: "codepen",
    mediaurl: "https://codepen.io/clyeungae"
  },
  {
    media: "openProcessing",
    mediaurl: "https://www.openprocessing.org/user/233032#sketches"
  }
];
var educationdata = [
  {
    level: "Bachelor of Mathetmatics",
    period: "2016 - now",
    institution: "Hong Kong University of Science and Technology",
    decription: "I have chosen computer science track in the major of Mathematics, so I have studied the knowledge of both side. In the first half of my year 4 study, I continued my study in National University of Singapare as an exchange student."
  },
  {
    level: "Secondary School",
    period: "2010-2016",
    institution: "S.K.H. Bishop Mok Sau Tseng Secondary School",
    decription: "I compeleted my high school with Physics, Chemistry, Biology and Mathematics(Module 2) as my major subject. During my life in secondary school, I have been a vice-head prefect, member of basketball team and athletes team."
  }
];
var experiencedata = [
  {
    post: "IT Intern",
    period: "2018-2019",
    company: "UniCredit Bank AG",
    decription: "Cooprating with a group of 4 people to troubleshooting problem related to daily software, maintaining servers and workstations."
  },
  {
    post: "Retail Analyst Intern",
    period: "2018",
    company: "Branded Lifestyle Shanghai Limited",
    decription: "Assigning software developemnt for internal business usage. "
  },
  {
    post: "HR Intern",
    period: "2017",
    company: "OCBC Wing Hang Limited",
    decription: "Handling sensitive document and liaising with other department to hold event for the staff"
  }
];
var skilldata =["html","css","javascript","vue.js", "java","c++","python"];

var vmfooter = new Vue({
  el: "#contacts",
  data: {
    contacts: contactdata
  }
});
var vm = new Vue({
  el: "#main",
  data: {
    educations: educationdata,
    experiences: experiencedata,
    skills: skilldata
  }
});


$(window).scroll(function(e){
  if($(window).scrollTop() <= 0)
    $(".explore, .navbar").addClass("at_top");
  else
    $(".explore, .navbar").removeClass("at_top");
});

$(document).on('click', '.nav-link', function(event){
  event.preventDefault();
  var target = $(this).attr("href");
  $('html, body').animate({
    scrollTop:$(target).offset().top
  },500);
});

var snowdata = [];

function generateRandomSnow(){
  snowdata.push({
    radius: Math.floor(Math.random() * 15)+5+"px",
  top: Math.floor(Math.random() * 200)-400+"px",
    left: Math.floor(Math.random() * $(window).width())+"px",
    speed: Math.floor(Math.random() * 3)
  });
}
  
var vmsnow = new Vue({
  el:"#header_index",
  data: {
    snows: snowdata
  }
});

setInterval(function(){
  for(var i=0; i<100;i++){
    generateRandomSnow();
  }
}, 7000);

setInterval(function(){
  snowdata.splice(0, snowdata.length);
}, 30000);