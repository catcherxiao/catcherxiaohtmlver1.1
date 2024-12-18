// 初始化轮播图
const swiper = new Swiper('.swiper-container', {
    // 循环模式
    loop: true,
    
    // 自动播放
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // 导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 触摸滑动
    touchRatio: 1,
    
    // 过渡效果
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// 二维码图片点击放大
document.querySelectorAll('.qr-code').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1001';
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.objectFit = 'contain';
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
});

// 汉堡菜单交互
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// 点击导航链接时关闭菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// 点击页面其他区域关闭菜单
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
}); 