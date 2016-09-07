---
layout:     post
title:      "Chem 3D新手入门教程"
date:       2016-09-07 12:00:00
author:     "ZH DENG"
header-img: "img/title.jpg"
stick: 0
tags:

abstract: "这可能是目前最详细的中文版Chem 3D新手入门教程了。"
---

## Chem 3D新手入门教程

Chem3D是一款功能强大的桌面建模程序，我们可以利用它生成小分子和生物大分子的3D模型，并对模型执行各种计算和操作，以便研究物质的属性和相互作用。通过3D建模、可视化和计算等丰富功能，我们能够更好、更快地确定出研究重点，从而提高生产力，快速达成研究目标。
今天，我们就为大家带来这款生产力工具的入门教程第一弹！
首先来说说如何安装Chem 3D。点击科协的主页右上角的RESOURCES，在里面已经贴出了ChemOffice 15的下载链接。WIN和OS X版本都有。但是！遗憾的是Chem 3D只在WIN版本上存在，所以使用OS X的同学们需要安装虚拟机后才可以使用（如何安装虚拟机就不是本教程的内容啦~）。下载完毕后点开安装程序，一切默认，静静等待那一刻的到来~~
好了不就是安装一个软件嘛。。。找到Chem 3D图标，双击后首先会看到ChemOffice梦幻的启动画面（Chem 3D是少女粉嘿嘿嘿），然后主程序就出现在了我们的面前。接下来请认真听讲哦！

## 界面图标简介

![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/2.jpg)
<b>Model Window</b>：构建和观察分子模型的窗口 <br>
<b>Main Menu</b>：所有用于构建和观察分子模型的必要工具都在这里。下拉菜单中提供了非常多的工具选项。 <br>
<b>Toolbars</b>：包含一些常用的指令和按钮，包括拖拽、旋转、投影、显示模式等 <br>
<b>ChemDraw Panel</b>：这个界面相当于将ChemDraw的功能整合进了Chem3D。利用ChemDraw Panel，我们可以方便的绘制二维结构。 <br>
<b>Structure Browser</b>：方便地浏览一系列结构，每个结构都可以在Model Window中显示。 <br>
<b>Model Explorer</b>：将分子模型用分层树的形式显示，常用于复杂分子（如蛋白质）的研究。 <br>
<b>Status Bar</b>：显示模型中的活跃框架或是隐藏的原子。 <br>
<b>Output Window</b>：常用于显示文本结果或计算结果。 <br>

## 具体介绍

在介绍完界面图标以后，我们将为大家按照使用的重要性顺序来依次讲解一些界面或菜单的使用方法。

#### ChemDraw Panel

如果要在Chem 3D中绘制模型，会不可避免地使用ChemDraw Panel。这个界面就像是精简版的ChemDraw。在默认设置下，ChemDraw Panel在主界面的右侧。点击右上角的小图钉就可以设置窗口浮动或固定，Chem3D的其他内置窗口都可以这样设置。如果很不幸，你的ChemDraw Panel消失不见了，请到View>ChemDraw Panel 去寻找它~
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/4.jpg)
ChemDraw Panel和Model Window拥有两种连接模式——LiveLink 和Insertion 模式。在这里我们就只为大家介绍常用的LiveLink模式。顾名思义，在LiveLink模式下，我们在ChemDraw Panel中绘制的每一根键，每一个原子，都会在Model Window中显示出来，反之亦然。LiveLink模式下有四个按钮，从左到右依次是Link Mode（用于切换模式），Clear（清除），Add or Replace Contents in ChemDraw Panel（顾名思义即可），Chemical names/SMILES （通过在后面的输入框内键入化学名称或SMILES string来创建模型 ）。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/5.jpg)

#### Toolbars里面的一些常用按钮

![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/6.jpg)
红框内的按钮可以说是最常用的按钮了。我们从左边开始。
1）操作模型的按钮

最左边的红框内是对模型进行操作的一系列按钮，从左到右依次是：

<b>Select</b>：选择原子或化学键 <br>
<b>Translate</b>：对模型整体进行平移操作 <br>
<b>Rotate</b>：对模型整体进行旋转操作 <br>
<b>Zoom</b>：对模型整体进行放大或缩小操作 <br>
<b>Move Objects</b>：选定某个原子或化学键进行拖拽，就可改变其空间位置。 <br>

中间四个化学键按钮就不说了。。。大家都懂的~
Build from text：就是那个A按钮，点击一下，然后将光标移动到Model Window中再点击一下，就会出现一个文本框，输入英文名称，即可创建模型。就像这样：
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/7.jpg)
输入Taxol（紫杉醇），敲Enter，模型就出来了。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/8.jpg)
最后是Eraser：橡皮擦，不说了。

2）显示模式
中间的小红框是显示模式的下拉菜单按钮。里面提供了多种显示模型选项，大家通过图形和英文就可以很容易地理解每种模型的含义，如当前选择的就是球棍模型。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/9.jpg)
3）最右边的红框里面是极为重要的MM2计算按钮，我们将在后面的推送中为大家详细介绍。

#### Model Explorer

默认情况下挂在主界面的左边，可以选择浮动或固定。用于显示构成分子的每个原子的编号，以及方便地对不同原子进行操作——只需要右键相应的原子即可。在弹出的菜单中有隐藏原子，改变原子颜色，编辑原子序列数等选项。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/10.jpg)

#### Structure Browser

我们可以在Structure Browser中获得有关分子键长和键角以及二面角的信息。那么如何调整这些参数呢？我们以调节键长为例。
选择一根键，在菜单栏中点击Structure>Measurements>Display Distance Measurements,就可以在左侧的Structure Browser显示出相应的信息。
#### 实例操作

好的，那么我们就来复习一下今天所讲的内容吧。来实战演习一下~

分别使用ChemDraw Panel和Build from Text功能构建联苯（diphenyl）的分子结构模型，将分子中的连接苯环的碳原子标示为绿色，调整苯环二面角为90度，进行操作观察分子的空间结构。

步骤：
（1）在ChemDraw panel中绘制联苯结构（过程略去~）；点击Build from Text，再在Model Window 里单击，在弹出的文本框中输入Diphenyl，敲击enter。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/11.jpg)
（2）摁住shift，选择连接苯环的碳原子，右击，在弹出的菜单栏中选择Color>Select Color，选择绿色。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/12.jpg)
（3）用选择工具选择苯环连接处的四个碳原子，在菜单栏中点击Structure>Measurements>Display Dihedral Measurement。在Actual一栏输入90度，回车。
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/13.jpg)
![dgs](/img/in-post/2016-09-07-Chem-3D-introduction/14.jpg)

