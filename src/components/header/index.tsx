import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftArrowIcon from "./chevron-left.svg";
import styles from "./index.module.css";

type Props = {
  title: string;
  backTitle: string;
  backHref: string;
};
export const Header = ({ title, backTitle, backHref }: Props) => {
  return (
    <>
      <Link href={backHref} className={styles.link}>
        <Image src={LeftArrowIcon} alt="back" />
        {backTitle}
      </Link>
      <h1 className={styles.header}>{title}</h1>
    </>
  );
};
