---
layout:     post
title:      "Origin 教程及下载链接"
date:       2017-05-22 12:00:00
author:     "YLZ"
stick: 0
tags:
    - 软件教程
    - Origin

resource: 1
platform: 
    - win


abstract: "Origin软件下载及入门教程"
---



### 下载地址
[Origin 2015]({{ site.IP }}?subject=Require Origin 2015&body=Name= %20%20%20%20%20%20%20;%0D%0AID= %20%20%20%20%20%20%20%20;{{ site.AA }}) &nbsp;&nbsp; 

>写在正文之前：本文仅供Origin入门级使用者参考。正文使用通俗易懂的语言，并以图例介绍每一步操作。全文只涉及最为简单基础的使用方法。鉴于作者同样处于软件使用摸索阶段，若有使用不当之处望海涵，也欢迎批评与指正。
p.s. 由叶卫平老师编著的《Origin 9.1 科技绘图及数据分析》详细介绍了Origin的使用方法，该书在清华图书馆即可借取。

上过大物实验、物化实验及其他各类涉及数据作图课程的同学们多半都思考过这个问题：如何作出一张精美的数据图？最常用的Excel虽然具备了完成这些图表所需的全部功能，但是不得不承认绘图并不是Excel的强项。本文将要介绍的软件Origin在数据图处理方面很好地弥补了Excel的短板。掌握了Origin，绘制一张精美的数据图就是小菜一碟。在上手之前，先对Origin有个大致的定位：Origin具有友好且强大的数据图处理功能，但对于新手来说用Origin批量处理数据不如Excel便捷，因此本文将Origin作为建立在Excel基础上的绘图与分析软件。（本文不涉及在Excel中完成的原始数据处理）

本文涉及到的Origin操作介绍：
1. 下载安装
2. 打开Origin
3. 保存新工程文件
4. 建立新文件夹和新文件<br />
<i>以上为准备工作，作图直接从5开始</i>
5. 数据输入
6. 绘制二维点线图（XY坐标图）。
7. 调整美化二维点线图。
8. 导出点线图
9. 同一张图中绘制多条数据线<br />
<i>步骤5至9为绘制一张点线图的完整过程</i>
10. 公式拟合(基础公式拟合操作)<br />
附录1：如何调取各快捷工具栏<br />
附录2：Mask（掩蔽）数据图中的某些数据点，拟合时忽略这些点<br />

### 步骤一：下载安装
从网上下载到Origin的安装包（我不会告诉你网上有很多XX资源），并安装。本文使用OriginPro 9.1。 

### 步骤二：双击打开Origin
默认进入以下界面（由于版本及后期调整原因，第一次见到的操作界面不一定与下图完全一样。不过不用担心，下文介绍功能之前都会告诉大家如何调出相关界面）
![origin](/img/in-post/2017-05-22-origin/1.png)

### 步骤三：保存一个新的工程文件
#### （.opj，Origin特有格式，其下可包含多个文件夹）
因为Origin对于计算机内存占用量较大，部分电脑长时间运行Origin可能出现报错、自动关闭、死机等现象而造成数据丢失，因此要养成勤保存的好习惯（快捷键：Ctrl+S）。
点击左上方File → Save Project As… → 指定路径 → （重命名 →） Save
一次操作之后，以后保存该工程直接按快捷键即可。
![origin](/img/in-post/2017-05-22-origin/2.png)
![origin](/img/in-post/2017-05-22-origin/3.png)

