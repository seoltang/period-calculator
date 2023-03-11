import React from 'react';
import { AreaWrapper, AreaRow, AreaBox1, AreaCenterContent, TitleH1, P } from './style';

function DefaultPageDescription() {
  return (
    <AreaWrapper minWidth>
      <AreaRow>
        <AreaBox1 padding>
          <AreaCenterContent>
            <TitleH1>생리 예정일 계산기</TitleH1>
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
      <AreaRow margin="0px">
        <AreaBox1 padding>
          <AreaCenterContent>
            <P>다음 생리 예정일을 알려드립니다.</P>
            <P>가장 최근의 생리 시작일을 선택하고,</P>
            <P>
              본인의 <b>생리 주기</b>를 안다면 <b>생리 주기</b>,
            </P>
            <P>
              모른다면 <b>최근 기록</b>으로 계산 방법을
            </P>
            <P>선택해주세요.</P>
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
}

export default DefaultPageDescription;
