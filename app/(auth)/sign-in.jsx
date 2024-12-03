import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <Image source={images.logo} resizeMode="contain" style={styles.img} />
          <Text style={styles.text}>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })} // Fixed typo from 'enail' to 'email'
            otherStyles={{ marginTop: 32 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 32 }}
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            // containerStyles="marginTop : 70"
            isLoading={isSubmitting}
          />
          <View style={styles.smalltextview}>
            <Text style={styles.smalltext}>Don't have an account?</Text>
            <Link href="sign-up" style={styles.signuptext}>SignUp</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  view: {
    width: "100%", // Full width of the parent
    flex: 1, // Enables flexbox layout
    justifyContent: "center", // Centers content vertically
    height: "100%", // Full height of the parent
    paddingHorizontal: 16, // Horizontal padding of 16px
    marginVertical: 24, // Vertical margin of 24px
  },
  img: {
    width: 115, // Fixed width of 115px
    height: 34, // Fixed height of 34px
  },
  text: {
    fontSize: 24, // Equivalent to `text-2xl`
    fontWeight: "600", // Equivalent to `font-semibold`
    color: "#ffffff", // Equivalent to `text-white`
    marginTop: 40, // Equivalent to `mt-10`
    fontFamily: "psemibold", // Assuming `font-psemibold` is a custom font family
  },
  smalltextview: {
    display: "flex", // Enables flexbox
    justifyContent: "center", // Centers content along the main axis
    paddingTop: 20, // Padding-top of 20px
    flexDirection: "row", // Aligns children in a row
    gap: 8, // Gap of 8px between child elements (requires React Native >= 0.71)
  },
  smalltext: {
    fontSize: 18, // Equivalent to text-lg
    color: "#f5f5f5", // Equivalent to text-gray-100
    fontFamily: "pregular", // Custom font-family
  },
  signuptext: {
    fontSize: 18, // Equivalent to text-lg
    fontFamily: "psemibold", // Custom semi-bold font family
    color: "rgba(255, 156, 1, 1)", // Equivalent to text-secondary
  },
});
