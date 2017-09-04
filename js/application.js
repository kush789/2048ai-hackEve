// Wait till the browser is ready to render the game (avoids glitches)
// 0: up, 1: right, 2: down, 3: left

window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

	function AI() {
	    setTimeout(function () {


			if (game.move(game.getBestMove(game.grid)) === false)
			{
				for (var i = 0; i < 4; i ++)
					if (game.move(i) === true)
						break;
			}

			AI();

	    }, 50);
	}
	AI();
});
