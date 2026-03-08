// ==UserScript==
// @name         USM Evaluation Auto-Filler
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Aggressive button injection for USM eLearn
// @author       Your Name
// @match        *://appselearn.usm.my/*
// @grant        none
// @run-at       document-start
// @allFrames    true
// @noframes     false
// ==/UserScript==

(function() {
    'use strict';

    function injectButton() {
        // Prevent multiple buttons
        if (document.getElementById("usm-auto-btn")) return;

        const btn = document.createElement("button");
        btn.id = "usm-auto-btn";
        btn.innerHTML = "🚀 AUTO-FILL (Scale 5)";
        
        // Using ultra-high z-index and distinct styling
        btn.style.cssText = `
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            z-index: 2147483647 !important;
            padding: 15px 25px !important;
            background-color: #d0312d !important;
            color: white !important;
            border: 3px solid #ffffff !important;
            border-radius: 50px !important;
            cursor: pointer !important;
            font-weight: bold !important;
            font-size: 14px !important;
            box-shadow: 0px 5px 15px rgba(0,0,0,0.5) !important;
            display: block !important;
        `;

        btn.onclick = (e) => {
            e.preventDefault();
            const radios = document.querySelectorAll('input[type="radio"][value="5"]');
            if (radios.length === 0) {
                alert("No radio buttons found in this specific frame. Try clicking inside the form first.");
            } else {
                radios.forEach(r => r.click());
                alert(`Filled ${radios.length} items!`);
            }
        };

        (document.body || document.documentElement).appendChild(btn);
    }

    // Try to inject immediately and every 2 seconds
    injectButton();
    setInterval(injectButton, 2000);

})();
