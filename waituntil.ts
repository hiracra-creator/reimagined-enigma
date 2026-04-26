namespace WaitUntil {
    let lastCondition = false

    //% block="%condition まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: boolean): void {
        control.inBackground(function () {
            while (true) {
                lastCondition = condition
                basic.pause(20)
            }
        })

        while (!lastCondition) {
            basic.pause(20)
        }
    }
}
