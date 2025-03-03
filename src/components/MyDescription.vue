<template>
  <div class="blog-container">
    <!-- 头部信息 -->
    <header class="blog-header">
      <div class="header-content">
        <h1>草莓甜心（笔名）</h1>
        <p>大三 | 本科 | 22 岁 | 男</p>
        <p>主要研究方向：Java 后端开发</p>
        <p>邮箱：1994785686@qq.com</p>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="blog-main">
      <!-- 教育经历 -->
      <section class="blog-section">
        <h2>教育经历</h2>
        <div class="section-content">
          <p>河南工业大学 软件工程专业 本科 文艺委员</p>
          <p>主修课程：计算机网络，数据结构与算法，面向对象程序设计，Java 程序设计，Java 企业级开发，软件工程等</p>
        </div>
      </section>

      <!-- 专业技能 -->
      <section class="blog-section">
        <h2>专业技能</h2>
        <div class="section-content">
          <ul>
            <li>Java 基础: 熟练掌握 Java 核心基础知识, 如集合, 反射, JUC 等, 了解 JVM。</li>
            <li>并发编程: 熟悉 java 并发编程, 熟悉线程池的使用, ThreadLocal 等。</li>
            <li>MySQL: 熟练使用 MySQL 数据库, 了解 SQL 优化。</li>
            <li>Redis: 熟练使用 Redis, 能够在不同的业务场景中使用 Redis 数据类型进行合理的功能设计。</li>
            <li>框架: 熟练使用 Spring，SpringMVC，SpringBoot，Mybtis - Plus 等核心框架。</li>
            <li>微服务: 了解 SpringCloud, SpringCloudAlibaba 各组件的使用, 如 Nacos, OpenFeign, SpringCloudGateway, Sentinel 等并了解 Elasticsearch，RabbitMQ 等中间件技术。</li>
            <li>开发工具: 能够使用 Git，Maven, PostMan 等工具完成团队协同项目开发。</li>
            <li>前端：了解 HTML，CSS，JavaScript，Vit，Vue3，ElementPlus 等主流前端技术。</li>
          </ul>
        </div>
      </section>

      <!-- 项目经历 -->
      <section class="blog-section">
        <h2>项目经历</h2>
        <!-- 智链优购云巢项目 -->
        <article class="project-article">
          <h3>智链优购云巢</h3>
          <div class="article-content">
            <p>项目概述：智链优购云巢，依托社区与团长社交，服务居民团体，以线上线下结合方式流通生鲜，属新零售模式 </p>
            <p>项目技术：Spring，SpringMVC，SpringBoot，SpringCloud，SpringCloudAlibaba, Mybatis - Plus，Mysql，Redis，Redission，RabbitMQ，Elasticsearch</p>
            <h4>技术描述：</h4>
            <ol>
              <li>使用 lua 脚本 + Redis 防止订单重复提交。</li>
              <li>使用覆盖索引加子查询形式优化商品信息分页查询。</li>
              <li>使用 CompletableFutur 进行异步处理，降低显示商品详细信息耗时。</li>
              <li>使用 Redission 分布式锁防止商品超卖问题，保证验证库存和锁定库存的原子性。</li>
              <li>使用 Redis 的 Hash 数据结构存储购物车信息, 通过设置 filed 过期时间实现购物车过期业务。</li>
              <li>使用 ThreadLocal + Redis + Jwt + SpringMVC 拦截器实现注册登录功能，ThreadLocal 存储用户登录信息方便获取用户数据。</li>
              <li>使用 RabbitMQ + Elasticsearch 实现商品上下架功能，RabbitMQ 异步处理商品上下架减少业务耗时。</li>
              <li>使用 Redis 的 ZSet 数据结构存储商品热度信息从而避免频繁修改 Elasticsearch 中商品热度信息。</li>
              <li>使用编程式事务代替声明式事务精细化控制事务粒度并解决了事务失效问题解决添加商品信息时的数据一致性问题。</li>
            </ol>
          </div>
        </article>
        <!-- 灵犀校联创享云项目 -->
        <article class="project-article">
          <h3>灵犀校联创享云</h3>
          <div class="article-content">
            <p>项目概述：该项目面向校园学生和商户，学生分享趣事，商户发布经营故事与优惠券，推动校园商业发展、提升校园生活品质 。</p>
            <p>项目技术：Spring，SpringMVC，SpringBoot，Mysql，Redis, Mybtis - Plus</p>
            <h4>技术描述：</h4>
            <ol>
              <li>使用 Redis 实现自定义全局唯一 id 生成器，确保订单 id 唯一，为后续项目扩展打下基础。</li>
              <li>使用 synchronized 锁结合字符串常量池在业务层面确保一人一单保证幂等性。</li>
              <li>使用 Mysql 的行锁解代替乐观锁减少业务入侵决优惠卷抢购超卖问题。</li>
              <li>使用 redis 的 BitMap 数据结构实现用户签到功能。</li>
              <li>用户密码使用 SHA - 256 签名并限制用户密码输入错误次数防止彩虹表攻击提高安全性。</li>
            </ol>
          </div>
        </article>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="blog-footer">
      <p>&copy; 2025 草莓甜心. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// 这里暂时不需要额外的逻辑代码
</script>

<style scoped>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

/* 博客容器 */
.blog-container {
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

/* 博客头部 */
.blog-header {
  background-color: #007BFF;
  color: #fff;
  padding: 30px 20px;
  text-align: center;
  background-image: linear-gradient(to bottom, #007BFF, #0056b3);
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.blog-header h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.blog-header p {
  font-size: 16px;
  margin-bottom: 5px;
}

/* 博客主体 */
.blog-main {
  padding: 40px;
}

/* 博客章节 */
.blog-section {
  margin-bottom: 40px;
}

.blog-section h2 {
  font-size: 28px;
  color: #007BFF;
  margin-bottom: 20px;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 10px;
}

.section-content {
  font-size: 16px;
  line-height: 1.6;
}

/* 项目文章 */
.project-article {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;
}

.project-article:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.project-article h3 {
  font-size: 24px;
  color: #007BFF;
  margin-bottom: 10px;
}

.article-content {
  font-size: 16px;
  line-height: 1.6;
}

/* 博客页脚 */
.blog-footer {
  background-color: #f4f4f9;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.blog-footer p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* 小屏幕设备（手机）适配 */
@media (max-width: 768px) {
  .blog-container {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  .blog-main {
    padding: 20px;
  }

  .blog-section h2 {
    font-size: 24px;
  }

  .project-article h3 {
    font-size: 20px;
  }

  .section-content,
  .article-content {
    font-size: 14px;
  }
}
</style>