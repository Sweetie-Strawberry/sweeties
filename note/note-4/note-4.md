
# JUC

## 线程池
```java
public ThreadPoolExecutor(int corePoolSize, //核心线程数
                            int maximumPoolSize, //最大线程数
                            long keepAliveTime, //救急线程生存时间
                            TimeUnit unit,  //救急线程生存时间的单位
                            BlockingQueue<Runnable> workQueue, //阻塞队列
                            ThreadFactory threadFactory,  //线程工厂
                            RejectedExecutionHandler handler)  //拒绝策略
```
```java
//创建一个线程池的实例：
ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
                2,
                3,
                0,
                TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue<Runnable>(),
                r -> new Thread(r, "MyThread"),
                new ThreadPoolExecutor.AbortPolicy()
        );
```
* 拒绝策略：
    * AbortPolicy 直接抛出异常，默认策略
    * CallerRunsPolicy 用调用者所在的线程来执行任务
    * DiscardPolicy 丢弃队列中最靠前的任务，并执行当前任务
    * DiscardOldestPolicy 直接丢弃任务
* 线程池中常见阻塞队列：
    * LinkedBlockingQueue （使用的比较多）
        1. 默认无界，支持有界
        2. 底层是单向链表
        3. 两把锁（可以边存边取）
    * ArrayBlockingQueue
        1. 必须有界
        2. 底层是数组
        3. 一把锁
* 如何确定核心线程数
    * IO密集型任务： 核心线程数=cpu核数*2+1
    * CPU密集型任务：核心线程数=cpu核数+1  (为了减少线程上下文切换)
* 为什么不建议Excutors创建线程池？
    * 因为以这种方式创建的线程池最大线程数为Interger.MAX_VALUE，可能会创建大量的线程做成内存溢出

## 创建线程的3种方法
1. 继承Thread类，并重写该类的run方法
2. 实现Runnable接口，并实现run方法
3. 实现Callable接口，并实现call方法  
* 只有实现Callable接口的call方法才可以返回值，抛出异常。

## synchronized对象锁
* synchronized( ){}    ( )中传入的必须是对象，
```java
Long userId=new Long("1230");
synchronized( userId.toString().intern() ){          #锁的是实例对象
}

synchronized（ Data.class ）{      #锁的是类
}
```
* synchronized修饰静态方法时锁定的是类
* synchronized修饰非静态方法时锁定的是实例对