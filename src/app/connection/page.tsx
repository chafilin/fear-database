import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import MailIcon from "./button-icon/mail.svg";
import PhoneIcon from "./button-icon/phone-call.svg";
import { Header } from "@/components/header";

export default function Connections() {
  return (
    <main className={styles.root}>
      <Header
        title="Связь с командами"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.table}>
        <div className={styles.column}>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div className={styles.block_header_main}>
                Команда Сибил Беннет:
              </div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>К-н Сибил Беннет:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Д-р Сал Ангер:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Гарри Форрестер:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block_footer}>
            <div className={styles.block_header}>
              <div className={styles.block_header_main}>Орегон:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div className={styles.block_header_main}>Команда Бетта:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>К-н Саша Клейн:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Д-р Виктор Риверс:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Буйвол:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block_footer}>
            <div className={styles.block_header}>
              <div className={styles.block_header_main}>Центральный офис:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div className={styles.block_header_main}>Команда Гамма:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>К-н Стэн Филдз:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Джоуи Картер:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>Аника Рам:</div>
              <div className={styles.error}>Связь потеряна</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src={PhoneIcon} alt="phone" />
              </div>

              <div className={styles.icon}>
                <Image src={MailIcon} alt="e-mail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
