const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");

const showBatteryInfo = () => {
  navigator.getBattery().then((resault) => {

    if (resault.charging) {
      batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
    }
    if (resault.level) {
      const percentage = resault.level * 100;
      batteryPercentage.innerHTML = `${percentage}%`;
      batteryLiquid.style.height = `${percentage}%`;
      
      if (percentage <= 100) {
        batteryLiquid.className = "battery__liquid gradient-color-green";
      }
      if (percentage <= 90) {
        batteryLiquid.className = "battery__liquid gradient-color-yellow";
      }
      if (percentage <= 40) {
        batteryLiquid.className = "battery__liquid gradient-color-orange";
      }
      if (percentage <= 20) {
        batteryLiquid.className = "battery__liquid gradient-color-red";
      }
    }

    resault.addEventListener("levelchange" , showBatteryInfo)

  });
};

window.addEventListener("load", showBatteryInfo);
