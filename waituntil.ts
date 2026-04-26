//% color="#ff8800" weight=90 icon="\uf017" namespace="WaitUntil"
namespace WaitUntil {

    /**
     * Wait until the condition becomes true.
     * @param condition The logic condition to check
     */
    //% block="%condition まで待つ"
    //% condition.shadow=logic_boolean
    export function waitUntil(condition: () => boolean): void {
        // Run the condition function repeatedly
        while (!condition()) {
            basic.pause(20); // Prevents the CPU from locking up
        }
    }
}
