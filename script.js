const URL = "https://api.quotable.io/quotes/random";
let quote = document.querySelector(".quote");
let newBtn = document.querySelector(".newbtn");
let tweetBtn = document.querySelector(".tweet")
let authorName = document.querySelector(".author")

const getQuote = async()=>{
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    console.log(data[0]);
    quote.innerText = data[0].content;
    authorName.innerText = data[0].author;
}

const tweet = ()=>{
   window.open("https://twitter.com/intent/tweet?text="+`"` +quote.innerText+`"`+ "   \n ~" +  authorName.innerText);
}


newBtn.addEventListener("click",getQuote);
tweetBtn.addEventListener("click",tweet);

window.onload= getQuote;