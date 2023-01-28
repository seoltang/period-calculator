import React, { useState } from 'react';
import { RadioGroup, NumberField } from 'gestalt';
import calendar from '../../assets/icons/calendar.svg';
import check from '../../assets/icons/check-red.svg';
import clock from '../../assets/icons/clock-orange.svg';
import {
  AreaWrapper,
  AreaRow,
  AreaInputRow,
  AreaBox1,
  AreaWhiteBox1,
  IconBox,
  TextBox,
  SelectBox,
  ButtonBox,
  RadioButtonBox,
  InputBox,
  SpanBox,
  AreaContent,
  IconImage,
  P,
  CalendarButton,
  ConfirmButton,
} from './style';
import './styles.scss';

const calculationMethods = {
  period: { label: '생리주기', value: 'period' },
  record: { label: '최근기록', value: 'record' },
};

const DefaultPageInputs = () => {
  const [calulationMethod, setCalulationMethod] = useState(
    calculationMethods.period.value
  );
  const [periodValue, setPeriodValue] = useState(28);

  return (
    <AreaWrapper minWidth>
      <AreaInputRow>
        <AreaBox1 padding>
          <AreaRow>
            <AreaWhiteBox1 padding="10px 20px" className="area-white-box">
              <AreaRow>
                <IconBox>
                  <IconImage src={calendar} alt="calendar" />
                </IconBox>
                <TextBox>
                  <P color="blue">최근 생리일</P>
                </TextBox>
                <SelectBox>
                  <P>2023-10-23</P>
                </SelectBox>
                <ButtonBox>
                  <CalendarButton>달력</CalendarButton>
                </ButtonBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding="10px 20px" className="area-white-box">
              <AreaRow>
                <IconBox>
                  <IconImage src={check} alt="check-circle" />
                </IconBox>
                <TextBox>
                  <P color="red">계산 방법</P>
                </TextBox>
                <RadioButtonBox className="calulation-method-radio">
                  <RadioGroup
                    id="calculationMethodRadio"
                    direction="row"
                    legend="Choose a calculate method"
                    legendDisplay="hidden"
                    // errorMessage="Please select one"
                  >
                    <RadioGroup.RadioButton
                      checked={
                        calulationMethod === calculationMethods.period.value
                      }
                      id="periodMethod"
                      label={calculationMethods.period.label}
                      name="calulationMethod"
                      onChange={() =>
                        setCalulationMethod(calculationMethods.period.value)
                      }
                      value={calculationMethods.period.value}
                    />
                    <RadioGroup.RadioButton
                      checked={
                        calulationMethod === calculationMethods.record.value
                      }
                      id="recordMethod"
                      label={calculationMethods.record.label}
                      name="calulationMethod"
                      onChange={() =>
                        setCalulationMethod(calculationMethods.record.value)
                      }
                      value={calculationMethods.record.value}
                    />
                  </RadioGroup>
                </RadioButtonBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding="10px 20px" className="area-white-box">
              <AreaRow>
                <IconBox>
                  <IconImage src={clock} alt="period clock" />
                </IconBox>
                <TextBox>
                  <P color="orange">생리 주기</P>
                </TextBox>
                <InputBox>
                  <NumberField
                    id="refNumberField"
                    max={100}
                    min={1}
                    onChange={({ value }) => {
                      setPeriodValue(value);
                    }}
                    placeholder={28}
                    step={1}
                    value={periodValue}
                    // ref={ref}
                    // errorMessage={errorMessage}
                  />
                </InputBox>
                <SpanBox>
                  <P className="text">일</P>
                </SpanBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>

          <AreaRow>
            <AreaBox1>
              <AreaContent>
                <ConfirmButton>확인</ConfirmButton>
              </AreaContent>
            </AreaBox1>
          </AreaRow>
        </AreaBox1>
      </AreaInputRow>
    </AreaWrapper>
  );
};

export default DefaultPageInputs;
