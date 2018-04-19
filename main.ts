//% weight=0 color=#3CB371 icon="\uf0ad" block="S3BigCar"
namespace S3BigCar {
   
    //% blockId="LeftMoveForward" block="LeftMoveForward speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveForward(speedL: number): void {
       mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    
let buf = pins.createBuffer(5);
buf[0] = 6 + 4 * 12
    buf[1] =  0 & 0xff
    buf[2] =  (0 >> 8) & 0xff
    buf[3] =  speedL & 0xff
    buf[4] =  (speedL >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf, false)
let buf2 = pins.createBuffer(5);
buf2[0] = 6 + 4 * 13
    buf2[1] =  0 & 0xff
    buf2[2] =  (0 >> 8) & 0xff
    buf2[3] =  0 & 0xff
    buf2[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf2, false)      
        }
    
   
   
   
   
    //% blockId="RightMoveForward" block="RightMoveForward speed %speed"
    //% blockGap=2 weight=1
    export function RightMoveForward(speedR: number): void {
           mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    
let buf = pins.createBuffer(5);
buf[0] = 6 + 4 * 14
    buf[1] =  0 & 0xff
    buf[2] =  (0 >> 8) & 0xff
    buf[3] =  speedR & 0xff
    buf[4] =  (speedR >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf, false)
let buf2 = pins.createBuffer(5);
buf2[0] = 6 + 4 * 15
    buf2[1] =  0 & 0xff
    buf2[2] =  (0 >> 8) & 0xff
    buf2[3] =  0 & 0xff
    buf2[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf2, false)   
        }
   
   
   
   
   
   
   
   
    //% blockId="LeftMoveBackward" block="LeftMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveBackward(speedL: number): void {
       mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    
let buf = pins.createBuffer(5);
buf[0] = 6 + 4 * 12
    buf[1] =  0 & 0xff
    buf[2] =  (0 >> 8) & 0xff
    buf[3] =  0 & 0xff
    buf[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf, false)
let buf2 = pins.createBuffer(5);
buf2[0] = 6 + 4 * 13
    buf2[1] =  0 & 0xff
    buf2[2] =  (0 >> 8) & 0xff
    buf2[3] =  speedL & 0xff
    buf2[4] =  (speedL >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf2, false)        
        }
   
   
   
   
   
   
   
   
   
   
    //% blockId="RightMoveBackward" block="RightMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function RightMoveBackward(speedR: number): void {
       mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    
let buf = pins.createBuffer(5);
buf[0] = 6 + 4 * 14
    buf[1] =  0 & 0xff
    buf[2] =  (0 >> 8) & 0xff
    buf[3] =  0 & 0xff
    buf[4] =  (0 >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf, false)
let buf2 = pins.createBuffer(5);
buf2[0] = 6 + 4 * 15
    buf2[1] =  0 & 0xff
    buf2[2] =  (0 >> 8) & 0xff
    buf2[3] =  speedR & 0xff
    buf2[4] =  (speedR >> 8) & 0xff
    pins.i2cWriteBuffer(0x41, buf2, false)         
        }
  }
