namespace WaitBlocks {

    //% color=#ff8800 icon="\uf017" block="待つ"

    // ★機能は変えず、条件を毎回評価するための最小限の追加
    function evalCondition(fn: () => boolean): boolean {
        return fn()
    }

    // ===== A / B 基本 =====

    //% block="Aボタンが押されるまで待つ"
    export function waitA(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.A))) {
            basic.pause(20)
        }
    }

    //% block="Bボタンが押されるまで待つ"
    export function waitB(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    //% block="AまたはBが押されるまで待つ"
    export function waitAorB(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
    }

    // ===== ロゴ（V2） =====

    //% block="ロゴがタッチされるまで待つ"
    export function waitLogo(): void {
        while (!evalCondition(() => input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="ロゴが離されるまで待つ"
    export function waitLogoReleased(): void {
        while (!evalCondition(() => !input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    // ===== 組み合わせ =====

    //% block="Aまたはロゴがタッチされるまで待つ"
    export function waitAorLogo(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.logoIsPressed()
        )) {
            basic.pause(20)
        }
    }
}
