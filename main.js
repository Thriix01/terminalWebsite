// User Input
let currentInput = ""
const input = document.getElementById("input");

let history = []

document.addEventListener("keydown", (event) => {
    if (event.key.length === 1) {
        currentInput += event.key;
    }

    switch (event.key){
        case "Backspace":
            currentInput = currentInput.slice(0,-1);
            break;
        case "Enter":
            history.push(currentInput)
            history.push(processCommand(currentInput))
            
            currentInput = "";
            break;
    }


    input.textContent = currentInput;
});

const commands = new Map([
    ["invalid",
        ["Invalid command <br>",
        `Type "help" for a list of available commands`]
    ],
    ["help",
        ["help <br>",
        "displays list of available commands <br><br>",
        "about <br>",
        "who is James Doherty <br><br>",
        "other commands"]
    ],
    ["about",
        ["I am James :D"]
    ],
    ["socials",
        `<a href="https://www.linkedin.com/in/james-d-doherty/">linkedin</a> <br>
        <a href=https://github.com/Thriix01">github</a>`
    ]
])

function processCommand(cmd){
    let output = ""
    if (commands.has(cmd)){
        output =  commands.get(cmd)
    } else {
        output = commands.get("invalid")
    }
    document.getElementById("History").innerHTML += "<span>user@portfolio:~$ " + currentInput + "<br></span>"
    for (index in output){
        document.getElementById("History").innerHTML += "<span>" + output[index] + "</span>"
    }
}