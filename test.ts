let rgbled: RGB_LED.LED = null;
// we must disable LED matrix as we're using the
// shared pin (Pin 9)
led.enable(false);
rgbled = RGB_LED.create(AnalogPin.P8, AnalogPin.P9, AnalogPin.P1);
basic.forever(function() {
  rgbled.showColor(255, 0, 0);
  basic.pause(1000);
  rgbled.showColor(0, 255, 0);
  basic.pause(1000);
  rgbled.showColor(0, 0, 255);
  basic.pause(1000);
  rgbled.showColor(128, 128, 128);
  basic.pause(1000);
});