### 步骤四：建立新文件夹和新文件（workbook或worksheet）
这一步请注意左侧是否有Project Explorer（PE）这一栏，若还未打开，请点击View → Project Explorer （或快捷键Alt+1）。<br />
PE的上半部分显示该工程文件下的子文件夹，下半部分显示选中的子文件夹内的文件，如图中所示该工程文件UNTITLED下有一个子文件夹Folder1，子文件夹Folder1中有一个Workbook类型的Book1文件。注：右键单击文件夹或文件可重命名。<br />
![origin](/img/in-post/2017-05-22-origin/Comb1.png)
1.	在工程文件下直接建立子文件夹：右键单击工程文件UNTITLED → New Folder → 重命名
注：一般不会在工程文件下直接建立新文件，这样不便于管理。
![origin](/img/in-post/2017-05-22-origin/Comb2.png)
2.	在子文件夹下建立新文件夹或新文件：在PE上部左键单击选择目标文件夹 → PE下部空白处单击右键 → New Window（新文件）或New Folder（新文件夹），此处我们选择建立一个新的Worksheet（Book2）。<br />
注：Worksheet（或称Workbook）是绘制点线图所需数据的输入文件
![origin](/img/in-post/2017-05-22-origin/Comb3.png)

### 步骤五：数据输入
将绘制二维点线图（y-x）所需数据输入Worksheet中，以新建立的Book2为例，此时A（X）列是X轴，B（Y）列是Y轴，括号中的XY代表该列的轴类别。Book2中黄色部分为坐标轴的名称，可忽视。<br />
1. 复制Excel中的一列数据（竖直），直接粘贴到Book2中的A列，作为X轴数据
2. 复制Excel中的另一列数据，直接粘贴到B列，作为Y轴数据，此时Book2中的每一行XY数据一一对应。
![origin](/img/in-post/2017-05-22-origin/Comb4.png)
### 步骤六：绘制二维点线图（XY坐标图）。
1.	选中A、B两列（按住A列表头拖至B列，选中后变黑） → 点击上方菜单栏Plot → 选择绘制点线图类型（Line只有线，Symbol只有点，Line+Symbol点线结合）。此处我们选择较为常用的点线结合Line+Symbol。
注：此处有多种途径生成Graph，1）上述方法；2）右键单击选中列（AB）的表头，选择plot；3）下方（可能处于其他位置，也可能未显示）的二维绘图快捷键
![origin](/img/in-post/2017-05-22-origin/12.png)
2.	自动生成并跳至Graph文件，即绘制的二维点线图。将Graph最大化显示。
![origin](/img/in-post/2017-05-22-origin/13.png)
![origin](/img/in-post/2017-05-22-origin/14.png)

### 步骤七：调整美化二维点线图。
<i>太长不看版：几乎所有修改都可通过直接双击目标调出参数栏或能直接修改（文字类）。</i><br />
<a href='#Step8'>跳过</a>
1.	横纵坐标名称更改。
双击横纵坐标名称（坐标轴一侧的A和B） → 删除原有名称，输入自定义名称（如T/s和S/m）<br />
<i>注：图中出现的大C为软件BUG，不影响使用。关闭软件后重启，C会消失，但是长时间使用后C又会出现。</i>
![origin](/img/in-post/2017-05-22-origin/15.png)
2.	调整横纵坐标标尺（一般不需要）。双击横坐标或纵坐标<br />
1)	点击Scale → 解释见图
![origin](/img/in-post/2017-05-22-origin/16.png)
2)	点击Tick Labels （Bottom） → 解释见图
![origin](/img/in-post/2017-05-22-origin/17.png)

3.	调整数据点和数据线外观<br />
双击数据点或数据线（注意不是空白处） → 在Symbol一栏调整数据点外形（形状、大小、颜色） → 在Line一栏调整数据线外形（类型、外观、颜色） → 点击OK
注：数据线类型一般需要调整成B-Spline，光滑连接所有数据点（但有时无法做到数据点全在曲线上）。
![origin](/img/in-post/2017-05-22-origin/18.png)
![origin](/img/in-post/2017-05-22-origin/19.png)
![origin](/img/in-post/2017-05-22-origin/20.png)

4.	调整图例<br />
双击图例中的文字（本例中为B） → 在文本框内可自由编辑（类似PPT的文本框）
![origin](/img/in-post/2017-05-22-origin/21.png)
5.	添加标题（或添加其他文字、符号）<br />
点击Project Explorer和数据表之间的工具栏中的T来添加文本框（该工具栏位置不一定在此；若未显示则调出方法见附录1）

