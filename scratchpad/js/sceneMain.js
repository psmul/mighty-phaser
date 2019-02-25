class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        // key, path
        // this.load.image("face", "images/face.png");

        // this.load.spritesheet('boy', 'images/boy.png', {
        //     frameWidth: 120,
        //     frameHeight: 200
        // });

        // this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);

    }
    create() {

        // this.char = this.add.sprite(0, game.config.height / 2, "boy");
        // var frameNames = this.anims.generateFrameNumbers('boy');
        // this.anims.create({
        //     key: 'walk',
        //     frames: frameNames,
        //     frameRate: 4,
        //     repeat: -1
        // });
        // this.char.play('walk');

        // this.tweens.add({
        //     targets: this.char,
        //     duration: 3000,
        //     x: game.config.width,
        //     y: 0,
        //     onComplete: this.onCompleteHandler
        // });

        // this.text1 = this.add.text(game.config.width / 2, game.config.height / 2, "Hellu!", {
        //     fontFamily: 'Anton',
        //     color: 'red',
        //     fontSize: 40
        // });
        // this.text1.setOrigin(0.5, 0.5);

        // this.face = this.add.sprite(game.config.width / 2, game.config.height / 2, "face");
        // this.face.setInteractive();
        // this.face.on('pointerdown', this.onDown, this);
        // this.face.on('pointerup', this.onUp, this);

        // this.graphics = this.add.graphics();
        // this.graphics.lineStyle(8, 0x0000ff);
        // this.graphics.moveTo(100, 100);
        // this.graphics.lineTo(100, 300);
        // this.graphics.strokePath();
        // this.graphics.strokeRect(100, 200, 50, 50);


        // this.catSound = this.sound.add('cat');
        // this.catSound.play();

        console.log("Ready!");

    }

    // onDown() {
    //     this.face.alpha = 0.5;
    // }

    // onUp() {
    //     this.face.alpha = 1;
    // }

    // onCompleteHandler(tween, targets, custom) {
    //     var char = targets[0];
    //     char.x = 0;
    //     char.y = game.config.height / 2;
    // }

    update() {
        // this.char.x += 2;

        // if (this.char.x > game.config.width) {
        //     this.char.x = 0;
        // }
    }
}