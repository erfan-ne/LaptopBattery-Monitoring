const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");

const showBatteryInfo = () => {
  navigator.getBattery().then((resault) => {
    console.log(resault);

  });
};

window.addEventListener("load", showBatteryInfo);
