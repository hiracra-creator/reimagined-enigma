namespace WaitBlocks {

    //% color=#ff8800 icon="\uf017" block="待つ"

    function evalCondition(fn: () => boolean): boolean {
        return fn()
    }

    // ============================
    //  A ボタン
    // ============================

    //% block="Aボタンが押されるまで待つ"
    //% subcategory="Aボタン"
    export function waitA(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.A))) basic.pause(20)
    }

    //% block="Aボタンが離されるまで待つ"
    //% subcategory="Aボタン"
    export function waitAReleased(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.A))) basic.pause(20)
        while (!evalCondition(() => !input.buttonIsPressed(Button.A))) basic.pause(20)
    }

    // ============================
    //  B ボタン
    // ============================

    //% block="Bボタンが押されるまで待つ"
    //% subcategory="Bボタン"
    export function waitB(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.B))) basic.pause(20)
    }

    //% block="Bボタンが離されるまで待つ"
    //% subcategory="Bボタン"
    export function waitBReleased(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.B))) basic.pause(20)
        while (!evalCondition(() => !input.buttonIsPressed(Button.B))) basic.pause(20)
    }

    // ============================
    //  A+B 同時押し
    // ============================

    //% block="A+Bが同時に押されるまで待つ"
    //% subcategory="A+B"
    export function waitAB(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    //% block="A+Bが離されるまで待つ"
    //% subcategory="A+B"
    export function waitABReleased(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
        while (!evalCondition(() =>
            !(input.buttonIsPressed(Button.A) &&
              input.buttonIsPressed(Button.B))
        )) basic.pause(20)
    }

    // ============================
    //  A または B
    // ============================

    //% block="AまたはBが押されるまで待つ"
    //% subcategory="AまたはB"
    export function waitAorB(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    //% block="AまたはBが離されるまで待つ"
    //% subcategory="AまたはB"
    export function waitAorBReleased(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
        while (!evalCondition(() =>
            !input.buttonIsPressed(Button.A) &&
            !input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    // ============================
    //  その他 (V2専用)
    // ============================

    //% block="ロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitLogo(): void {
        while (!evalCondition(() => input.logoIsPressed())) basic.pause(20)
    }

    //% block="ロゴが離されるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitLogoReleased(): void {
        while (!evalCondition(() => input.logoIsPressed())) basic.pause(20)
        while (!evalCondition(() => !input.logoIsPressed())) basic.pause(20)
    }

    //% block="Aまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitAorLogo(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }

    //% block="Bまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitBorLogo(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.B) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }

    //% block="A+Bまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitABorLogo(): void {
        while (!evalCondition(() =>
            (input.buttonIsPressed(Button.A) &&
             input.buttonIsPressed(Button.B)) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }
}
