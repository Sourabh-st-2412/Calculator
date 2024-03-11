function appendToDisplay(value) {
    document.getElementById('Display').value += value;
}

function AllClear() {
    document.getElementById('Display').value = '';
    document.getElementById('DisplayResult').value = '';
    document.getElementById('DisplayResult1').value = '';
}

function ClearDisplay() {
    document.getElementById('Display').value = '';
}


function Calculate() {
    try {
        document.getElementById('DisplayResult').value = eval(document.getElementById('Display').value);
        document.getElementById('DisplayResult1').value = eval(document.getElementById('Display').value);
    } catch (error) {
        document.getElementById('DisplayResult').value = 'Error';
    }

}
