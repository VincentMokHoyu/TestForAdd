//% weight=0 color=#3CB371 icon="\uf0ad" block="S3BigCar"
namespace S3BigCar {
   let initialized = false
    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

     function initPCA9685(): void {
        i2cwrite(0x41, 0x00, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(0x41, 0x00);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(0x41, 0x00, newmode); // go to sleep
        i2cwrite(0x41, 0xFE, prescale); // set the prescaler
        i2cwrite(0x41, 0x00, oldmode);
        control.waitMicros(5000);
        i2cwrite(0x41, 0x00, oldmode | 0xa1);
    }

   
   
    //% blockId="Left_Forward" block="Left_Forward speed %speed"
    //% blockGap=2 weight=1
    export function Left_Forward(speedL: number): void {
       
             if (!initialized) {
            initPCA9685();
        }

       
       
let buf1 = pins.createBuffer(5);
   buf1[0] = 6 + 4 * 12
    buf1[1] =  0 & 0xff
    buf1[2] =  (0 >> 8) & 0xff
    buf1[3] =  speedL & 0xff
    buf1[4] =  (speedL >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf1, false)
let buf2 = pins.createBuffer(5);
buf2[0] = 6 + 4 * 13
    buf2[1] =  0 & 0xff
    buf2[2] =  (0 >> 8) & 0xff
    buf2[3] =  0 & 0xff
    buf2[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf2, false)      
        }
    
   
   
   
   
    //% blockId="Right_Forward" block="Right_Forward speed %speed"
    //% blockGap=2 weight=1
    export function Right_Forward(speedR: number): void {
          if (!initialized) {
            initPCA9685();
        }

    
       let buf3 = pins.createBuffer(5);
   buf3[0] = 6 + 4 * 14
    buf3[1] =  0 & 0xff
    buf3[2] =  (0 >> 8) & 0xff
    buf3[3] =  0 & 0xff
    buf3[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf3, false)
let buf4 = pins.createBuffer(5);
buf4[0] = 6 + 4 * 15
    buf4[1] =  0 & 0xff
    buf4[2] =  (0 >> 8) & 0xff
    buf4[3] =  speedR & 0xff
    buf4[4] =  (speedR >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf4, false)  
       

        }
   
   
   
   
   
   
   
   
    //% blockId="Left_Backward" block="Left_Backward speed %speed"
    //% blockGap=2 weight=1
    export function Left_Backward(speedL: number): void {
     if (!initialized) {
            initPCA9685();
        }

    
let buf5 = pins.createBuffer(5);
buf5[0] = 6 + 4 * 12
    buf5[1] =  0 & 0xff
    buf5[2] =  (0 >> 8) & 0xff
    buf5[3] =  0 & 0xff
    buf5[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf5, false)
let buf6 = pins.createBuffer(5);
buf6[0] = 6 + 4 * 13
    buf6[1] =  0 & 0xff
    buf6[2] =  (0 >> 8) & 0xff
    buf6[3] =  speedL & 0xff
    buf6[4] =  (speedL >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf6, false)        
        }
   
   
   
   
   
   
   
   
   
   
    //% blockId="Right_Backward" block="Right_Backward speed %speed"
    //% blockGap=2 weight=1
    export function Right_Backward(speedR: number): void {
      if (!initialized) {
            initPCA9685();
        }
    
       let buf7 = pins.createBuffer(5);
buf7[0] = 6 + 4 * 14
    buf7[1] =  0 & 0xff
    buf7[2] =  (0 >> 8) & 0xff
    buf7[3] =  speedR & 0xff
    buf7[4] =  (speedR >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf7, false)
let buf8 = pins.createBuffer(5);
buf8[0] = 6 + 4 * 15
    buf8[1] =  0 & 0xff
    buf8[2] =  (0 >> 8) & 0xff
    buf8[3] =  0 & 0xff
    buf8[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf8, false)   
              
       
        }
  }
