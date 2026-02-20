const START_VIEWS = 871;
const DAILY_INCREASE = 273;

const viewElement = document.getElementById("viewCount");

// අද දවස
const today = new Date().toDateString();

// save කරපු data ගන්න
let savedData = JSON.parse(localStorage.getItem("movieViews"));

if (!savedData) {
    savedData = {
        views: START_VIEWS,
        lastUpdate: today
    };
} else {
    if (savedData.lastUpdate !== today) {
        savedData.views += DAILY_INCREASE;
        savedData.lastUpdate = today;
    }
}

// save again
localStorage.setItem("movieViews", JSON.stringify(savedData));

// show on screen
viewElement.textContent = savedData.views.toLocaleString();


// SIDEBAR
const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menu.onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

// LAST UPDATE CLOCK
function updateLastTime(){
  const d = new Date();
  const date = d.getFullYear()+"/"+String(d.getMonth()+1).padStart(2,'0')+"/"+String(d.getDate()).padStart(2,'0');
  const time = String(d.getHours()).padStart(2,'0')+":"+String(d.getMinutes()).padStart(2,'0')+":"+String(d.getSeconds()).padStart(2,'0');
  document.getElementById("lastUpdate").innerText = "Last Update : " + date + " ⏰ " + time;
}
updateLastTime();
setInterval(updateLastTime,1000);

// COPY LINK
function copyLink(){
  const text = document.getElementById('copyText').textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const btn = document.getElementById('copyBtn');
    btn.innerText = "Copied!";
    btn.style.background = "#00cc44";
    setTimeout(()=>{
      btn.innerText = "Copy කරගන්න";
      btn.style.background = "#ff3333";
    },2000);
  });
}
document.getElementById("copyBtn").onclick = copyLink;
document.getElementById("copyBar").onclick = (e)=>{
  if(e.target.id!=="copyBtn") copyLink();
};

