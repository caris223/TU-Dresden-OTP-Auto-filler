# 
const password = "REPLACE_WITH_YOUR_PASSWORD";

function solve() {
    // Look for the legend containing the positions
    // The HTML structure is <legend><nobr>Indexed Secret value of position 18 & 10</nobr></legend>
    const legend = document.querySelector('legend nobr');
    if (!legend) {
        console.log("TU Dresden OTP: Legend element not found.");
        return;
    }

    const text = legend.textContent || legend.innerText;
    console.log("TU Dresden OTP: Found text:", text);

    // Regex to capture the two numbers. 
    // Matches "position", followed by spaces/nbsp, digits, spaces/nbsp, "&", spaces/nbsp, digits
    const match = text.match(/position\s*(\d+)\s*&\s*(\d+)/i);

    if (match) {
        const pos1 = parseInt(match[1], 10);
        const pos2 = parseInt(match[2], 10);

        console.log(`TU Dresden OTP: Extracted positions ${pos1} and ${pos2}`);

        // Check if positions are valid for the password length
        if (pos1 > password.length || pos2 > password.length || pos1 < 1 || pos2 < 1) {
            console.error("TU Dresden OTP: Positions out of range.");
            return;
        }

        // 1-based index, so subtract 1
        const char1 = password[pos1 - 1];
        const char2 = password[pos2 - 1];

        const code = char1 + char2;
        console.log(`TU Dresden OTP: Generated code ${code}`);

        const input = document.getElementById('fudis_otp_input');
        if (input) {
            input.value = code;
            // Dispatch events to ensure any JS listening to the input picks up the change
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            console.log("TU Dresden OTP: Input filled.");
        } else {
            console.error("TU Dresden OTP: Input field 'fudis_otp_input' not found.");
        }
    } else {
        console.log("TU Dresden OTP: Could not match position pattern in text.");
    }
}

// Run when the page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', solve);
} else {
    solve();
}
