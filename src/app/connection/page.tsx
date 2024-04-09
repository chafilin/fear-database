import React from "react";
import { Header } from "@/components/header";
import { ConnectionCard } from "./components/connection-card";
import { Root } from "@/components/root";
import { Column } from "./components/column";
import { Table } from "./components/table";

export default function Connections() {
  return (
    <Root>
      <Header
        title="Связь с командами"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <Table>
        <Column>
          <ConnectionCard
            isMain={true}
            title="Команда Сибил Беннет"
            error="Связь потеряна"
          />
          <ConnectionCard title="К-н Сибил Беннет:" error="Связь потеряна" />
          <ConnectionCard title="Д-р Сал Ангер:" error="Связь потеряна" />
          <ConnectionCard title="Гарри Форрестер:" error="Связь потеряна" />
          <ConnectionCard
            title="Орегон:"
            error="Связь потеряна"
            isMain={true}
            isFooter={true}
          />
        </Column>

        <Column>
          <ConnectionCard
            isMain={true}
            title="Команда Бетта"
            error="Связь потеряна"
          />
          <ConnectionCard title="К-н Саша Клейн:" error="Связь потеряна" />
          <ConnectionCard title="Д-р Виктор Риверс:" error="Связь потеряна" />
          <ConnectionCard title="Буйвол:" error="Связь потеряна" />
          <ConnectionCard
            title="Центральный офис:"
            error="Связь потеряна"
            isFooter={true}
            isMain={true}
          />
        </Column>

        <Column>
          <ConnectionCard
            isMain={true}
            title="Команда Гамма"
            error="Связь потеряна"
          />
          <ConnectionCard title="К-н Стэн Филдз:" error="Связь потеряна" />
          <ConnectionCard title="Джоуи Картер:" error="Связь потеряна" />
          <ConnectionCard title="Аника Рам:" error="Связь потеряна" />
        </Column>
      </Table>
    </Root>
  );
}
