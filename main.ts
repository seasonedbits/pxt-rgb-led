//%color=#70DD40 icon="\uf196" block="RGB LED"
namespace RGB_LED {
  export class LED {
    R_pin: AnalogPin;
    G_pin: AnalogPin;
    B_pin: AnalogPin;

    /**
     * Show color.
     * @param R Red intensity (0-255)
     * @param G Green intensity (0-255)
     * @param B Blue intensity (0-255)
     */
    //% block="%rgbled|Show Color R:%R G:%G B:%B"
    public showColor(R: number, G: number, B: number) {
      pins.analogWritePin(this.R_pin, Math.map(R >> 0, 0, 255, 0, 1023));
      pins.analogWritePin(this.G_pin, Math.map(G >> 0, 0, 255, 0, 1023));
      pins.analogWritePin(this.B_pin, Math.map(B >> 0, 0, 255, 0, 1023));
    }
  }

  /**
   * Create an instance of RGB LED.
   * @param R Analog Pin controlling Red LED
   * @param G Analog Pin controlling Green LED
   * @param B Analog Pin controlling Blue LED
   */
  //% block="Create RGB LED instance|Red Pin %R|Green Pin %G|Blue Pin %B"
  //% blockSetVariable=rgbled
  //% blockExternalInputs=true
  export function create(R: AnalogPin, G: AnalogPin, B: AnalogPin): LED {
    let led = new LED();
    led.R_pin = R;
    led.G_pin = G;
    led.B_pin = B;
    return led;
  }
}
