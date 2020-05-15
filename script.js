var minutes = "10";
var seconds = "00";
var interval = null;
var timerGoing = false;
var alarm = new Audio("Design/alarm.mp3");
var metro = new Audio("Design/metro.mp3");
var bpm = "";
var soloBpm = "";
var metroSpeed = "";
var metronome = null;
var extrasOn = false;
var mainMenu = document.querySelector("#main-menu").innerHTML;
var pitchRecLevel = 0;
var pitchRecPoints = 0;
var pitchRecStarted = false;
var interval = null;
var pitchRecDifficulty = "easy";
var currentNote = "";
var noteName = {};
var pitchRecWrong = false;
var noteRecStarted = false;
var noteRecPoints = 0;
var noteRecLevel = 0;
var noteRecWrong = false;
var note = {
    c4key: new Audio("Design/Pitch-recognition/Audio/key-c4.m4a"),
    d4key: new Audio("Design/Pitch-recognition/Audio/key-d4.m4a"),
    e4key: new Audio("Design/Pitch-recognition/Audio/key-e4.m4a"),
    f4key: new Audio("Design/Pitch-recognition/Audio/key-f4.m4a"),
    g4key: new Audio("Design/Pitch-recognition/Audio/key-g4.m4a"),
    a4key: new Audio("Design/Pitch-recognition/Audio/key-a4.m4a"),
    b4key: new Audio("Design/Pitch-recognition/Audio/key-b4.m4a"),
    ab4key: new Audio("Design/Pitch-recognition/Audio/key-ab4.m4a"),
    bb4key: new Audio("Design/Pitch-recognition/Audio/key-bb4.m4a"),
    db4key: new Audio("Design/Pitch-recognition/Audio/key-db4.m4a"),
    eb4key: new Audio("Design/Pitch-recognition/Audio/key-eb4.m4a"),
    gb4key: new Audio("Design/Pitch-recognition/Audio/key-gb4.m4a"),
    a1: new Audio("Design/Pitch-recognition/Audio/a1.m4a"),
    a2: new Audio("Design/Pitch-recognition/Audio/a2.m4a"),
    a3: new Audio("Design/Pitch-recognition/Audio/a3.m4a"),
    a4: new Audio("Design/Pitch-recognition/Audio/a4.m4a"),
    a5: new Audio("Design/Pitch-recognition/Audio/a5.m4a"),
    a6: new Audio("Design/Pitch-recognition/Audio/a6.m4a"),
    b1: new Audio("Design/Pitch-recognition/Audio/b1.m4a"),
    b2: new Audio("Design/Pitch-recognition/Audio/b2.m4a"),
    b3: new Audio("Design/Pitch-recognition/Audio/b3.m4a"),
    b4: new Audio("Design/Pitch-recognition/Audio/b4.m4a"),
    b5: new Audio("Design/Pitch-recognition/Audio/b5.m4a"),
    b6: new Audio("Design/Pitch-recognition/Audio/b6.m4a"),
    c1: new Audio("Design/Pitch-recognition/Audio/c1.m4a"),
    c2: new Audio("Design/Pitch-recognition/Audio/c2.m4a"),
    c3: new Audio("Design/Pitch-recognition/Audio/c3.m4a"),
    c4: new Audio("Design/Pitch-recognition/Audio/c4.m4a"),
    c5: new Audio("Design/Pitch-recognition/Audio/c5.m4a"),
    c6: new Audio("Design/Pitch-recognition/Audio/c6.m4a"),
    d1: new Audio("Design/Pitch-recognition/Audio/d1.m4a"),
    d2: new Audio("Design/Pitch-recognition/Audio/d2.m4a"),
    d3: new Audio("Design/Pitch-recognition/Audio/d3.m4a"),
    d4: new Audio("Design/Pitch-recognition/Audio/d4.m4a"),
    d5: new Audio("Design/Pitch-recognition/Audio/d5.m4a"),
    d6: new Audio("Design/Pitch-recognition/Audio/d6.m4a"),
    e1: new Audio("Design/Pitch-recognition/Audio/e1.m4a"),
    e2: new Audio("Design/Pitch-recognition/Audio/e2.m4a"),
    e3: new Audio("Design/Pitch-recognition/Audio/e3.m4a"),
    e4: new Audio("Design/Pitch-recognition/Audio/e4.m4a"),
    e5: new Audio("Design/Pitch-recognition/Audio/e5.m4a"),
    e6: new Audio("Design/Pitch-recognition/Audio/e6.m4a"),
    f1: new Audio("Design/Pitch-recognition/Audio/f1.m4a"),
    f2: new Audio("Design/Pitch-recognition/Audio/f2.m4a"),
    f3: new Audio("Design/Pitch-recognition/Audio/f3.m4a"),
    f4: new Audio("Design/Pitch-recognition/Audio/f4.m4a"),
    f5: new Audio("Design/Pitch-recognition/Audio/f5.m4a"),
    f6: new Audio("Design/Pitch-recognition/Audio/f6.m4a"),
    g1: new Audio("Design/Pitch-recognition/Audio/g1.m4a"),
    g2: new Audio("Design/Pitch-recognition/Audio/g2.m4a"),
    g3: new Audio("Design/Pitch-recognition/Audio/g3.m4a"),
    g4: new Audio("Design/Pitch-recognition/Audio/g4.m4a"),
    g5: new Audio("Design/Pitch-recognition/Audio/g5.m4a"),
    g6: new Audio("Design/Pitch-recognition/Audio/g6.m4a"),
    ab1: new Audio("Design/Pitch-recognition/Audio/ab1.m4a"),
    ab2: new Audio("Design/Pitch-recognition/Audio/ab2.m4a"),
    ab3: new Audio("Design/Pitch-recognition/Audio/ab3.m4a"),
    ab4: new Audio("Design/Pitch-recognition/Audio/ab4.m4a"),
    ab5: new Audio("Design/Pitch-recognition/Audio/ab5.m4a"),
    ab6: new Audio("Design/Pitch-recognition/Audio/ab6.m4a"),
    bb1: new Audio("Design/Pitch-recognition/Audio/bb1.m4a"),
    bb2: new Audio("Design/Pitch-recognition/Audio/bb2.m4a"),
    bb3: new Audio("Design/Pitch-recognition/Audio/bb3.m4a"),
    bb4: new Audio("Design/Pitch-recognition/Audio/bb4.m4a"),
    bb5: new Audio("Design/Pitch-recognition/Audio/bb5.m4a"),
    bb6: new Audio("Design/Pitch-recognition/Audio/bb6.m4a"),
    db1: new Audio("Design/Pitch-recognition/Audio/db1.m4a"),
    db2: new Audio("Design/Pitch-recognition/Audio/db2.m4a"),
    db3: new Audio("Design/Pitch-recognition/Audio/db3.m4a"),
    db4: new Audio("Design/Pitch-recognition/Audio/db4.m4a"),
    db5: new Audio("Design/Pitch-recognition/Audio/db5.m4a"),
    db6: new Audio("Design/Pitch-recognition/Audio/db6.m4a"),
    eb1: new Audio("Design/Pitch-recognition/Audio/eb1.m4a"),
    eb2: new Audio("Design/Pitch-recognition/Audio/eb2.m4a"),
    eb3: new Audio("Design/Pitch-recognition/Audio/eb3.m4a"),
    eb4: new Audio("Design/Pitch-recognition/Audio/eb4.m4a"),
    eb5: new Audio("Design/Pitch-recognition/Audio/eb5.m4a"),
    eb6: new Audio("Design/Pitch-recognition/Audio/eb6.m4a"),
    gb1: new Audio("Design/Pitch-recognition/Audio/gb1.m4a"),
    gb2: new Audio("Design/Pitch-recognition/Audio/gb2.m4a"),
    gb3: new Audio("Design/Pitch-recognition/Audio/gb3.m4a"),
    gb4: new Audio("Design/Pitch-recognition/Audio/gb4.m4a"),
    gb5: new Audio("Design/Pitch-recognition/Audio/gb5.m4a"),
    gb6: new Audio("Design/Pitch-recognition/Audio/gb6.m4a")
};
var toolbarOpened = false;
var toggled = false;
var timeout;

