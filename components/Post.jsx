import React from "react";
import styled from "styled-components/native";

const PostView = styled.View`
  border-bottom-width: 1px;
  padding: 15px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-style: solid;
  flex-direction: row;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const PostDetails = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if (str && str.length >= 50) {
    return str.substring(0, 50) + ".....";
  }

  return str;
};

export default function Post({ title, imageUrl, createdAt }) {
  return (
    <PostView>
      <PostImage source={{ url: imageUrl }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
}
