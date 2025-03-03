
# 框架SSM
## Spring事务失效的场景
1. 异常捕获
2. 抛出检查异常（如FileNotFoundException，spring默认只会回滚非检查异常）
3. 非public修饰的方法 （Spring为方法创建代理，添加事务的前提条件都是该方法是public的）
4. 方法间使用this调用

## Spring编程式事务
事务传播行为：
* REQUIRED
* REQUIRES_NEW
```java
@Configuration
@MapperScan("com.dyf.forSomeTest.mapper")
@EnableTransactionManagement
public class MybatisPlusConfig {

    //配置事务管理器
    @Bean
    public PlatformTransactionManager platformTransactionManager(DataSource dataSource) {
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
        transactionManager.setDataSource(dataSource);
        return transactionManager;
    }

}
```

```java
    @Resource
    private PlatformTransactionManager transactionManager;

    //编程式事务
    @Test
    public void testMy(){
        DefaultTransactionDefinition defaultTransactionDefinition = new DefaultTransactionDefinition();
        defaultTransactionDefinition.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED); //设置事务传播行为,REQUIRED为默认传播行为
        TransactionStatus transaction = transactionManager.getTransaction(defaultTransactionDefinition);

        try{
            User user1 = new User();
            User user2 = new User();
            user1.setUserId("001");
            user1.setUserPassword("001");
            user1.setNickName("001");

            user2.setUserId("002");
            user2.setUserPassword("002");
            user2.setNickName("002");
            System.out.println(userMapper);

            userMapper.insert(user1);
            //int a=10/0;
            userMapper.insert(user2);
            //提交事务
            transactionManager.commit(transaction);
        }catch (Exception e){
            //回滚事务
            transactionManager.rollback(transaction);
            e.printStackTrace();
        }
    }
```
```java
    @Resource
    private TransactionTemplate transactionTemplate;  //是Spring提供的工具类,默认是Required传播行为
    //编程式事务
    @Test
    public void testMy02(){
        // 设置事务传播行为为 REQUIRED
        transactionTemplate.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
        transactionTemplate.execute(transactionStatus -> {
            User user1 = new User();
            User user2 = new User();
            user1.setUserId("001");
            user1.setUserPassword("001");
            user1.setNickName("001");

            user2.setUserId("002");
            user2.setUserPassword("002");
            user2.setNickName("002");
            System.out.println(userMapper);

            userMapper.insert(user1);
             int a=10/0;
            userMapper.insert(user2);
            return null;
        });
    }
```

## Mybatis主键回显

* useGeneratedKeys 用于开启主键自动生成功能
* keyProperty 指定将生成的主键值赋给 Java 对象的哪个属性。  
```java
<insert id="insertUser" useGeneratedKeys="true" keyProperty="id">
    INSERT INTO user (name) VALUES (#{name})
</insert>
```

## 日志
* SL4J是日志门面（是日志的抽象层）
* Logback是日志实现
* SpringBoot默认使用SLF4J和Logback，不需要导入对应依赖因为SpringBoot内置日志框架

* TRACE < DEBUG < INFO < WARN < ERROR < FATAL （INFO为SpringBoot默认级别）
* 日志级别：
    * TRACE：最详细的日志级别，用于输出程序执行过程中的详细跟踪信息，通常在调试非常复杂的问题时使用。
    * DEBUG：用于开发和调试阶段，输出有助于调试的详细信息，如变量值、方法调用等。
    * INFO：输出程序运行过程中的一般性信息，如服务启动、配置加载等，可用于监控系统的正常运行状态。
    * WARN：表示可能存在潜在问题或异常情况，但不影响系统的正常运行，如配置文件中使用了默认值等。
    * ERROR：表示程序出现了错误，但不会导致系统崩溃，如数据库连接失败、文件读取错误等。
    * FATAL：表示系统出现了严重的错误，可能导致系统无法正常运行，需要立即处理，如系统内存不足、关键服务崩溃等。

```java 
//日志使用案例:
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogLevelExample {

    //获取一个与特定类关联的日志记录器
    private static Logger logger = LoggerFactory.getLogger(LogLevelExample.class);

    public static void main(String[] args) {
        logger.trace("This is a trace message");
        logger.debug("This is a debug message");
        logger.info("This is an info message");
        logger.warn("This is a warn message");
        logger.error("This is an error message");
    }
}
```
```yml
#日志配置
logging:
  level:
    root: INFO  #设置根日志级别
    com.example.demo: DEBUG  #设置指定包下日志级别
  file:
    name: ./logging.log  #设置日志文件位置和文件名称
  pattern:
    #设置控制台日志输出格式
    console: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
    #设置文件中日志输出格式
    file: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
```
