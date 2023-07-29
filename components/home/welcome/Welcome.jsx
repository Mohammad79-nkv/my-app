import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", " Part-time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("full-time");

  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Hello Adrian</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={styles.tabsContainer}
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
