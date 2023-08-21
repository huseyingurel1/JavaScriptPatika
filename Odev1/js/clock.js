let name = document.querySelector("myName");

myName.innerHTML = prompt("Please Enter Your Name !");

let clock = document.querySelector("myClock");

const date = new Date();
const formattedDate = date.toLocaleDateString();

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    myClock.innerHTML = ` ${formattedDate} , ${formattedTime} `
}

  setInterval(updateClock, 1000); // Her saniye güncelle
  updateClock(); 