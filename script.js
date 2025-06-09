let envelope = document.querySelector(".envelope") ;
let envelopeTop = document.querySelector(".top");
let letter = document.querySelector(".letter");
envelopeTop.classList.add("close");
function openEnvelope()
{
    envelopeTop.classList.remove("close");
    envelopeTop.classList.add("open");  
    pullOut();
}

function closeEnvelope()
{
    envelopeTop.classList.remove("open") ;
    envelopeTop.classList.add("close") ;
    pullIn();
}

function pullOut()
{
    envelopeTop.classList.add("opened");
    letter.classList.remove("putIn");
    letter.classList.add("pullOut");

}

function pullIn()
{
    letter.classList.remove("pullOut");
    letter.classList.add("putIn")
}
envelope.addEventListener('mouseover',openEnvelope);
envelope.addEventListener('mouseout' ,closeEnvelope);