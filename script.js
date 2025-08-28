const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
    counterDisplay.textContent = count;
    
    counterDisplay.classList.add('counter-updated');
    
    setTimeout(() => {
        counterDisplay.classList.remove('counter-updated');
    }, 300);
    
    // Disable decrement button when count is 0
    if (count <= 0) {
        decrementBtn.disabled = true;
        count = 0; // Ensure count doesn't go below 0
    } else {
        decrementBtn.disabled = false;
    }
    
    // Change color based on count
    if (count > 0) {
        counterDisplay.style.color = '#4a6cf7'; // Blue for positive
    } else if (count < 0) {
        counterDisplay.style.color = '#e74c3c'; // Red for negative
    } else {
        counterDisplay.style.color = '#4a6cf7'; // Default blue for zero
    }
}

function setupEventListeners() {
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });
    
    decrementBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    });
    
    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
        
        resetBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            resetBtn.style.transform = 'rotate(0deg)';
        }, 300);
    });
    
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
            case '+':
                count++;
                updateDisplay();
                break;
            case 'ArrowDown':
            case '-':
                if (count > 0) {
                    count--;
                    updateDisplay();
                }
                break;
            case 'r':
            case 'R':
                count = 0;
                updateDisplay();
                break;
        }
    });
}

function init() {
    updateDisplay(); // Set initial display
    setupEventListeners();
    
    decrementBtn.disabled = true;
}

init();