document.addEventListener("keydown", function(e) {
    if (e.key == "Escape" && document.querySelector("#open-screen").style.display === "none") {
        back();
    }
});
alarm.loop = true;
//goes to main menu from open screen
function start() {
    document.querySelector("#open-screen").style.display = "none";
    document.querySelector("#main-menu").style.display = "block";
}
//buttons to go to the skill screens
function alternate() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="alternate-picking"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Alternate Picking</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options">            <button class="skill-option-buttons alternate-syn-button">SYN\'s Etude</button>            <button class="skill-option-buttons alternate-major-button">Major Scales</button>            <button class="skill-option-buttons alternate-minor-button">Minor Scales</button>            <button class="skill-option-buttons alternate-modes-button">Modes</button>            <div class="metronome">                <button class="metro-button">-</button>                <input type="number" class="bpm" name="bpm" value="100">                <button class="metro-button">+</button><br>                <button class="metro-play"></button>                <button class="metro-pause"></button>            </div>        </div>             <div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1>Choose A Source</div>            <div class="inner-display alternate-syn"><h1 class="syn-title">Alternate Picking I</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-i.96/"><img class="tab-images" src="Design/syn/alternate1.png"></a><h1 class="syn-title">Alternate Picking II</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-ii.97/"><img class="tab-images" src="Design/syn/alternate2.png"></a><h1 class="syn-title">Alternate Picking III</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-iii.98/"><img class="tab-images" src="Design/syn/alternate3.png"></a><h1 class="syn-title">Alternate Picking IV</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-iv.99/"><img class="tab-images" src="Design/syn/alternate4.png"></a><h1 class="syn-title">Alternate Picking V</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-v.100/"><img class="tab-images" src="Design/syn/alternate5.png"></a><h1 class="syn-title">Alternate Picking VI</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-vi.101/"><img class="tab-images" src="Design/syn/alternate6.png"></a><h1 class="syn-title">Alternate Picking VII</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-vii.102/"><img class="tab-images" src="Design/syn/alternate7.png"></a><h1 class="syn-title">Alternate Picking VIII</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-viii.103/"><img class="tab-images" src="Design/syn/alternate8.png"></a><h1 class="syn-title">Alternate Picking IX</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-ix.104/"><img class="tab-images" src="Design/syn/alternate9.png"></a><h1 class="syn-title">Alternate Picking X</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/alternate-picking-x.105/"><img class="tab-images" src="Design/syn/alternate10.png"></a></div>            <div class="inner-display alternate-major">                <embed src="Design/scales/major-scale.pdf" width="100%" height="100%">            </div>             <div class="inner-display alternate-minor">                <embed src="Design/scales/minor-scale.pdf" width="100%" height="100%">            </div>            <div class="inner-display alternate-modes">                <img class="tab-images" src="Design/scales/modes1.png"><br>                <img class="tab-images" src="Design/scales/modes2.png">            </div>        </div>    </div>';
    minutes = "10";
    document.querySelectorAll(".minutes")[0].innerHTML = minutes;
    updateListener();
    document.querySelector(".source").style.display = "block";
    document.querySelector(".alternate-syn").style.display = "none";
    document.querySelector(".alternate-major").style.display = "none";
    document.querySelector(".alternate-minor").style.display = "none";
    document.querySelector(".alternate-modes").style.display = "none"; 

    document.querySelector(".alternate-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".alternate-syn").style.display = "block";
        document.querySelector(".alternate-major").style.display = "none";
        document.querySelector(".alternate-minor").style.display = "none";
        document.querySelector(".alternate-modes").style.display = "none";    
    });
    document.querySelector(".alternate-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".alternate-syn").style.display = "none";
        document.querySelector(".alternate-major").style.display = "block";
        document.querySelector(".alternate-minor").style.display = "none";
        document.querySelector(".alternate-modes").style.display = "none";    
    });
    document.querySelector(".alternate-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".alternate-syn").style.display = "none";
        document.querySelector(".alternate-major").style.display = "none";
        document.querySelector(".alternate-minor").style.display = "block";
        document.querySelector(".alternate-modes").style.display = "none";    
    });
    document.querySelector(".alternate-modes-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".alternate-syn").style.display = "none";
        document.querySelector(".alternate-major").style.display = "none";
        document.querySelector(".alternate-minor").style.display = "none";
        document.querySelector(".alternate-modes").style.display = "block";    
    });
}
function sweep() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="sweep-picking"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button">< Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Sweep Picking</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options"><button class="skill-option-buttons sweeping-syn-button">SYN\'s Etude</button><button class="skill-option-buttons sweeping-exist-button" onclick="changeRange()">EXIST</button>            <div class="metronome"><button class="metro-button">-</button><input type="number" class="bpm" name="bpm" value="100"><button class="metro-button">+</button><br><button class="metro-play"></button><button class="metro-pause"></button></div></div><div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Source</div><div class="inner-display sweeping-syn"><h1 class="syn-title">Sweep Picking I</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-i.126/"><img class="tab-images" src="Design/syn/sweeping1.png"></a><h1 class="syn-title">Sweep Picking II</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-ii.127/"><img class="tab-images" src="Design/syn/sweeping2.png"></a><h1 class="syn-title">Sweep Picking III</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-iii.128/"><img class="tab-images" src="Design/syn/sweeping3.png"></a><h1 class="syn-title">Sweep Picking IV</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-iv.129/"><img class="tab-images" src="Design/syn/sweeping4.png"></a><h1 class="syn-title">Sweep Picking V</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-v.130/"><img class="tab-images" src="Design/syn/sweeping5.png"></a><h1 class="syn-title">Sweep Picking VI</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-vi.131/"><img class="tab-images" src="Design/syn/sweeping6.png"></a><h1 class="syn-title">Sweep Picking VII</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-vii.132/"><img class="tab-images" src="Design/syn/sweeping7.png"></a><h1 class="syn-title">Sweep Picking VIII</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-viii.133/"><img class="tab-images" src="Design/syn/sweeping8.png"></a><h1 class="syn-title">Sweep Picking IX</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-ix.134/"><img class="tab-images" src="Design/syn/sweeping9.png"></a><h1 class="syn-title">Sweep Picking X</h1><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/sweep-picking-x.135/"><img class="tab-images" src="Design/syn/sweeping10.png"></a></div><div class="inner-display sweeping-exist"><h1 style="font-size: 5vw; margin: 0.5vw;">EXIST</h1><audio controls class="solo-audio"<source src="Design/exist/exist.mp3" type="audio/mpeg"></audio><div class="solo-speed"><button style="margin: 0;" class="metro-button" onclick="soloSpeedDown()">-</button><input type="number" min="60" max="190" name="bpm" class="solo-bpm" oninput="changeRange(); changeSoloSpeed()"><button style="margin: 0;" class="metro-button" onclick="soloSpeedUp()">+</button><br><br><input type="range" oninput="changeBpmNumber(); changeSoloSpeed()" name="bpm" min="60" max="190" value="190" class="solo-bpm-scrubber"><br><label for="bpm">BPM</label></div><h1 style="font-size: 5vw;">Tabs</h1><button class="tabs-button sweeping-exist-tabs-one">Guitar 1</button><button class="tabs-button sweeping-exist-tabs-two">Guitar 2</button><a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://www.songsterr.com/a/wsa/avenged-sevenfold-exist-tab-s432185t5"><button class="tabs-button">SongSterr</button></a><br><br><div class="guitar-1"><img class="tab-images" src="Design/exist/exist1-1.png"><img class="tab-images" src="Design/exist/exist1-2.png"><img class="tab-images" src="Design/exist/exist1-3.png"><img class="tab-images" src="Design/exist/exist1-4.png"><img class="tab-images" src="Design/exist/exist1-5.png"><img class="tab-images" src="Design/exist/exist1-6.png"><img class="tab-images" src="Design/exist/exist1-7.png"><img class="tab-images" src="Design/exist/exist1-8.png"><img class="tab-images" src="Design/exist/exist1-9.png"></div><div class="guitar-2"><img class="tab-images" src="Design/exist/exist2-1.png"><img class="tab-images" src="Design/exist/exist2-2.png"><img class="tab-images" src="Design/exist/exist2-3.png"><img class="tab-images" src="Design/exist/exist2-4.png"><img class="tab-images" src="Design/exist/exist2-5.png"><img class="tab-images" src="Design/exist/exist2-6.png"><img class="tab-images" src="Design/exist/exist2-7.png"><img class="tab-images" src="Design/exist/exist2-8.png"></div></div></div></div>';
    minutes = "10";
    document.querySelector(".minutes").innerHTML = minutes;
    updateListener();
    document.querySelector(".source").style.display = "block";
    document.querySelector(".sweeping-syn").style.display = "none";
    document.querySelector(".sweeping-exist").style.display = "none";
    document.querySelector(".sweeping-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".sweeping-syn").style.display = "block";
        document.querySelector(".sweeping-exist").style.display = "none";
    });
    document.querySelector(".sweeping-exist-button").addEventListener("click", function() {
        soloBpm = 190;
        document.querySelector(".source").style.display = "none";
        document.querySelector(".sweeping-syn").style.display = "none";
        document.querySelector(".sweeping-exist").style.display = "block";
    });

    document.querySelector(".sweeping-exist-tabs-one").addEventListener("click", function() {
        document.querySelector(".guitar-1").style.display = "block";
        document.querySelector(".guitar-2").style.display = "none";
    });
    document.querySelector(".sweeping-exist-tabs-two").addEventListener("click", function() {
        document.querySelector(".guitar-1").style.display = "none";
        document.querySelector(".guitar-2").style.display = "block";
    });
    document.querySelector(".solo-bpm").value = document.querySelector(".solo-bpm-scrubber").value;

}
function economy() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="economy-picking"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Economy Picking</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options"><button class="skill-option-buttons economy-syn-button">SYN\'s Etude</button><button class="skill-option-buttons economy-major-button">Major Scales</button><button class="skill-option-buttons economy-minor-button">Minor Scales</button><button class="skill-option-buttons economy-modes-button">Modes</button>            <div class="metronome"><button class="metro-button">-</button><input type="number" class="bpm" name="bpm" value="100"><button class="metro-button">+</button><br><button class="metro-play"></button><button class="metro-pause"></button></div></div><div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Source</div><div class="inner-display economy-syn">            <h1 class="syn-title">Economy Picking I</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-i.106/"> <img class="tab-images" src="Design/syn/economy1.png"> </a> <h1 class="syn-title">Economy Picking II</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-ii.107/"> <img class="tab-images" src="Design/syn/economy2.png"> </a> <h1 class="syn-title">Economy Picking III</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-iii.108/"> <img class="tab-images" src="Design/syn/economy3.png"> </a> <h1 class="syn-title">Economy Picking IV</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-iv.109/"> <img class="tab-images" src="Design/syn/economy4.png"> </a> <h1 class="syn-title">Economy Picking V</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-v.110/"> <img class="tab-images" src="Design/syn/economy5.png"> </a> <h1 class="syn-title">Economy Picking VI</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-vi.111/"> <img class="tab-images" src="Design/syn/economy6-1.png"><img class="tab-images" src="Design/syn/economy6-2.png"> </a> <h1 class="syn-title">Economy Picking VII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-vii.112/"> <img class="tab-images" src="Design/syn/economy7.png"> </a> <h1 class="syn-title">Economy Picking VIII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-viii.113/"> <img class="tab-images" src="Design/syn/economy8.png"> </a> <h1 class="syn-title">Economy Picking IX</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-ix.114/"> <img class="tab-images" src="Design/syn/economy9.png"> </a> <h1 class="syn-title">Economy Picking X</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/economy-picking-x.115/"> <img class="tab-images" src="Design/syn/economy10.png"> </a></div><div class="inner-display economy-major"><embed src="Design/scales/major-scale.pdf" width="100%" height="100%"></div><div class="inner-display economy-minor"><embed src="Design/scales/minor-scale.pdf" width="100%" height="100%"></div><div class="inner-display economy-modes"><img class="tab-images" src="Design/scales/modes1.png"><br><img class="tab-images" src="Design/scales/modes2.png"></div></div></dv>';
    updateListener();
    document.querySelector(".economy-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".economy-syn").style.display = "block";
        document.querySelector(".economy-major").style.display = "none";
        document.querySelector(".economy-minor").style.display = "none";
        document.querySelector(".economy-modes").style.display = "none";    
    });
    document.querySelector(".economy-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".economy-syn").style.display = "none";
        document.querySelector(".economy-major").style.display = "block";
        document.querySelector(".economy-minor").style.display = "none";
        document.querySelector(".economy-modes").style.display = "none";    
    });
    document.querySelector(".economy-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".economy-syn").style.display = "none";
        document.querySelector(".economy-major").style.display = "none";
        document.querySelector(".economy-minor").style.display = "block";
        document.querySelector(".economy-modes").style.display = "none";    
    });
    document.querySelector(".economy-modes-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".economy-syn").style.display = "none";
        document.querySelector(".economy-major").style.display = "none";
        document.querySelector(".economy-minor").style.display = "none";
        document.querySelector(".economy-modes").style.display = "block";    
    });
}
function tapping() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="tapping"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Tapping</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options"><button class="skill-option-buttons tapping-syn-button">SYN\'s Etude</button>            <div class="metronome"><button class="metro-button">-</button><input type="number" class="bpm" name="bpm" value="100"><button class="metro-button">+</button><br><button class="metro-play"></button><button class="metro-pause"></button></div></div><div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Source</div><div class="inner-display tapping-syn">            <h1 class="syn-title">Tapping I</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-i.136/"> <img class="tab-images" src="Design/syn/tapping1.png"> </a> <h1 class="syn-title">Tapping II</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-ii.137/"> <img class="tab-images" src="Design/syn/tapping2-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-ii.137/"> <img class="tab-images" src="Design/syn/tapping2-2.png"> </a> <h1 class="syn-title">Tapping III</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-iii.138/"> <img class="tab-images" src="Design/syn/tapping3-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-iii.138/"> <img class="tab-images" src="Design/syn/tapping3-2.png"> </a> <h1 class="syn-title">Tapping IV</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-iv.139/"> <img class="tab-images" src="Design/syn/tapping4.png"> </a> <h1 class="syn-title">Tapping V</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-v.140/"> <img class="tab-images" src="Design/syn/tapping5.png"> </a> <h1 class="syn-title">Tapping VI</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-vi.141/"> <img class="tab-images" src="Design/syn/tapping6.png"> </a> <h1 class="syn-title">Tapping VII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-vii.142/"> <img class="tab-images" src="Design/syn/tapping7-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-vii.142/"> <img class="tab-images" src="Design/syn/tapping7-2.png"> </a> <h1 class="syn-title">Tapping VIII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-viii.143/"> <img class="tab-images" src="Design/syn/tapping8-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-viii.143/"> <img class="tab-images" src="Design/syn/tapping8-2.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-viii.143/"> <img class="tab-images" src="Design/syn/tapping8-3.png"> </a> <h1 class="syn-title">Tapping IX</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-ix.144/"> <img class="tab-images" src="Design/syn/tapping9-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-ix.144/"> <img class="tab-images" src="Design/syn/tapping9-2.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-ix.144/"> <img class="tab-images" src="Design/syn/tapping9-3.png"> </a> <h1 class="syn-title">Tapping X</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-x.145/"> <img class="tab-images" src="Design/syn/tapping10-1.png"> </a> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/tapping-x.145/"> <img class="tab-images" src="Design/syn/tapping10-2.png"> </a></div></div></div>';
    updateListener();

    document.querySelector(".tapping-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".tapping-syn").style.display = "block";

    });
}
function legato() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="legato-picking"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Legato Picking</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options"><button class="skill-option-buttons legato-syn-button">SYN\'s Etude</button><button class="skill-option-buttons legato-major-button">Major Scales</button><button class="skill-option-buttons legato-minor-button">Minor Scales</button><button class="skill-option-buttons legato-modes-button">Modes</button>            <div class="metronome"><button class="metro-button">-</button><input type="number" class="bpm" name="bpm" value="100"><button class="metro-button">+</button><br><button class="metro-play"></button><button class="metro-pause"></button></div></div><div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Source</div><div class="inner-display legato-syn">            <h1 class="syn-title">Legato Picking I</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-i.116/"> <img class="tab-images" src="Design/syn/legato1.png"> </a> <h1 class="syn-title">Legato Picking II</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-ii.117/"> <img class="tab-images" src="Design/syn/legato2.png"> </a> <h1 class="syn-title">Legato Picking III</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-iii.118/"> <img class="tab-images" src="Design/syn/legato3.png"> </a> <h1 class="syn-title">Legato Picking IV</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-iv.119/"> <img class="tab-images" src="Design/syn/legato4.png"> </a> <h1 class="syn-title">Legato Picking V</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-v.120/"> <img class="tab-images" src="Design/syn/legato5.png"> </a> <h1 class="syn-title">Legato Picking VI</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-vi.121/"> <img class="tab-images" src="Design/syn/legato6.png"> </a> <h1 class="syn-title">Legato Picking VII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-vii.122/"> <img class="tab-images" src="Design/syn/legato7.png"> </a> <h1 class="syn-title">Legato Picking VIII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-viii.123/"> <img class="tab-images" src="Design/syn/legato8.png"> </a> <h1 class="syn-title">Legato Picking IX</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-ix.124/"> <img class="tab-images" src="Design/syn/legato9.png"> </a> <h1 class="syn-title">Legato Picking X</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/legato-x.125/"> <img class="tab-images" src="Design/syn/legato10-1.png"> <img class="tab-images" src="Design//syn/legato10-2.png"></div><div class="inner-display legato-major"><embed src="Design/scales/major-scale.pdf" width="100%" height="100%"></div><div class="inner-display legato-minor"><embed src="Design/scales/minor-scale.pdf" width="100%" height="100%"></div><div class="inner-display legato-modes"><img class="tab-images" src="Design/scales/modes1.png"><br><img class="tab-images" src="Design/scales/modes2.png"></div></div></dv>';
    updateListener();
    document.querySelector(".legato-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".legato-syn").style.display = "block";
        document.querySelector(".legato-major").style.display = "none";
        document.querySelector(".legato-minor").style.display = "none";
        document.querySelector(".legato-modes").style.display = "none";    
    });
    document.querySelector(".legato-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".legato-syn").style.display = "none";
        document.querySelector(".legato-major").style.display = "block";
        document.querySelector(".legato-minor").style.display = "none";
        document.querySelector(".legato-modes").style.display = "none";    
    });
    document.querySelector(".legato-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".legato-syn").style.display = "none";
        document.querySelector(".legato-major").style.display = "none";
        document.querySelector(".legato-minor").style.display = "block";
        document.querySelector(".legato-modes").style.display = "none";    
    });
    document.querySelector(".legato-modes-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".legato-syn").style.display = "none";
        document.querySelector(".legato-major").style.display = "none";
        document.querySelector(".legato-minor").style.display = "none";
        document.querySelector(".legato-modes").style.display = "block";    
    });
}
function pentatonics() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="pentatonics"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Pentatonic Scales</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button></div> </div> </div<div><div class="skill-options"><button class="skill-option-buttons pentatonics-syn-button">SYN\'s Etude</button><button class="skill-option-buttons pentatonics-scales-button">Scales</button>            <div class="metronome"><button class="metro-button">-</button><input type="number" class="bpm" name="bpm" value="100"><button class="metro-button">+</button><br><button class="metro-play"></button><button class="metro-pause"></button></div></div><div class="skill-display"><div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Source</div><div class="inner-display pentatonics-syn"><h1 class="syn-title">Pentatonic I</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-i.116/"> <img class="tab-images" src="Design/syn/pentatonics1.png"> </a> <h1 class="syn-title">Pentatonic II</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-ii.117/"> <img class="tab-images" src="Design/syn/pentatonics2.png"> </a> <h1 class="syn-title">Pentatonic III</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-iii.118/"> <img class="tab-images" src="Design/syn/pentatonics3.png"> </a> <h1 class="syn-title">Pentatonic IV</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-iv.119/"> <img class="tab-images" src="Design/syn/pentatonics4.png"> </a> <h1 class="syn-title">Pentatonic V</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-v.120/"> <img class="tab-images" src="Design/syn/pentatonics5.png"> </a> <h1 class="syn-title">Pentatonic VI</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-vi.121/"> <img class="tab-images" src="Design/syn/pentatonics6-1.png"> <img class="tab-images" src="Design/syn/pentatonics6-2.png"> </a> <h1 class="syn-title">Pentatonic VII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-vii.122/"> <img class="tab-images" src="Design/syn/pentatonics7-1.png"> <img class="tab-images" src="Design/syn/pentatonics7-2.png"> </a> <h1 class="syn-title">Pentatonic VIII</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-viii.123/"> <img class="tab-images" src="Design/syn/pentatonics8.png"> </a> <h1 class="syn-title">Pentatonic IX</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-ix.124/"> <img class="tab-images" src="Design/syn/pentatonics9.png"> </a> <h1 class="syn-title">Pentatonic X</h1> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href="https://syngates.com/lessons/pentatonics-x.125/"> <img class="tab-images" src="Design/syn/pentatonics10.png"></div><div class="inner-display pentatonics-scales"><img class="tab-images" src="Design/scales/pentatonic-scales.jpg"></div></div></div>';
    updateListener();

    document.querySelector(".pentatonics-syn-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".pentatonics-syn").style.display = "block";
        document.querySelector(".pentatonics-scales").style.display = "none";
    });
    document.querySelector(".pentatonics-scales-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".pentatonics-syn").style.display = "none";
        document.querySelector(".pentatonics-scales").style.display = "block";
    });
}
function extras() {

    if (!extrasOn) {
        extrasOn = true;
        document.querySelector("#main-menu").innerHTML = '<table id="menu-table"> <tbody> <tr> <td> <button onclick="songs()" class="skill songs">Songs</button> </td> <td> <button onclick="solos()" class="skill solos">Solos</button> </td> <td> <button onclick="fingerstyle()" class="skill fingerstyle">Fingerstyle</button> </td> </tr> <tr> <td> <button onclick="backingTracks()" class="skill backing-tracks">Backing Tracks</button> </td> <td> <button onclick="pitchRec()" class="skill pitch-rec">Pitch Recognition</button> </td> <td> <button onclick="noteRec()" class="skill note-rec">Note Recognition</button> </td> </tr> <tr style="width: 80vw"> <td colspan="3"><button class="skill extra-button" onclick="extras()">Extras</button></td> </tr> </tbody> </table>';
        document.querySelector(".extra-button").style = "    margin-top: calc(0.9vw); margin-bottom: calc(1vw - 0.5vw); box-shadow: 0 0 0; color: white; background-color: rgb(54, 54, 54)";
    } else {
        extrasOn = false;
        document.querySelector("#main-menu").innerHTML = mainMenu;
        document.querySelector(".extra-button").style = "";
    }


}
function songs() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="songs"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Songs</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div> <div class="skill-options"><button class="skill-option-buttons vices-button">Vices</button><button class="skill-option-buttons the-sinner-button">The Sinner</button><button class="skill-option-buttons bulls-bronx-button" style="font-size: 2vw">Bulls in the Bronx</button> <button class="skill-option-buttons a-prophecy-button">A Prophecy</button><button class="skill-option-buttons buried-alive-button">Buried Alive</button><button class="skill-option-buttons second-heartbeat-button">Second Heartbeat</button> <button class="skill-option-buttons a-place-button" style="font-size: 1.7vw">A Place Where You Belong</button> <button class="skill-option-buttons nothing-else-matters-button" style="font-size: 1.8vw">Nothing Else Matters</button> <button class="skill-option-buttons blackened-button">Blackened</button> <button class="skill-option-buttons the-last-fight-button">The Last Fight</button> <button class="skill-option-buttons say-goodnight-button">Say Goodnight</button> </div> <div class="skill-display"> <div class="source"style="width: 100%;height: inherit;text-align: center"><h1 >Choose A Song</h1></div> <div class="inner-display vices"> <video class="vices-video" width="100%" height="100%" controls> <source src="Design/videos/vices.mp4"> </video> </div><div class="inner-display the-sinner"> <video class="the-sinner-video" width="100%" height="100%" controls> <source src="Design/videos/the-sinner.mp4"> </video> </div><div class="inner-display a-prophecy"> <video class="a-prophecy-video" width="100%" height="100%" controls> <source src="Design/videos/a-prophecy.mp4"> </video> </div> <div class="inner-display buried-alive"> <video class="buried-alive-video" width="100%" height="100%" controls> <source src="Design/videos/buried-alive.mp4"> </video> </div> <div class="inner-display second-heartbeat"> <video class="second-heartbeat-video" width="100%" height="100%" controls> <source src="Design/videos/second-heartbeat.mp4"> </video> </div> <div class="inner-display bulls-bronx"> <video class="bulls-bronx-video" width="100%" height="100%" controls> <source src="Design/videos/bulls-in-the-bronx.mp4"> </video> </div> <div class="inner-display a-place"> <video class="a-place-video" width="100%" height="100%" controls> <source src="Design/videos/a-place-where-you-belong.mp4"> </video> </div> <div class="inner-display nothing-else-matters"> <video class="nothing-else-matters-video" width="100%" height="100%" controls> <source src="Design/videos/nothing-else-matters.mp4"> </video> </div> <div class="inner-display blackened"> <video class="blackened-video" width="100%" height="100%" controls> <source src="Design/videos/blackened.mp4"> </video> </div> <div class="inner-display the-last-fight"> <video class="the-last-fight-video" width="100%" height="100%" controls> <source src="Design/videos/the-last-fight.mp4"> </video> </div> <div class="inner-display say-goodnight"> <video class="say-goodnight-video" width="100%" height="100%" controls> <source src="Design/videos/say-goodnight.mp4"> </video> </div> </div> </div>';
    updateListener();
    document.querySelector(".vices-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".vices").style.display = "block";
        document.querySelector(".the-sinner").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";
        document.querySelector(".a-place").style.display = "none";
        document.querySelector(".nothing-else-matters").style.display = "none";
        document.querySelector(".blackened").style.display = "none";
        document.querySelector(".the-last-fight").style.display = "none";
        document.querySelector(".say-goodnight").style.display = "none";
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".the-sinner-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".vices").style.display = "none";
        document.querySelector(".the-sinner").style.display = "block";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";
        document.querySelector(".a-place").style.display = "none";
        document.querySelector(".nothing-else-matters").style.display = "none";
        document.querySelector(".blackened").style.display = "none";
        document.querySelector(".the-last-fight").style.display = "none";
        document.querySelector(".say-goodnight").style.display = "none";
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".a-prophecy-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "block";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";
        document.querySelector(".a-place").style.display = "none";
        document.querySelector(".nothing-else-matters").style.display = "none";
        document.querySelector(".blackened").style.display = "none";
        document.querySelector(".the-last-fight").style.display = "none";
        document.querySelector(".say-goodnight").style.display = "none";
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".buried-alive-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "block";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";    
        document.querySelector(".a-place").style.display = "none";    
        document.querySelector(".nothing-else-matters").style.display = "none";    
        document.querySelector(".blackened").style.display = "none";    
        document.querySelector(".the-last-fight").style.display = "none";    
        document.querySelector(".say-goodnight").style.display = "none";    
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();  
        document.querySelector(".a-place-video").pause();  
        document.querySelector(".nothing-else-matters-video").pause();  
        document.querySelector(".blackened-video").pause();  
        document.querySelector(".the-last-fight-video").pause();  
        document.querySelector(".say-goodnight-video").pause();  
    });
    document.querySelector(".second-heartbeat-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "block";
        document.querySelector(".bulls-bronx").style.display = "none";   
        document.querySelector(".a-place").style.display = "none";   
        document.querySelector(".nothing-else-matters").style.display = "none";   
        document.querySelector(".blackened").style.display = "none";   
        document.querySelector(".the-last-fight").style.display = "none";   
        document.querySelector(".say-goodnight").style.display = "none";   
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();  
        document.querySelector(".a-place-video").pause();  
        document.querySelector(".nothing-else-matters-video").pause();  
        document.querySelector(".blackened-video").pause();  
        document.querySelector(".the-last-fight-video").pause();  
        document.querySelector(".say-goodnight-video").pause();  
    });
    document.querySelector(".bulls-bronx-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "block";  
        document.querySelector(".a-place").style.display = "none";  
        document.querySelector(".nothing-else-matters").style.display = "none";  
        document.querySelector(".blackened").style.display = "none";  
        document.querySelector(".the-last-fight").style.display = "none";  
        document.querySelector(".say-goodnight").style.display = "none";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".a-place-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";  
        document.querySelector(".a-place").style.display = "block";  
        document.querySelector(".nothing-else-matters").style.display = "none";  
        document.querySelector(".blackened").style.display = "none";  
        document.querySelector(".the-last-fight").style.display = "none";  
        document.querySelector(".say-goodnight").style.display = "none";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".nothing-else-matters-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";  
        document.querySelector(".a-place").style.display = "none";  
        document.querySelector(".nothing-else-matters").style.display = "block";  
        document.querySelector(".blackened").style.display = "none";  
        document.querySelector(".the-last-fight").style.display = "none";  
        document.querySelector(".say-goodnight").style.display = "none";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".blackened-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";  
        document.querySelector(".a-place").style.display = "none";  
        document.querySelector(".nothing-else-matters").style.display = "none";  
        document.querySelector(".blackened").style.display = "block";  
        document.querySelector(".the-last-fight").style.display = "none";  
        document.querySelector(".say-goodnight").style.display = "none";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".the-last-fight-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";  
        document.querySelector(".a-place").style.display = "none";  
        document.querySelector(".nothing-else-matters").style.display = "none";  
        document.querySelector(".blackened").style.display = "none";  
        document.querySelector(".the-last-fight").style.display = "block";  
        document.querySelector(".say-goodnight").style.display = "none";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".say-goodnight-video").pause();    
    });
    document.querySelector(".say-goodnight-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".a-prophecy").style.display = "none";
        document.querySelector(".buried-alive").style.display = "none";
        document.querySelector(".second-heartbeat").style.display = "none";
        document.querySelector(".bulls-bronx").style.display = "none";  
        document.querySelector(".a-place").style.display = "none";  
        document.querySelector(".nothing-else-matters").style.display = "none";  
        document.querySelector(".blackened").style.display = "none";  
        document.querySelector(".the-last-fight").style.display = "none";  
        document.querySelector(".say-goodnight").style.display = "block";  
        document.querySelector(".a-prophecy-video").pause();    
        document.querySelector(".buried-alive-video").pause();    
        document.querySelector(".second-heartbeat-video").pause();    
        document.querySelector(".bulls-bronx-video").pause();    
        document.querySelector(".a-place-video").pause();    
        document.querySelector(".nothing-else-matters-video").pause();    
        document.querySelector(".blackened-video").pause();    
        document.querySelector(".the-last-fight-video").pause();    
    });
}
function solos() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="solos"> <div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Solos</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div> <div class="skill-options"> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'exist\')">EXIST</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'second-heartbeat\')">Second Heartbeat</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'paradigm\')">Paradigm</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'heretic\')">Heretic</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'the-stage\')">The Stage</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'crimson-day\')">Crimson Day</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'coming-home\')">Coming Home</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'nightmare\')">Nightmare</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'buried-alive\')">Buried Alive</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'natural-born-killer\')" style="font-size: 2vw">Natural Born Killer</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'victim\')">Victim</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'dear-god\')">Dear God</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'seize-the-day\')">Seize The Day</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'sidewinder\')">Sidewinder</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'betrayed\')">Betrayed</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'m.i.a.\')">M.I.A.</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'not-invincible\')">Not Invincible</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'a-place-where-you-belong\')" style="font-size: 1.7vw;">A Place Where You Belong</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'the-last-fight\')">The Last Fight</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'waking-the-demon\')" style="font-size: 2vw">Waking The Demon</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'say-goodnight\')">Say Goodnight</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'the-poison\')">The Poison</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'blackened\')">Blackened</button> <button class="skill-option-buttons solos-exist-button" onclick="changeSolo(\'nothin-else-matters\')" style="font-size: 1.7vw;">Nothing Else Matters</button> </div> <div class="skill-display"> <div class="source"style="width: 100%;height: inherit;text-align: center"> <h1 >Choose A Solo</h1> </div> <div class="inner-display solos-display"> <h1 class="solo-title" style="font-size: 4vw; margin: 0.5vw;"></h1> <div class="audio"> <audio controls class="solo-audio"> </audio> </div> <div class="solo-speed"> <button style="margin: 0;" class="metro-button" onclick="soloSpeedDown()">-</button> <input type="number" min="60" max="190" name="bpm" class="solo-bpm" oninput="changeRange(); changeSoloSpeed()"> <button style="margin: 0;" class="metro-button" onclick="soloSpeedUp()">+</button> <br><br> <input type="range" oninput="changeBpmNumber(); changeSoloSpeed()" name="bpm" min="60" max="190" value="190" class="solo-bpm-scrubber"> <br><label for="bpm">BPM</label> </div> <div class="tabs"> <h1 style="font-size: 4vw;">Tabs</h1> <button class="tabs-button" onclick="showTabs()">Tabs</button> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href=""> <button class="tabs-button">SongSterr</button> </a> <br><br> <div class="guitar-1"></div> </div> </div> </div> </div>';
    updateListener();
    
}
function fingerstyle() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="fingerstyle"> <div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Fingerstyle</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div> <div class="skill-options"> <button class="skill-option-buttons fingerstyle-buried-alive-button" onclick="changeFS(\'buried-alive\')">Buried Alive</button> <button class="skill-option-buttons fingerstyle-love-of-my-life-button" onclick="changeFS(\'love-of-my-life\')">Love Of My Life</button> <button class="skill-option-buttons fingerstyle-so-far-away-button" onclick="changeFS(\'so-far-away\')">So Far Away</button> <button class="skill-option-buttons fingerstyle-nothing-else-matters-button" onclick="changeFS(\'nothing-else-matters\')" style="font-size: 1.8vw">Nothing Else Matters</button> <button class="skill-option-buttons fingerstyle-stairway-to-heaven-button" onclick="changeFS(\'stairway-to-heaven\')" style="font-size: 2vw">Stairway To Heaven</button> </div> <div class="skill-display"> <div class="source" style="width: 100%;height: inherit;text-align: center"> <h1 >Choose A FS Song</h1> </div> <div class="inner-display fingerstyle-display"> <h1 class="solo-title" style="font-size: 4vw; margin: 0.5vw;"></h1> <div class="audio"> <audio controls class="solo-audio"> </audio> </div> <div class="solo-speed"> <button style="margin: 0;" class="metro-button" onclick="soloSpeedDown()">-</button> <input type="number" min="60" max="190" name="bpm" class="solo-bpm" oninput="changeRange(); changeSoloSpeed()"> <button style="margin: 0;" class="metro-button" onclick="soloSpeedUp()">+</button> <br><br> <input type="range" oninput="changeBpmNumber(); changeSoloSpeed()" name="bpm" min="60" max="190" value="190" class="solo-bpm-scrubber"> <br><label for="bpm">BPM</label> </div> <div class="tabs"> <h1 style="font-size: 4vw;">Tabs</h1> <button class="tabs-button" onclick="showTabs()">Tabs</button> <a target="_blank" onclick="window.open(this.href, \'_blank\', \'toolbar=no, height=740, width=5000, top=1000\')" href=""> <button class="tabs-button">SongSterr</button> </a> <br><br> <div class="guitar-1"></div> </div> </div> </div> </div>';
    updateListener();
}
function backingTracks() {
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="backing-tracks"> <div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Backing Tracks</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div> <div class="skill-options"> <button class="skill-option-buttons c-major-button">C Major</button> <button class="skill-option-buttons c-minor-button">C Minor</button> <button class="skill-option-buttons d-major-button">D Major</button> <button class="skill-option-buttons d-minor-button">D Minor</button> <button class="skill-option-buttons e-major-button">E Major</button> <button class="skill-option-buttons e-minor-button">E Minor</button> <button class="skill-option-buttons f-major-button">F Major</button> <button class="skill-option-buttons f-minor-button">F Minor</button> <button class="skill-option-buttons g-major-button">G Major</button> <button class="skill-option-buttons g-minor-button">G Minor</button> <button class="skill-option-buttons a-major-button">A Major</button> <button class="skill-option-buttons a-minor-button">A Minor</button> <button class="skill-option-buttons b-major-button">B Major</button> <button class="skill-option-buttons b-minor-button">B Minor</button> </div> <div class="skill-display"> <div class="source" style="width: 100%;height: inherit;text-align: center"> <h1 >Choose A Key</h1> </div> <div class="inner-display c-major"> <video class="c-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/c-major1.mp4"> </video> <video class="c-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/c-major2.mp4"> </video> </div> <div class="inner-display c-minor"> <video class="c-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/c-minor1.mp4"> </video> <video class="c-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/c-minor2.mp4"> </video> </div> <div class="inner-display d-major"> <video class="d-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/d-major1.mp4"> </video> <video class="d-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/d-major2.mp4"> </video> </div> <div class="inner-display d-minor"> <video class="d-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/d-minor1.mp4"> </video> <video class="d-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/d-minor2.mp4"> </video> </div> <div class="inner-display e-major"> <video class="e-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/e-major1.mp4"> </video> <video class="e-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/e-major2.mp4"> </video> </div> <div class="inner-display e-minor"> <video class="e-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/e-minor1.mp4"> </video> <video class="e-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/e-minor2.mp4"> </video> </div> <div class="inner-display f-major"> <video class="f-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/f-major1.mp4"> </video> <video class="f-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/f-major2.mp4"> </video> </div> <div class="inner-display f-minor"> <video class="f-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/f-minor1.mp4"> </video> <video class="f-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/f-minor2.mp4"> </video> </div> <div class="inner-display g-major"> <video class="g-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/g-major1.mp4"> </video> <video class="g-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/g-major2.mp4"> </video> </div> <div class="inner-display g-minor"> <video class="g-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/g-minor1.mp4"> </video> <video class="g-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/g-minor2.mp4"> </video> </div> <div class="inner-display a-major"> <video class="a-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/a-major1.mp4"> </video> <video class="a-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/a-major2.mp4"> </video> </div> <div class="inner-display a-minor"> <video class="a-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/a-minor1.mp4"> </video> <video class="a-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/a-minor2.mp4"> </video> </div> <div class="inner-display b-major"> <video class="b-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/b-major1.mp4"> </video> <video class="b-major-video" width="100%" height="100%" controls> <source src="Design/backing tracks/b-major2.mp4"> </video> </div> <div class="inner-display b-minor"> <video class="b-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/b-minor1.mp4"> </video> <video class="b-minor-video" width="100%" height="100%" controls> <source src="Design/backing tracks/b-minor2.mp4"> </video> </div> </div> </div> </div>';
    updateListener();
    document.querySelector(".c-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "block";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";
    });
    document.querySelector(".c-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "block";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".d-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "block";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".d-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "block";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".e-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "block";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".e-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "block";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".f-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "block";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".f-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "block";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".g-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "block";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".g-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "block";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".a-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "block";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".a-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "block";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".b-major-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "block";
        document.querySelector(".b-minor").style.display = "none";

    });
    document.querySelector(".b-minor-button").addEventListener("click", function() {
        document.querySelector(".source").style.display = "none";
        document.querySelector(".c-major").style.display = "none";
        document.querySelector(".c-minor").style.display = "none";
        document.querySelector(".d-major").style.display = "none";
        document.querySelector(".d-minor").style.display = "none";
        document.querySelector(".e-major").style.display = "none";
        document.querySelector(".e-minor").style.display = "none";
        document.querySelector(".f-major").style.display = "none";
        document.querySelector(".f-minor").style.display = "none";
        document.querySelector(".g-major").style.display = "none";
        document.querySelector(".g-minor").style.display = "none";
        document.querySelector(".a-major").style.display = "none";
        document.querySelector(".a-minor").style.display = "none";
        document.querySelector(".b-major").style.display = "none";
        document.querySelector(".b-minor").style.display = "block";

    });
}
function pitchRec() {
    //insert the html 
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="pitch-rec"> <div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Pitch Recognition</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div> <div class="skill-options"> <h1><u>Difficulties</u></h1> <button onclick="changeDifficulty(\'easy\', \'pitch\')" class="skill-option-buttons difficulty-easy-button">Easy <span class="tooltip-text">1 octave, without #♭, notes visible, point for every correct answer.</span> </button> <button onclick="changeDifficulty(\'medium\', \'pitch\')" class="skill-option-buttons difficulty-medium-button">Medium <span class="tooltip-text">1 octave, with #♭, notes visible, point for every correct answer.</span> </button> <button onclick="changeDifficulty(\'hard\', \'pitch\')" class="skill-option-buttons difficulty-hard-button">Hard <span class="tooltip-text">3 octavs, without #♭, notes visible, points only for correct first answers.</span> </button> <button onclick="changeDifficulty(\'extreme\', \'pitch\')" class="skill-option-buttons difficulty-extreme-button">Extreme <span class="tooltip-text">3 octaves, with #♭, notes hidden, points only for correct first answers.</span> </button> <button onclick="changeDifficulty(\'insane\', \'pitch\')" class="skill-option-buttons difficulty-insane-button">Insane <span class="tooltip-text">All octaves, with #♭, notes hidden, point only for correct first answers.</span> </button> </div> <div class="skill-display"><div class="inner-display pitch-rec" style="display: block"> <p>Points: 0</p> <h2 class="rec-title">Pitch Recognition</h2> <button class="pitch-rec-start" onclick="pitchRecStart()">Start</button> <div class="piano"> <div class="c white-key key"><h1 class="key-text">C</h1></div><!-- --><div class="d white-key key"><h1 class="key-text">D</h1></div><!-- ---><div class="e white-key key"><h1 class="key-text">E</h1></div><!-- ---><div class="f white-key key"><h1 class="key-text">F</h1></div><!-- ---><div class="g white-key key"><h1 class="key-text">G</h1></div><!-- ---><div class="a white-key key"><h1 class="key-text">A</h1></div><!-- ---><div class="b white-key key"><h1 class="key-text">B</h1></div> <div class="db black-key key"><h2 class="key-text">C#</h2><br><h2 class="key-text">D♭</h2></div> <div class="eb black-key key"><h2 class="key-text">D#</h2><br><h2 class="key-text">E♭</h2></div> <div class="gb black-key key"><h2 class="key-text">F#</h2><br><h2 class="key-text">G♭</h2></div> <div class="ab black-key key"><h2 class="key-text">G#</h2><br><h2 class="key-text">A♭</h2></div> <div class="bb black-key key"><h2 class="key-text">A#</h2><br><h2 class="key-text">B♭</h2></div> </div> </div> </div> </div>';
    updateListener();
    //difficulty selection
    noteName = {
        c: document.querySelector(".c").innerHTML,
        d: document.querySelector(".d").innerHTML,
        e: document.querySelector(".e").innerHTML,
        f: document.querySelector(".f").innerHTML,
        g: document.querySelector(".g").innerHTML,
        a: document.querySelector(".a").innerHTML,
        b: document.querySelector(".b").innerHTML,
        db: document.querySelector(".db").innerHTML,
        eb: document.querySelector(".eb").innerHTML,
        gb: document.querySelector(".gb").innerHTML,
        ab: document.querySelector(".ab").innerHTML,
        bb: document.querySelector(".bb").innerHTML,
    };
    changeDifficulty("easy", "pitch");
    loopAudio(true);
    document.querySelector(".rec-title").innerHTML = "Pitch Recognition - " + pitchRecDifficulty;
    //play the notes on the piano when pressing and checks answer
    for (i = 0; i < 12; i++) {
        document.querySelectorAll(".key")[i].addEventListener("click", function() {
            var pitch = this.classList[0];
            if (pitch == "c") {
                note.c4key.pause();
                note.c4key.currentTime = 0;
                note.c4key.play();
            } if (pitch == "d") {
                note.d4key.pause();
                note.d4key.currentTime = 0;
                note.d4key.play();
            } if (pitch == "e") {
                note.e4key.pause();
                note.e4key.currentTime = 0;
                note.e4key.play();
            } if (pitch == "f") {
                note.f4key.pause();
                note.f4key.currentTime = 0;
                note.f4key.play();
            } if (pitch == "g") {
                note.g4key.pause();
                note.g4key.currentTime = 0;
                note.g4key.play();
            } if (pitch == "a") {
                note.a4key.pause();
                note.a4key.currentTime = 0;
                note.a4key.play();
            } if (pitch == "b") {
                note.b4key.pause();
                note.b4key.currentTime = 0;
                note.b4key.play();
            } if (pitch == "db") {
                note.db4key.pause();
                note.db4key.currentTime = 0;
                note.db4key.play();
            } if (pitch == "eb") {
                note.eb4key.pause();
                note.eb4key.currentTime = 0;
                note.eb4key.play();
            } if (pitch == "gb") {
                note.gb4key.pause();
                note.gb4key.currentTime = 0;
                note.gb4key.play();
            } if (pitch == "ab") {
                note.ab4key.pause();
                note.ab4key.currentTime = 0;
                note.ab4key.play();
            } if (pitch == "bb") {
                note.bb4key.pause();
                note.bb4key.currentTime = 0;
                note.bb4key.play();
            } 
            //answer checker-------------------------------------
            if (!pitchRecStarted) {return;}
            if (this.classList[0] == currentNote) {
                var pianoKey = this;
                pianoKey.style.backgroundColor = "green";
                setTimeout(function() {
                    if (pianoKey.classList[1] == "white-key") {
                        pianoKey.style.backgroundColor = "white";
                    } else {
                        pianoKey.style.backgroundColor = "black";
                    }
                }, 300);
                if (!pitchRecWrong) {
                    pitchRecPoints++;
                }
                pitchRecWrong = false;
                document.querySelector(".pitch-rec>p").innerHTML = "Points: " + pitchRecPoints;
                clearInterval(interval);
                setTimeout(function() {
                    pauseAudio();
                    pitchRecNextLevel(pitchRecDifficulty);
                }, 1000);
            } else {
                var pianoKey = this;
                pianoKey.style.backgroundColor = "red";
                setTimeout(function() {
                    if (pianoKey.classList[1] == "white-key") {
                        pianoKey.style.backgroundColor = "white";
                    } else {
                        pianoKey.style.backgroundColor = "black";
                    }
                }, 300);
                if (pitchRecDifficulty == "hard" || pitchRecDifficulty == "extreme" || pitchRecDifficulty == "insane") {
                    pitchRecWrong = true;
                }
            }
            //-------------
        });
    }
} 
function noteRec() {
    //insert html 
    document.querySelector("#main-menu").style.display = "none";
    document.querySelector("#skill-container").innerHTML = '<div id="note-rec"><div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Note Recognition</h1> </div> <div class="timer-container"> <div class="timer"> <h3 class="minutes">10</h3> <h3>:</h3> <h3 class="seconds">00</h3> </div><button onclick="editTimer(1)" class="timer-edit"></button> </div> </div><div class="skill-options"> <h1><u>Difficulties</u></h1> <button onclick="changeDifficulty(\'easy\', \'note\')" class="skill-option-buttons difficulty-easy-button">Easy <span class="tooltip-text">1 octave, free time, without #♭, notes visible, single staff, point for every correct answer.</span> </button> <button onclick="changeDifficulty(\'medium\', \'note\')" class="skill-option-buttons difficulty-medium-button">Medium <span class="tooltip-text">2 octaves, 5 minutes, without #♭, notes visible, single staff, point for every correct answer.</span> </button> <button onclick="changeDifficulty(\'hard\', \'note\')" class="skill-option-buttons difficulty-hard-button">Hard <span class="tooltip-text">3 octavs, 3 minutes, with #♭, notes hidden, single staff, points only for correct first answers.</span> </button> <button onclick="changeDifficulty(\'extreme\', \'note\')" class="skill-option-buttons difficulty-extreme-button">Extreme <span class="tooltip-text">3 octaves, 2 minutes, with #♭, notes hidden, double staff, points only for correct first answers.</span> </button> <button onclick="changeDifficulty(\'insane\', \'note\')" class="skill-option-buttons difficulty-insane-button">Insane <span class="tooltip-text">All octaves, 1 minute, with #♭, notes hidden, double staff, point only for correct first answers.</span> </button> </div> <div class="skill-display" style="background-color: rgb(250, 250, 250)"> <div class="inner-display note-rec" style="display: block"> <p>Points: 0</p> <h2 class="rec-title">Note Recognition</h2> <button class="note-rec-start" onclick="noteRecStart()">Start</button> <img class="note-image" src=""> <div class="note-rec-piano"> <div class="c white-key key"> <h1 class="key-text">C</h1> </div><!-- --><div class="d white-key key"> <h1 class="key-text">D</h1> </div><!-- --><div class="e white-key key"> <h1 class="key-text">E</h1> </div><!-- --><div class="f white-key key"> <h1 class="key-text">F</h1> </div><!-- --><div class="g white-key key"> <h1 class="key-text">G</h1> </div><!-- --><div class="a white-key key"> <h1 class="key-text">A</h1> </div><!-- --><div class="b white-key key"> <h1 class="key-text">B</h1> </div> <div class="db black-key key"> <h2 class="key-text">C#</h2><br> <h2 class="key-text">D♭</h2> </div> <div class="eb black-key key"> <h2 class="key-text">D#</h2><br> <h2 class="key-text">E♭</h2> </div> <div class="gb black-key key"> <h2 class="key-text">F#</h2><br> <h2 class="key-text">G♭</h2> </div> <div class="ab black-key key"> <h2 class="key-text">G#</h2><br> <h2 class="key-text">A♭</h2> </div> <div class="bb black-key key"> <h2 class="key-text">A#</h2><br> <h2 class="key-text">B♭</h2> </div> </div> </div> </div> </div>';
    updateListener();

    changeDifficulty("easy", "note");
    //piano keys = make sound and check answer
    for (i = 0; i < 12; i++) {
        document.querySelectorAll(".key")[i].addEventListener("click", function() {
            var pitch = this.classList[0];
            if (pitch == "c") {
                note.c4key.pause();
                note.c4key.currentTime = 0;
                note.c4key.play();
            } if (pitch == "d") {
                note.d4key.pause();
                note.d4key.currentTime = 0;
                note.d4key.play();
            } if (pitch == "e") {
                note.e4key.pause();
                note.e4key.currentTime = 0;
                note.e4key.play();
            } if (pitch == "f") {
                note.f4key.pause();
                note.f4key.currentTime = 0;
                note.f4key.play();
            } if (pitch == "g") {
                note.g4key.pause();
                note.g4key.currentTime = 0;
                note.g4key.play();
            } if (pitch == "a") {
                note.a4key.pause();
                note.a4key.currentTime = 0;
                note.a4key.play();
            } if (pitch == "b") {
                note.b4key.pause();
                note.b4key.currentTime = 0;
                note.b4key.play();
            } if (pitch == "db") {
                note.db4key.pause();
                note.db4key.currentTime = 0;
                note.db4key.play();
            } if (pitch == "eb") {
                note.eb4key.pause();
                note.eb4key.currentTime = 0;
                note.eb4key.play();
            } if (pitch == "gb") {
                note.gb4key.pause();
                note.gb4key.currentTime = 0;
                note.gb4key.play();
            } if (pitch == "ab") {
                note.ab4key.pause();
                note.ab4key.currentTime = 0;
                note.ab4key.play();
            } if (pitch == "bb") {
                note.bb4key.pause();
                note.bb4key.currentTime = 0;
                note.bb4key.play();
            } 
            //answer checker-------------------------------------
            if (!noteRecStarted) {return;}
            if (this.classList[0] == currentNote) {
                var pianoKey = this;
                pianoKey.style.backgroundColor = "green";
                setTimeout(function() {
                    if (pianoKey.classList[1] == "white-key") {
                        pianoKey.style.backgroundColor = "white";
                    } else {
                        pianoKey.style.backgroundColor = "black";
                    }
                }, 300);
                if (!noteRecWrong) {
                    noteRecPoints++;
                }
                noteRecWrong = false;
                document.querySelector(".note-rec>p").innerHTML = "Points: " + noteRecPoints;
                noteRecNextLevel(pitchRecDifficulty);
            } else {
                var pianoKey = this;
                pianoKey.style.backgroundColor = "red";
                setTimeout(function() {
                    if (pianoKey.classList[1] == "white-key") {
                        pianoKey.style.backgroundColor = "white";
                    } else {
                        pianoKey.style.backgroundColor = "black";
                    }
                }, 300);
                if (pitchRecDifficulty == "hard" || pitchRecDifficulty == "extreme" || pitchRecDifficulty == "insane") {
                    noteRecWrong = true;
                }
            }
            //-------------
        });
    }
    //store note names
    noteName = {
        c: document.querySelector(".c").innerHTML,
        d: document.querySelector(".d").innerHTML,
        e: document.querySelector(".e").innerHTML,
        f: document.querySelector(".f").innerHTML,
        g: document.querySelector(".g").innerHTML,
        a: document.querySelector(".a").innerHTML,
        b: document.querySelector(".b").innerHTML,
        db: document.querySelector(".db").innerHTML,
        eb: document.querySelector(".eb").innerHTML,
        gb: document.querySelector(".gb").innerHTML,
        ab: document.querySelector(".ab").innerHTML,
        bb: document.querySelector(".bb").innerHTML,
    };

}
function tool(tool) {
    openToolbar();
    if (tool == "tuner") {
        document.querySelector("#main-menu").style.display = "none";
        document.querySelector("#skill-container").innerHTML = '<div id="tuner"> <div class="top-table"> <div class="back-td"> <button onclick="back()" class="back-button"> < Back to menu</button> </div> <div class="title-td"> <h1 class="skill-title">Tuner</h1> </div> </div> <div class="skill-options"> <button class="skill-option-buttons" onclick="changeTuning(\'standard\')">Standard <span class="tooltip-text">E A D G B E</button> <button class="skill-option-buttons" onclick="changeTuning(\'drop-d\')">Drop D <span class="tooltip-text">D A D G B E</button> <button class="skill-option-buttons" onclick="changeTuning(\'drop-c#\')">Drop C# <span class="tooltip-text">C# A D G B E</button> <button class="skill-option-buttons" onclick="changeTuning(\'drop-c\')">Drop C <span class="tooltip-text">C G C F A D</button> <button class="skill-option-buttons" onclick="changeTuning(\'drop-b\')">Drop B <span class="tooltip-text">B G♭ B E A♭ D♭</button> <button class="skill-option-buttons" onclick="changeTuning(\'drop-a\')">Drop A <span class="tooltip-text">A E A D G♭ B</button> <button class="skill-option-buttons" onclick="changeTuning(\'dadgad\')">DADGAD <span class="tooltip-text">D A D G A D</button> <button class="skill-option-buttons" onclick="changeTuning(\'half-step-down\')">Half Step Down <span class="tooltip-text">E♭ A♭ D♭ G♭ B♭ A♭</button> <button class="skill-option-buttons" onclick="changeTuning(\'full-step-down\')">Full Step Down <span class="tooltip-text">D G C F A D</button> <button class="skill-option-buttons" onclick="changeTuning(\'half-step-up\')">Half Step Up <span class="tooltip-text">F A# D# G# C F</button> </div> <div class="skill-display"> <div class="inner-display tuning-headstock"><div class="switch"><span class="slider"></span><h3>Loop</h3></div> <div class="note-circles1"><button class="note-button-third" >D</button> <button class="note-button-second" >A</button> <button class="note-button-first" >E</button> </div> <img src="Design/headstock.png" id="headstock"> <div class="note-circles2"> <button class="note-button-fourth" >G</button> <button class="note-button-fifth" >B</button> <button class="note-button-sixth" >e</button> </div> </div> </div> </div>';
        changeTuning('standard');
        function updateCircles() {
            var circleWidth = document.querySelector(".note-button-third").offsetHeight + "px";
            document.querySelector(".note-circles1").style.width = circleWidth;
            document.querySelector(".note-circles2").style.width = circleWidth;
            for (i = 0; i < 6; i++) {
                document.querySelector(".tuning-headstock").querySelectorAll("button")[i].style.width = circleWidth;
                document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                    var button = this;
                    for (i = 0; i < 6; i++) {
                        document.querySelector(".tuning-headstock").querySelectorAll("button")[i].style.backgroundImage = "linear-gradient(to bottom right, rgb(26, 26, 26), rgb(99, 99, 99))";
                    }
                    this.style.backgroundImage = "linear-gradient(to bottom left, rgb(4, 116, 4), rgb(13, 196, 19))";
                    if (toggled) {return;};
                    timeout = setTimeout(function() {
                        button.style.backgroundImage = "linear-gradient(to bottom right, rgb(26, 26, 26), rgb(99, 99, 99))";
                    }, 5000);

                });
            }
        }
        updateCircles();
        window.onresize = updateCircles;
        document.querySelector(".switch").addEventListener("click", function() {
            if (!toggled) {
                toggled = true;
                loopAudio(true);
                document.querySelector(".switch").style.backgroundColor = "dodgerblue";
                document.querySelector(".slider").style = "left: unset; right: 6%";
                window.clearTimeout(timeout);
            } else {
                toggled = false;
                loopAudio(false);
                pauseAudio();
                document.querySelector(".switch").style.backgroundColor = "darkgrey";
                document.querySelector(".slider").style = "left: 6%; right: unset";
                for (i = 0; i < 6; i++) {
                    document.querySelector(".tuning-headstock").querySelectorAll("button")[i].style.backgroundImage = "linear-gradient(to bottom right, rgb(26, 26, 26), rgb(99, 99, 99))";
                }
            }

        });
    }
    if (tool == "metronome") {
        
    }
    if (tool == "chord-charts") {
        
    }
    if (tool == "chord-progression") {
        
    }
}
//tuner shit
function changeTuning(tuning) {
    if (tuning == "standard") {
        document.querySelector(".note-button-first").innerHTML = "E";
        document.querySelector(".note-button-second").innerHTML = "A";
        document.querySelector(".note-button-third").innerHTML = "D";
        document.querySelector(".note-button-fourth").innerHTML = "G";
        document.querySelector(".note-button-fifth").innerHTML = "B";
        document.querySelector(".note-button-sixth").innerHTML = "e";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.e2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.a2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.d3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.g3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.b3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.e4.play();
                } 
            });
        }
    } if (tuning == "drop-d") {
        document.querySelector(".note-button-first").innerHTML = "D";
        document.querySelector(".note-button-second").innerHTML = "A";
        document.querySelector(".note-button-third").innerHTML = "D";
        document.querySelector(".note-button-fourth").innerHTML = "G";
        document.querySelector(".note-button-fifth").innerHTML = "B";
        document.querySelector(".note-button-sixth").innerHTML = "e";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.d2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.a2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.d3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.g3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.b3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.e4.play();
                } 
            });
        }
    } if (tuning == "drop-c#") {
        document.querySelector(".note-button-first").innerHTML = "C#";
        document.querySelector(".note-button-second").innerHTML = "A";
        document.querySelector(".note-button-third").innerHTML = "D";
        document.querySelector(".note-button-fourth").innerHTML = "G";
        document.querySelector(".note-button-fifth").innerHTML = "B";
        document.querySelector(".note-button-sixth").innerHTML = "e";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.db2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.a2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.d3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.g3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.b3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.e4.play();
                } 
            });
        }
    } if (tuning == "drop-c") {
        document.querySelector(".note-button-first").innerHTML = "C";
        document.querySelector(".note-button-second").innerHTML = "G";
        document.querySelector(".note-button-third").innerHTML = "C";
        document.querySelector(".note-button-fourth").innerHTML = "F";
        document.querySelector(".note-button-fifth").innerHTML = "A";
        document.querySelector(".note-button-sixth").innerHTML = "D";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.c2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.g2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.c3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.f3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.a3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.d4.play();
                } 
            });
        }
    } if (tuning == "drop-b") {
        document.querySelector(".note-button-first").innerHTML = "B";
        document.querySelector(".note-button-second").innerHTML = "G♭";
        document.querySelector(".note-button-third").innerHTML = "B";
        document.querySelector(".note-button-fourth").innerHTML = "E";
        document.querySelector(".note-button-fifth").innerHTML = "A♭";
        document.querySelector(".note-button-sixth").innerHTML = "D♭";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.b1.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.gb2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.b2.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.e3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.ab3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.db4.play();
                } 
            });
        }
    } if (tuning == "drop-a") {
        document.querySelector(".note-button-first").innerHTML = "A";
        document.querySelector(".note-button-second").innerHTML = "E";
        document.querySelector(".note-button-third").innerHTML = "A";
        document.querySelector(".note-button-fourth").innerHTML = "D";
        document.querySelector(".note-button-fifth").innerHTML = "G♭";
        document.querySelector(".note-button-sixth").innerHTML = "B";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.a1.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.e2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.a2.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.d3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.gb3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.b3.play();
                } 
            });
        }
    } if (tuning == "dadgad") {
        document.querySelector(".note-button-first").innerHTML = "D";
        document.querySelector(".note-button-second").innerHTML = "A";
        document.querySelector(".note-button-third").innerHTML = "D";
        document.querySelector(".note-button-fourth").innerHTML = "G";
        document.querySelector(".note-button-fifth").innerHTML = "A";
        document.querySelector(".note-button-sixth").innerHTML = "D";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.d2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.a2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.d3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.g3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.a3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.d4.play();
                }  
            });
        }
    } if (tuning == "half-step-down") {
        document.querySelector(".note-button-first").innerHTML = "E♭";
        document.querySelector(".note-button-second").innerHTML = "A♭";
        document.querySelector(".note-button-third").innerHTML = "D♭";
        document.querySelector(".note-button-fourth").innerHTML = "G♭";
        document.querySelector(".note-button-fifth").innerHTML = "B♭";
        document.querySelector(".note-button-sixth").innerHTML = "D♭";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.eb2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.ab2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.db3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.gb3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.bb3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.eb4.play();
                } 
            });
        }
    } if (tuning == "full-step-down") {
        document.querySelector(".note-button-first").innerHTML = "D";
        document.querySelector(".note-button-second").innerHTML = "G";
        document.querySelector(".note-button-third").innerHTML = "C";
        document.querySelector(".note-button-fourth").innerHTML = "F";
        document.querySelector(".note-button-fifth").innerHTML = "A";
        document.querySelector(".note-button-sixth").innerHTML = "D";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.d2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.g2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.c3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.f3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.a3.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.d4.play();
                } 
            });
        }
    } if (tuning == "half-step-up") {
        document.querySelector(".note-button-first").innerHTML = "F";
        document.querySelector(".note-button-second").innerHTML = "A#";
        document.querySelector(".note-button-third").innerHTML = "D#";
        document.querySelector(".note-button-fourth").innerHTML = "G#";
        document.querySelector(".note-button-fifth").innerHTML = "C";
        document.querySelector(".note-button-sixth").innerHTML = "F";
        for (i = 0; i < 6; i++) {
            document.querySelector(".tuning-headstock").querySelectorAll("button")[i].addEventListener("click", function() {
                if (this.classList[0] == "note-button-first") {
                    pauseAudio();
                    note.f2.play();
                } if (this.classList[0] == "note-button-second") {
                    pauseAudio();
                    note.bb2.play();
                } if (this.classList[0] == "note-button-third") {
                    pauseAudio();
                    note.eb3.play();
                } if (this.classList[0] == "note-button-fourth") {
                    pauseAudio();
                    note.ab3.play();
                } if (this.classList[0] == "note-button-fifth") {
                    pauseAudio();
                    note.c4.play();
                } if (this.classList[0] == "note-button-sixth") {
                    pauseAudio();
                    note.f4.play();
                } 
            });
        }
    }
}
//note recognition shiitittttt
function noteRecStart(back) {
    if (!noteRecStarted) {
        if (back == "yes") {return;}
        noteRecStarted = true;
        noteRecPoints = 0;
        document.querySelector(".note-rec>p").innerHTML = "Points: " + pitchRecPoints;
        document.querySelector(".note-rec-start").innerHTML = "Stop";
        document.querySelector(".note-rec-start").style.backgroundImage = "linear-gradient(to bottom left, red, rgb(139, 4, 4)";
        document.querySelector(".note-image").style.visibility = "visible";
        document.querySelector(".rec-title").style.display = "none";
        noteRecNextLevel(pitchRecDifficulty);
    } else {
        noteRecStarted = false;
        if (back == "yes") {return;}
        document.querySelector(".note-rec-start").innerHTML = "Start";
        document.querySelector(".note-rec-start").style.backgroundImage = "linear-gradient(to bottom right, rgb(46, 252, 46), green)";
        document.querySelector(".rec-title").style.display = "block";
        document.querySelector(".rec-title").innerHTML = "Note Recognition - " + pitchRecDifficulty;
        interval = null;
        document.querySelector(".note-image").style.visibility = "hidden";
        document.querySelector(".note-image").setAttribute("src", "");
        document.querySelector(".c").innerHTML = noteName.c;
        document.querySelector(".d").innerHTML = noteName.d;
        document.querySelector(".e").innerHTML = noteName.e;
        document.querySelector(".f").innerHTML = noteName.f;
        document.querySelector(".g").innerHTML = noteName.g;
        document.querySelector(".a").innerHTML = noteName.a;
        document.querySelector(".b").innerHTML = noteName.b;
        document.querySelector(".db").innerHTML = noteName.db;
        document.querySelector(".eb").innerHTML = noteName.eb;
        document.querySelector(".gb").innerHTML = noteName.gb;
        document.querySelector(".ab").innerHTML = noteName.ab;
        document.querySelector(".bb").innerHTML = noteName.bb;

    }
}
function noteRecNextLevel(difficulty) {
    pitchRecLevel++;    
    if (difficulty == "easy") {
        var n = Math.floor(Math.random() * 7 + 1);
        if (n == 1) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c4.png");
        } if (n == 2) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d4.png");
        } if (n == 3) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e4.png");
        } if (n == 4) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f4.png");
        } if (n == 5) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g4.png");
        } if (n == 6) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a4.png");
        } if (n == 7) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b4.png");
        } 

    } if (difficulty == "medium") {
        var n = Math.floor(Math.random() * 14 + 1);
        if (n == 1) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c4.png");
        } if (n == 2) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d4.png");
        } if (n == 3) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e4.png");
        } if (n == 4) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f4.png");
        } if (n == 5) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g4.png");
        } if (n == 6) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a4.png");
        } if (n == 7) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b4.png");
        } if (n == 8) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c5.png");
        } if (n == 9) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d5.png");
        } if (n == 10) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e5.png");
        } if (n == 11) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f5.png");
        } if (n == 12) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g5.png");
        } if (n == 13) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a5.png");
        } if (n == 14) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b5.png");
        }
    } if (difficulty == "hard") {
        var n = Math.floor(Math.random() * 51 + 1);
        if (n == 1) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c3.png");
        } if (n == 2) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d3.png");
        } if (n == 3) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e3.png");
        } if (n == 4) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f3.png");
        } if (n == 5) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g3.png");
        } if (n == 6) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a3.png");
        } if (n == 7) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b3.png");
        } if (n == 8) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c4.png");
        } if (n == 9) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d4.png");
        } if (n == 10) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e4.png");
        } if (n == 11) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f4.png");
        } if (n == 12) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g4.png");
        } if (n == 13) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a4.png");
        } if (n == 14) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b4.png");
        } if (n == 15) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c5.png");
        } if (n == 16) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d5.png");
        } if (n == 17) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e5.png");
        } if (n == 18) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f5.png");
        } if (n == 19) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g5.png");
        } if (n == 20) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a5.png");
        } if (n == 21) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b5.png");
        } if (n == 22) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 23) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 24) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 25) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 26) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 27) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 28) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 29) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 30) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 31) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 32) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 33) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 34) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 35) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 36) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        } if (n == 37) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 38) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 39) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 40) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 41) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 42) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 43) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 44) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 45) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 46) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 47) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 48) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 49) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 50) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 51) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        }
    } if (difficulty == "extreme") {
        var n = Math.floor(Math.random() * 70 +1);
        for (i = 0; i < 12; i++) {
            document.querySelectorAll(".key")[i].innerHTML = "";
        }
        if (n == 1) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c3.png");
        } if (n == 2) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d3.png");
        } if (n == 3) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e3.png");
        } if (n == 4) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f3.png");
        } if (n == 5) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g3.png");
        } if (n == 6) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a3.png");
        } if (n == 7) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b3.png");
        } if (n == 8) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c4.png");
        } if (n == 9) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d4.png");
        } if (n == 10) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e4.png");
        } if (n == 11) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f4.png");
        } if (n == 12) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g4.png");
        } if (n == 13) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a4.png");
        } if (n == 14) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b4.png");
        } if (n == 15) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c5.png");
        } if (n == 16) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d5.png");
        } if (n == 17) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e5.png");
        } if (n == 18) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f5.png");
        } if (n == 19) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g5.png");
        } if (n == 20) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a5.png");
        } if (n == 21) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b5.png");
        } if (n == 22) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 23) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 24) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 25) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 26) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 27) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 28) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 29) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 30) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 31) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 32) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 33) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 34) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 35) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 36) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        } if (n == 37) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 38) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 39) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 40) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 41) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 42) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 43) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 44) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 45) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 46) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 47) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 48) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 49) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 50) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 51) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        } if (n == 52) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c2.png");
        } if (n == 53) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d2.png");
        } if (n == 54) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e2.png");
        } if (n == 55) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f2.png");
        } if (n == 56) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g2.png");
        } if (n == 57) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a2.png");
        } if (n == 58) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b2.png");
        } if (n == 59) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c3.png");
        } if (n == 60) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d3.png");
        } if (n == 61) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e3.png");
        } if (n == 62) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f3.png");
        } if (n == 63) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g3.png");
        } if (n == 64) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a3.png");
        } if (n == 65) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b3.png");
        } if (n == 66) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db2.png");
        } if (n == 67) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb2.png");
        } if (n == 68) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb2.png");
        } if (n == 69) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab2.png");
        } if (n == 70) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb2.png");
        } if (n == 71) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db3.png");
        } if (n == 72) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb3.png");
        } if (n == 73) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb3.png");
        } if (n == 74) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab3.png");
        } if (n == 75) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb3.png");
        } if (n == 76) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db4.png");
        } if (n == 77) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb4.png");
        } if (n == 78) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb4.png");
        } if (n == 79) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab4.png");
        } if (n == 80) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb4.png");
        } if (n == 81) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db2.png");
        } if (n == 82) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb2.png");
        } if (n == 83) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb2.png");
        } if (n == 84) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab2.png");
        } if (n == 85) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb2.png");
        } if (n == 86) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db3.png");
        } if (n == 87) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb3.png");
        } if (n == 88) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb3.png");
        } if (n == 89) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab3.png");
        } if (n == 90) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb3.png");
        } if (n == 91) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db4.png");
        } if (n == 92) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb4.png");
        } if (n == 93) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb4.png");
        } if (n == 94) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab4.png");
        } if (n == 95) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb4.png");
        
        }
   
    } if (difficulty == "insane") {
        var n = Math.floor(Math.random() * 133 +1);
        for (i = 0; i < 12; i++) {
            document.querySelectorAll(".key")[i].innerHTML = "";
        }
        if (n == 1) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c3.png");
        } if (n == 2) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d3.png");
        } if (n == 3) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e3.png");
        } if (n == 4) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f3.png");
        } if (n == 5) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g3.png");
        } if (n == 6) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a3.png");
        } if (n == 7) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b3.png");
        } if (n == 8) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c4.png");
        } if (n == 9) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d4.png");
        } if (n == 10) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e4.png");
        } if (n == 11) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f4.png");
        } if (n == 12) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g4.png");
        } if (n == 13) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a4.png");
        } if (n == 14) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b4.png");
        } if (n == 15) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c5.png");
        } if (n == 16) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d5.png");
        } if (n == 17) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e5.png");
        } if (n == 18) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f5.png");
        } if (n == 19) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g5.png");
        } if (n == 20) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a5.png");
        } if (n == 21) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b5.png");
        } if (n == 22) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c6.png");
        } if (n == 23) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/d6.png");
        } if (n == 24) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/e6.png");
        } if (n == 25) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/f6.png");
        } if (n == 26) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/g6.png");
        } if (n == 134) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/a6.png");
        } if (n == 135) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/b6.png");
        } if (n == 136) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/c7.png");
        } if (n == 137) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 138) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 27) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 28) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 29) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 30) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 31) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 32) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 33) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 34) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 35) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 36) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 37) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 38) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 39) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        } if (n == 40) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db6.png");
        } if (n == 41) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb6.png");
        } if (n == 42) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb6.png");
        } if (n == 43) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab6.png");
        } if (n == 44) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb6.png");
        } if (n == 45) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db3.png");
        } if (n == 46) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb3.png");
        } if (n == 47) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb3.png");
        } if (n == 48) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab3.png");
        } if (n == 49) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb3.png");
        } if (n == 50) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db4.png");
        } if (n == 51) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb4.png");
        } if (n == 52) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb4.png");
        } if (n == 53) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab4.png");
        } if (n == 54) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb4.png");
        } if (n == 55) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db5.png");
        } if (n == 56) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb5.png");
        } if (n == 57) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb5.png");
        } if (n == 58) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab5.png");
        } if (n == 59) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb5.png");
        } if (n == 60) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db6.png");
        } if (n == 61) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/eb6.png");
        } if (n == 62) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/gb6.png");
        } if (n == 63) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/ab6.png");
        } if (n == 64) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/bb6.png");
        } if (n == 65) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/db7.png");
        } if (n == 66) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c1.png");
        } if (n == 67) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d1.png");
        } if (n == 68) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e1.png");
        } if (n == 69) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f1.png");
        } if (n == 70) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g1.png");
        } if (n == 71) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a1.png");
        } if (n == 72) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b1.png");
        } if (n == 73) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c2.png");
        } if (n == 74) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d2.png");
        } if (n == 75) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e2.png");
        } if (n == 76) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f2.png");
        } if (n == 77) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g2.png");
        } if (n == 78) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a2.png");
        } if (n == 79) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b2.png");
        } if (n == 80) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c3.png");
        } if (n == 81) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d3.png");
        } if (n == 82) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e3.png");
        } if (n == 83) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f3.png");
        } if (n == 84) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g3.png");
        } if (n == 85) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a3.png");
        } if (n == 86) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b3.png");
        } if (n == 87) {
            currentNote = "c";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-c4.png");
        } if (n == 88) {
            currentNote = "d";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-d4.png");
        } if (n == 89) {
            currentNote = "e";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-e4.png");
        } if (n == 90) {
            currentNote = "f";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-f4.png");
        } if (n == 91) {
            currentNote = "g";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-g4.png");
        } if (n == 92) {
            currentNote = "a";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-a4.png");
        } if (n == 93) {
            currentNote = "b";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-b4.png");
        } if (n == 94) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db1.png");
        } if (n == 95) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb1.png");
        } if (n == 96) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb1.png");
        } if (n == 97) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab1.png");
        } if (n == 98) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb1.png");
        } if (n == 99) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db2.png");
        } if (n == 100) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb2.png");
        } if (n == 101) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb2.png");
        } if (n == 102) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab2.png");
        } if (n == 103) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb2.png");
        } if (n == 104) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db3.png");
        } if (n == 105) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb3.png");
        } if (n == 106) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb3.png");
        } if (n == 107) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab3.png");
        } if (n == 108) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb3.png");
        } if (n == 109) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db4.png");
        } if (n == 110) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb4.png");
        } if (n == 111) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb4.png");
        } if (n == 112) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab4.png");
        } if (n == 113) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb4.png");
        } if (n == 114) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db1.png");
        } if (n == 115) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb1.png");
        } if (n == 116) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb1.png");
        } if (n == 117) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab1.png");
        } if (n == 118) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb1.png");
        } if (n == 119) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db2.png");
        } if (n == 120) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb2.png");
        } if (n == 121) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb2.png");
        } if (n == 122) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab2.png");
        } if (n == 123) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb2.png");
        } if (n == 124) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db3.png");
        } if (n == 125) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb3.png");
        } if (n == 126) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb3.png");
        } if (n == 127) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab3.png");
        } if (n == 128) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb3.png");
        } if (n == 129) {
            currentNote = "db";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-db4.png");
        } if (n == 130) {
            currentNote = "eb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-eb4.png");
        } if (n == 131) {
            currentNote = "gb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-gb4.png");
        } if (n == 132) {
            currentNote = "ab";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-ab4.png");
        } if (n == 133) {
            currentNote = "bb";
document.querySelector(".note-image").setAttribute("src", "Design/note-recognition/fkey-bb4.png");
        
        }
    }
}
//-----------------------------------------------------

