import React from "react";
import axios from "axios";
import {
  SafeAreaView,
  Alert,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Post from "../components/Post";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://5c3755177820ff0014d92711.mockapi.io/articles")
      .then(({ data }) => setItems(data))
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", "Unable to fetch news.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post
              key={item.id}
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
              text={item.text}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
