\<template>
    <div class="blog-homepage">
        <!-- 头部区域 -->
        <header class="header">
            <div class="header-content">
                <h1 class="blog-title">欢迎来到`草莓甜心🍓`的个人网站！</h1>
                <p class="blog-subtitle">分享我的技术与生活</p>
            </div>
        </header>
        <!-- 个人信息区域 -->
        <section class="profile-section">
            <div class="profile-container">
                <img src="/myHeadPage.webp" alt="个人头像" class="profile-avatar">
                <div class="profile-info">
                    <h2 class="profile-name">草莓甜心🍓</h2>
                    <p class="profile-description">热爱编程，喜欢探索新技术。目前专注于后端开发领域，致力于打造优秀的用户体验。</p>
                    <div class="profile-social">
                        <a href="#" target="_blank" class="social-link">
                            <i class="el-icon-twitter"></i>
                        </a>
                        <a href="#" target="_blank" class="social-link">
                            <i class="el-icon-github"></i>
                        </a>
                        <a href="#" target="_blank" class="social-link">
                            <i class="el-icon-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    // 由于删除文章模块，这里不需要模拟文章数据和阅读文章方法了
</script>

<style scoped>
/* 全局样式 */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* 头部样式 */
.header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 80px 0;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

.blog-title {
    font-size: 36px;
    margin-bottom: 10px;
}

.blog-subtitle {
    font-size: 18px;
    opacity: 0.8;
}

/* 个人信息区域样式 */
.profile-section {
    background-color: white;
    padding: 60px 0;
    text-align: center;
}

.profile-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 30px;
}

.profile-info {
    text-align: left;
}

.profile-name {
    font-size: 24px;
    margin-bottom: 10px;
}

.profile-description {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.profile-social {
    display: flex;
    gap: 15px;
}

.social-link {
    color: #333;
    font-size: 24px;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #007bff;
}
</style>