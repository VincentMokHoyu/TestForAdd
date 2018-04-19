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
        let buf3 = pins.createBuffer(5);
        buf3[0] = 6 + 4 * 15
        buf3[1] = 0 & 0xff
        buf3[2] = (0 >> 8) & 0xff
        buf3[3] = speed & 0xff
        buf3[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf3, false)
   
    //% blockId="LeftMoveBackward" block="LeftMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveBackward(speed: number): void {
        let buf2 = pins.createBuffer(5);
        buf2[0] = 6 + 4 * 13
        buf2[1] = 0 & 0xff
        buf2[2] = (0 >> 8) & 0xff
        buf2[3] = speed & 0xff
        buf2[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf2, false)      
        }
   
    //% blockId="RightMoveBackward" block="RightMoveBackward speed %speed"
    //% blockGap=2 weight=1
    export function RightMoveBackward(speed: number): void {
        let buf4 = pins.createBuffer(5);
        buf4[0] = 6 + 4 * 14
        buf4[1] = 0 & 0xff
        buf4[2] = (0 >> 8) & 0xff
        buf4[3] = speed & 0xff
        buf4[4] = (speed >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf4, false)        
        }
  }
