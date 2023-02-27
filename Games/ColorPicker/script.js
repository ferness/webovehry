window.onload = function()
{  
    let cell0 = document.getElementById("cell0");
    let cell1 = document.getElementById("cell1");
    let cell2 = document.getElementById("cell2");
    let cell3 = document.getElementById("cell3");
    let cell4 = document.getElementById("cell4");
    let cell5 = document.getElementById("cell5");

    let rgbText = document.getElementById("rgbText");

    let rgb = [];
    let rgbCreated = false;

    let score = 0;

    let rightCell;

    main();

    function main()
    {
        if (!rgbCreated)
        {
            createRGB();
            rgbText.innerHTML = "RGB: " + rgb[0] + ", " + rgb[1] + ", " + rgb[2];
            alert("Click on cell with the right RGB");
            fillCells();
            console.log(rightCell);
        }
    }

    function fillCells()
    {
        if (rightCell != 0)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell0.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }
        if (rightCell != 1)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell1.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }
        if (rightCell != 2)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell2.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }
        if (rightCell != 3)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell3.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }
        if (rightCell != 4)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell4.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }
        if (rightCell != 5)
        {
            while(true)
            {
                let red = getRandomInt(255);
                let green = getRandomInt(255);
                let blue = getRandomInt(255);

                if ((red != rgb[0]) && (green != rgb[1]) && (blue != rgb[2]))
                {
                    cell5.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                    break;
                }
            }
        }

        switch (rightCell)
        {
            case 0:
                cell0.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            case 1:
                cell1.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            case 2:
                cell2.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            case 3:
                cell3.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            case 4:
                cell4.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            case 5:
                cell5.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                break;
            default:
                alert("WTF something went wrong");
        }
    }

    cell0.onclick = function()
    {
        if (rightCell == 0)
        {
            YouWin();
        }
        else
        {
            YouLose();
        }
    }

    cell1.onclick = function()
    {
        if (rightCell == 1)
        {
            YouWin();
        }
        else
        {
            YouLose();
        }
    }

    cell2.onclick = function()
    {
        if (rightCell == 2)
        {
            YouWin()
        }
        else
        {
            YouLose();
        }
    }

    cell3.onclick = function()
    {
        if (rightCell == 3)
        {
            YouWin();
        }
        else
        {
            YouLose();
        }
    }

    cell4.onclick = function()
    {
        if (rightCell == 4)
        {
            YouWin();
        }
        else
        {
            YouLose();
        }
    }

    cell5.onclick = function()
    {
        if (rightCell == 5)
        {
            YouWin();
        }
        else
        {
            YouLose();
        }
    }

    function YouWin()
    {
        score++;
        alert("You win! Your score is: " + score);
        rgbCreated = false;
        main();
    }

    function YouLose()
    {
        score = 0;
        alert("You lose! Your score is: " + score + "\nCell number " + (rightCell + 1) + " was right");
        rgbCreated = false;
        main();
    }

    function createRGB()
    {
        rgb[0] = getRandomInt(255);
        rgb[1] = getRandomInt(255);
        rgb[2] = getRandomInt(255);
        rightCell = getRandomInt(6);
        rgbCreated = true;
    }

    function getRandomInt(max) //vrácení náhodného čísla 
    {
        return Math.floor(Math.random() * max);
    }
}