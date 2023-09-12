/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styles from './ExampleStylingOptions.module.scss';

const mouseStyles = (color) => css`
  margin: 4px;
  padding: 8px;
  border: 2px solid ${color};
  border-radius: 12px;
`;

const catStyles = css`
  margin: 4px;
  padding: 8px;
  border: 2px solid brown;
  border-radius: 12px;
`;

export default function ExampleStylingOptions() {
  return (
    <div>
      <div
        style={{
          margin: '4px',
          padding: '8px',
          border: '2px solid orange',
          borderRadius: '12px',
        }}
      >
        Lion
      </div>
      <div css={catStyles}>Cat</div>
      <div css={mouseStyles('red')}>Mouse</div>
      <div className={styles.dog}>Dog</div>
    </div>
  );
}
