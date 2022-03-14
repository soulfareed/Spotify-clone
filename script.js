console.log("Welcome to spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songName'));

let songs = [
    {songName: "kabhitumhe.mp3", filePath: "./songs/1.mp3", coverPath: "./covers/cover.jpg"},
    {songName:"Meherma.mp3", filePath:"./songs/2.mp3", coverPath:"./covers/cover2.jpeg"},
    {songName: "Asal Me.mp3", filePath: "./songs/3", coverPath: "./covers/cover3.jpg"},
    {songName:"Shayad.mp3", filePath:"./songs/4.mp3", coverPath:"./covers/cover4.jpeg"},
    {songName: "Rabba Meher Kari.mp3", filePath: "./songs/5.mp3", coverPath: "./covers/cover5.jpg"},
    {songName:"Tere Nal.mp3", filePath:"./songs/6.mp3", coverPath:"./covers/cover6.jpeg"},
    {songName: "Ek Tarfa.mp3", filePath: "./songs/7.mp3", coverPath: "./covers/cover7.jpg"},
    {songName:"Kash Aisa Hota.mp3", filePath:"./songs/8.mp3", coverPath:"./covers/cover8.jpeg"},
]

// songItem.forEach((element, i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByTagName("songName")[0].innerText = songs[i].songName;
// })


//audioElement.play();

// Handle Play/pause click


masterPlay.addEventListener('click', ()=> { 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0
    }
})
// Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
   
   

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('prevous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})