import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/articles/${id}`)
      .then(({ data }) => setData(data))
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", "Unable to fetch news.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          url: data.imageUrl,
        }}
      />
      <PostText>{data.text}</PostText>
    </View>
  );
};
