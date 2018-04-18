//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
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
    //% blockId="ledOfRectangle2" block="showssss area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle3(length: number, width:number): void {
        basic.showNumber(length*width)
    }
  
}
