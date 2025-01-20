/*
 * 组件预览调试
 * 注意:
 * 1. 本地开发时，不要使用npm run build命令打包
 * 2. 本地开发时，不要使用npm run build:prod命令打包
 */
import React from 'react';

// 调试组件
import Preview from './components/Preview';

export default function App() {
  return (
    <>
      <Preview />
    </>
  );
}
