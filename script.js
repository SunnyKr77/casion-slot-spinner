const slotIcons = document.querySelectorAll('.icon');
const spinBtn = document.getElementById('spin-btn');
const congratulationsModal = document.getElementById('congratulations-modal');
const closeBtn = document.getElementById('close-btn');

const icons = ['🍒', '🍊', '🍇', '🍎', '🍋'];

let spinCount = 0;

//default slot icons
slotIcons.forEach(icon => {
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
});

function spinSlots() {
    spinBtn.disabled = true;


    // start spinning animation
    let interval = setInterval(() => {
        slotIcons.forEach(icon => {
            icon.textContent = icons[Math.floor(Math.random() * icons.length)]
        });
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        spinCount++;

        // if (spinCount >= 1) {
        //     const iconArray = Array.from(slotIcons);

        //     const firstIcon = iconArray[0].textContent;

        //     const allIconsMatch = iconArray.every(icon => icons.textContent === firstIcon)

        //     if (allIconsMatch) {
        //         congratulationsModal.classList.add('show');
        //     }
        // } 
        
        if (spinCount === 3) {
            // Choose a random icon from available icons
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      
            // Setting same icon for all slots
            slotIcons.forEach(icon => {
              icon.textContent = randomIcon;
            });
      
            // Show congratulations modal
            congratulationsModal.classList.add('show');
            spinBtn.disabled = true
        } else {
            spinBtn.disabled = false;
        }
    }, 2000)
}

function closeModal() {
    congratulationsModal.classList.remove('show')
}
closeBtn.addEventListener('click', closeModal)

spinBtn.addEventListener('click', spinSlots);