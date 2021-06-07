# CSOC-AndroidDev-week1
This repository contains csoc week1 android projects

##  Introduction
The aptest definition for android is - "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
In short, we can say that it is an Operating system for touchscreen devices, and any device that runs on this Operating System is known as an Android Device. Now for every operating system, some applications can run on it to perform specific tasks. Similarly, for Android Devices, we have Android Apps that can run on them to perform specific tasks. 

Evident enough that the software engineering field for developing such apps is known as Android App Development. 
The official language for Android development is Kotlin, but Java is still used in many famous courses and many projects, so you are free to use any of them.

# Installation

### Android Studio

Android Studio is the official Integrated Development Environment (IDE) for Android app development. This software is a bit heavy on normal systems (8 GB Ram & 1 TB HDD) and can be quite laggy for any systems below this configuration. 

[](https://developer.android.com/studio/install)

While developing an android app you will need to test it on a device. You can test it in two ways - 

- [Real Device (Preffered for slower systems)](https://developer.android.com/studio/debug/dev-options)
For testing you apps on a real device you will need to have a USB cable and an Android device. Follow this tutorial to enable USB debugging in order to run your app in the device.

- [Emulator](https://developer.android.com/studio/run/emulator)
An Android Emulator simulates Android devices on your computer so that you can test your application on a variety of devices and Android API levels without needing to have each physical device. It provides almost all of the capabilities of a real Android device.


## How to get started

If you haven't had any chance to develop android apps earlier then don't worry it's not too late to start now. Here are few resources to start with android development. 

- Video Tutorial

   [Android development tutorial 1](https://www.youtube.com/playlist?list=PLUcsbZa0qzu3Mri2tL1FzZy-5SX75UJfb)
   
   [Android development tutorial 2](https://www.youtube.com/playlist?list=PLgCYzUzKIBE8TUoCyjomGFqzTFcJ05OaC)
- Written Tutorials

   [Create a project](https://developer.android.com/training/basics/firstapp/creating-project)
 
   [Run your app](https://developer.android.com/training/basics/firstapp/running-app)
 
   [Include new UI](https://developer.android.com/training/basics/firstapp/building-ui)
 
   [Make it functional](https://developer.android.com/training/basics/firstapp/starting-activity)

# Assignment

This week tasks will be on the basic of android development and comprises of making simple games like TIC-TAC-TOE and SUDOKU . 

##### Note 
- You can choose either of them or both of them . 

## [TIC-TAC-TOE](https://en.m.wikipedia.org/wiki/Tic-tac-toe)

The task that we'll be working over is to build a TIC-TAC-TOE game , a multi-player classic game where both players will have to choose between X or O .The first player to complete a diagonal, vertical or a horizontal blocks wins the game.

### Bonus task

• Extra points will be rewarded for giving players a choice to choose between X or O .

• Extra points for making an unbeatable AI using Minimax algorithm.


## [SUDOKU](https://en.wikipedia.org/wiki/Sudoku)

Sudoku is a logic-based puzzle game .The aim of the Sudoku puzzle is to put in a numerical digit from 1 through 9 in each
cell of a 9×9 grid made up of 3×3 sub-grids (called "block”), starting with various digits
given in some cells (the "givens") with the others empty; each row, column, and block
must contain only one instance of each numeral. 

Complexity of the algorithm that are used in building are divided into two parts. 
- One is the complexity of the algorithm to generate the complete grid. We discover the randomness of generating complete grid increases when the complexity increases, that is, the randomness higher and the complexity greater.
- 
- Second, is the algorithm to check each row , coloum and block and declare the final result . 

### Bonus task

- Extra points will be rewarded for making EASY , MEDIUM and HARD levels . 

# Submission

Submission has to be done by sharing your github repo link and the .apk file of your tic-tac-toe app

### Gunderlines :

- Clone CSOC-task1-2021 on your device .
- Make a folder of your name within the Android folder and add the .apk file of your app.
- Finally push your Pull request .