//pitch recognition shiiiitttt-------------------------
function changeDifficulty(difficulty, kind) {
    pitchRecDifficulty = difficulty;
    if (kind == "pitch") {
        document.querySelector(".rec-title").innerHTML = "Pitch Recognition - " + pitchRecDifficulty;
    } if (kind == "note") {
        document.querySelector(".rec-title").innerHTML = "Note Recognition - " + pitchRecDifficulty;   
    }
    if (pitchRecStarted) {
        pitchRecStart();
        pitchRecPoints = 0;
    }
    if (noteRecStarted) {
        noteRecStart();
        noteRecPoints = 0;
    }
    if (difficulty == "easy") {
        document.querySelector(".difficulty-easy-button").style.boxShadow = "0 0 0 0.5vw darkblue";
        document.querySelector(".difficulty-easy-button").style.margin = "1.04vw auto 0.5vw auto";
        document.querySelector(".difficulty-medium-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-medium-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-hard-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-hard-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-extreme-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-extreme-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-insane-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-insane-button").style.margin = "0.78vw auto 0.78vw auto";
    }
    if (difficulty == "medium") {
        document.querySelector(".difficulty-easy-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-easy-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-medium-button").style.boxShadow = "0 0 0 0.5vw darkblue";
        document.querySelector(".difficulty-medium-button").style.margin = "1.04vw auto 0.5vw auto";
        document.querySelector(".difficulty-hard-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-hard-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-extreme-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-extreme-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-insane-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-insane-button").style.margin = "0.78vw auto 0.78vw auto";
    }
    if (difficulty == "hard") {
        document.querySelector(".difficulty-easy-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-easy-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-medium-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-medium-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-hard-button").style.boxShadow = "0 0 0 0.5vw darkblue";
        document.querySelector(".difficulty-hard-button").style.margin = "1.04vw auto 0.5vw auto";
        document.querySelector(".difficulty-extreme-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-extreme-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-insane-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-insane-button").style.margin = "0.78vw auto 0.78vw auto";
    }
    if (difficulty == "extreme") {
        document.querySelector(".difficulty-easy-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-easy-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-medium-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-medium-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-hard-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-hard-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-extreme-button").style.boxShadow = "0 0 0 0.5vw darkblue";
        document.querySelector(".difficulty-extreme-button").style.margin = "1.04vw auto 0.5vw auto";
        document.querySelector(".difficulty-insane-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-insane-button").style.margin = "0.78vw auto 0.78vw auto";
    }
    if (difficulty == "insane") {
        document.querySelector(".difficulty-easy-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-easy-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-medium-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-medium-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-hard-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-hard-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-extreme-button").style.boxShadow = "0.5vw 0.5vw";
        document.querySelector(".difficulty-extreme-button").style.margin = "0.78vw auto 0.78vw auto";
        document.querySelector(".difficulty-insane-button").style.boxShadow = "0 0 0 0.5vw darkblue";
        document.querySelector(".difficulty-insane-button").style.margin = "1.04vw auto 0.5vw auto";
    }

}
function pitchRecStart(back) {
    if (!pitchRecStarted) {
        if (back == "yes") {return;}
        pitchRecStarted = true;
        pitchRecPoints = 0;
        document.querySelector(".pitch-rec>p").innerHTML = "Points: " + pitchRecPoints;
        document.querySelector(".pitch-rec-start").innerHTML = "Stop";
        document.querySelector(".pitch-rec-start").style.backgroundImage = "linear-gradient(to bottom left, red, rgb(139, 4, 4)";
        pitchRecNextLevel(pitchRecDifficulty);
    } else {
        pitchRecStarted = false;
        pauseAudio();
        pitchRecLevel = 0;
        if (back == "yes") {return;}
        document.querySelector(".pitch-rec-start").innerHTML = "Start";
        document.querySelector(".pitch-rec-start").style.backgroundImage = "linear-gradient(to bottom right, rgb(46, 252, 46), green)";
        document.querySelector(".rec-title").innerHTML = "Pitch Recognition - " + pitchRecDifficulty;
        document.querySelector(".c").innerHTML = noteName.c;
        document.querySelector(".d").innerHTML = noteName.d;
        document.querySelector(".e").innerHTML = noteName.e;
        document.querySelector(".f").innerHTML = noteName.f;
        document.querySelector(".g").innerHTML = noteName.g;
        document.querySelector(".a").innerHTML = noteName.a;
        document.querySelector(".b").innerHTML = noteName.b;
        document.querySelector(".db").innerHTML = noteName.db;
        document.querySelector(".eb").innerHTML = noteName.eb;
        document.querySelector(".gb").innerHTML = noteName.gb;
        document.querySelector(".ab").innerHTML = noteName.ab;
        document.querySelector(".bb").innerHTML = noteName.bb;
    }
}
function pitchRecNextLevel(difficulty) {
    pitchRecLevel++;    
    pauseAudio();
    if (difficulty == "easy") {
        var n = Math.floor(Math.random() * 7 + 1);
        if (n == 1) {
            note.c4.play();
            currentNote = "c";
        } if (n == 2) {
            note.d4.play();
            currentNote = "d";
        } if (n == 3) {
            note.e4.play();
            currentNote = "e";
        } if (n == 4) {
            note.f4.play();
            currentNote = "f";
        } if (n == 5) {
            note.g4.play();
            currentNote = "g";
        } if (n == 6) {
            note.a4.play();
            currentNote = "a";
        } if (n == 7) {
            note.b4.play();
            currentNote = "b";
        } 
    } if (difficulty == "medium") {
        var n = Math.floor(Math.random() * 12 + 1);
        if (n == 1) {
            note.c4.play();
            currentNote = "c";
        } if (n == 2) {
            note.d4.play();
            currentNote = "d";
        } if (n == 3) {
            note.e4.play();
            currentNote = "e";
        } if (n == 4) {
            note.f4.play();
            currentNote = "f";
        } if (n == 5) {
            note.g4.play();
            currentNote = "g";
        } if (n == 6) {
            note.a4.play();
            currentNote = "a";
        } if (n == 7) {
            note.b4.play();
            currentNote = "b";
        } if (n == 8) {
            note.db4.play();
            currentNote = "db";
        } if (n == 9) {
            note.eb4.play();
            currentNote = "eb";
        } if (n == 10) {
            note.gb4.play();
            currentNote = "gb";
        } if (n == 11) {
            note.ab4.play();
            currentNote = "ab";
        } if (n == 12) {
            note.bb4.play();
            currentNote = "bb";
        }

    } if (difficulty == "hard") {
        var n = Math.floor(Math.random() * 21 + 1);
        if (n == 1) {
            note.c3.play();
            currentNote = "c";
        } if (n == 2) {
            note.d3.play();
            currentNote = "d";
        } if (n == 3) {
            note.e3.play();
            currentNote = "e";
        } if (n == 4) {
            note.f3.play();
            currentNote = "f";
        } if (n == 5) {
            note.g3.play();
            currentNote = "g";
        } if (n == 6) {
            note.a3.play();
            currentNote = "a";
        } if (n == 7) {
            note.b3.play();
            currentNote = "b";
        } if (n == 8) {
            note.c4.play();
            currentNote = "c";
        } if (n == 9) {
            note.d4.play();
            currentNote = "d";
        } if (n == 10) {
            note.e4.play();
            currentNote = "e"; 
        } if (n == 11) {
            note.f4.play();
            currentNote = "f";
        } if (n == 12) {
            note.g4.play();
            currentNote = "g";
        } if (n == 13) {
            note.a4.play();
            currentNote = "a"; 
        } if (n == 14) {
            note.b4.play();
            currentNote = "b";
        } if (n == 15) {
            note.c5.play();
            currentNote = "c";    
        } if (n == 16) {
            note.d5.play();
            currentNote = "d";    
        } if (n == 17) {
            note.e5.play();
            currentNote = "e";  
        } if (n == 18) {
            note.f5.play();
            currentNote = "f";  
        } if (n == 19) {
            note.g5.play();
            currentNote = "g";  
        } if (n == 20) {
            note.a5.play();
            currentNote = "a";  
        } if (n == 21) {
            note.b5.play();
            currentNote = "b";  
        }
    } if (difficulty == "extreme") {
        var n = Math.floor(Math.random() * 36 + 1);
        for (i = 0; i < 12; i++) {
            document.querySelectorAll(".key")[i].innerHTML = "";
        }
        if (n == 1) {
            note.c3.play();
            currentNote = "c";
        } if (n == 2) {
            note.d3.play();
            currentNote = "d";
        } if (n == 3) {
            note.e3.play();
            currentNote = "e";
        } if (n == 4) {
            note.f3.play();
            currentNote = "f";
        } if (n == 5) {
            note.g3.play();
            currentNote = "g";
        } if (n == 6) {
            note.a3.play();
            currentNote = "a";
        } if (n == 7) {
            note.b3.play();
            currentNote = "b";
        } if (n == 8) {
            note.c4.play();
            currentNote = "c";
        } if (n == 9) {
            note.d4.play();
            currentNote = "d";
        } if (n == 10) {
            note.e4.play();
            currentNote = "e"; 
        } if (n == 11) {
            note.f4.play();
            currentNote = "f";
        } if (n == 12) {
            note.g4.play();
            currentNote = "g";
        } if (n == 13) {
            note.a4.play();
            currentNote = "a"; 
        } if (n == 14) {
            note.b4.play();
            currentNote = "b";
        } if (n == 15) {
            note.c5.play();
            currentNote = "c";    
        } if (n == 16) {
            note.d5.play();
            currentNote = "d";    
        } if (n == 17) {
            note.e5.play();
            currentNote = "e";  
        } if (n == 18) {
            note.f5.play();
            currentNote = "f";  
        } if (n == 19) {
            note.g5.play();
            currentNote = "g";  
        } if (n == 20) {
            note.a5.play();
            currentNote = "a";  
        } if (n == 21) {
            note.b5.play();
            currentNote = "b";  
        } if (n == 22) {
            note.db3.play();
            currentNote = "db";
        } if (n == 23) {
            note.eb3.play();
            currentNote = "eb";
        } if (n == 24) {
            note.gb3.play();
            currentNote = "gb";
        } if (n == 25) {
            note.ab3.play();
            currentNote = "ab";
        } if (n == 26) {
            note.bb3.play();
            currentNote = "bb"; 
        } if (n == 27) {
            note.db4.play();
            currentNote = "db";
        } if (n == 28) {
            note.eb4.play();
            currentNote = "eb";
        } if (n == 29) {
            note.gb4.play();
            currentNote = "gb"; 
        } if (n == 30) {
            note.ab4.play();
            currentNote = "ab";
        } if (n == 31) {
            note.bb4.play();
            currentNote = "bb";    
        } if (n == 32) {
            note.db5.play();
            currentNote = "db";    
        } if (n == 33) {
            note.eb5.play();
            currentNote = "eb";  
        } if (n == 34) {
            note.gb5.play();
            currentNote = "gb";  
        } if (n == 35) {
            note.ab5.play();
            currentNote = "ab";  
        } if (n == 36) {
            note.bb5.play();
            currentNote = "bb";  
        }

    } if (difficulty == "insane") {
        var n = Math.floor(Math.random() * 72 + 1);
        for (i = 0; i < 12; i++) {
            document.querySelectorAll(".key")[i].innerHTML = "";
        }
        if (n == 1) {
            note.c1.play();
            currentNote = "c";
        } if (n == 2) {
            note.d1.play();
            currentNote = "d";
        } if (n == 3) {
            note.e1.play();
            currentNote = "e";
        } if (n == 4) {
            note.f1.play();
            currentNote = "f";
        } if (n == 5) {
            note.g1.play();
            currentNote = "g";
        } if (n == 6) {
            note.a1.play();
            currentNote = "a";
        } if (n == 7) {
            note.b1.play();
            currentNote = "b";
        } if (n == 8) {
            note.c2.play();
            currentNote = "c";
        } if (n == 9) {
            note.d2.play();
            currentNote = "d";
        } if (n == 10) {
            note.e2.play();
            currentNote = "e"; 
        } if (n == 11) {
            note.f2.play();
            currentNote = "f";
        } if (n == 12) {
            note.g2.play();
            currentNote = "g";
        } if (n == 13) {
            note.a2.play();
            currentNote = "a"; 
        } if (n == 14) {
            note.b2.play();
            currentNote = "b";
        } if (n == 15) {
            note.db1.play();
            currentNote = "db";    
        } if (n == 16) {
            note.eb1.play();
            currentNote = "eb";    
        } if (n == 17) {
            note.gb1.play();
            currentNote = "gb";  
        } if (n == 18) {
            note.ab1.play();
            currentNote = "ab";  
        } if (n == 19) {
            note.bb1.play();
            currentNote = "bb";  
        } if (n == 20) {
            note.db2.play();
            currentNote = "db";  
        } if (n == 21) {
            note.eb2.play();
            currentNote = "eb";  
        } if (n == 22) {
            note.gb2.play();
            currentNote = "gb";
        } if (n == 23) {
            note.ab2.play();
            currentNote = "ab";
        } if (n == 24) {
            note.bb2.play();
            currentNote = "bb";
        }if (n == 25) {
            note.c3.play();
            currentNote = "c";
        } if (n == 26) {
            note.d3.play();
            currentNote = "d";
        } if (n == 27) {
            note.e3.play();
            currentNote = "e";
        } if (n == 28) {
            note.f3.play();
            currentNote = "f";
        } if (n == 29) {
            note.g3.play();
            currentNote = "g";
        } if (n == 30) {
            note.a3.play();
            currentNote = "a";
        } if (n == 31) {
            note.b3.play();
            currentNote = "b";
        } if (n == 32) {
            note.c4.play();
            currentNote = "d";
        } if (n == 34) {
            note.e4.play();
            currentNote = "e"; 
        } if (n == 35) {
            note.f4.play();
            currentNote = "f";
        } if (n == 36) {
            note.g4.play();
            currentNote = "g";
        } if (n == 37) {
            note.a4.play();
            currentNote = "a"; 
        } if (n == 38) {
            note.b4.play();
            currentNote = "b";
        } if (n == 39) {
            note.c5.play();
            currentNote = "c";    
        } if (n == 40) {
            note.d5.play();
            currentNote = "d";    
        } if (n == 41) {
            note.e5.play();
            currentNote = "e";  
        } if (n == 42) {
            note.f5.play();
            currentNote = "f";  
        } if (n == 43) {
            note.g5.play();
            currentNote = "g";  
        } if (n == 44) {
            note.a5.play();
            currentNote = "a";  
        } if (n == 45) {
            note.b5.play();
            currentNote = "b";  
        } if (n == 46) {
            note.db3.play();
            currentNote = "db";
        } if (n == 47) {
            note.eb3.play();
            currentNote = "eb";
        } if (n == 48) {
            note.gb3.play();
            currentNote = "gb";
        } if (n == 49) {
            note.ab3.play();
            currentNote = "ab";
        } if (n == 50) {
            note.bb3.play();
            currentNote = "bb"; 
        } if (n == 51) {
            note.db4.play();
            currentNote = "db";
        } if (n == 52) {
            note.eb4.play();
            currentNote = "eb";
        } if (n == 53) {
            note.gb4.play();
            currentNote = "gb"; 
        } if (n == 54) {
            note.ab4.play();
            currentNote = "ab";
        } if (n == 55) {
            note.bb4.play();
            currentNote = "bb";    
        } if (n == 56) {
            note.db5.play();
            currentNote = "db";    
        } if (n == 57) {
            note.eb5.play();
            currentNote = "eb";  
        } if (n == 58) {
            note.gb5.play();
            currentNote = "gb";  
        } if (n == 59) {
            note.ab5.play();
            currentNote = "ab";  
        } if (n == 60) {
            note.bb5.play();
            currentNote = "bb";  
        } if (n == 61) {
            note.c6.play();
            currentNote = "c";
        } if (n == 62) {
            note.d6.play();
            currentNote = "d";
        } if (n == 63) {
            note.e6.play();
            currentNote = "e"; 
        } if (n == 64) {
            note.f6.play();
            currentNote = "f";
        } if (n == 65) {
            note.g6.play();
            currentNote = "g";
        } if (n == 66) {
            note.a6.play();
            currentNote = "a"; 
        } if (n == 67) {
            note.b6.play();
            currentNote = "b";
        } if (n == 68) {
            note.db6.play();
            currentNote = "db";    
        } if (n == 69) {
            note.eb6.play();
            currentNote = "eb";    
        } if (n == 70) {
            note.gb6.play();
            currentNote = "gb";  
        } if (n == 71) {
            note.ab6.play();
            currentNote = "ab";  
        } if (n == 72) {
            note.bb6.play();
            currentNote = "ab";  
        } 

    }
}

