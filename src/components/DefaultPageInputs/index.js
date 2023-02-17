import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroup, NumberField } from 'gestalt';
import calendar from '../../assets/icons/calendar.svg';
import check from '../../assets/icons/check-red.svg';
import clock from '../../assets/icons/clock-orange.svg';
import messages from './messages';
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
  period: {
    label: <FormattedMessage {...messages.calculationMethodPeriod} />,
    value: 'period',
  },
  record: {
    label: <FormattedMessage {...messages.calculationMethodRecord} />,
    value: 'record',
  },
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
                  <P color="blue">
                    <FormattedMessage {...messages.lastPeriodDate} />
                  </P>
                </TextBox>
                <SelectBox>
                  <P>2023-10-23</P>
                </SelectBox>
                <ButtonBox>
                  <CalendarButton>
                    <FormattedMessage {...messages.calendar} />
                  </CalendarButton>
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
                  <P color="red">
                    <FormattedMessage {...messages.calculationMethod} />
                  </P>
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
                  <P color="orange">
                    <FormattedMessage {...messages.periodCycle} />
                  </P>
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
                  <P className="text">
                    <FormattedMessage {...messages.day} />
                  </P>
                </SpanBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>

          <AreaRow>
            <AreaBox1>
              <AreaContent>
                <ConfirmButton>
                  <FormattedMessage {...messages.confirm} />
                </ConfirmButton>
              </AreaContent>
            </AreaBox1>
          </AreaRow>
        </AreaBox1>
      </AreaInputRow>
    </AreaWrapper>
  );
};

export default DefaultPageInputs;
