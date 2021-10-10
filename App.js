import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Eggs",
    },
    {
      id: 2,
      text: "Milk",
    },
    {
      id: 3,
      text: "Bread",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    setItems((prev) => {
      return [{ id: Date.now(), text }, ...prev];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: "darkslateblue",
    fontSize: 30,
  },
});

export default App;
