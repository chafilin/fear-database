import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import MailIcon from "./button-icon/mail.svg";
import PhoneIcon from "./button-icon/phone-call.svg";
import LeftArrowIcon from "./button-icon/chevron-left.svg";

export default function Connections() {
  return (
    <main className={styles.root}>
      <Link href="/" className={styles.link}>
        <Image src={LeftArrowIcon} alt="back" />
        Бюро Исследований Паранормальных Явлений
      </Link>
      <h1>Связь с командами</h1>
      <div className={styles.table}>
        <div className={styles.column}>
          <div className={styles.block}>
            <div className={styles.header}>
              <div className={styles.header_main}>Команда Сибил Беннет:</div>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
              <div className={styles.header_main}>Орегон:</div>
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
            <div className={styles.header}>
              <div className={styles.header_main}>Команда Бетта:</div>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
              <div className={styles.header_main}>Центральный офис:</div>
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
            <div className={styles.header}>
              <div className={styles.header_main}>Команда Гамма:</div>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
            <div className={styles.header}>
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
