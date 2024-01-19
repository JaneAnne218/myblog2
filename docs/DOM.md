---
title: DOM
description: DOM
date: 2023-9-20
tags:
  - DOM
---
## nodeType
当处理DOM(文档对象模型)时，每个节点都有nodeType属性，值为整数。
| 常量 | 值 | 描述 |
| --- | --- | --- |
| ELEMENT_NODE | 1 | 一个元素节点，例如`<p>`和`<div>` |
| ATTRIBUTE_NODE | 2 | 一个属性节点 |
| TEXT_NODE | 3 | Element 或者 Attr 中实际的  文字 |
| CDATA_SECTION_NODE | 4 | 一个 CDATASection，例如`<!CDATA[[ … ]]>` |
| ENTITY_REFERENCE_NODE | 5 | 一个实体引用节点 |
| COMMENT_NODE | 8 | 一个注释节点 |
| DOCUMENT_NODE | 9 | 一个 Document 节点 |
| DOCUMENT_TYPE_NODE | 10 | 描述文档类型的 DocumentType 节点。例如`<!DOCTYPE html>` 就是用于 HTML5 的 |
##  