//% color="#ff8800" weight=90 icon="\uf017"
namespace WaitUntil {

    /**
     * 条件が true になるまで待つ
     */
    //% block="条件が真になるまで待つ %condition"
    export function waitUntil(condition: () => boolean): void {
        while (!condition()) {
            basic.pause(20)
        }
    }

    /**
     * ボタンが押されるまで待つ
     */
    //% block="ボタン %btn が押されるまで待つ"
    export function waitUntilButtonPressed(btn: Button): void {
        while (!input.buttonIsPressed(btn)) {
            basic.pause(20)
        }
    }
}