6.	点线图位置和大小调节<br />
点击点线图空白处，像操作图片一样拉取边框自由调整，点线图内部布局会自动调整。

<div id='Step8'></div>
### 步骤八：导出点线图
<i>太长不看版：用其他软件截图保存</i>
点击菜单栏File → Export Graphs → Open Dialog → 更改导出文件类型、导出文件名、导出文件路径 → 点击OK
![origin](/img/in-post/2017-05-22-origin/22.png)

### 步骤九：同一张图中绘制多条数据线
1.	在workbook中添加输入数据栏<br />
双击Project Explorer下半部中的Book2（数据输入表），回到Book2操作界面 → 点击菜单栏中的Column → Add New Column → 输入欲添加的列数 → 点击OK
![origin](/img/in-post/2017-05-22-origin/23.png)
![origin](/img/in-post/2017-05-22-origin/24.png)
2.	改变各列XY属性（若共享同一套X坐标则无需更改）<br />
选中现为Y轴的某一列 → 菜单栏Column → Set As → 更改为X → 该列变为X轴（X2），且其右侧各列会显示为Y2，即X1与Y1对映，X2与Y2对映。
![origin](/img/in-post/2017-05-22-origin/25.png)
![origin](/img/in-post/2017-05-22-origin/26.png)
3.	输入数据。同步骤五
4.	绘图
5.	数据图美化

### 步骤十：公式拟合
1.	直线拟合<br />
	回到Graph数据图界面 → 点击数据点（所有数据点都会被选中，若需要忽略某些点，请使用Mask功能，见附录2） → 点击菜单Analysis → Fitting → Linear Fit → Open Dialog → 参数使用默认值，注意Input Data是否包含需要的数据即可（若在图中已选中则必定会包含） → 点击OK<br />
注：拟合后出现拟合参数表，方程、截距、斜率、R值都包含在内。另外有了拟合直线后可将点线图转变成散点图，图片更加干净一些（下方快捷按钮）。
![origin](/img/in-post/2017-05-22-origin/27.png)
![origin](/img/in-post/2017-05-22-origin/28.png)
![origin](/img/in-post/2017-05-22-origin/29.png)

2.	非线性拟合<br />
分为多项式拟合和非线性曲线拟合（多种公式）
1)	多项式拟合<br />
步骤同线性拟合（至Fitting） → Polynomial Fit → Open Dialog → 选择最高次数（Polynomial Order），其他参数默认 → 点击OK
注：拟合参数阅读类似于线性拟合，不作展开
![origin](/img/in-post/2017-05-22-origin/30.png)
![origin](/img/in-post/2017-05-22-origin/31.png)
2)	非线性曲线拟合
步骤同线性拟合（至Fitting） → Nonlinear Curve Fit → Open Dialog → 选择函数类型 → 选择具体函数表达式 → 点击Formula查看表达式 → 点击Fit<br />
注：Origin自带很多公式，基本满足需要，自定义公式此处不作介绍。
![origin](/img/in-post/2017-05-22-origin/32.png)
![origin](/img/in-post/2017-05-22-origin/33.png)

### 附录1：如何调取各快捷工具栏
点击菜单栏中的View → 点击Toolbars… → 在欲显示的工具栏前打勾即可 → 点击Close
![origin](/img/in-post/2017-05-22-origin/34.png)

### 附录2：Mask（掩蔽）数据图中的某些数据点，拟合时忽略这些点
调取Tools快捷工具栏 → 长按![origin](/img/in-post/2017-05-22-origin/35.png) → 选择第一项 （Mask Points on Active Plot在当前图中掩蔽点） → 选取需要掩蔽的点即可
注：Unmask（去掩蔽）选择上述第三项再选取欲去掩蔽的点。
