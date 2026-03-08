// ==UserScript==
// @name         USM Evaluation Auto-Filler
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automatically fills USM course evaluations
// @author       Your Name
// @match        *://appselearn.usm.my/PenilaianPengajaranV3/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function createButton() {
        if (document.getElementById("usm-auto-btn")) return;

        const btn = document.createElement("button");
        btn.id = "usm-auto-btn";
        btn.innerHTML = "🚀 AUTO-FILL ALL";
        
        // Advanced styling to ensure it stays visible on the USM theme
        btn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 999999;
            padding: 20px;
            background-color: #ff0055;
            color: white;
            border: 3px solid white;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
        `;

        btn.onclick = (e) => {
            e.preventDefault();
            const radios = document.querySelectorAll('input[type="radio"][value="5"]');
            radios.forEach(radio => {
                radio.checked = true;
                // Trigger change event in case the site uses validation
                radio.dispatchEvent(new Event('change', { bubbles: true }));
            });
            alert("Done! All items set to 'Strongly Agree'. Please check before submitting.");
        };

        document.body.appendChild(btn);
    }

    // Run multiple times to catch the form if it loads slowly
    setTimeout(createButton, 1000);
    setTimeout(createButton, 3000);
})();
