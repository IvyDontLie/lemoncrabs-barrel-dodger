controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`lemoncrab`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
controller.moveSprite(mySprite, 100, 0)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`barrel`, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