//audio shit
function pauseAudio() {
    note.c4key.pause();
    note.d4key.pause();
    note.e4key.pause();
    note.f4key.pause();
    note.g4key.pause();
    note.a4key.pause();
    note.b4key.pause();
    note.db4key.pause();
    note.eb4key.pause();
    note.gb4key.pause();
    note.ab4key.pause();
    note.bb4key.pause();

    note.a1.pause();
    note.a2.pause();
    note.a3.pause();
    note.a4.pause();
    note.a5.pause();
    note.a6.pause();
    note.b1.pause();
    note.b2.pause();
    note.b3.pause();
    note.b4.pause();
    note.b5.pause();
    note.b6.pause();
    note.c1.pause();
    note.c2.pause();
    note.c3.pause();
    note.c4.pause();
    note.c5.pause();
    note.c6.pause();
    note.d1.pause();
    note.d2.pause();
    note.d3.pause();
    note.d4.pause();
    note.d5.pause();
    note.d6.pause();
    note.e1.pause();
    note.e2.pause();
    note.e3.pause();
    note.e4.pause();
    note.e5.pause();
    note.e6.pause();
    note.f1.pause();
    note.f2.pause();
    note.f3.pause();
    note.f4.pause();
    note.f5.pause();
    note.f6.pause();
    note.g1.pause();
    note.g2.pause();
    note.g3.pause();
    note.g4.pause();
    note.g5.pause();
    note.g6.pause();

    note.ab1.pause();
    note.ab2.pause();
    note.ab3.pause();
    note.ab4.pause();
    note.ab5.pause();
    note.ab6.pause();
    note.bb1.pause();
    note.bb2.pause();
    note.bb3.pause();
    note.bb4.pause();
    note.bb5.pause();
    note.bb6.pause();
    note.db1.pause();
    note.db2.pause();
    note.db3.pause();
    note.db4.pause();
    note.db5.pause();
    note.db6.pause();
    note.eb1.pause();
    note.eb2.pause();
    note.eb3.pause();
    note.eb4.pause();
    note.eb5.pause();
    note.eb6.pause();
    note.gb1.pause();
    note.gb2.pause();
    note.gb3.pause();
    note.gb4.pause();
    note.gb5.pause();
    note.gb6.pause();
    note.a1.currentTime = 0;
    note.a2.currentTime = 0;
    note.a3.currentTime = 0;
    note.a4.currentTime = 0;
    note.a5.currentTime = 0;
    note.a6.currentTime = 0;
    note.b1.currentTime = 0;
    note.b2.currentTime = 0;
    note.b3.currentTime = 0;
    note.b4.currentTime = 0;
    note.b5.currentTime = 0;
    note.b6.currentTime = 0;
    note.c1.currentTime = 0;
    note.c2.currentTime = 0;
    note.c3.currentTime = 0;
    note.c4.currentTime = 0;
    note.c5.currentTime = 0;
    note.c6.currentTime = 0;
    note.d1.currentTime = 0;
    note.d2.currentTime = 0;
    note.d3.currentTime = 0;
    note.d4.currentTime = 0;
    note.d5.currentTime = 0;
    note.d6.currentTime = 0;
    note.e1.currentTime = 0;
    note.e2.currentTime = 0;
    note.e3.currentTime = 0;
    note.e4.currentTime = 0;
    note.e5.currentTime = 0;
    note.e6.currentTime = 0;
    note.f1.currentTime = 0;
    note.f2.currentTime = 0;
    note.f3.currentTime = 0;
    note.f4.currentTime = 0;
    note.f5.currentTime = 0;
    note.f6.currentTime = 0;
    note.g1.currentTime = 0;
    note.g2.currentTime = 0;
    note.g3.currentTime = 0;
    note.g4.currentTime = 0;
    note.g5.currentTime = 0;
    note.g6.currentTime = 0;

    note.ab1.currentTime = 0;
    note.ab2.currentTime = 0;
    note.ab3.currentTime = 0;
    note.ab4.currentTime = 0;
    note.ab5.currentTime = 0;
    note.ab6.currentTime = 0;
    note.bb1.currentTime = 0;
    note.bb2.currentTime = 0;
    note.bb3.currentTime = 0;
    note.bb4.currentTime = 0;
    note.bb5.currentTime = 0;
    note.bb6.currentTime = 0;
    note.db1.currentTime = 0;
    note.db2.currentTime = 0;
    note.db3.currentTime = 0;
    note.db4.currentTime = 0;
    note.db5.currentTime = 0;
    note.db6.currentTime = 0;
    note.eb1.currentTime = 0;
    note.eb2.currentTime = 0;
    note.eb3.currentTime = 0;
    note.eb4.currentTime = 0;
    note.eb5.currentTime = 0;
    note.eb6.currentTime = 0;
    note.gb1.currentTime = 0;
    note.gb2.currentTime = 0;
    note.gb3.currentTime = 0;
    note.gb4.currentTime = 0;
    note.gb5.currentTime = 0;
    note.gb6.currentTime = 0;
    note.c4key.currentTime = 0;
    note.d4key.currentTime = 0;
    note.e4key.currentTime = 0;
    note.f4key.currentTime = 0;
    note.g4key.currentTime = 0;
    note.a4key.currentTime = 0;
    note.b4key.currentTime = 0;
    note.db4key.currentTime = 0;
    note.eb4key.currentTime = 0;
    note.gb4key.currentTime = 0;
    note.ab4key.currentTime = 0;
    note.bb4key.currentTime = 0;

}
function loopAudio(boolean) {
    note.a1.loop = boolean;
    note.a2.loop = boolean;
    note.a3.loop = boolean;
    note.a4.loop = boolean;
    note.a5.loop = boolean;
    note.a6.loop = boolean;
    note.b1.loop = boolean;
    note.b2.loop = boolean;
    note.b3.loop = boolean;
    note.b4.loop = boolean;
    note.b5.loop = boolean;
    note.b6.loop = boolean;
    note.c1.loop = boolean;
    note.c2.loop = boolean;
    note.c3.loop = boolean;
    note.c4.loop = boolean;
    note.c5.loop = boolean;
    note.c6.loop = boolean;
    note.d1.loop = boolean;
    note.d2.loop = boolean;
    note.d3.loop = boolean;
    note.d4.loop = boolean;
    note.d5.loop = boolean;
    note.d6.loop = boolean;
    note.e1.loop = boolean;
    note.e2.loop = boolean;
    note.e3.loop = boolean;
    note.e4.loop = boolean;
    note.e5.loop = boolean;
    note.e6.loop = boolean;
    note.f1.loop = boolean;
    note.f2.loop = boolean;
    note.f3.loop = boolean;
    note.f4.loop = boolean;
    note.f5.loop = boolean;
    note.f6.loop = boolean;
    note.g1.loop = boolean;
    note.g2.loop = boolean;
    note.g3.loop = boolean;
    note.g4.loop = boolean;
    note.g5.loop = boolean;
    note.g6.loop = boolean;

    note.ab1.loop = boolean;
    note.ab2.loop = boolean;
    note.ab3.loop = boolean;
    note.ab4.loop = boolean;
    note.ab5.loop = boolean;
    note.ab6.loop = boolean;
    note.bb1.loop = boolean;
    note.bb2.loop = boolean;
    note.bb3.loop = boolean;
    note.bb4.loop = boolean;
    note.bb5.loop = boolean;
    note.bb6.loop = boolean;
    note.db1.loop = boolean;
    note.db2.loop = boolean;
    note.db3.loop = boolean;
    note.db4.loop = boolean;
    note.db5.loop = boolean;
    note.db6.loop = boolean;
    note.eb1.loop = boolean;
    note.eb2.loop = boolean;
    note.eb3.loop = boolean;
    note.eb4.loop = boolean;
    note.eb5.loop = boolean;
    note.eb6.loop = boolean;
    note.gb1.loop = boolean;
    note.gb2.loop = boolean;
    note.gb3.loop = boolean;
    note.gb4.loop = boolean;
    note.gb5.loop = boolean;
    note.gb6.loop = boolean;
}
//-----------------------------------------------------


