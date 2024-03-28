import styles from "./button.module.css";

type ButtonTestProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonTest = ({ children, ...props }: ButtonTestProps) => {
  return (
    <button {...props} type="button" className={styles.test}>
      {children}
    </button>
  );
};

export default ButtonTest;
