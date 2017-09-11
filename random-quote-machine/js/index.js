function changeImage() {
	switch(new Date().getDay()) {
		case 0:
  document.getElementById("dailycode").src="http://cdn.quotesgram.com/img/48/5/1503676473-blog-hero-banner-quote.jpg";
		break;
		
		case 1:		document.getElementById("dailycode").src="http://cdn.quotesgram.com/img/69/70/918305495-Banner_Quote_DREAMS_1600.jpg";
		break;
		
		case 2:
document.getElementById("dailycode").src="http://quotesta.com/wp-content/uploads/Business-Success-Quotes-Banner-2.jpg";
		break;
		
		case 3:
document.getElementById("dailycode").src="http://1.bp.blogspot.com/-GGO2Rv4Ljzo/UVFv4e6jkZI/AAAAAAAAF80/y9QWiGXHSXo/s1600/watermarked_cover.jpg";
		break;
		
		case 4:
document.getElementById("dailycode").src="http://cdn.quotesgram.com/img/68/73/1467967632-986-quotes-for-banners.jpg";
		break;
		
		case 5:
document.getElementById("dailycode").src="http://www.f-covers.com/cover/martin-luther-king-quote-facebook-cover-timeline-banner-for-fb.jpg";
		break;
		
		case 6:
		document.getElementById("dailycode").src = "https://i.pinimg.com/originals/a3/79/7d/a3797dc80e44b27d2e06235dded29487.jpg";
		break;
	}
}

function generateQuote() {
  document.getElementById("tweet").style.visibility = "visible";
  switch(Math.floor((Math.random() * 10) + 1)) {
     case 1:
      document.getElementById("quotes").innerHTML = "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!";
      document.getElementById("cite").innerHTML = "-Dita Von Teese";
      break;
      case 2:
      document.getElementById("quotes").innerHTML = "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it'll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.";
      document.getElementById("cite").innerHTML = "-Kevin Hart";
      break;
      case 3:
      document.getElementById("quotes").innerHTML = "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.";
      document.getElementById("cite").innerHTML = "-Helen Keller";
      break;
      case 4:
      document.getElementById("quotes").innerHTML = "Leadership is not about a title or a designation. It's about impact, influence and inspiration. Impact involves getting results, influence is about spreading the passion you have for your work, and you have to inspire team-mates and customers.";
      document.getElementById("cite").innerHTML = "-Robin S. Sharma";
      break;
      case 5:
      document.getElementById("quotes").innerHTML = "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.";
      document.getElementById("cite").innerHTML = "-Colin Powell";
      break;
      case 6:
      document.getElementById("quotes").innerHTML = "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.";
      document.getElementById("cite").innerHTML = "-Nelson Mandela";
      break;
      case 7:
      document.getElementById("quotes").innerHTML = "Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.";
      document.getElementById("cite").innerHTML = "-Don Miguel Ruiz";
      break;
      case 8:
      document.getElementById("quotes").innerHTML = "I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have. I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.";
      document.getElementById("cite").innerHTML = "-Abraham Lincoln";
      break;
      case 9:
      document.getElementById("quotes").innerHTML = "At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren't where you want to be, you will always be a failure.";
      document.getElementById("cite").innerHTML = "-Erin Cummings";
      break;
      case 10:
      document.getElementById("quotes").innerHTML = "Desire is the key to motivation, but it's determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.";
      document.getElementById("cite").innerHTML = "-Mario Andretti";
      break;
  }
}

function tweet() {
  var randomQuote = document.getElementById("quotes").innerHTML + " cited from -"+document.getElementById("cite").innerHTML + " twitted from Random Quote Machine coded by Kok Wah. See the page Here: https://codepen.io/dragdest4/full/GMKgyb/";
  window.open("https://twitter.com/share?text="+randomQuote);
}