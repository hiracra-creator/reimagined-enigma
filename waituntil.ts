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

    // 内部で毎回 condition() を呼び直すための関数
    function evalCondition(fn: () => boolean): boolean {
        return fn()
    }
}
