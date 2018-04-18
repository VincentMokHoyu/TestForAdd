//% weight=0 color=#3CB371 icon="\uf0ad" block="S3BigCar"
namespace S3BigCar {
   
    //% blockId="LeftMoveForward" block="LeftMoveForward speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveForward(speed: number): void {
        let buf = pins.createBuffer(5);
        buf[0] = 6 + 4 * 12
        buf[1] = 0 & 0xff
        buf[2] = (0 >> 8) & 0xff
        buf[3] = speed & 0xff
        buf[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf, false)        
        }
    
    //% blockId="RightMoveForward" block="RightMoveForward speed %speed"
    //% blockGap=2 weight=1
    export function RightoveForward(speed: number): void {
        let buf = pins.createBuffer(5);
        buf[0] = 6 + 4 * 12
        buf[1] = 0 & 0xff
        buf[2] = (0 >> 8) & 0xff
        buf[3] = speed & 0xff
        buf[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf, false)        
        }
   
    //% blockId="LeftMoveBackward" block="LeftMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveBackward(speed: number): void {
        let buf = pins.createBuffer(5);
        buf[0] = 6 + 4 * 12
        buf[1] = 0 & 0xff
        buf[2] = (0 >> 8) & 0xff
        buf[3] = speed & 0xff
        buf[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf, false)        
        }
   
    //% blockId="RightMoveBackward" block="RightMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function RightMoveBackward(speed: number): void {
        let buf = pins.createBuffer(5);
        buf[0] = 6 + 4 * 12
        buf[1] = 0 & 0xff
        buf[2] = (0 >> 8) & 0xff
        buf[3] = speed & 0xff
        buf[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf, false)        
        }
  }
