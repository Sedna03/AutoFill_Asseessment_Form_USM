// ==UserScript==
// @name         USM Evaluation Auto-Filler
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automatically fills USM course evaluations
// @author       Your Name
// @match        *://appselearn.usm.my/PenilaianPengajaranV3/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=usm.my
// @grant        none
// @run-at       document-end
// @noframes     false
// ==/UserScript==

(function() {
    'use strict';

    function createButton() {
        // If button exists, don't create another
        if (document.getElementById("usm-auto-btn")) return;

        const btn = document.createElement("button");
        btn.id = "usm-auto-btn";
        btn.innerHTML = "🚀 AUTO-FILL ALL";
        
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 2147483647;
            padding: 15px 25px;
            background-color: #7b2cbf;
            color: white;
            border: 2px solid #ffffff;
            border-radius: 12px;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.4);
            display: block !important;
        `;

        btn.onclick = (e) => {
            e.preventDefault();
            // This looks for all radio buttons with value 5
            const radios = document.querySelectorAll('input[type="radio"][value="5"]');
            if (radios.length === 0) {
                alert("No radio buttons found. Are you on the evaluation page?");
                return;
            }
            radios.forEach(radio => {
                radio.click(); // Using click() is better for triggering site logic
                radio.checked = true;
            });
            alert(`Success! Selected ${radios.length} items.`);
        };

        // Append to body or the document element
        (document.body || document.documentElement).appendChild(btn);
    }

    // Try to create the button immediately and then every 2 seconds (in case of slow loading)
    createButton();
    setInterval(createButton, 2000);
})();
