namespace WaitUntil {
    //% block="%condition まで待つ"
    //% condition.shadow=logic_boolean
    //% shim=TD_ID
    export function waitUntil(condition: boolean): void {
        while (!condition) {
            basic.pause(20)
        }
    }
}
