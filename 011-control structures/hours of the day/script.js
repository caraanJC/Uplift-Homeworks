const normalClock = () => {
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      console.log(`${hour} hour/s, ${minute} minute/s`);
    }
  }
};

const countdownTimer = () => {
  for (let hour = 23; hour >= 0; hour--) {
    for (let minute = 45; minute >= 0; minute -= 15) {
      console.log(`${hour} hour/s, ${minute} minute/s`);
    }
  }
};

const military = () => {
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      console.log(
        `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`
      );
    }
  }
};

const militaryCountdown = () => {
  for (let hour = 23; hour >= 0; hour--) {
    for (let minute = 45; minute >= 0; minute -= 15) {
      console.log(
        `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`
      );
    }
  }
};

// normalClock();
// countdownTimer();
// military();
militaryCountdown();
