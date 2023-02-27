window.onload = function()
{
    document.body.addEventListener("keyup", keyUp);

    let cell0 = document.getElementById("cell0");
    let cell1 = document.getElementById("cell1");
    let cell2 = document.getElementById("cell2");
    let cell3 = document.getElementById("cell3");
    let cell4 = document.getElementById("cell4");
    let cell5 = document.getElementById("cell5");

    //barvy
    let cellBackground = "bisque";
    let cellActiveBackground = "yellow";
    let cellSelectedSuccesfullyBackground = "green";

    let cellsClicked = 0;   //na kolik buněk hráč klikl

    let winCount = 0;   //kolikrát hráč vyhrál

    let order = []; //pořadí buněk
    let tmp = 0;//pomocná proměnná
    let orderCreated = false;
    let orderShowed = false;

    let gameSpeed = 1000;//rychlost hry v milisekundách

    alert("Press S for start!");

    function main()
    {
        //Herní smyčka
        setTimeout(function onTick()
        {
            if (!orderCreated)
            {
                createOrder(); //vytvoří pořadí
            }
            if (!orderShowed)
            {
                showOrder(); //ukáže pořadí hráči
                tmp += 1;
            }else
            {
                clickCells(); //hráč musí kliknout na buňky ve správném pořadí
            }
            main();//smyčka
        }, gameSpeed)
    }

    function clickCells()
    {
        cell0.onclick = function()
        {
            if (order[cellsClicked] == 0) //pokud hráč klikl na správnou buňku
            {
                cell0.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                //pokud hráč klikl na špatnou buňku
                gameOver();
            }
        }
        cell1.onclick = function()
        {
            if (order[cellsClicked] == 1)
            {
                cell1.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                gameOver();
            }
        }
        cell2.onclick = function()
        {
            if (order[cellsClicked] == 2)
            {
                cell2.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                gameOver();
            }
        }
        cell3.onclick = function()
        {
            if (order[cellsClicked] == 3)
            {
                cell3.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                gameOver();
            }
        }
        cell4.onclick = function()
        {
            if (order[cellsClicked] == 4)
            {
                cell4.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                gameOver();
            }
        }
        cell5.onclick = function()
        {
            if (order[cellsClicked] == 5)
            {
                cell5.style.backgroundColor = cellSelectedSuccesfullyBackground;
                cellsClicked += 1;
            }
            else
            {
                gameOver();
            }
        }

        if (cellsClicked == 5)
        {
            youWin();
        }
    }

    function gameOver()
    {
        //Konec hry, vyresetování hodnot a hraje se od znova
        alert("Game over!");
        winCount = 0;
        tmp = 0;
        gameSpeed = 1000;
        order = [];
        cellsClicked = 0;
        orderShowed = false;
        orderCreated = false;
        cell0.style.backgroundColor = cellBackground;
        cell1.style.backgroundColor = cellBackground;
        cell2.style.backgroundColor = cellBackground;
        cell3.style.backgroundColor = cellBackground;
        cell4.style.backgroundColor = cellBackground;
        cell5.style.backgroundColor = cellBackground;
    }

    function youWin()
    {
        //Hráč vyhrál, vyresetování hodnot
        winCount += 1;
        alert("You win!");
        tmp = 0;
        gameSpeed = 1000 - winCount * 10; //příští kolo bude trochu rychlejší než to předchozí
        order = [];
        cellsClicked = 0;
        orderShowed = false;
        orderCreated = false;
        cell0.style.backgroundColor = cellBackground;
        cell1.style.backgroundColor = cellBackground;
        cell2.style.backgroundColor = cellBackground;
        cell3.style.backgroundColor = cellBackground;
        cell4.style.backgroundColor = cellBackground;
        cell5.style.backgroundColor = cellBackground;
    }

    function showOrder()
    {
        if (order[tmp] == 0) //Ukáže pořadí buněk jak jdou za sebou
        {
            //jednu buňku zvýrazní, ostatním dá normální barvu
            cell0.style.backgroundColor = cellActiveBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellBackground;
            
        }
        if (order[tmp] == 1)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellActiveBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellBackground;
        }
        if (order[tmp] == 2)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellActiveBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellBackground;
        }
        if (order[tmp] == 3)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellActiveBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellBackground;
        }
        if (order[tmp] == 4)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellActiveBackground;
            cell5.style.backgroundColor = cellBackground;
        }
        if (order[tmp] == 5)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellActiveBackground;
        }

        if (tmp == 6)
        {
            cell0.style.backgroundColor = cellBackground;
            cell1.style.backgroundColor = cellBackground;
            cell2.style.backgroundColor = cellBackground;
            cell3.style.backgroundColor = cellBackground;
            cell4.style.backgroundColor = cellBackground;
            cell5.style.backgroundColor = cellBackground;
            orderShowed = true;
            alert("Click on the cells in the right order!");
            gameSpeed = 10;
        }
    }

    function createOrder()
    {
        //vytvoří pořadí pomocí náhodných čísel
        let randomNumber;
        for (let i = 0; i < 6; i++)
        {
            do
            {
                randomNumber = getRandomInt(6);
            }while(order.includes(randomNumber)); //žádné číslo se nesmí ukázat dvakrát

            order[i] = randomNumber;
        }
        console.log(order);
        orderCreated = true;
    }

    function getRandomInt(max) { //vrácení náhodného čísla
        return Math.floor(Math.random() * max);
      }

    function keyUp(event)
    {
        if (event.keyCode == 83)
        {
            main(); //start herní smyčky
        }
    }
}