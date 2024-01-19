---
title: miniVue
description: miniVue
date: 2023-9-20
tags:
  - Vue源码
---
## MiniVue.js
```js
// MiniVue 构造函数
function MiniVue(options) {
    this.data = options.data;
  
    this.observeData(this.data);
  
    // 编译模板
    if (options.el) {
      this.compileTemplate(options.el);
    }
  }
  
  // 数据劫持，实现数据的响应式
  MiniVue.prototype.observeData = function(data) {
    var self = this;
  
    Object.keys(data).forEach(function(key) {
      var value = data[key];
      var dep = new Dep();
  
      Object.defineProperty(self.data, key, {
        get: function() {
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return value;
        },
        set: function(newValue) {
          if (newValue !== value) {
            value = newValue;
            dep.notify();
          }
        }
      });
    });
  };
  
  // 编译模板
  MiniVue.prototype.compileTemplate = function(el) {
    var self = this;
    var root = document.querySelector(el);
  
    this.compileNode(root);
  
    // 绑定数据更新的回调函数
    Dep.target = function() {
      self.compileNode(root);
    };
  };
  
  // 编译节点
  MiniVue.prototype.compileNode = function(node) {
    var self = this;
  
    if (node.nodeType === 1) { // 元素节点
      var attrs = node.attributes;
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (attr.name === 'v-model') {
          var exp = attr.value;
          node.value = this.data[exp];
          node.addEventListener('input', function(event) {
            self.data[exp] = event.target.value;
          });
        }
      }
    } else if (node.nodeType === 3) { // 文本节点
      var reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
      var text = node.textContent;
  
      node.textContent = text.replace(reg, function(_, exp) {
        return self.data[exp];
      });
    }
  
    if (node.childNodes && node.childNodes.length > 0) {
      for (var i = 0; i < node.childNodes.length; i++) {
        this.compileNode(node.childNodes[i]);
      }
    }
  };
  
  // 发布订阅模式的订阅者
  function Dep() {
    this.subs = [];
  }
  
  Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
  };
  
  Dep.prototype.notify = function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  };
  
  // 订阅者
  function Watcher(node, vm, exp) {
    this.node = node;
    this.vm = vm;
    this.exp = exp;
  
    Dep.target = this;
    this.update();
    Dep.target = null;
  }
  
  Watcher.prototype.update = function() {
    this.node.textContent = this.vm.data[this.exp];
  };
  
  // 示例用法
  var vm = new MiniVue({
    el: '#app',
    data: {
      message: 'Hello, MiniVue!'
    }
  });
  
```

## 数据劫持，实现数据的响应式

## 编译模板