namespace WaitBlocks {

    //% color=#ff8800 icon="\uf017" block="待つ"

    // 条件を毎回評価するための最小限の仕組み（機能は変えない）
    function evalCondition(fn: () => boolean): boolean {
        return fn()
    }

    // ============================
    //  A ボタン
    // ============================

    //% block="Aボタンが押されるまで待つ"
    export function waitA(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.A))) {
            basic.pause(20)
        }
    }

    //% block="Aボタンが離されるまで待つ"
    export function waitAReleased(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.A))) {
            basic.pause(20)
        }
        while (!evalCondition(() => !input.buttonIsPressed(Button.A))) {
            basic.pause(20)
        }
    }

    // ============================
    //  B ボタン
    // ============================

    //% block="Bボタンが押されるまで待つ"
    export function waitB(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    //% block="Bボタンが離されるまで待つ"
    export function waitBReleased(): void {
        while (!evalCondition(() => input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
        while (!evalCondition(() => !input.buttonIsPressed(Button.B))) {
            basic.pause(20)
        }
    }

    // ============================
    //  A+B 同時押し
    // ============================

    //% block="A+Bが同時に押されるまで待つ"
    export function waitAB(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
    }

    //% block="A+Bが離されるまで待つ"
    export function waitABReleased(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) &&
            input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
        while (!evalCondition(() =>
            !(input.buttonIsPressed(Button.A) &&
              input.buttonIsPressed(Button.B))
        )) {
            basic.pause(20)
        }
    }

    // ============================
    //  A または B
    // ============================

    //% block="AまたはBが押されるまで待つ"
    export function waitAorB(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
    }

    //% block="AまたはBが離されるまで待つ"
    export function waitAorBReleased(): void {
        // まず押されるのを待つ
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
        // どちらも離されるまで待つ
        while (!evalCondition(() =>
            !input.buttonIsPressed(Button.A) &&
            !input.buttonIsPressed(Button.B)
        )) {
            basic.pause(20)
        }
    }

    // ============================
    //  ロゴ（V2専用） ← 最下部にまとめる
    // ============================

    //% block="ロゴがタッチされるまで待つ (V2専用)"
    export function waitLogo(): void {
        while (!evalCondition(() => input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="ロゴが離されるまで待つ (V2専用)"
    export function waitLogoReleased(): void {
        while (!evalCondition(() => input.logoIsPressed())) {
            basic.pause(20)
        }
        while (!evalCondition(() => !input.logoIsPressed())) {
            basic.pause(20)
        }
    }

    //% block="Aまたはロゴがタッチされるまで待つ (V2専用)"
    export function waitAorLogo(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.A) ||
            input.logoIsPressed()
        )) {
            basic.pause(20)
        }
    }

    //% block="Bまたはロゴがタッチされるまで待つ (V2専用)"
    export function waitBorLogo(): void {
        while (!evalCondition(() =>
            input.buttonIsPressed(Button.B) ||
            input.logoIsPressed()
        )) {
            basic.pause(20)
        }
    }

    //% block="A+Bまたはロゴがタッチされるまで待つ (V2専用)"
    export function waitABorLogo(): void {
        while (!evalCondition(() =>
            (input.buttonIsPressed(Button.A) &&
             input.buttonIsPressed(Button.B)) ||
            input.logoIsPressed()
        )) {
            basic.pause(20)
        }
    }
}
