import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { WHITE, GRAY_70 } from "../../styles/colors";

const Container = styled.div`
  width: 472px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  height: 110px;
  width: 110px;
  color: ${WHITE};
  font-size: 44px;
  background-color: ${GRAY_70};
  border-radius: 50%;
  margin: 32px 0px;
`;

const Message = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

const SubHeader = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

class EmptySection extends React.Component {
  render() {
    const { style, iconClass, message, subHeaderMessage } = this.props;

    return (
      <Container style={{ ...style.root }}>
        <IconContainer>
          {iconClass && <i className={iconClass} />}
        </IconContainer>
        <Message style={{ ...style.message }}>{message}</Message>

        {subHeaderMessage && (
          <SubHeader style={{ ...style.subHeader }}>
            {subHeaderMessage}
          </SubHeader>
        )}
      </Container>
    );
  }
}

EmptySection.defaultProps = {
  iconClass: "fas fa-award",
  style: {}
};

EmptySection.propTypes = {
  iconClass: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  subHeaderMessage: PropTypes.node,
  style: PropTypes.object
};

export default EmptySection;