//goes back to main menu from skill screens
function back() {
    document.querySelector("#skill-container").innerHTML = "";
    document.querySelector("#main-menu").style.display = "block";
    timerGoing = false;
    minutes = "10";
    seconds = "00";
    clearInterval(interval);
    pitchRecStart("yes");
    noteRecStart("yes");
}
//edit timer button 
function editTimer() {
    if (!timerGoing) {
            document.querySelector(".timer").innerHTML = "<input type='number' class='text-box' name='time' ></input>";
            document.querySelector(".text-box").focus();
    }
}
//changes timer colors
function updateListener() {
    document.querySelector(".timer").addEventListener("click", function() {
    if (!timerGoing) {
        timerGoing = true;
        document.querySelector(".timer").style.backgroundColor = "rgb(36, 155, 36)";
        document.querySelector(".timer").style.border = "0.4vw solid rgb(8, 90, 8)";
        document.querySelector(".timer-edit").style.backgroundColor = "rgb(51, 51, 51)";
        document.querySelector(".timer-edit").style.border = "0.4vw solid rgb(34, 34, 34)";
        document.querySelector(".timer-edit").style.cursor = "auto";
        startTimer();
    } else {
        timerGoing = false;
        document.querySelector(".timer").style.backgroundColor = "rgb(51, 51, 51)";
        document.querySelector(".timer").style.border = "0.4vw solid rgb(34, 34, 34)";
        document.querySelector(".timer-edit").style.backgroundColor = "rgb(36, 155, 36)";
        document.querySelector(".timer-edit").style.border = "0.4vw solid rgb(8, 90, 8)";
        document.querySelector(".timer-edit").style.cursor = "pointer";
        clearInterval(interval);
        alarm.pause();
    }

    });
    function startTimer() {
//starts timer

interval = setInterval(function() {
    if (seconds == 00) {
        minutes -= 1;
        seconds = 60;
    }
    seconds -= 1;
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".minutes").innerHTML = minutes;
    if (minutes < 10) {
        minutes = minutes.slice(1);
    }
    if (seconds < 10) {
        seconds = seconds.slice(1);
    }
    
    if (minutes == "0" && seconds == "0") {
        clearInterval(interval);
        timerEnded();
    }

}, 1000);
    }
    //detects when enter is pressed on the timer
    document.querySelector(".timer").addEventListener("keydown", function(e) {
        if (e.key == "Enter") {
            minutes = document.querySelector(".text-box").value;
            this.innerHTML = "<h3 class='minutes'>" + minutes +"</h3><h3>:</h3><h3 class='seconds'>00</h3>";
            seconds = "00";
        }
    });
}

