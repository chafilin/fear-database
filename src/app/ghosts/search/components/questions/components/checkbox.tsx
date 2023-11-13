import React, { useEffect } from "react";
import styles from "../index.module.css";

type CheckboxProps = {
  name: string;
  checked: boolean | null;
  onChange: (checked: boolean | null) => void;
};

type Ref = React.MutableRefObject<HTMLInputElement | null>;

const updateInput = (ref: Ref, checked: boolean | null) => {
  const input = ref.current;
  if (input) {
    // @ts-ignore
    input.checked = checked;
    input.indeterminate = checked == null;
  }
};

const Checkbox = ({ name, checked, onChange }: CheckboxProps) => {
  const inputRef = React.useRef(null);
  const checkedRef = React.useRef(checked);
  useEffect(() => {
    checkedRef.current = checked;
    updateInput(inputRef, checked);
  }, [checked]);
  const handleClick = () => {
    switch (checkedRef.current) {
      case true:
        checkedRef.current = null;
        break;
      case false:
        // @ts-ignore
        checkedRef.current = true;
        break;
      default: // null
        checkedRef.current = false;
        break;
    }
    updateInput(inputRef, checkedRef.current);
    if (onChange) {
      onChange(checkedRef.current);
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="checkbox"
        name={name}
        id={name}
        onClick={handleClick}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export { Checkbox };
