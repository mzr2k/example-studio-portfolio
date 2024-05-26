document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("animated-title");
    const titleText = titleElement.textContent;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let currentText = titleText.split('').map(() => letters[Math.floor(Math.random() * letters.length)]).join('');
    
    let iterations = 0;
    const totalIterations = 40;
    const speed = 50; // Adjust this value to change the speed (milliseconds)

    function animate() {
      currentText = currentText.split('').map((char, index) => {
        if (iterations < totalIterations && Math.random() > 0.5) {
          return letters[Math.floor(Math.random() * letters.length)];
        } else {
          return titleText[index];
        }
      }).join('');
      
      titleElement.textContent = currentText;
      iterations++;

      if (iterations <= totalIterations) {
        setTimeout(animate, speed);
      }
    }
    
    animate();
  });

  window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  

      const ampm = hour < 12 ? "AM" : "PM";

      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });

