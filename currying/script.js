// function calculate(){
//     preventDefault();
//     let width = document.getElementById("width").value;
//     let height = document.getElementById("height").value;
//     let padding = document.getElementById("padding").value;
//     let border = document.getElementById("border").value;
//     let margin = document.getElementById("margin").value;
//     console.log(width, height, padding, border, margin);
// }

let btn = document.getElementById("calculateBtn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    let width = Number.parseInt(document.getElementById("width").value);
    let height = Number.parseInt(document.getElementById("height").value);
    let padding = Number.parseInt(document.getElementById("padding").value);
    let border = Number.parseInt(document.getElementById("border").value);
    let margin = Number.parseInt(document.getElementById("margin").value);
    // console.log(width, height, padding, border, margin);
    let result = calcu(width)(height)(padding)(border)(margin);
    console.log(result);
    document.getElementById("msg").innerHTML =  `Total Dimension of div : ${result}`;
})


function calcu(width){
    return function(height){
        return function(padding){
            return function(border){
                return function(margin){
                    return width + height + 2*(padding + border + margin);
                }
            }
        }
    }
}