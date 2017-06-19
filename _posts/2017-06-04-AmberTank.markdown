---
layout:     post
title:      "Amber入门: 水中的蛋白质"
date:       2017-06-04 0:00:00
author:     "YM Ma"
stick: 0
abstract: "据说今天是什么特殊的日子。"	
header-img: "img/in-post/2017-06-04-AmberTank/bg.jpg"
tags:
    - 软件教程
    - Amber
    - 分子模拟
---



据说今天是2017年6月4日。

我们在这个日子决定用Amber模拟蛋白质TARF-2，这是名为TANK的基因的表达产物.Amber是由P. A. Kollman等人编写的分子模拟程序，常用于蛋白质、DNA等的模拟。

对蛋白质的模拟需要首先从蛋白质结构数据库中获得记录了蛋白质三维结构的PDB文件；利用Amber中的leap程序获得模拟需要的拓扑文件，随后用sander程序进行能量最小化、高温平衡，再进行模拟得到体系的各种性质。

本教程需要一台安装了Linux操作系统和Amber程序的计算机。笔者使用Amber 16的并行版本，其他版本按照相似方法也可进行模拟。

直接从数据库中下载的pdb文件（1kzz.pdb）缺少氢原子，需要首先用Amber中的pdb4amber程序将其转化为可用的格式。其中-o表示输出文件，--dry表示去掉水分子，--reduce表示补充缺少的原子信息。
![Amber](/img/in-post/2017-06-04-AmberTank/1.jpg)
<center>图<strong>1.</strong> pdb4amber</center>

获得tank.pdb后，用leap程序转化为记录了力场等分子模拟必须信息的输入文件。输入xleap命令（leap程序的可视化版本），输入力场信息（这里使用ff14SB力场）、载入tank.pdb文件（图<strong>2</strong>）。
![Amber](/img/in-post/2017-06-04-AmberTank/2.jpg)
<center>图<strong>2.</strong> xleap</center>
接下来用solvatebox命令添加溶剂水分子，并保存（图<strong>3</strong>）。
这样就获得了分子模拟必须的拓扑文件（prmtop）和inpcrd文件。然后建立三个文本文件min.in、heat.in、prod.in，分别对应能量最小化、高温平衡、结果生成三个阶段。内容如图<strong>4</strong>（各参数的含义详见Amber手册）。由于这只是一个示例，为了节约时间，prod.in中只模拟30000步，而在实际工作中步数要多得多。
![Amber](/img/in-post/2017-06-04-AmberTank/3.jpg)
<center>图<strong>3.</strong> solvatebox</center>
![Amber](/img/in-post/2017-06-04-AmberTank/4.jpg)
<center>图<strong>4.</strong> 输入文件</center>
计算工作由sander程序完成。笔者使用的是并行版的Amber，输入mpirun -np 16 sander.MPI -O -i min.in -o min.out -p prmtop -c inpcrd -r min.rst -inf min.mdinfo; 如果是串行版本，直接从sander开始输入即可。
![Amber](/img/in-post/2017-06-04-AmberTank/5.jpg)
<center>图<strong>5.</strong> sander</center>
最小化完成后，输入mpirun -np 16 sander.MPI -O -i heat.in -o heat.out -p prmtop -c min.rst -r heat.rst -x heat.mdcrd -inf heat.mdinfo；完成后再用类似手续运行prod.in.
全部结束之后，运行process_mdout.perl heat.out prod.out，将得到大量以Summary开头的文件，包含体系热力学性质随时间的信息。可以使用xmgrace命令（需要安装相应软件）作图。
![Amber](/img/in-post/2017-06-04-AmberTank/6.jpg)
<center>图<strong>6.</strong> xmgrace</center>
Amber16输出的prod.mdcrp（记录了体系在模拟过程中的轨迹）格式与之前版本不同，不能用可视化软件VMD直接打开，需要首先用cpptraj转换格式：
cpptraj -pprmtop -y prod.mdcrd -x prod.dcd   
方可用VMD可视化轨迹。
![Amber](/img/in-post/2017-06-04-AmberTank/7.gif)
<center>图<strong>7.</strong> 进击的TANK</center>