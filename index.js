let equation = [];
let bracketCount = 0;
let bracketNum = false;

function zero () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(0)
    document.getElementById("display").innerHTML = equation.join('');
}

function one () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(1)
    document.getElementById("display").innerHTML = equation.join('');
}

function two () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(2)
    document.getElementById("display").innerHTML = equation.join('');
}

function three () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(3)
    document.getElementById("display").innerHTML = equation.join('');
}
function four () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(4)
    document.getElementById("display").innerHTML = equation.join('');
}

function five () {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(5)
    document.getElementById("display").innerHTML = equation.join('');
}

function six() {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(6)
    document.getElementById("display").innerHTML = equation.join('');
}

function seven() {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(7)
    document.getElementById("display").innerHTML = equation.join('');
}

function eight() {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(8)
    document.getElementById("display").innerHTML = equation.join('');
}

function nine() {
    if (bracketCount > 0) {
        bracketNum = true;
    }
    equation.push(9)
    document.getElementById("display").innerHTML = equation.join('');
}

function plus() {
    equation.push('+')
    document.getElementById("display").innerHTML = equation.join('');
}

function minus() {
    equation.push('-')
    document.getElementById("display").innerHTML = equation.join('');
}

function times() {
    equation.push('*')
    document.getElementById("display").innerHTML = equation.join('');
}

function dividedBy() {
    equation.push('/')
    document.getElementById("display").innerHTML = equation.join('');
}

function point() {
    equation.push('.')
    document.getElementById("display").innerHTML = equation.join('');
}

function pi() {
    equation.push('3.14')
    document.getElementById("display").innerHTML = equation.join('');
}

function bracket() {
    if (equation.length-1 )
    if (bracketNum == false) {
        bracketCount++;
        equation.push('(')
        document.getElementById("display").innerHTML = equation.join('');
        console.log(bracketCount);
    } else if (bracketCount > 0 && bracketNum == true) {
        bracketCount--;
        console.log(bracketCount)
        equation.push(')')
        document.getElementById("display").innerHTML = equation.join('');
        if (bracketCount == 0) {
            bracketNum = false;
        }
    }

}

function equal() {
    let result = equation.join('');
    equation = [];
    document.getElementById("display").innerHTML = eval(result);
}

function off() {
    bracketCount = 0;
    bracketNum = false;
    equation.pop()
    document.getElementById("display").innerHTML = equation.join('');
}