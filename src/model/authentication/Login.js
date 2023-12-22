import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

function Login() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sandbox.api.lettutor.com/auth/login",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: {
              email: "phhai@ymail.com",
              password: "123456",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    console.log("data");
    console.log(data);
  }, []);

  const getContent = () => {
    if (isLoading) {
      return
    }
    console.log("data")
    console.log(data)
  }

  return (
    <View>
      {getContent()}
      <Text>gdsgsd</Text>
    </View>
  );
}

export default Login;
