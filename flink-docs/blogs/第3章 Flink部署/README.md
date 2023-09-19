---
title: 第3章 Flink部署
author: czs
---

## 集群角色

<img :src="$withBase('/1.png')">

Flink提交作业和执行任务，需要几个关键组件：

- Flink Client：代码由客户端获取并转换，之后提交给JobManager
- JobManager：对作业进行中央调度管理，它获取到要执行的作业之后，会分配任务给TaskManager
- TaskManager：真正执行作业的角色，数据的处理操作都是他们来做的

::: tip
Flink是一个非常灵活的处理框架，支持多种不同的部署场景，还可以和不同的资源管理平台集成
:::
