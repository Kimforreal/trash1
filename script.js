document.addEventListener('DOMContentLoaded', function() {
    const scheduleContainer = document.getElementById('schedule');
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    daysOfWeek.forEach(day => {
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');

        const date = new Date();
        const dayElement = document.createElement('span');
        dayElement.textContent = `${day} (${date.getMonth() + 1}/${date.getDate() + daysOfWeek.indexOf(day)})`;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', `Tasks for ${day}`);

        scheduleItem.appendChild(dayElement);
        scheduleItem.appendChild(input);
        scheduleContainer.appendChild(scheduleItem);
    });
});
