import * as React from "react";
import * as style from "./app.styles";
import AllRoutes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <style.Container>
        <AllRoutes />
      </style.Container>
    </ChakraProvider>
  );
}
