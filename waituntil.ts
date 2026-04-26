//% color="#ff8800" weight=90 icon="\uf017"
namespace WaitUntil {

    /**
     * 条件が true になるまで待つ
     */
    //% block=" %condition まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: boolean): void {
        while (!condition) {
            basic.pause(20)
        }
    }
}
