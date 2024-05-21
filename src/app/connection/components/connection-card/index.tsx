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
      <Icons>
        <Icon src={PhoneIcon} alt="phone" />

        <Icon src={MailIcon} alt="e-mail" />
      </Icons>
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

type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div className={styles.icon}>
      <Image src={src} alt={alt} />
    </div>
  );
};

type IconsProps = {
  children: React.ReactNode;
};

const Icons: React.FC<IconsProps> = ({ children }) => {
  return <div className={styles.icons}>{children}</div>;
};
