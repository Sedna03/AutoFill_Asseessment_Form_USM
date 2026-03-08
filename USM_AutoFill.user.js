// ==UserScript==
// @name         USM Evaluation Auto-Filler
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically fills USM course evaluations with 'Strongly Agree'
// @author       Your Name
// @match        *://appselearn.usm.my/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the floating button
    const btn = document.createElement("button");
    btn.innerHTML = "🚀 Auto-Fill (Scale 5)";
    btn.style.cssText = "position:fixed;top:20px;right:20px;z-index:9999;padding:12px;background:#7b2cbf;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:bold;box-shadow: 0px 4px 10px rgba(0,0,0,0.2);";

    btn.onclick = () => {
        const radios = document.querySelectorAll('input[type="radio"][value="5"]');
        if (radios.length > 0) {
            radios.forEach(radio => radio.click());
            alert(`Success! Filled ${radios.length} items.`);
        } else {
            alert("No evaluation radio buttons found on this page.");
        }
    };

    document.body.appendChild(btn);
})();