---
layout: post
title: "ChemDraw的钢笔工具"
date:  2016-09-20 12:00:00
author: "SC CHEN"
header-img: "img/post-bg-pen-tools-in-chemdraw.jpg"

stick: 0
hide: 0

tags: 
    - 软件教程

abstract: "钢笔工具的正确用法，打开ChemDraw隐藏世界的大门。"

---

使用过Photoshop的同学有过经历，使用钢笔工具可以轻松的勾勒出图案的边框，进而实现“抠图”等功能。那么，在ChemDraw中，也有类似的功能供我们使用，希望本教程可以教会大家如何利用钢笔工具和自带的模板绘制精美的矢量图。

钢笔工具的位置位于工具栏中或者使用View → Other Toolbars → Pen Tools中打开，出现的两个图标分别是自由线条和贝塞尔曲线。
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/1.png)

贝塞尔曲线是如下，在确定P<sub>0</sub>、P<sub>1</sub>、P<sub>2</sub>三点，所有P<sub>0</sub>P<sub>1</sub>上的点Q<sub>0</sub>和P<sub>1</sub>P<sub>2</sub>上的点Q1，以及Q<sub>0</sub>Q<sub>1</sub>上的点B，满足P<sub>0</sub>Q<sub>0</sub>:P<sub>1</sub>Q<sub>0</sub>=P<sub>1</sub>Q<sub>1</sub>:P<sub>2</sub>Q<sub>2</sub>=Q<sub>0</sub>B:Q<sub>1</sub>B，由B点运动构成的曲线（图中红色曲线），P<sub>0</sub>和P<sub>2</sub>为曲线的起止点。贝塞尔曲线是构成矢量图非常重要的元素。
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/2.png)

所以，在ChemDraw中，首先确定起点，然后在终点的位置直接左键移动，就得到一调贝塞尔曲线。当然，贝塞尔曲线可以连续绘制，但似乎没有绘制高阶贝塞尔曲线的功能。
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/3.png)

那么下面以如何使用贝塞尔曲线画一个梨形瓶（也叫鸡心瓶）为例，告诉大家如何利用ChemDraw绘制简单的矢量图。
首先，我们在欣维尔的网站上搜索一张梨形瓶的图片，并将其放在ChemDraw的绘图区内，放大：
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/4.png)

随后使用钢笔工具对其进行描边，因为观察到瓶子是对称的，我们可以只描一半的轮廓：
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/5.png)

图中淡紫色的方形点对应P<sub>0</sub>、P<sub>2</sub>，决定曲线的路径；圆点对应P<sub>1</sub>，描述曲线的特征。在绘制完成后，按ESC取消工具的使用。我们可以在原图上拖动紫色的点进行修改，使得图形看的更加自然。

然后选中曲线，复制，水平翻转（Flip Horizontal），就完成了另一半曲线。仔细的拼接曲线，就得到下面的样子：
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/6.png)

那么，我们还剩下瓶塞没有画，如果我们需要的是磨口塞，但是这里却是螺纹口。于是，我们就要学会借鉴ChemDraw自带的模板了。

删去原图，点击工具栏中的模板（Templates）按钮，然后展开Clipware项，选一个适合的瓶子。Templates也可以在View目录下找到。

选中，右键 → Group，先取消选中Integral，然后点击Ungroup，这样一个瓶子就可以被“拆开”了。
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/7.png)

然后我们把瓶口转移到刚刚所绘制的瓶子上，就得到了所需的磨口梨形瓶了。
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/8.png)

我们可以将成品放入系统的模板，这里就不赘述了。

让我们多举几个例子：
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/9.png)

当然，强大的ChemDraw可以为各种实验报告画出精致的矢量图，简直是大物和物化实验的福音。

此外，当你的知识水平足够高时，ChemDraw也可以这样用：
​![pen](/img/in-post/2016-09-20-pen-tools-in-chemdraw/Elder_P.png)

本篇附带的ChemDraw文件下载：

> [梨形瓶1](/img/in-post/2016-09-20-pen-tools-in-chemdraw/Pear1.cdx) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> [梨形瓶2](/img/in-post/2016-09-20-pen-tools-in-chemdraw/Pear2.cdx) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> [旋蒸](/img/in-post/2016-09-20-pen-tools-in-chemdraw/Rotary_Evaporator.cdx) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> [??](/img/in-post/2016-09-20-pen-tools-in-chemdraw/Elder.cdx) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
