const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");

const showBatteryInfo = () => {
  navigator.getBattery().then((resault) => {
    const percentage = Math.floor(resault.level * 100);


    if (resault.charging === true){
      batteryLiquid.className = "battery__liquid gradient-color-blue";
    } else {
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

    if (resault.charging === true && percentage === 100) {
      batteryStatus.innerHTML = `Full Battery <i class="ri-flashlight-line animated-green"></i>`;
    } else if (resault.charging === true) {
      batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
    } else {
      if (percentage === 100) {
        batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`;
      }
      if (percentage <= 20) {
        batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`;
      } else {
        batteryStatus.innerHTML = ""
      }
    }

    
    if (resault.level) {
      batteryPercentage.innerHTML = `${percentage}%`;
      batteryLiquid.style.height = `${percentage}%`;
    }

    resault.addEventListener("levelchange", showBatteryInfo);
    resault.addEventListener("chargingchange" , showBatteryInfo)
  });
};

window.addEventListener("load", showBatteryInfo);
