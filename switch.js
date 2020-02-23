let good, cheap, fast;

good = document.getElementById("good");
fast = document.getElementById("fast");
cheap = document.getElementById("cheap");

function checkGood() {
    if (good.checked  && cheap.checked  )
    {
        fast.checked = false;
    }
}
function checkFast() {
    if (good.checked  && fast.checked )
    {
        cheap.checked = false;
    }
}
function checkCheap() {
    if (cheap.checked && fast.checked)
    {
        good.checked = false;
    }
}
