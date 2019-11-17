import React from "react";
import { storiesOf } from "@storybook/react";
import EmptySection from "./EmptySection";
import styled from "styled-components";

const DisplayContainer = styled.div`
  align-items: center;
`;

storiesOf("EmptySection", module).add("default", () => (
  <DisplayContainer>
    <EmptySection
      iconClass={"fa fa-plus"}
      message={"You don’t have any data permissions yet"}
      subHeaderMessage={
        "Create your first data permission by selecting the options above. " +
        "Data permissions allow your users access to only specific data within excel files and data models. " +
        "Read more in our documentation article."
      }
    />
  </DisplayContainer>
));
