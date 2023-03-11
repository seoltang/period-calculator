import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';
import { AreaWrapper, AreaRow, AreaBox1, AreaCenterContent } from './style';

function ResultPageCalendar() {
  const period = {
    startDate: new Date(2023, 9, 28),
    endDate: new Date(2023, 10, 5),
    key: 'period',
  };

  const ovulatoryPhase = {
    startDate: new Date(2023, 10, 16),
    endDate: new Date(2023, 10, 20),
    key: 'ovulatoryPhase',
  };

  return (
    <AreaWrapper minWidth>
      <AreaRow>
        <AreaBox1 padding>
          <AreaCenterContent>
            <StyledDateRange
              ranges={[period, ovulatoryPhase]}
              showDateDisplay={false}
              showPreview={false}
              dragSelectionEnabled={false}
              preventSnapRefocus
              onChange={() => {}}
              locale={ko}
            />
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
}

const StyledDateRange = styled(DateRange)`
  button.rdrDay {
    pointer-events: none;
  }
`;

export default ResultPageCalendar;
