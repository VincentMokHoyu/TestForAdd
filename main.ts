//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace S3BigCar {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangleaaa" block="showeeee area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangleaaa(length: number, width:number): void {
        basic.showNumber(length*width)
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle2" block="CarMove speed %speed"
    //% blockGap=2 weight=1
    export function LeftMoveForward(speed: number): void {
        let buf = pins.createBuffer(5);
        buf[0] = 6 + 4 * 12
        buf[1] = 0 & 0xff
        buf[2] = (0 >> 8) & 0xff
        buf[3] = 4095 & 0xff
        buf[4] = (4095 >> 8) & 0xff
        pins.i2cWriteBuffer(0x41, buf, false)        
        }
  
}
