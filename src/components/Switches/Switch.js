import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { GREEN_70, GRAY_50, GRAY_70 } from "../../styles/colors";

const SwitchContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const sharedStyle = css`
  content: "";
  position: absolute;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const SwitchButtonSpan = styled.span`
  ${sharedStyle};
`;

const SwitchLabel = styled.label`
  ${sharedStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 30px;
  height: 16px;
  background: ${(props) => (props.checked ? GREEN_70 : GRAY_50)};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s;

  &:active ~ ${SwitchButtonSpan} {
    width: 15px;
  }
`;

const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked ~ ${SwitchLabel} ${SwitchButtonSpan} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const SwitchTitle = styled.span`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  padding-left: 8px;
  align-items: center;
  color: ${(props) => (props.checked ? GREEN_70 : GRAY_70)};
`;

const SwitchComponentContainer = styled.div`
  display: flex;
`;

const Switch = ({ checked, onChange, enabledText, disabledText }) => {
  return (
    <SwitchComponentContainer>
      <SwitchContainer>
        <SwitchCheckbox
          id={`reactSwitchNew`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <SwitchLabel checked={checked} htmlFor={`reactSwitchNew`}>
          <SwitchButtonSpan />
        </SwitchLabel>
      </SwitchContainer>
      <SwitchTitle checked={checked}>
        {checked ? enabledText : disabledText}
      </SwitchTitle>
    </SwitchComponentContainer>
  );
};

Switch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onStateChanged: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  onChange: () => {},
  enabledText: "ON",
  disabledText: "OFF",
};

export const SwitchComponent = Switch;
export default Switch;
