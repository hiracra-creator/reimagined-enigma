//% color="#ff8800" weight=90 icon="\uf017"
namespace WaitUntil {

    /**
     * 条件が true になるまで待つ
     */
    //% block="%condition まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: boolean): void {
        while (!evalCondition(() => condition)) {
            basic.pause(20)
        }
    }

    // boolean を毎回評価し直すための内部関数
    function evalCondition(fn: () => boolean): boolean {
        return fn()
    }
