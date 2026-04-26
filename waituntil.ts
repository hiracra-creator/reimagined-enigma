namespace WaitBlocks {

    //% color=#ff8800 icon="\uf017" block="待つ"

    // ===== A / B 基本 =====

    //% block="Aボタンが押されるまで待つ"
    export function waitA(): void {
        while (!input.buttonIsPressed(Button.A)) {
            basic.pause(20)
        }
    }

    //% block="Bボタンが押されるまで待つ"
    export function waitB(): void {
        while (!input.buttonIsPressed(Button.B)) {
            basic.pause(20)
        }
    }

    //% block="AまたはBが押されるまで待つ"
    export function waitAorB(): void {
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    // ===== ロゴ（V2） =====

    //% block="ロゴがタッチされるまで待つ"
    export function waitLogo(): void {
        while (!input.logoIsPressed()) {
            basic.pause(20)
        }
    }

    //% block="ロゴが離されるまで待つ"
    export function waitLogoReleased(): void {
        while (input.logoIsPressed()) {
            basic.pause(20)
        }
    }

    // ===== 組み合わせ =====

    //% block="Aまたはロゴがタッチされるまで待つ"
    export function waitAorLogo(): void {
        while (!(input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
            basic.pause(20)
        }
    }
}
