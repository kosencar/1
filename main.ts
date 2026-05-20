radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        custom.new_controlTire(custom.TireDirection.Right, custom.TireFrontOrBack.Front, 0, custom.TireAction.Stop)
        custom.new_controlTire(custom.TireDirection.Left, custom.TireFrontOrBack.Front, 0, custom.TireAction.Stop)
    } else if (receivedNumber == 1) {
        custom.new_controlTire(custom.TireDirection.Right, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
        custom.new_controlTire(custom.TireDirection.Left, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
    } else if (receivedNumber == 2) {
        custom.new_controlTire(custom.TireDirection.Right, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
        custom.new_controlTire(custom.TireDirection.Left, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
    } else if (receivedNumber == 3) {
        custom.new_controlTire(custom.TireDirection.Right, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
        custom.new_controlTire(custom.TireDirection.Left, custom.TireFrontOrBack.Front, 0, custom.TireAction.Move)
    } else if (receivedNumber == 4) {
        custom.new_controlTire(custom.TireDirection.Right, custom.TireFrontOrBack.Back, 0, custom.TireAction.Move)
        custom.new_controlTire(custom.TireDirection.Left, custom.TireFrontOrBack.Back, 0, custom.TireAction.Move)
    }
})
