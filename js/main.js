document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const formSection = document.getElementById('contactFormSection');
    
    if (registerBtn && formSection) {
        registerBtn.addEventListener('click', function() {
            formSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            formSection.style.animation = 'none';
            formSection.offsetHeight; 
            formSection.style.animation = 'formFadeIn 0.8s ease-out';
            
            formSection.style.boxShadow = '0 0 0 5px rgba(255, 153, 102, 0.5)';
            setTimeout(() => {
                formSection.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }, 1000);
        });
    } else {
        console.error('Không tìm thấy phần tử cần thiết');
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbwLe73R9poMpAjByb52hFvdxxG8Mzixh5HGqZYxXNPnqXa53078M20xn1trY2nbGK67HQ/exec';
            
            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                })
            })
            .then(() => {
                alert(`Cảm ơn ${name} đã đăng ký!\nChúng tôi sẽ liên hệ với bạn qua số ${phone} sớm nhất.`);
                contactForm.reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.');
            });
        });
    }
});