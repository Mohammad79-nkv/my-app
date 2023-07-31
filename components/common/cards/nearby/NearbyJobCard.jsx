import React from "react";
import { View, Text, Image } from "react-native";

import { TouchableOpacity } from "react-native";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.imployment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
