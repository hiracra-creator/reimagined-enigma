namespace WaitUntil {
    /**
     * Aボタンが押されるまで待つ
     */
    //% block="Aボタンが押されるまで待つ"
    export function waitButtonA(): void {
        let done = false

        input.onButtonPressed(Button.A, function () {
            done = true
        })

        while (!done) {
            basic.pause(20)
        }
    }
}
