import { Avatar, Box } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

type ListOfAvatarsProps = {
  images: Array<string>;
};

const ListOfAvatars = ({ images }: ListOfAvatarsProps) => {
  return (
    <FlexWrapper>
      {images.map((image) => (
        <Avatar
          key={image}
          src={image}
          sx={{ width: 100, height: 100 }}
          variant="rounded"
        />
      ))}
    </FlexWrapper>
  );
};

const FlexWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export default ListOfAvatars;
