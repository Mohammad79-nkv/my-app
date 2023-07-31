import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { useFetch } from "../../hook/useFetch";
import { COLORS, icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
            ),
            headerTitle: ''
        }}
      ></Stack.Screen>
    </SafeAreaView>
  );
};

export default JobDetails;
