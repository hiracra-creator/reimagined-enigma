namespace WaitBlocks {

    //% color=#ff8800 icon="\uf017" block="待つ"
    namespace _internal {
        export function evalCondition(fn: () => boolean): boolean {
            return fn()
        }
    }

    // ============================
    //  A ボタン
    // ============================

    //% block="Aボタンが押されるまで待つ"
    export function waitA(): void {
        while (!_internal.evalCondition(() => input.buttonIsPressed(Button.A))) basic.pause(20)
    }

    //% block="Aボタンが離されるまで待つ"
    export function waitAReleased(): void {
        while (!_internal.evalCondition(() => input.buttonIsPressed(Button.A))) basic.pause(20)
        while (!_internal.evalCondition(() => !input.buttonIsPressed(Button.A))) basic.pause(20)
    }

    // ============================
    //  B ボタン
    // ============================

    //% block="Bボタンが押されるまで待つ"
    export function waitB(): void {
        while (!_internal.evalCondition(() => input.buttonIsPressed(Button.B))) basic.pause(20)
    }

    //% block="Bボタンが離されるまで待つ"
    export function waitBReleased(): void {
        while (!_internal.evalCondition(() => input.buttonIsPressed(Button.B))) basic.pause(20)
        while (!_internal.evalCondition(() => !input.buttonIsPressed(Button.B))) basic.pause(20)
    }

    // ============================
    //  A+B 同時押し
    // ============================

    //% block="A+Bが同時に押されるまで待つ"
    export function waitAB(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    //% block="A+Bが離されるまで待つ"
    export function waitABReleased(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
        while (!_internal.evalCondition(() =>
            !(input.buttonIsPressed(Button.A) &&
              input.buttonIsPressed(Button.B))
        )) basic.pause(20)
    }

    // ============================
    //  A または B
    // ============================

    //% block="AまたはBが押されるまで待つ"
    export function waitAorB(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    //% block="AまたはBが離されるまで待つ"
    export function waitAorBReleased(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) basic.pause(20)
        while (!_internal.evalCondition(() =>
            !input.buttonIsPressed(Button.A) &&
            !input.buttonIsPressed(Button.B)
        )) basic.pause(20)
    }

    // ============================
    //  ロゴ（V2専用）→ サブカテゴリ「その他」
    // ============================

    //% block="ロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitLogo(): void {
        while (!_internal.evalCondition(() => input.logoIsPressed())) basic.pause(20)
    }

    //% block="ロゴが離されるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitLogoReleased(): void {
        while (!_internal.evalCondition(() => input.logoIsPressed())) basic.pause(20)
        while (!_internal.evalCondition(() => !input.logoIsPressed())) basic.pause(20)
    }

    //% block="Aまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitAorLogo(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }

    //% block="Bまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitBorLogo(): void {
        while (!_internal.evalCondition(() =>
            input.buttonIsPressed(Button.B) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }

    //% block="A+Bまたはロゴがタッチされるまで待つ (V2専用)"
    //% subcategory="その他"
    export function waitABorLogo(): void {
        while (!_internal.evalCondition(() =>
            (input.buttonIsPressed(Button.A) &&
             input.buttonIsPressed(Button.B)) ||
            input.logoIsPressed()
        )) basic.pause(20)
    }
}