function timerEnded() {
    alarm.play();
    alarmColors();
    function alarmColors() {
        if (!timerGoing) {return;}
        document.querySelector(".timer").style.backgroundColor = "red";
        document.querySelector(".timer").style.border = "0.4vw solid rgb(104, 12, 12)"
        setTimeout(function() {
            document.querySelector(".timer").style.backgroundColor = "rgb(51, 51, 51)";
            document.querySelector(".timer").style.border = "0.4vw solid rgb(34, 34, 34)"
            setTimeout(function() {
                alarmColors();
            }, 500)
        }, 500)
    }
}
//solos - bpm shit
function changeBpmNumber() {
    document.querySelector(".solo-bpm").value = document.querySelector(".solo-bpm-scrubber").value;
}
function changeRange() {
    document.querySelector(".solo-bpm-scrubber").value = document.querySelector(".solo-bpm").value;
}
function soloSpeedUp() {
    var num = Number(document.querySelector(".solo-bpm-scrubber").value);
    var numInteger = num / 5;

    document.querySelector(".solo-bpm-scrubber").value = num + 5;
    document.querySelector(".solo-bpm").value = document.querySelector(".solo-bpm-scrubber").value;
}
function soloSpeedDown() {
    var num = Number(document.querySelector(".solo-bpm-scrubber").value)    ;
    document.querySelector(".solo-bpm-scrubber").value = num - 5;
    document.querySelector(".solo-bpm").value = document.querySelector(".solo-bpm-scrubber").value;
}
function changeSoloSpeed() {
    var num = document.querySelector(".solo-bpm-scrubber").value / soloBpm;
    document.querySelector(".solo-audio").playbackRate = num;
}



