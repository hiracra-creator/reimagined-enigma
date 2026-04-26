namespace WaitUntil {

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

    //% block="AまたはBボタンが押されるまで待つ"
    export function waitAorB(): void {
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    //% block="AとB両方が押されるまで待つ"
    export function waitAandB(): void {
        while (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    // ===== 離す =====

    //% block="Aボタンが離されるまで待つ"
    export function waitAReleased(): void {
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(20)
        }
    }

    //% block="Bボタンが離されるまで待つ"
    export function waitBReleased(): void {
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(20)
        }
    }

    //% block="AとB両方が離されるまで待つ"
    export function waitAandBReleased(): void {
        while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.pause(20)
        }
    }

    // ===== クリック（押して離す） =====

    //% block="Aが押されてから離されるまで待つ"
    export function waitAClick(): void {
        while (!input.buttonIsPressed(Button.A)) {
            basic.pause(20)
        }
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(20)
        }
    }

    //% block="Bが押されてから離されるまで待つ"
    export function waitBClick(): void {
        while (!input.buttonIsPressed(Button.B)) {
            basic.pause(20)
        }
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(20)
        }
    }

    //% block="AまたはBが押されてから離されるまで待つ"
    export function waitAorBClick(): void {
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
        while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
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

    //% block="ロゴがタッチされてから離されるまで待つ"
    export function waitLogoClick(): void {
        while (!input.logoIsPressed()) {
            basic.pause(20)
        }
        while (input.logoIsPressed()) {
            basic.pause(20)
        }
    }

    // ===== A / B + ロゴ組み合わせ =====

    //% block="Aまたはロゴがタッチされるまで待つ"
    export function waitAorLogo(): void {
        while (!(input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="Bまたはロゴがタッチされるまで待つ"
    export function waitBorLogo(): void {
        while (!(input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="Aとロゴが同時にタッチされるまで待つ"
    export function waitAandLogo(): void {
        while (!(input.buttonIsPressed(Button.A) && input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="Bとロゴが同時にタッチされるまで待つ"
    export function waitBandLogo(): void {
        while (!(input.buttonIsPressed(Button.B) && input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="AまたはBまたはロゴがタッチされるまで待つ"
    export function waitAny(): void {
        while (!(input.buttonIsPressed(Button.A)
            || input.buttonIsPressed(Button.B)
            || input.logoIsPressed())) {
            basic.pause(20)
        }
    }
}
