/*
Preview组件是一个用于展示和调试其他React组件的容器组件，主要用于开发阶段的组件预览和测试。该组件集成了DemoComponent和ProfileCard两个子组件的展示。
*/
import React from 'react';

// 调试组件
import DemoComponent from './DemoComponent';

export default function Preview() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-4">Demo Component:</h2>
        <DemoComponent />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Profile Card Component:</h2>
        <ProfileCard />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Fund Flow Component:</h2>
        <FundFlowDemo />
      </div>
    </div>
  );
}
