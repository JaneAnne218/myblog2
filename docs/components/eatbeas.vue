<template>
    <div class="pacman-container">
      <div class="pacman"></div>
    </div>
  </template>
  
  <style>
  .pacman-container {
    position: relative;
    width: 100px;
    height: 100px;
  }
  
  .pacman {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: yellow;
    animation: pacman-mouth 1s infinite;
  }
  
  @keyframes pacman-mouth {
    0% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
    }
    50% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
    }
    100% {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  </style>
  