import React, { useRef } from "react";
import { useField } from "@unform/core";
type Props = {
  name: string;
};
type InputProps = <HTMLInputElement> & Props;

function Input({ name }): InputProps {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  return <input ref={inputRef} />;
}

export default Input;
