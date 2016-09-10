---
layout: post
title:  "如何优雅的使用ChemDraw"
date:   2016-09-09 12:00:00
author: "DZ CHU"
header-img: "img/post-bg-chemdraw-introduction.jpg"

stick: 0

tags:

abstract: "ChemDraw作为使用最为广泛的化学结构绘制工具，为科学家提供了套完整易用的绘图解决方案，成为化学和生物学家的必备使用工具。本篇教你如何优雅的使用ChemDraw画出海葵毒素"

---

ChemDraw作为使用最为广泛的化学结构绘制工具，为科学家提供了套完整易用的绘图解决方案，成为化学和生物学家的必备使用工具。在上一期推送中，我们介绍了ChemDraw的发展历史，而在了解相关历史之后，更重要的是掌握它的使用方法和技巧，并熟练的运用它为自己的工作、学习服务。本文将对ChemDraw的使用方法做一个简要的介绍，并为大家展示若干复杂分子的绘制实例。

#### 版面介绍
默认状态下，Chemdraw的用户界面如下图所示：
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/1.png)
其中，主工具栏(Main Toolbar)包含了最常用的化学键、选择等绘图工具，主工具栏上的一些图标右下角有一个小黑三角，按住这些图标即可看到其中包含的次级工具栏；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/2.png)
生物绘图工具栏(BioDraw Toolbar)包含了添加生物和生物化学元素的绘图工具；
菜单栏(Menu Bar)包含了“文件”、“编辑”、“查看”等各项常用菜单，这些菜单的具体内容这里这里就不做详细介绍了；
状态栏(Status Bar)展示当前的状态，如将鼠标置于工具栏某一绘图工具上，则状态栏中将会显示该绘图工具的功能说明；
SciFinder工具(SciFinder Tool)可以将绘制好的分子直接放到SciFinder中进行检索；
放大率控制(Magnification Controls)和文本格式工具(Text Formatting Tools)分别用来调整放大率和文本的字体、字号；
文档视窗(Document Window)，即中间的空白区域，就是我们将要在上面绘制各种分子的地方。

#### 样式调整
向一些期刊投稿时，文章通常被规定了一定的格式，其中包括了特定的比例、字体、页面大小，等等。而ChemDraw则具有一个基于许多著名科学出版物的文档设置库，如果你计划提交文件到一个特定的杂志，只需要打开样式表，选择相应的期刊，即可调整为该期刊所规定的样式。
例如，要选择样式“ACS Document 1996”进行绘制，其操作为：File → Open Style Sheets → ACS Document 1996；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/3.png)
若要调整已绘制好的文档的样式，则其操作为：File → Apply Document Settings from → ACS Document 1996；
若要调整已绘制好的某个分子的样式，则其操作为：选定要调整的分子→Object→Apply Object Settings from→ ACS Document 1996。

当然，除了这些期刊规定的样式外，你也可以按如下步骤创建你自己的样式表：
1.创建一个新文档；
2.在File → Document Settings中进行页面大小，字体，颜色，键的长度、粗细、角度等各项设置，例如，在下图所示的对话框中可以调整页面大小；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/4.png)
3.点击“Save As”，在对话框中选择ChemDraw Style Sheet文件格式，命名并保存。
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/5.png)

#### 快捷键介绍
在ChemDraw中，使用快捷键可以方便快捷的添加各种原子、键型、官能团等，亦可便捷的使用其他各项功能，熟练运用这些快捷键，能让我们的绘图过程更加高效。

1.将鼠标置于原子上，使用快捷键，可以直接添加原子或官能团：
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/6.png)
2.将鼠标置于化学键上，使用快捷键，可以直接修改键型：
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/7.png)
3.其他快捷功能：
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/8.png)

#### 绘图实例
在介绍了ChemDraw的基本使用方法后，下面将展示两个绘图实例，通过实例，大家将能够更好的理解ChemDraw的各种工具及快捷键的使用。

实例一：具有多中心连接位点的金属有机化合物，如二茂铁：

1.先用模板画出一个茂环；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/9.png)
2.选中这个茂环，然后点击Structure → Add Multi-Center Attachment，这时茂环中心出现一个星（*）；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/10.png)
3.从星（*）引出一个单键，把单键的另一端定义为Fe，再从Fe引出另一个单键；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/11.png)
4.用同样的方法画出另一个茂环并为其添加中心；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/12.png)
5.按住Shift键，分别单击从Fe引出的单键的末端和茂环的中心，然后使用Join功能（Ctrl+J），连接选定的两个位点，交叉式二茂铁分子就完成了。
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/13.png)


实例二：具有复杂结构的有机化合物，以海葵毒素为例：

1.先直接画出左上角的片段，其中的五、六、七元环都可以直接用工具栏中的模板绘制；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/14.png)

2.使用工具栏中的“Snaking Chain”工具画出一段碳链，该工具可以保持120°的键角画出任意形状的碳链；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/a.png)
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/15.png)

3.为这段碳链加上官能团的修饰，使用快捷键能使添加官能团更加方便，如将鼠标置于待添加处按O即可添加氧或羟基；

4.使用“Acyclic Chain”工具画出下一段碳链，与“Snaking Chain”不同的是，该工具只能画出波浪形的碳链；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/16.png)

5.修饰碳链；

6.重复以上过程，完成分子的基本结构；
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/17.png)

7.添加楔形键，其中，添加实楔形键的快捷键为w，添加虚楔形键的快捷键为h。
![cdz](/img/in-post/2016-09-09-chemdraw-introduction/18.png)

至此，海葵毒素的分子结构已全部绘制完成。

通过这两个绘图实例的展示，我们可以直观的看到灵活运用ChemDraw的各种绘图工具及快捷键为绘图过程带来的便利。

希望本文中介绍的操作技巧能够帮助大家更加熟练的使用ChemDraw。而在之后的推送中，将会带来有关Chem3D的介绍，希望大家继续关注清化科协。




