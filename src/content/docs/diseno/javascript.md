---
title: Implementación en Javascript
---

Esta implementación corre a través Astro Framework y Github pages.

## Corrección Gamma

1. Definición de variables globales:

```javascript
export let originalMat;
let b, g, r;
let pixelX, pixelY;
let isProcessing = false;
import { applyGammaCorrection, getOriginalMat, setOriginalMat } from './gammaTransform.js';
```

2. Carga de la imagen en las matrices:

```javascript
document.getElementById('imageInput').addEventListener('change', (e) => {
    let originalMat = getOriginalMat();
    let input = e.target;
    let reader = new FileReader();
  
    reader.onload = () => {
        let imgElement = document.getElementById('inputImage');
        imgElement.src = reader.result;
        imgElement.onload = () => {
            if (originalMat) originalMat.delete();
            setOriginalMat(cv.imread(imgElement));
            // originalMat = cv.imread(imgElement);
            applyGammaCorrection(parseFloat(document.getElementById('gammaSlider').value));
        }
    };
    reader.readAsDataURL(input.files[0]);
});
```

3. Corrección Gamma

```javascript
export let originalMat;
let b, g, r;
let pixelX, pixelY;
let isProcessing = false;

export function setOriginalMat(mat) {
    originalMat = mat;
}

export function getOriginalMat() {
    return originalMat;
}

export const applyGammaCorrection = (gamma) => {
    if (isProcessing) return;
    isProcessing = true;

    let src = originalMat.clone();
    let dst = new cv.Mat();

    if (gamma > 0) {
        if (src.type() !== cv.CV_8U) {
            src.convertTo(src, cv.CV_8U);
        }

        let lut = gamma_lut(gamma);
        cv.LUT(src, lut, dst);

        cv.imshow('outputCanvas', dst);

        lut.delete();
        
        // Enable download button and slider
        document.getElementById('downloadButton').disabled = false;
        document.getElementById('gammaSlider').disabled = false;
    }

    src.delete();
    dst.delete();

    isProcessing = false;
}

const gamma_lut = (gamma) => {
    let lut = new cv.Mat(1, 256, cv.CV_8U);
    for (let i = 0; i < 256; i++) {
        let value = Math.pow(i / 255.0, 1.0 / gamma) * 255.0;
        lut.ucharPtr(0, i)[0] = Math.round(value);
    }
    return lut;
}
```

Analogo a la creación del LUT en Python, se usa la tabla para aplicar la transformación gamma con la función `cv.LUT(source, lut, dest);`

4. Actualizar la imagen con el movimiento del slider

```javascript
import { applyGammaCorrection, originalMat } from './gammaTransform.js';

// Función de debounce para limitar la frecuencia de llamadas
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Slider
document.getElementById('gammaSlider').addEventListener('input', debounce(() => {
    let gamma = parseFloat(document.getElementById('gammaSlider').value);
    document.getElementById('gammaValue').textContent = gamma.toFixed(1);
    if (originalMat) {
        applyGammaCorrection(gamma);
    }
}, 50));
```
