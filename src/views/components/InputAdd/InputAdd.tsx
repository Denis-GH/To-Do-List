import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';

import styles from './index.module.scss';

type InputAddProps = {
  onAdd: (title: string) => void;
};

export const InputAdd: React.FC<InputAddProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <div className={styles.inputAdd}>
      <input
        type="text"
        className={styles.inputAddValue}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="some words"
      />
      <button className={styles.inputAddButton} onClick={() => {}} aria-label="Add">
        <Icon width={20} height={20} name="plus" color="#fff" />
      </button>
    </div>
  );
};
