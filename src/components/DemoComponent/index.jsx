/*
 * 这是一个示例组件
 * 注意：
 * 1. 组件名称必须以大写字母开头驼峰格式
 * 2. 组件样式通过TailwindCSS实现
 * 3. 组件必须导出默认导出
 * 4. 组件暂时不要设置props和引入react之外的其他依赖
 */

import React from 'react';

/**
 * 这是面向编辑器的配置参数
 */
export const props = {
  showName: {
    type: 'string',
    default: 'world',
  },
};

/**
 * 示例组件
 * 组件名称：DemoComponent
 * 组件功能：输出hello world
 * 技术栈要求：TailwindCSS+React 16+
 * 组件适用场景：调试。
 * 使用示例：<DemoComponent/>
 */
export default function DemoComponent(props) {
  return (
    <div className="text-center text-2xl bg-red-500">
      <h1>hello {props.showName || 'world'}</h1>
    </div>
  );
}
