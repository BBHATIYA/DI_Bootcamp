let form = document.forms[0]
form.addEventListener("submit", calc)
    function calc(event) {
        event.preventDefault()
        let radius = document.getElementsByName("radius")[0].value;
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
        document.getElementById('volume').value = volume;
    }


