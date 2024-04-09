import styles from "./index.module.css";
import Image from "next/image";
import PhoneIcon from "../button-icon/phone-call.svg";
import MailIcon from "../button-icon/mail.svg";

type ConnectionCardProps = {
  title: string;
  error: string;
  isMain?: boolean;
  isFooter?: boolean;
};

export const ConnectionCard: React.FC<ConnectionCardProps> = ({
  title,
  error,
  isMain,
  isFooter,
}) => {
  return (
    <Layout isFooter={isFooter}>
      <div className={styles.header}>
        {isMain ? <MainHeader title={title} /> : <Header title={title} />}
        <div className={styles.error}>{error}</div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image src={PhoneIcon} alt="phone" />
        </div>

        <div className={styles.icon}>
          <Image src={MailIcon} alt="e-mail" />
        </div>
      </div>
    </Layout>
  );
};

type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = ({ title }) => {
  return <div>{title}</div>;
};

const MainHeader: React.FC<HeaderProps> = ({ title }) => {
  return <div className={styles.header_main}>{title}</div>;
};

type LayoutProps = {
  children: React.ReactNode;
  isFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isFooter }) => {
  return isFooter ? (
    <div className={styles.block_footer}>{children}</div>
  ) : (
    <div className={styles.block}>{children}</div>
  );
};
