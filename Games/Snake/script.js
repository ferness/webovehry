window.onload = function() {
    document.body.addEventListener("keyup", keyUp);
    let canvas = document.getElementById("gameCanvas");
    let ctx = canvas.getContext("2d");
    const canvasWidth = 600;
    const canvasHeight = 400;

    let frameTime = 150; //Doba, kterou bude trvat jeden snímek, čím nížší, tím rychleji hra pojede
    let gameOver = false;

    //Barvy
    let gridColor = 'ligthgrey';
    let backgroundColor = 'white';
    let snakeColor = 'lightgreen';
    let snakeDirection = "right";

    //Velikost jedné buňky hracího pole v pixelech
    let cellSize = 25;

    //Pozice jednotlivých částí snakea
    let snakeCoords = [
        { x: 200, y: 200 },
        { x: 225, y: 200 },
        { x: 250, y: 200 }
    ]

    //Proměnné pro jídlo
    let foodGenerated = false;
    let foodX = 0;
    let foodY = 0;
    let foodColor = 'red';

    main(); //První zavolání herní smyčky

    function main() {
        //Herní smyčka
        setTimeout(function onTick() {
            if (!gameOver) {
                fillCanvas();
                moveSnake();
                drawSnake();
                drawGrid();
                generateFood();
                eatFood();
                checkCollision();
                main();
            }
        }, frameTime)
    }

    function fillCanvas() {
        //Překreslení jednou barvou
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    function moveSnake() {
        //Pohyb snakea
        if (snakeDirection == "right") {
            const head = { x: snakeCoords[0].x + cellSize, y: snakeCoords[0].y }; //Vytvoří novou "hlavu" pro snakea
            snakeCoords.unshift(head); //Přidá novou "hlavu" na jeho začátek
            snakeCoords.pop(); //odebere jeho poslední část
        }

        if (snakeDirection == "left") {
            const head = { x: snakeCoords[0].x - cellSize, y: snakeCoords[0].y };
            snakeCoords.unshift(head);
            snakeCoords.pop();
        }

        if (snakeDirection == "up") {
            const head = { x: snakeCoords[0].x, y: snakeCoords[0].y - cellSize };
            snakeCoords.unshift(head);
            snakeCoords.pop();
        }

        if (snakeDirection == "down") {
            const head = { x: snakeCoords[0].x, y: snakeCoords[0].y + cellSize };
            snakeCoords.unshift(head);
            snakeCoords.pop();
        }
    }

    function drawSnakeBlock(snakeBlock) //vykreslí jednu část snakea
    {
        ctx.fillStyle = snakeColor;
        ctx.fillRect(snakeBlock.x, snakeBlock.y, cellSize, cellSize);
    }

    function drawSnake() {
        //Vykreslení snakea po jednotlivých částech
        snakeCoords.forEach(drawSnakeBlock);
    }

    function drawGrid() {
        //Vykreslení hracího pole
        for (let y = 0; y < canvasHeight; y += cellSize) {
            for (let x = 0; x < canvasWidth; x += cellSize) {
                ctx.strokeStlye = gridColor;
                ctx.strokeRect(x, y, cellSize, cellSize);
            }
        }
    }

    function generateFood() //Vytvorření a vykreslení jídla
    {
        if (!foodGenerated) {
            while (foodY % cellSize != 0 && foodX % cellSize != 0); {
                //Vytvoření náhodných souřadnic
                foodX = Math.floor((Math.random() * canvasWidth) / cellSize) * cellSize;
                foodY = Math.floor((Math.random() * canvasHeight) / cellSize) * cellSize;
            }

            for (let i = 0; i < snakeCoords.length - 1; i++) //kontrola, zda se jídlo nevytvořilo v těle snakea
            {
                if (foodX == snakeCoords[i].x && foodY == snakeCoords[i].y) {
                    generateFood(); //pokud se jídlo vytvořilo v těle snakea, vytvoř jídlo znova
                } else {
                    foodGenerated = true;
                }
            }
        } else {
            //Vykreslení jídla pomocí vygenerovaných pozic
            ctx.fillStyle = foodColor;
            ctx.fillRect(foodX, foodY, cellSize, cellSize);
        }
    }

    function eatFood() //zjištění, pokud snake snědl jídlo
    {
        if (snakeCoords[0].x == foodX && snakeCoords[0].y == foodY) //pokud se Xová a Yová pozice hlavy rovná s pozicí jídla
        {
            if (snakeDirection == "right") {
                const tail = { x: snakeCoords[0].x + cellSize, y: snakeCoords[0].y }; //vytvoří novouz část snakea
                snakeCoords.push(tail); //přidá novou část ke snakeovi
            }

            if (snakeDirection == "left") {
                const tail = { x: snakeCoords[0].x - cellSize, y: snakeCoords[0].y };
                snakeCoords.push(tail);
            }

            if (snakeDirection == "up") {
                const tail = { x: snakeCoords[0].x, y: snakeCoords[0].y - cellSize };
                snakeCoords.push(tail);
            }

            if (snakeDirection == "down") {
                const tail = { x: snakeCoords[0].x, y: snakeCoords[0].y + cellSize };
                snakeCoords.push(tail);
            }
            foodGenerated = false;
        }
    }

    function checkCollision() //Kontrola kolize
    {
        //kolize s herním oknem
        if (snakeCoords[0].x < 0 || snakeCoords[0].x > canvasWidth - cellSize || snakeCoords[0].y < 0 || snakeCoords[0].y > canvasHeight - cellSize) {
            endGame();
        }

        //kolize hlavy s vlastním tělem
        for (let i = 1; i < snakeCoords.length - 1; i++) {
            if (snakeCoords[0].x == snakeCoords[i].x && snakeCoords[0].y == snakeCoords[i].y) {
                endGame();
            }
        }

    }

    function endGame() {
        gameOver = true; //ukončení herního cyklu
        alert("Haha you lost!!"); //psychické zdeptání hráče
    }


    function keyUp(event) //upuštění klávesy, kódy kláves -> https://www.toptal.com/developers/keycode/for/alt
    {
        if (event.keyCode == 87) //klávesa W
        {
            if (snakeDirection != "down") {
                snakeDirection = "up";
            }
        }

        if (event.keyCode == 83) //klávesa S
        {
            if (snakeDirection != "up") {
                snakeDirection = "down";
            }
        }

        if (event.keyCode == 65) //klávesa D
        {
            if (snakeDirection != "right") {
                snakeDirection = "left";
            }
        }

        if (event.keyCode == 68) //klávesa A
        {
            if (snakeDirection != "left") {
                snakeDirection = "right";
            }
        }
    }
}