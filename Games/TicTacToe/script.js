window.onload = function()
{
    let player = "X";   //kdo zrovna hraje
    let filledCells = 0;

    let cell0 = document.getElementById("cell0");   //buňka
    let state0 = undefined;                         //stav buňky
    let contentCell0 = document.getElementById("contentCell0"); //obsah buňky

    let cell1 = document.getElementById("cell1");
    let state1 = undefined;
    let contentCell1 = document.getElementById("contentCell1");
    
    let cell2 = document.getElementById("cell2");
    let state2 = undefined;
    let contentCell2 = document.getElementById("contentCell2");

    let cell3 = document.getElementById("cell3");
    let state3 = undefined;
    let contentCell3 = document.getElementById("contentCell3");

    let cell4 = document.getElementById("cell4");
    let state4 = undefined;
    let contentCell4 = document.getElementById("contentCell4");

    let cell5 = document.getElementById("cell5");
    let state5 = undefined;
    let contentCell5 = document.getElementById("contentCell5");

    let cell6 = document.getElementById("cell6");
    let state6 = undefined;
    let contentCell6 = document.getElementById("contentCell6");

    let cell7 = document.getElementById("cell7");
    let state7 = undefined;
    let contentCell7 = document.getElementById("contentCell7");

    let cell8 = document.getElementById("cell8");
    let state8 = undefined;
    let contentCell8 = document.getElementById("contentCell8");

    cell0.onclick = function() //kliknutí na konkrétní buňku
    {
        if (typeof(state0) == "undefined") //kontrola, zda už není buňka zabraná
        {
            contentCell0.innerHTML = player;    //změna obsahu buňky
            state0 = player;                    //změna stavu buňky
            swapPlayers();                      //prohození hráčů
        }
    }

    cell1.onclick = function()
    {
        if (typeof(state1) == "undefined")
        {
            contentCell1.innerHTML = player;
            state1 = player;
            swapPlayers();
        }
    }

    cell2.onclick = function()
    {
        if (typeof(state2) == "undefined")
        {
            contentCell2.innerHTML = player;
            state2 = player;
            swapPlayers();
        }
    }

    cell3.onclick = function()
    {
        if (typeof(state3) == "undefined")
        {
            contentCell3.innerHTML = player;
            state3 = player;
            swapPlayers();
        }
    }

    cell4.onclick = function()
    {
        if (typeof(state4) == "undefined")
        {
            contentCell4.innerHTML = player;
            state4 = player;
            swapPlayers();
        }
    }

    cell5.onclick = function()
    {
        if (typeof(state5) == "undefined")
        {
            contentCell5.innerHTML = player;
            state5 = player;
            swapPlayers();
        }
    }

    cell6.onclick = function()
    {
        if (typeof(state6) == "undefined")
        {
            contentCell6.innerHTML = player;
            state6 = player;
            swapPlayers();
        }
    }

    cell7.onclick = function()
    {
        if (typeof(state7) == "undefined")
        {
            contentCell7.innerHTML = player;
            state7 = player;
            swapPlayers();
        }
    }

    cell8.onclick = function()
    {
        if (typeof(state8) == "undefined")
        {
            contentCell8.innerHTML = player;
            state8 = player;
            swapPlayers();
        }
    }

    function swapPlayers()
    {
        checkWin();
        if (player == "X")
        {
            player = "O";
        }
        else
        {
            player = "X";
        }
    }

    function checkWin()
    {
        let array = [                   //vytvoření pole podle stavů jednotlivých buněk
            [state0, state1, state2],
            [state3, state4, state5],
            [state6, state7, state8]
        ];

        filledCells = 0;

        for (let y = 0; y < 3; y++)
        {
            for (let x = 0; x < 3; x++)
            {
                if (typeof(array[y][x]) != "undefined")
                {
                    filledCells += 1;   //zjistí počet naplněných buněk
                }
            }
        }

        for (let y = 0; y < 3; y++) //kontrola, zda někdo vyhrál horizontálně
        {
            if (array[y][0] == array[y][1] && array[y][1] == array[y][2] && typeof(array[y][0]) != "undefined" && typeof(array[y][1]) != "undefined" && typeof(array[y][2]) != "undefined")
            {
                tellTheWinner(player);
            }
        }

        for (let x = 0; x < 3; x++) //kontrola, zda někdo vyhrál vertikálně
        {
            if (array[0][x] == array[1][x] && array[1][x] == array[2][x] && typeof(array[0][x]) != "undefined" && typeof(array[1][x]) != "undefined" && typeof(array[2][x]) != "undefined")
            {
                tellTheWinner(player);
            }
        }

        //kontrola, zda někdo vyhrál diagonálně
        if (array[0][0] == array[1][1] && array[1][1] == array[2][2] && typeof(array[0][0]) != "undefined" && typeof(array[1][1]) != "undefined" && typeof(array[2][2]) != "undefined")
        {
            tellTheWinner(player);
        }

        if (array[0][2] == array[1][1] && array[1][1] == array[2][0] && typeof(array[0][2]) != "undefined" && typeof(array[1][1]) != "undefined" && typeof(array[2][0]) != "undefined")
        {
            tellTheWinner(player);
        }

        if (filledCells == 9) //pokud program došel až sem a všechny buňky jsou naplněné, nastala remíza
        {
            alert("No one won!");
            document.location.reload();
        }
    }

    function tellTheWinner(winner)
    {
        //oznámení výherce a reload stránky
        alert(winner + " won!");
        document.location.reload();
    }
}