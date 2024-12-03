// إعداد عدادات الذكر بأعداد ثابتة
const dhikrCounts = {
    subhanAllah: 0,
    alhamdulillah: 0,
    allahuAkbar: 0,
    laIlahaIllaAllah: 0
};

// تحديد الأعداد المطلوبة لكل ذكر
const dhikrLimits = {
    subhanAllah: 33,
    alhamdulillah: 33,
    allahuAkbar: 33,
    laIlahaIllaAllah: 33
};



// اختيار جميع الأزرار وإضافة حدث عند الضغط
const buttons = document.querySelectorAll('.dhikr-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const dhikrType = button.getAttribute('data-id');
        const limit = dhikrLimits[dhikrType]; // العدد الثابت لكل ذكر
        
        if (dhikrCounts[dhikrType] < limit) {
            dhikrCounts[dhikrType]++;
            document.getElementById(`count-${dhikrType}`).textContent = dhikrCounts[dhikrType];
        }
        
        if (dhikrCounts[dhikrType] === limit) {
            alert(`لقد أكملت عدد مرات ${button.textContent}!`);
            dhikrCounts[dhikrType] = 0; // إعادة العداد إلى الصفر
        }
    });
});
