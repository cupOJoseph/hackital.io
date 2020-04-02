var Quotes = [
	"We're getting the band back together.",
  "Is this thing on?",
  "Super hot! Super hot!",
  "A hackathon in the capital",
  "A hackathon in the capital",
  "A hackathon in the capital",
  "A hackathon in the capital",
  "A hackathon in the capital",
  "The future belongs to the Builders",
  "The future is now, thanks to science",
  "We miss Osebo",
  "Its the final count down, do dit do doooooo",
  "Mince Raft",
  "Let's have some fun",
  "Invite your friends",
  "We miss Zoe"
];

function displayQuote(){

    var num = Math.floor(Math.random() * 16);

    document.getElementById("quote").innerHTML = Quotes[num];

}

