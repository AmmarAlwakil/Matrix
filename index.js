// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('message');

    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
        messageElement.textContent = 'كلمة المرور وتأكيد كلمة المرور غير متطابقين';
        return;
    }

    // التحقق من أن جميع الحقول مملوءة
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        messageElement.textContent = 'الرجاء ملء جميع الحقول';
        return;
    }

    // عرض رسالة نجاح (يمكن استبدالها بعملية إرسال البيانات إلى السيرفر)
    messageElement.textContent = 'تم تسجيل الاشتراك بنجاح!';
    messageElement.style.color = 'green';
});
