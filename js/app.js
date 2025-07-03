const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");

const showBatteryInfo = () => {
  navigator.getBattery().then((resault) => {
    console.log(resault);

    if (resault.charging) {
      batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
    }

  });
};

window.addEventListener("load", showBatteryInfo);
