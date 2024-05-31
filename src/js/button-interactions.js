// JavaScript code for button interactions
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    let pressing = false;

    const addHapticFeedback = () => {
      if (navigator.vibrate) {
        console.log("Vibrate API supported. Adding haptic feedback.");
        navigator.vibrate(10); // Vibration duration in milliseconds
      } else {
        console.log("Vibrate API not supported.");
      }
    };

    const handlePressStart = (event) => {
      pressing = true;
      button.classList.add("pressed");
      addHapticFeedback();
    };

    const handlePressEnd = (event) => {
      if (pressing) {
        button.classList.remove("pressed");
        pressing = false;
      }
    };

    const handleMove = (event) => {
      if (!pressing) return;

      const rect = button.getBoundingClientRect();
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;

      if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
        button.classList.remove("pressed");
        pressing = false;
        console.log("Press canceled due to movement out of button area.");
      }
    };

    button.addEventListener("mousedown", handlePressStart);
    button.addEventListener("touchstart", handlePressStart);

    document.addEventListener("mouseup", handlePressEnd);
    document.addEventListener("touchend", handlePressEnd);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
  });
});
