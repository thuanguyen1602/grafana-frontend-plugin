import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Table } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data: {series}, width, height }) => {
  const { fields } = series[0];
  console.log(fields[0].values.get(0));
  
  
  return (
    <Table
      width={width}
      height={height}
      resizable={true}
      data={{length: fields.length, fields}}
    />
  );
};
