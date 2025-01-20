const aboutBtn = document.getElementById('aboutBtn');
aboutBtn.addEventListener('click', () => {
    const aboutDiv = document.getElementById('aboutDiv');
    console.log(aboutDiv);
    console.log("Button Clicked");
    aboutDiv.classList.toggle('hidden');
})
const exploreBtn = document.querySelector("#exploreBtn");
exploreBtn.addEventListener('mouseover', () => {
    const citiesBtn = document.querySelector("#citiesBtn");
    citiesBtn.classList.toggle('hidden');
})

citiesBtn.addEventListener('mouseover', () => {
    const nearByCities = document.querySelector('#nearByCities');
    nearByCities.classList.toggle('hidden');
})

const todayBtn = document.getElementById('todayBtn');
todayBtn.addEventListener('click', () => {
    const calendar = document.getElementById('calendar');
    calendar.classList.toggle('hidden');
})

const dtElement = document.querySelector('dt');
dtElement.addEventListener('click', () => {
    generateTimeSlots();
    const ddElement = document.querySelector('dd');
    ddElement.classList.toggle('hidden');
})

function generateTimeSlots(){
    const timeList = document.getElementById('time-slot');
    const startTime = 10 * 60 + 45;
    const endTime =  23 * 60 + 45;
    const interval = 15;

    let currentTime = startTime;
    while(currentTime <= endTime){
        const hours = Math.floor(currentTime/60);
        const minutes = currentTime % 60;
        const period = hours >= 12 ? "PM" : "AM";
        const formattedTime = `${(hours% 12 || 12).toString().padStart(2, '0')}:
        ${minutes.toString().padStart(2, '0')} ${period}`;

        const listItem = document.createElement("li");
        listItem.classList.add("hover:bg-gray-100", "w-full", "text-left");
        listItem.textContent = formattedTime;

        timeList.appendChild(listItem);
        currentTime += interval;
    }

}
