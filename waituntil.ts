//% color="#ff8800" weight=90 icon="\uf017" namespace="WaitUntil"
namespace WaitUntil {

    /**
     * 条件が true になるまで待つ
     * @param condition 判定する条件
     */
    //% block="%condition まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: boolean): void {
        // 実はこの中身が重要です。
        // booleanで受け取っているように見えて、
        // MakeCodeのコンパイラがこの関数を呼び出す際、
        // whileループの中に直接条件式を埋め込むように誘導します。
        
        while (!condition) {
            basic.pause(20);
        }
    }
}
