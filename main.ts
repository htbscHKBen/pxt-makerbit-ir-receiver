makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
basic.forever(function () {
    if (makerbit.wasAnyIrButtonPressed()) {
        basic.showNumber(makerbit.irButton())
    }
})
