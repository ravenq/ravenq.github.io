# 谈谈 IoC 的本质及 Spring 框架的一些理解

原文： <http://www.aqcoder.com/post/45>

Spring 有两大特性：控制反转（Inversion of Control，缩写为 IoC）和面向切面编程（Aspect Oriented Programming，缩写 AOP）。

实现控制反转的常用方法就是依赖注入（Dependency Injection，简称 DI）。

**那么为什么需要 IoC 呢，IoC 的本质目的是什么呢？**

**解耦，一切都是为了解耦**

## IoC & DI 的简单实现

我们先来看一下一个 IoC 的一个简单实现，更好的理解一下概念。

假设 A 公司设计了一个 Car 的类，但是 A 公司只负责装配汽车，但是不负责生产轮子、发动机这些具体的配件。A 公司同时和多家生产配件的公司合作，先有 B、C 两家公司都只生产轮子，A 公司为了能同时使用 B、C 两家公司生产的轮子，指定了轮子的接口规则：

```java
public class IWheel {
  Size getSize(); // 轮子的大小
  int getLevel(); // 轮子的品级
  boolean run(); // 驱动轮子滚动
}
```

有了接口定义 B、C 两家公司都遵从这个借口标准生产轮子，A 公司都可以使用了。

在没有 Spring 这样的容器的情况下，A 公司是这样使用的：

```java
public class Car {
  // 每个厂家都按照标准接口实现了轮子，这里存接口就好了，不管具体实现细节。
  private IWheel wheel;
  /**
   * 设置轮子，轮子来自不同的厂家
   */
  public void SetWheel(IWheel wheel) {
    this.wheel = wheel;
  }

  /**
   * 驱动车子跑动
   */
  public void run() {
    this.wheel.run();
  }
}
```

上面一段代码看起来挺完美的，达到了解耦的目的，也达到了封装的目的，汽车厂商根本不需要轮子厂商是怎么驱动轮子的，只管调用自家发布的标准接口 IWheel 的 `run`方法就好了。

可是汽车还要实例化，下面的代码就又耦合了：

假设汽车厂此次生产的汽车使用的是 B 厂商提供的轮子，B 厂商实现的轮子类为

```java
public class BWheel implements IWheel {
  private String param;
  @Override
  public Size getSize() {
    return new Size(10, 10);
  }
  @Override
  public int getLevel() {
    return 10;
  }
  @Override
  public boolean run() {
    System.out.println("wheel run.");
    return true;
  }

  // B 厂商的轮子比较高级，需要各种各样的参数才能跑。
  public void setParam(String param) {
    this.param = param;
  }
}
```

汽车厂商实例化汽车：

```java
public class Application {
    public static void main(String[] args) {
        Car car = new Car();
        // 就是这里耦合了，因为 B 厂商的代码入侵到了 A 厂商的代码里。
        Wheel wheel = new BWheel();
        // 这里也耦合了，这个参数是B独有的。
        where.setParam("param only for B provider.")
        car.setWheel(wheel);
        car.run();
    }
}

```

从上面看出 B 厂商的代码入侵到了 A 厂商的代码里，汽车厂商想要使用哪家的厂商的轮子就要引入哪家厂商的 jar 包，然后示例化他们的类。要想一辆汽车有那么多的配件，每个配件又有那么多的厂商，可见汽车厂商的代码将会越来越膨胀，越来越难维护。到后面简直就是一个地狱。

更糟糕的是，每个轮子（配件）的厂商生产的轮子可能有自己独有的参数设置，这样汽车厂商的代码会乱成一团。

![ioc-car](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ioc-car.png)

那么有了 Spring 这样的框架以后会出现什么情况呢。

```java
@Service
public class Car {
  // 利用Spring框架把轮子注入进来，注意：这里没有指定具体哪个厂商的轮子。
  // 也没有设置个厂商自己独有的参数。
  @Autowired
  private IWheel wheel;

  public void run() {
    wheel.run();
  }
}
```

那么如如何定义具体用了那家厂商的轮子呢？在 Spring 框架的 xml 配置中：

```xml
<bean id="wheel" class="com.b.BWheel">
    <property name="param" value="param only for B provider." />
</bean>
```

到这一步发现，Spring 框架帮我们硬编码入侵的部分，转变了 xml 配置的部分。替换 C 厂家的轮子时，只要替换这个 XML 配置文件就可了。

看起来似乎很完美，细心的你会发现这样只是把耦合部分变成了配置而且，当系统庞大以后，这个配置文件会越来越庞大，越来越复杂，越来越难以维护。

的确，这样看起来似乎没有完全解耦，因为这个配置文件还是由汽车厂商（A 厂商）维护的，但是把这部分配置抽离出来有个本质的区别：**没有代码入侵**。

汽车厂商的 java 代码中不在包含轮子厂商 B 的代码，所有的配置都抽离到了 xml 文件中。

![ioc-car-spring](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ioc-car-spring.png)

随着轮子厂商的功能不多增多，xml 配置文件越来越复杂，因此有了 SpringBoot。

SpringBoot 的各种 starter 插件，承当了配置文件的工作，毕竟自家生产的组件，有什么配置自己最清楚。因此整个工程结构关系变成了这样。

![ioc-car-spring-boot](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ioc-car-spring-boot.png)

到这步我们惊奇的发现，借助 Spring 框架，我们彻底的解耦了。汽车厂商只要发布各个配件的标准接口，引用配件厂商的 starter 工程包，就可以了完成组装工作了。

映射到我们平时使用的代码中，发现就是如此：

汽车厂商 --> 我们的工程
轮子厂商 --> Druid、MyBatis 等等

在 boot 工程中，我们只要引入相关的 boot-starter 依赖，SpringBoot 框架就自动完成了装配工作，需要配置一些参数的时候使用一些注解或者继承配置类，就可以实现配置了。

## 结论

IOC 的本质就是为了解耦。整个 Spring 框架最伟大的地方也是 **解耦**。解耦对大型软件工程的架构设计是至关重要的，解耦能使软件架构清晰，使个组件生产者能够专注于自己的内部实现逻辑，使个组件能够方便的灵活组装搭配。

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
