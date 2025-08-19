import React from 'react';

// extras
import { TabContainer } from './Tab.styles';

type TabProps = {
  children: React.ReactNode;
};

function Tab({ children }: TabProps) {
  return (
    <TabContainer>
      <p className='tab-text'>{children}</p>
    </TabContainer>
  );
}

export default Tab;
