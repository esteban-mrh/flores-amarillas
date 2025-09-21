// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Letras y tiempos exactos (en segundos) según el video oficial
var lyricsData = [
  { text: "It’s like you got superpowers", time: 15.0 },
  { text: "Turn my minutes into hours", time: 18.0 },
  { text: "You’ve got more than 20/20 babe", time: 22.0 },
  { text: "Made of glass the way you see through me", time: 26.0 },
  { text: "You know me better than I do", time: 30.0 },
  { text: "Can’t seem to keep nothing from you", time: 34.0 },
  { text: "How you touch my soul from the outside", time: 38.0 },
  { text: "Permeate my ego and my pride", time: 42.0 },
  { text: "I wanna love me (ooh)", time: 46.0 },
  { text: "The way that you love me (ooh)", time: 49.0 },
  { text: "For all of my pretty", time: 52.0 },
  { text: "And all of my ugly too", time: 55.0 },
  { text: "I’d love to see me from your point of view", time: 58.0 },
  { text: "I wanna trust me", time: 63.0 },
  { text: "The way you trust me", time: 66.0 },
  { text: "‘Cause nobody ever", time: 69.0 },
  { text: "Loved me like you do", time: 72.0 },
  { text: "I’d love to see me from your point of view", time: 75.0 },
  { text: "I’m getting used to receiving", time: 78.0 },
  { text: "Still getting good at not leaving", time: 82.0 },
  { text: "I’mma love you even though I’m scared", time: 86.0 },
  { text: "Learning to be grateful for myself", time: 90.0 },
  { text: "You love my lips ‘cause they say the", time: 94.0 },
  { text: "Things we’ve always been afraid of", time: 98.0 },
  { text: "I can feel it starting to subside", time: 102.0 },
  { text: "Learning to believe in what is mine", time: 106.0 },
  { text: "I wanna love me (ooh)", time: 110.0 },
  { text: "The way that you love me (ooh)", time: 114.0 },
  { text: "For all of my pretty", time: 118.0 },
  { text: "And all of my ugly too", time: 122.0 },
  { text: "I’d love to see me from your point of view", time: 126.0 },
  { text: "I wanna trust me", time: 130.0 },
  { text: "The way you trust me", time: 134.0 },
  { text: "‘Cause nobody ever", time: 138.0 },
  { text: "Loved me like you do", time: 142.0 },
  { text: "I’d love to see me from your point of view", time: 146.0 },
  { text: "I couldn’t believe it or see it for myself", time: 150.0 },
  { text: "Know I be impatient but now I’m out here falling falling", time: 154.0 },
  { text: "Frozen slowly thawing, got me right", time: 158.0 },
  { text: "I won’t keep you waiting, waiting", time: 162.0 },
  { text: "All my baggage fading safely", time: 166.0 },
  { text: "And if my eyes deceive me,", time: 170.0 },
  { text: "Won’t let them stray too far", time: 174.0 },
  { text: "I wanna love me (ooh)", time: 178.0 },
  { text: "The way that you love me (ooh)", time: 182.0 },
  { text: "For all of my pretty", time: 186.0 },
  { text: "And all of my ugly too", time: 190.0 },
  { text: "I’d love to see me from your point of view", time: 194.0 },
  { text: "I wanna trust me", time: 198.0 },
  { text: "The way you trust me", time: 202.0 },
  { text: "‘Cause nobody ever", time: 206.0 },
  { text: "Loved me like you do", time: 210.0 },
  { text: "I’d love to see me from your point of view", time: 214.0 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(line => time >= line.time && time < line.time + 4); // rango más corto

  if (currentLine) {
    // Fade in rápido usando tiempo real
    var opacity = Math.min(1, (time - currentLine.time) / 0.3);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Más preciso que setInterval: usa el evento timeupdate
audio.addEventListener("timeupdate", updateLyrics);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
