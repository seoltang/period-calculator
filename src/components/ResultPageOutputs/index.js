import React from 'react';
import messages from './messages';
import {
  AreaWrapper,
  AreaRow,
  AreaBox1,
  AreaCenterContent,
  TitleH1,
  TitleH5,
  AreaOutputRow,
  OutputBox,
  OutputText,
} from './style';

const outputs = [
  {
    id: messages.nextPeriodDate.id,
    title: '다음 생리 예정일',
    content: '11월 1일',
  },
  {
    id: messages.daysFromToday.id,
    title: '오늘로부터',
    content: '15일 뒤',
  },
  {
    id: messages.periodCycle.id,
    title: '생리 주기',
    content: '30일',
  },
];

const ResultPageOutputs = () => {
  return (
    <AreaWrapper minWidth>
      <AreaRow>
        <AreaBox1 padding>
          <AreaCenterContent>
            <TitleH1>생리 예정일 계산기</TitleH1>
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
      <AreaRow margin="0">
        <AreaBox1 padding="0 20px">
          <AreaOutputRow>
            {outputs.map(({ id, title, content }) => (
              <OutputBox margin="10px 0" key={id}>
                <TitleH5>{title}</TitleH5>
                <OutputText>{content}</OutputText>
              </OutputBox>
            ))}
          </AreaOutputRow>
        </AreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
};

export default ResultPageOutputs;
