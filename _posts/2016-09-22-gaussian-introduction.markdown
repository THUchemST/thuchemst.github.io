---
layout: post
title: "Gaussian入门"
date:  2016-09-22 12:00:00
author: "SC CHEN"
header-img: "img/post-bg-gaussian-introduction.jpg"

stick: 0
hide: 0

abstract: 

---

<p id="gv-at-first-sight">
</p>

## 初见GaussView

Gaussian软件是目前化学领域最流行、应用范围最广的量子化学计算程序包。它最早是由约翰·波普（John. A. Pople, 1998年诺贝尔化学奖获得者）在70年代开发的。Gaussian软件基于量子力学，致力于把量子力学理论应用于实际问题。同时Gaussian界面友好、参数多已经被设置好，大大降低了科研工作者从事量子力学的门槛，同时也是初学者利用量子力学理解化学的首选工具。GaussView是Gaussian软件默认的可视化工具，可以用来编辑输入文件以及打开输出文件。
​![gaussian](/img/in-post/2016-09-22-gaussian-introduction/1.png)

本篇教程不涉及任何关于量子力学的内容，而仅仅说明GaussView的使用方法。同时也希望读者能将Gaussian当做一个用于理解化学的软件，任何对于量子化学的不解都不应成为使用Gaussian的障碍。

在我们打开了GaussView之后，出现了如下的界面：
​![gaussian](/img/in-post/2016-09-22-gaussian-introduction/2.png)
下方显示的是所要画的原子，高亮的是连接原子，图中所示代表甲基。

上方的各种工具栏各具功能，在用GaussView构建分子时，我们最常用到的是Builder工具栏：
​![gaussian](/img/in-post/2016-09-22-gaussian-introduction/3.png)
从左到右的图标依次是：元素、环、官能团、生物分子片段、自定义片段；键长调整、键角调整、二面角调整、参数测量；增加氢原子、删除原子、翻转原子基团；单击选中原子、框选原子、取消选中和全选。

下面一段视频介绍如何利用GaussView中的功能构建复杂的有机分子。

<video id="video" controls="" preload="none" poster="/img/in-post/2016-09-22-gaussian-introduction/gv.png" width="100%" heigh="100%" src="/img/in-post/2016-09-22-gaussian-introduction/gv.mp4" type="video/mp4">
</video>


我们发现，这样画出的分子在一些地方有些别扭，只需要单击Edit → Clean进行简单处理就完成了。

优化处理完成的效果：
​![gaussian](/img/in-post/2016-09-22-gaussian-introduction/4.png)

使用Clean这种方法可以迅速的将所画的结构变得“赏心悦目”，但是这是相当经验的手段，得到的结构需要利用计算的手段做进一步优化。



