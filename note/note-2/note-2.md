# Java基础

## JDK和JRE
* JDK是Java开发工具包 JDK=JRE+java的开发工具
* JRE是java的运行环境 JRE=JVM+Java的核心类库

## Java的八种基本数据类型
* byte     （占1个字节）
* short    （占2个字节）
* int      （占4个字节）
* long     （占8个字节）
* float    （占4个字节）
* double   （占8个字节）
* char     （占2个字节）
* boolean  （占1个字节，默认值为fals）

## 编译类型和运行类型
```java
Person student=new Student();
```
Person是编译类型（编译器会依据这个类型来检查变量能够调用的方法和属性）  
Student是运行类型 （Java会根据运行类型来决定具体执行哪个方法，这就是多态的体现）

## Java四种内部类
* 定义在外部类局部位置上（如方法内）：
    1. 局部内部类 （有类名）
    2. 匿名内部类 （没有类名,重点）
* 定义在外部类的成员位置上： 
    1. 成员内部类 （没用static修饰）
    2. 静态内部类 （使用static修饰） 
## 反射知识点
### 获取Class类对象
1. 类名.class
2. 实例对象.getClass()
3. Class.forName("全类名")
### 反射示例
```java
 @Test
    public void methodReflect() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException, NoSuchFieldException {
        Class<User> userClass = User.class;
        //获取所有方法包括私有的
        Method[] declaredMethods = userClass.getDeclaredMethods();
        //仅获取所有public方法
        Method[] methods = userClass.getMethods();

        //获取指定方法
        Method addAge = userClass.getDeclaredMethod("addAge", int.class);
        //爆破
        addAge.setAccessible(true);
        //执行方法
        addAge.invoke(new User(),10);

        //获取指定字段
        Field name = userClass.getDeclaredField("name");
        //爆破
        name.setAccessible(true);
        //获取字段
        name.get(new User());
        //修改字段值
        name.set(new User(),"小明");
    }
```


## 集合知识点
### ArrayList
1. ArrayList初始容量为0，当第一次添加数据时会初始化容量为10
2. ArrayList扩容时是原来的1.5倍，每次扩容需要数组拷贝
3. ArrayList底层是动态数组
4. 线程不安全（没有加synconized锁）

### Vector
1. Vector初始容量为0，当第一次添加数据时会初始化容量为10
2. Vector扩容时是原来的2倍，每次扩容需要数组拷贝
1. Vector底层是动态数组
2. Vector线程安全（加了synconized锁,因此性能不如ArrayList）

### LinkedList
1. 底层是双向链表
2. 线程不安全（没有加synconized锁）

### HashMap
1. jdk1.8及之后底层是数组+链表+红黑树，jdk1.7底层是数组+链表
2. 数组长度大于64且链表长度大于8则会从链表转化为红黑树
3. 添加数据时hash值一样且key相同则value覆盖原始值
4. HashMap第一次添加数据时初始化数组长度为16，加载因子为0.75，之后每次添加数据都要判断下容量是否大于扩容阈值，每次扩容都是之前的2倍速（扩容就是数组的拷贝）
扩容阈值=负载因子*数组大小
5. 因为对hash值的取余运算求数组下表用位运算&代替取余了，&想要代替取余运算则必须保证数组长度为2的n次幂才能保证何取余运算的结果一样
6. jdk1.7多线程进行链表的迁移可能出现死循环问题（因为用的是头插法），jdk1.8为了解决该问题链表采用尾插法
7. HashMap线程不安全
## 数组何List相互转换
 * 数组转成List使用Arrays.asList （注意 之后改变数组会影响List的值）
 * List转成数组使用list.toArray();（注意 之后改List的值不会影响数组）

## String StringBuilder StringBuffer
* String 不可变，线程不安全 char[] value被private final修饰    性能最差，因为每次对字符串修改都会重新创建新的对象并分配内存
* StringBuilder  可变，线程不安全   性能最好  
* StringBuffer 可变，线程安全  性能介于两者中间，因为为了保证线程安全StringBuffer对所有修改操作加了synconized锁 