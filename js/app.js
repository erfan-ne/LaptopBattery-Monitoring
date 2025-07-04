const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");



const showBatteryInfo = () => {
  navigator.getBattery().then((resault) => {
    console.log(resault);
    
    const percentage = Math.floor(resault.level *19);

    if (resault.charging) {
      batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
    } else {
        if (percentage === 100){
        batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`
      } if (percentage <= 20) {
        batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
      }
    }

    if (resault.level) {
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
        batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
      }
    }

    resault.addEventListener("levelchange" , showBatteryInfo)

  });
};

window.addEventListener("load", showBatteryInfo);
