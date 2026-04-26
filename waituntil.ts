//% color="#ff8800" weight=90 icon="\uf017" namespace WaitUntil {

    /**
     * Wait until a condition becomes true
     * @param condition The logic to check repeatedly
     */
    //% block="%condition|まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: () => boolean): void {
        // We call condition() as a function inside the loop
        while (!condition()) {
            basic.pause(20);
        }
    }
}
