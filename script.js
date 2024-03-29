const searchInput = document.getElementById("search-bar");
const now = new Date();

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value;
    if (searchTerm) {
      window.location.href = `https://www.google.com/search?q=${searchTerm}`;
    }
  }
});

function updateDateTime() {
  const now = new Date();
  const greetingElements = document.querySelector('.greeting h1');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning!";
} else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}
  greetingElements.textContent = greeting;
  // Convert to 12-hour format
  hours %= 12; 
  hours = hours ? hours : 12; // hour 0 should be 12

  // Add '0' padding for minutes 
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const timeString = `${hours}:${minutes} ${ampm}`;
  const dateString = `It's ${day}, ${month} ${date}, ${year}`;
  
  document.getElementById('date-time').textContent = `${dateString} - ${timeString}`;
}

updateDateTime();  // Display the date and time initially 
setInterval(updateDateTime, 1000); // Update every second
