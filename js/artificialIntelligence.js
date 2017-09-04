function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

GameManager.prototype.getBestMove = function(grid)
{
    var score = Number.MIN_VALUE;
    var bestMove = getRandomIntInclusive(0, 3);
    return bestMove;
}

