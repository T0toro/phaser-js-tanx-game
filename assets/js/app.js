;(function() {
  var game = new Phaser.Game(500, 500, Phaser.AUTO, '#game');

  // Задаем 
  // игровые параметры 
  var PhaserGame = function(game) {
    this.tank = null;
    this.turret = null;
    this.flame = null;
    this.bullet = null;

    this.background = null;
    this.targets = null;

    this.power = 300;
    this.powerText = null;

    this.cursors = null;
    this.fireButton = null;
  }

  PhaserGame.prototype = {

    // Настройки по умолчанию
    init: function() {
      // Отключаем сглаживание
      this.game.renderer.renderSession.roundPixels = true;

      // Задаем размер игрового мира
      this.game.world.setBounds(0, 0, 992, 480);

      // Физика в игре
      this.physics.startSystem(Phaser.Physics.ARCADE);

      // Сила гравитации
      this.physics.arcade.gravity.y = 200;
    },

    // Загружаем игровые ресурсы
    preload: function() {
      this.load.image('tank', 'assets/img/tank.png');
      this.load.image('turret', 'assets/img/turret.png');
      this.load.image('bullet', 'assets/img/bullet.png');
      this.load.image('background', 'assets/img/background.png');
      this.load.image('flame', 'assets/img/flame.png');
      this.load.image('target', 'assets/img/target.png');
    }
  }

})();