# JSON.stringify
JSON.stringify(value[, replacer [, space]])
方法一共可以传进3个参数：
1. 需要序列化的对象
2. 过滤器，可以是一个数组，也可以是一个函数
-> 如果是数组，那么返回的属性就是在数组里存在的
-> 如果是函数，函数会有两个参数：key, value
3. 是否在JSON字符串中保留缩进, 可以是任意字符，或者数字
