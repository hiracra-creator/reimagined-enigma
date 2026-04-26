# WaitUntil Extension for micro:bit MakeCode

This MakeCode extension adds simple **“wait until …”** blocks  
that pause execution until a condition becomes true.

Useful for:
- Waiting for a button press  
- Waiting for a pin state  
- Waiting for any custom condition  
- Creating Scratch-like “until” behavior in MakeCode

---

## 🧩 Blocks Included

### ✔ 条件が真になるまで待つ
Waits until the given condition returns true.

```ts
WaitUntil.waitUntil(() => input.buttonIsPressed(Button.A))
