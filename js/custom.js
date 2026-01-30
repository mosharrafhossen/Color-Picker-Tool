

    const colorInput = document.getElementById("colorInput");
    const preview = document.getElementById("preview");
    const hex = document.getElementById("hex");
    const rgb = document.getElementById("rgb");

    function hexToRgb(hexColor) {
        const r = parseInt(hexColor.substr(1,2),16);
        const g = parseInt(hexColor.substr(3,2),16);
        const b = parseInt(hexColor.substr(5,2),16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    colorInput.addEventListener("input", () => {
        const c = colorInput.value;
        preview.style.background = c;
        hex.textContent = c;
        rgb.textContent = hexToRgb(c);
    });

    preview.style.background = colorInput.value;

    // Copy Function
    function copyText(text) {
        navigator.clipboard.writeText(text);
        alert("Copied: " + text);
    }

    // Gradient
    const g1 = document.getElementById("gColor1");
    const g2 = document.getElementById("gColor2");
    const angle = document.getElementById("angle");
    const angleValue = document.getElementById("angleValue");
    const gradientBox = document.getElementById("gradientBox");
    const gradientCode = document.getElementById("gradientCode");

    function updateGradient() {
        const css = `linear-gradient(${angle.value}deg, ${g1.value}, ${g2.value})`;
        gradientBox.style.background = css;
        gradientCode.textContent = `background: ${css};`;
        angleValue.textContent = angle.value;
    }

    g1.addEventListener("input", updateGradient);
    g2.addEventListener("input", updateGradient);
    angle.addEventListener("input", updateGradient);

    updateGradient();

