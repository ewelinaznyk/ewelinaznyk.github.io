(function() {
    var numberOfTiles = 20;
    var tilesPerRow = 5;
    var tiles = [];
    var collectedTiles = [];
    var numberOfMovies = 0;
    var canTake = true;
    var pairOfTiles = 0;
    var images = [
        'images/title_1.jpg',
        'images/title_2.jpg',
        'images/title_3.jpg',
        'images/title_4.jpg',
        'images/title_5.jpg',
        'images/title_6.jpg',
        'images/title_7.jpg',
        'images/title_8.jpg',
        'images/title_9.jpg',
        'images/title_10.jpg'
    ];

function startGame() {

    tiles = [];
    collectedTiles = [];
    canTake = true;
    numberOfMovies = 0;
    pairOfTiles = 0;

    var board = $('.board').empty();


    for (var i=0; i<numberOfTiles; i++) {
        tiles.push(Math.floor(i/2));
    }

    for (i=numberOfTiles-1; i>0; i--) {
        var swap = Math.floor(Math.random()*i);
        var tmp = tiles[i];
        tiles[i] = tiles[swap];
        tiles[swap] = tmp;
    }

    for (i=0; i<numberOfTiles; i++) {
        var tile = $('<div class="tile"></div>');
        board.append(tile);

        tile.data('cardType',tiles[i]);
        tile.data('index', i)

        tile.css({
            left : 5+(tile.width()+5)*(i%tilesPerRow)
        });
        tile.css({
            top : 5+(tile.height()+5)*(Math.floor(i/tilesPerRow))
        });

        tile.bind('click', function (){
            clickTile($(this))
        });
    }
    $('.moves').html(numberOfMovies);
}

function clickTile(element) {
    if (canTake) {
    // jeżeli nie pobraliśy 1 elementu albo idex nie istnieje w pobranych
        if (!collectedTiles[0] || (collectedTiles[0].data('index') != element.data('index'))) {
            collectedTiles.push(element);
            element.css({'background-image' : 'url(' + images[element.data('cardType')]+')'})
        }

        if (collectedTiles.length == 2) {
            canTake = false;

            if (collectedTiles[0].data('cardType') == collectedTiles[1].data('cardType')) {
                window.setTimeout(function(){
                    deleteTiles();
                }, 500);
            } else {
                window.setTimeout(function(){
                    restartTiles();
                }, 500);
            }
            numberOfMovies++;
            $('.moves').html('Liczba ruchów: '+numberOfMovies)
        }
    }
}

function deleteTiles() {
    collectedTiles[0].fadeOut(function() {
        $(this).remove();
    });
    collectedTiles[1].fadeOut(function() {
        $(this).remove();

    pairOfTiles++;
    if (pairOfTiles >= numberOfTiles/2) {
        alert('Koniec gry');
    }

        canTake = true;
        collectedTiles = new Array();
    });
}

function restartTiles() {
    collectedTiles[0].css({'background-image':'url(images/question_mark.png)'})
    collectedTiles[1].css({'background-image':'url(images/question_mark.png)'})
    collectedTiles = new Array();
    canTake = true;
}
                                                                           
$(document).ready(function() {
    $('.start').click(function(){
        startGame();
    });
})


})();