function changeSolo(solo) {
    document.querySelector(".source").style.display = "none";
    document.querySelector(".solos-display").style.display = "block";
    document.querySelector(".guitar-1").style.display = "none";
    if (solo == "exist") {
        document.querySelector(".solo-title").innerHTML = "Exist";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Exist.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-exist-tab-s432185t5");
        document.querySelector(".solo-bpm").setAttribute("max", "190");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "190");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "190");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/exist/exist1-1.png"> <img class="tab-images" src="Design/exist/exist1-2.png"> <img class="tab-images" src="Design/exist/exist1-3.png"> <img class="tab-images" src="Design/exist/exist1-4.png"> <img class="tab-images" src="Design/exist/exist1-5.png"> <img class="tab-images" src="Design/exist/exist1-6.png"> <img class="tab-images" src="Design/exist/exist1-7.png"> <img class="tab-images" src="Design/exist/exist1-8.png"> <img class="tab-images" src="Design/exist/exist1-9.png">';
        soloBpm = 190;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "second-heartbeat") {
        document.querySelector(".solo-title").innerHTML = "Second Heartbeat";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Second-heartbeat.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-second-heartbeat-tab-s2116t0");
        document.querySelector(".solo-bpm").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "184");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/second-heartbeat1.png"> <img class="tab-images" src="Design/Solos/Images/second-heartbeat2.png"> <img class="tab-images" src="Design/Solos/Images/second-heartbeat3.png"> <img class="tab-images" src="Design/Solos/Images/second-heartbeat4.png">';
        soloBpm = 184;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "paradigm") {
        document.querySelector(".solo-title").innerHTML = "Paradigm";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Paradigm.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-paradigm-tab-s424670t4");
        document.querySelector(".solo-bpm").setAttribute("max", "97");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "97");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "97");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/paradigm1.png"> <img class="tab-images" src="Design/Solos/Images/paradigm2.png"> <img class="tab-images" src="Design/Solos/Images/paradigm3.png"> <img class="tab-images" src="Design/Solos/Images/paradigm4.png"> <img class="tab-images" src="Design/Solos/Images/paradigm5.png">';
        soloBpm = 97;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "heretic") {
        document.querySelector(".solo-title").innerHTML = "Heretic";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Heretic.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.youtube.com/watch?v=0NgB8ZPkGhw");
        document.querySelector(".solo-bpm").setAttribute("max", "136");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "136");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "136");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/heretic1.png"> <img class="tab-images" src="Design/Solos/Images/heretic2.png"> <img class="tab-images" src="Design/Solos/Images/heretic3.png"> <img class="tab-images" src="Design/Solos/Images/heretic4.png"> <img class="tab-images" src="Design/Solos/Images/heretic5.png"> <img class="tab-images" src="Design/Solos/Images/heretic6.png"> <img class="tab-images" src="Design/Solos/Images/heretic7.png"> <img class="tab-images" src="Design/Solos/Images/heretic8.png"> <img class="tab-images" src="Design/Solos/Images/heretic9.png"> <img class="tab-images" src="Design/Solos/Images/heretic10.png"> <img class="tab-images" src="Design/Solos/Images/heretic11.png"> <img class="tab-images" src="Design/Solos/Images/heretic12.png"> <img class="tab-images" src="Design/Solos/Images/heretic13.png"> <img class="tab-images" src="Design/Solos/Images/heretic14.png"> <img class="tab-images" src="Design/Solos/Images/heretic15.png"> <img class="tab-images" src="Design/Solos/Images/heretic16.png"> <img class="tab-images" src="Design/Solos/Images/heretic17.png"> <img class="tab-images" src="Design/Solos/Images/heretic18.png"> <img class="tab-images" src="Design/Solos/Images/heretic19.png"> <img class="tab-images" src="Design/Solos/Images/heretic20.png"> </div>';
        soloBpm = 136;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "the-stage") {
        document.querySelector(".solo-title").innerHTML = "The Stage";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/The-stage.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-the-stage-tab-s415122t0");
        document.querySelector(".solo-bpm").setAttribute("max", "134");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "134");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "134");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/the-stage1.png"> <img class="tab-images" src="Design/Solos/Images/the-stage2.png"> <img class="tab-images" src="Design/Solos/Images/the-stage3.png"> <img class="tab-images" src="Design/Solos/Images/the-stage4.png"> <img class="tab-images" src="Design/Solos/Images/the-stage5.png"> <img class="tab-images" src="Design/Solos/Images/the-stage6.png"> <img class="tab-images" src="Design/Solos/Images/the-stage7.png"> <img class="tab-images" src="Design/Solos/Images/the-stage8.png"> <img class="tab-images" src="Design/Solos/Images/the-stage9.png"> <img class="tab-images" src="Design/Solos/Images/the-stage10.png"> <img class="tab-images" src="Design/Solos/Images/the-stage11.png"> <img class="tab-images" src="Design/Solos/Images/the-stage12.png"> <img class="tab-images" src="Design/Solos/Images/the-stage13.png"> <img class="tab-images" src="Design/Solos/Images/the-stage14.png"> <img class="tab-images" src="Design/Solos/Images/the-stage15.png"> </div>';
        soloBpm = 134;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "crimson-day") {
        document.querySelector(".solo-title").innerHTML = "Crimson Day";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Crimson-day.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-crimson-day-tab-s384530t2");
        document.querySelector(".solo-bpm").setAttribute("max", "134");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "134");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "134");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/crimson-day1.png"> <img class="tab-images" src="Design/Solos/Images/crimson-day2.png">';
        soloBpm = 134;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "coming-home") {
        document.querySelector(".solo-title").innerHTML = "Coming Home";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Coming-home.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-coming-home-tab-s384658t2");
        document.querySelector(".solo-bpm").setAttribute("max", "178");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "178");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "178");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/coming-home1.png"> <img class="tab-images" src="Design/Solos/Images/coming-home2.png"> <img class="tab-images" src="Design/Solos/Images/coming-home3.png"> <img class="tab-images" src="Design/Solos/Images/coming-home4.png"> <img class="tab-images" src="Design/Solos/Images/coming-home5.png"> <img class="tab-images" src="Design/Solos/Images/coming-home6.png"> <img class="tab-images" src="Design/Solos/Images/coming-home7.png"> <img class="tab-images" src="Design/Solos/Images/coming-home8.png">';
        soloBpm = 178;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "nightmare") {
        document.querySelector(".solo-title").innerHTML = "Nightmare";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Nightmare.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-nightmare-tab-s60268t2");
        document.querySelector(".solo-bpm").setAttribute("max", "129");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "129");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "129");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/nightmare1.png"> <img class="tab-images" src="Design/Solos/Images/nightmare2.png"> <img class="tab-images" src="Design/Solos/Images/nightmare3.png">';
        soloBpm = 129;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "buried-alive") {
        document.querySelector(".solo-title").innerHTML = "Buried Alive";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Buried-alive.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-buried-alive-tab-s61130t4");
        document.querySelector(".solo-bpm").setAttribute("max", "138");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "138");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "138");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/buried-alive1.png"> <img class="tab-images" src="Design/Solos/Images/buried-alive2.png"> <img class="tab-images" src="Design/Solos/Images/buried-alive3.png"> <img class="tab-images" src="Design/Solos/Images/buried-alive4.png"> <img class="tab-images" src="Design/Solos/Images/buried-alive5.png"> <img class="tab-images" src="Design/Solos/Images/buried-alive6.png">';
        soloBpm = 138;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "natural-born-killer") {
        document.querySelector(".solo-title").innerHTML = "Natural Born Killer";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Natural-born-killer.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-natural-born-killer-tab-s61352t0");
        document.querySelector(".solo-bpm").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "184");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/natural-born-killer1.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer2.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer3.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer4.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer5.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer6.png"> <img class="tab-images" src="Design/Solos/Images/natural-born-killer7.png">';
        soloBpm = 184;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "victim") {
        document.querySelector(".solo-title").innerHTML = "Victim 1st Solo";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Victim.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-victim-tab-s63126t12");

        document.querySelector(".solo-bpm").setAttribute("max", "130");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "130");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "130");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/victim1.png"> <img class="tab-images" src="Design/Solos/Images/victim2.png"> <img class="tab-images" src="Design/Solos/Images/victim3.png">';
        soloBpm = 130;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "dear-god") {
        document.querySelector(".solo-title").innerHTML = "Dear God";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Dear-god.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.youtube.com/watch?v=PmoTMuC-Tpc");
        document.querySelector(".solo-bpm").setAttribute("max", "69");
        document.querySelector(".solo-bpm").setAttribute("min", "30");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "69");
        document.querySelector(".solo-bpm-scrubber").setAttribute("min", "30");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "69");
        document.querySelector(".guitar-1").innerHTML = '<video width="100%" height="100%" controls> <source src="Design/Solos/Images/dear-god.mp4"> </video>';
        soloBpm = 69;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "seize-the-day") {
        document.querySelector(".solo-title").innerHTML = "Seize The Day";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Seize-the-day.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-seize-the-day-tab-s2117t2");
        document.querySelector(".solo-bpm").setAttribute("max", "140");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "140");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "140");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/seize-the-day1.png"> <img class="tab-images" src="Design/Solos/Images/seize-the-day2.png"> <img class="tab-images" src="Design/Solos/Images/seize-the-day3.png">';
        soloBpm = 140;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "sidewinder") {
        document.querySelector(".solo-title").innerHTML = "Sidewinder";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Sidewinder.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-sidewinder-tab-s22445t3");
        document.querySelector(".solo-bpm").setAttribute("max", "123");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "123");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "123");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/sidewinder1.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder2.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder3.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder4.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder5.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder6.png"> <img class="tab-images" src="Design/Solos/Images/sidewinder7.png">';
        soloBpm = 123;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "betrayed") {
        document.querySelector(".solo-title").innerHTML = "Beetrayed";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Betrayed.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-betrayed-tab-s22429t6");
        document.querySelector(".solo-bpm").setAttribute("max", "130");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "130");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "130");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/betrayed1.png"> <img class="tab-images" src="Design/Solos/Images/betrayed2.png"> <img class="tab-images" src="Design/Solos/Images/betrayed3.png"> <img class="tab-images" src="Design/Solos/Images/betrayed4.png"> <img class="tab-images" src="Design/Solos/Images/betrayed5.png">';
        soloBpm = 130;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "m.i.a.") {
        document.querySelector(".solo-title").innerHTML = "M.I.A.";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Mia.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-mia-tab-s1689t4");
        document.querySelector(".solo-bpm").setAttribute("max", "164");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "164");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "164");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/mia1.png"> <img class="tab-images" src="Design/Solos/Images/mia2.png"> <img class="tab-images" src="Design/Solos/Images/mia3.png"> <img class="tab-images" src="Design/Solos/Images/mia4.png"> <img class="tab-images" src="Design/Solos/Images/mia5.png">';
        soloBpm = 164;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "not-invincible") {
        document.querySelector(".solo-title").innerHTML = "Not Invincible";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Not-invincible.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-not-invincible-tab-s389108t2");
        document.querySelector(".solo-bpm").setAttribute("max", "175");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "175");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "175");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/not-invincible1.png"> <img class="tab-images" src="Design/Solos/Images/not-invincible2.png"> <img class="tab-images" src="Design/Solos/Images/not-invincible3.png">';
        soloBpm = 175;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "a-place-where-you-belong") {
        document.querySelector(".solo-title").innerHTML = "A Place Where You Belong";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/A-place-where-you-belong.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-a-place-where-you-belong-tab-s60097t0");
        document.querySelector(".solo-bpm").setAttribute("max", "133");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "133");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "133");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/a-place-where-you-belong1.png"> <img class="tab-images" src="Design/Solos/Images/a-place-where-you-belong2.png">';
        soloBpm = 133;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "the-last-fight") {
        document.querySelector(".solo-title").innerHTML = "The Last Fight";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/The-last-fight.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-the-last-fight-tab-s59355t2");
        document.querySelector(".solo-bpm").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "184");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "184");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/the-last-fight1.png"> <img class="tab-images" src="Design/Solos/Images/the-last-fight2.png">';
        soloBpm = 184;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "waking-the-demon") {
        document.querySelector(".solo-title").innerHTML = "Waking The Demon";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Waking-the-demon.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-waking-the-demon-tab-s23507t0");
        document.querySelector(".solo-bpm").setAttribute("max", "127");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "127");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "127");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/waking-the-demon1.png"> <img class="tab-images" src="Design/Solos/Images/waking-the-demon2.png"> <img class="tab-images" src="Design/Solos/Images/waking-the-demon3.png"> <img class="tab-images" src="Design/Solos/Images/waking-the-demon4.png">';
        soloBpm = 127;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "say-goodnight") {
        document.querySelector(".solo-title").innerHTML = "Say Goodnight";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Say-goodnight.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-say-goodnight-tab-s23594t2");
        document.querySelector(".solo-bpm").setAttribute("max", "116");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "116");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "116");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/say-goodnight1.png">';
        soloBpm = 116;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "the-poison") {
        document.querySelector(".solo-title").innerHTML = "The Poison";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/The-poison.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/bullet-for-my-valentine-the-poison-tab-s27618t0");
        document.querySelector(".solo-bpm").setAttribute("max", "93");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "93");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "93");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/the-poison1.png"> <img class="tab-images" src="Design/Solos/Images/the-poison2.png">';
        soloBpm = 93;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "blackened") {
        document.querySelector(".solo-title").innerHTML = "Blackened";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/Blackened.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/metallica-blackened-tab-s516t3");
        document.querySelector(".solo-bpm").setAttribute("max", "129");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "129");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "129");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/blackened1.png"> <img class="tab-images" src="Design/Solos/Images/blackened2.png"> <img class="tab-images" src="Design/Solos/Images/blackened3.png"> <img class="tab-images" src="Design/Solos/Images/blackened4.png"> <img class="tab-images" src="Design/Solos/Images/blackened5.png"> <img class="tab-images" src="Design/Solos/Images/blackened6.png"> <img class="tab-images" src="Design/Solos/Images/blackened7.png"> <img class="tab-images" src="Design/Solos/Images/blackened8.png">';
        soloBpm = 129;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (solo == "nothin-else-matters") {
        document.querySelector(".solo-title").innerHTML = "Nothing Else Matters";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/Solos/Audio/nothing-else-matters.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/metallica-nothing-else-matters-tab-s439171t6");
        document.querySelector(".solo-bpm").setAttribute("max", "92");
        document.querySelector(".solo-bpm").setAttribute("min", "30");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "92");
        document.querySelector(".solo-bpm-scrubber").setAttribute("min", "30");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "92");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/Solos/Images/nothin-else-matters.png">';
        soloBpm = 92;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    
}
function showTabs() {
    document.querySelector(".guitar-1").style.display = "block";
}
function changeFS(fs) {
    document.querySelector(".source").style.display = "none";
    document.querySelector(".fingerstyle-display").style.display = "block";
    document.querySelector(".guitar-1").style.display = "none";
    document.querySelector(".tabs > a > button").innerHTML = "SongSterr";
    if (fs == "buried-alive") {
        document.querySelector(".solo-title").innerHTML = "Buried Alive";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/fingerstyle/Audio/buried-alive.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-buried-alive-tab-s61130t2");
        document.querySelector(".solo-bpm").setAttribute("max", "140");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "140");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "140");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/fingerstyle/images/buried-alive1.png"> <img class="tab-images" src="Design/fingerstyle/images/buried-alive2.png"> <img class="tab-images" src="Design/fingerstyle/images/buried-alive3.png"> ';
        soloBpm = 140;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (fs == "love-of-my-life") {
        document.querySelector(".solo-title").innerHTML = "Love Of My Life";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/fingerstyle/Audio/love-of-my-life.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.youtube.com/watch?v=wMzyNSQwLpo");
        document.querySelector(".tabs > a > button").innerHTML = "YouTube";
        document.querySelector(".solo-bpm").setAttribute("max", "85");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "85");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "85");
        document.querySelector(".guitar-1").innerHTML = '';
        soloBpm = 85;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (fs == "so-far-away") {
        document.querySelector(".solo-title").innerHTML = "So Far Away";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/fingerstyle/Audio/so-far-away.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/avenged-sevenfold-so-far-away-tab-s61651t5");
        document.querySelector(".solo-bpm").setAttribute("max", "74");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "74");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "74");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/fingerstyle/images/so-far-away1.png">';
        soloBpm = 74;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (fs == "nothing-else-matters") {
        document.querySelector(".solo-title").innerHTML = "Nothing Else Matters";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/fingerstyle/Audio/nothing-else-matters.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/metallica-nothing-else-matters-tab-s439171t1");
        document.querySelector(".solo-bpm").setAttribute("max", "69");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "69");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "69");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/fingerstyle/images/nothing-else-matters1.png"><img class="tab-images" src="Design/fingerstyle/images/nothing-else-matters2.png">';
        soloBpm = 69;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }
    if (fs == "stairway-to-heaven") {
        document.querySelector(".solo-title").innerHTML = "Stairway To Heaven";
        document.querySelector(".audio").innerHTML = '                    <audio controls class="solo-audio"> <source src="Design/fingerstyle/Audio/stairway-to-heaven.m4a" type="audio/mpeg">';
        document.querySelector(".tabs > a").setAttribute("href", "https://www.songsterr.com/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1");
        document.querySelector(".solo-bpm").setAttribute("max", "72");
        document.querySelector(".solo-bpm-scrubber").setAttribute("max", "72");
        document.querySelector(".solo-bpm-scrubber").setAttribute("value", "72");
        document.querySelector(".guitar-1").innerHTML = '<img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven1.png"> <img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven2.png"> <img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven3.png"> <img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven4.png"> <img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven5.png"> <img class="tab-images" src="Design/fingerstyle/images/stairway-to-heaven6.png">';
        soloBpm = 72;
        document.querySelector(".solo-bpm-scrubber").value = soloBpm;
        changeBpmNumber();
    }

}
function openToolbar() {
    if (!toolbarOpened) {
        toolbarOpened = true;
        document.querySelector(".toolbar").style.right = "0";
        document.querySelector("#main-menu").style.left = "-25%";
    } else {
        toolbarOpened = false;
        document.querySelector(".toolbar").style.right = "-25%";
        document.querySelector("#main-menu").style.left = "0";
    }
}