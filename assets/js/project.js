
    function prevPage() {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        const name = page.split(".").shift();
        let baseName = name.replace(/[0-9]/g, '');
        let number = parseInt(name.replace(/[^\d]/g,''),10);
        if (number == 1) {
            window.location.href = "index.html";
        }
        else {
            window.location.href = baseName + (number - 1) + ".html";
        }
    }
    function nextPage() {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        const name = page.split(".").shift();
        let baseName = name.replace(/[0-9]/g, '');
        let number = parseInt(name.replace(/[^\d]/g,''),10);
        window.location.href = baseName + (number + 1) + ".html";
    }
