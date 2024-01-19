---
title: YesPlayMusic-2
description: 音乐播放器
date: 2023-09-26
tags:
  - 项目和工具
---
## vuex的状态
1. vuex的状态是new Player(),其中player()是一个类。可以再组件中调用状态的方法。<br/>
在JavaScript的类中，可以定义属性和方法。属性可以是任何值，包括字符串、数字、布尔值、对象等等。方法是类中的函数，用于执行特定的操作。<br/>
2. 不会自动切换，需要components，然后再点击vuex。<br/>
3. 状态需要存储在本地存储中，以防止刷新后数据丢失。<br/>
```js
export default class Player {
  constructor() {
    // 初始化Player的状态数据...
    this.repeatMode = 'off';
    // ...

    // 从本地存储中加载Player实例的状态数据
    this._loadSelfFromLocalStorage();
  }

  switchRepeatMode() {
    if (this.repeatMode === 'none') {
      this.repeatMode = 'all';
    } else if (this.repeatMode === 'all') {
      this.repeatMode = 'one';
    } else if (this.repeatMode === 'one') {
      this.repeatMode = 'none';
    }

    // 在这里将修改后的状态数据保存到本地存储中
    this._saveSelfToLocalStorage();
  }

  _saveSelfToLocalStorage() {
    // 将Player实例的状态数据保存到本地存储中
    localStorage.setItem('player', JSON.stringify(this));
  }

  _loadSelfFromLocalStorage() {
    // 从本地存储中加载Player实例的状态数据
    const playerData = localStorage.getItem('player');
    if (playerData) {
      const player = JSON.parse(playerData);
      Object.assign(this, player);
    }
  }

  // 在Player类中定义的其他方法和属性...
}
```

