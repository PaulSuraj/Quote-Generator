const quotes =[{
    quote:"Software comes from heaven when you have good hardware.",
    writer:" → Ken Olsen",
},


{
quote:"Experience is the name everyone gives to their mistakes. ",
writer:" →  Oscar Wilde"


},
{
quote:"Stay hungry, stay foolish.",
writer:" → steve jobs"
    
    
 },
 {
quote:"Programming is learned by writing programs. ",
writer:"→  Brian Kernighan"
        
        
 },   

{


quote:"Programming is the art of algorithm design and the craft of debugging errant code. ",
writer:"→  Ellen Ullman"
            
  },

{
quote:"You cannot believe in God until you believe in yourself.",
writer:" → Swami vivekananda"


},
{
quote:"Dream is not that which you see while sleeping it is something that does not let you sleep",
writer:"  → A.P.J Abdul kalam"
    
    
},
{
    quote:"I think there should be regulations on social media to the degree that it negatively affects the public good.",
    writer:" → Elon Musk"
    
    
 },

{
 quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
writer:"  → Martin Fowler"
        
        
},

{
 quote:"Confusion is part of programming.",
writer:" → Felienne Hermans"
            
            
},
{
    quote:"Everybody should learn to program a computer because it teaches you how to think.",
    writer:"  →  Steve Jobs",

},]

let btn=document.querySelector("#Qbtn");
let quote=document.querySelector(".quote");
let writer=document.querySelector(".writer");

btn.addEventListener("click",function(){
let random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random].quote;
writer.innerHTML = quotes[random].writer;
});
