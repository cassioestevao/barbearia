function updateClock() {
    const clockElement = document.getElementById('clock');
    const statusElement = document.getElementById('status');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    const formattedTime = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    clockElement.textContent = formattedTime;
  
    const openingHour = 9;
    const closingHour = 13;
  
    if (hours >= openingHour && hours < closingHour) {
      clockElement.style.backgroundColor = 'green';  
      statusElement.textContent = '';  
      statusElement.innerHTML = '<div class="status-message"><span>&#10003;</span> Estamos funcionando</div>'; 
          
      statusElement.style.color = 'green';
    } else {
      clockElement.style.backgroundColor = 'red';    
      statusElement.textContent = '';          
      statusElement.innerHTML = '<div class="status-message"><span>&#10007;</span> Estamos fechados</div>'; 
    }
  }
  

  setInterval(updateClock, 1000);
  

  updateClock();
  