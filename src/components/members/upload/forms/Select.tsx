import styled from '@emotion/styled';
import { SelectV2 } from '@sopt-makers/ui';
import { PropsWithChildren } from 'react';

export type Option<T = string> = {
  value: T | number;
  label: string;
};

interface SelectProps<T> {
  className?: string;
  value?: Option<T>;
  placeholder?: string;
  options: Option<T>[];
  onChange?: (value: string | number | boolean) => void;
  disabled?: boolean;
  defaultValue?: string;
}
export function Select<T extends string>({
  className,
  placeholder,
  options,
  value,
  onChange,
  children,
  disabled = false,
  defaultValue,
}: PropsWithChildren<SelectProps<T>>) {
  const defaultValueOption = defaultValue
    ? {
        label: defaultValue,
        value: defaultValue,
      }
    : undefined;
  return (
    <StyledSelectRoot
      key={value?.value}
      className={className}
      type='text'
      onChange={disabled ? undefined : onChange}
      defaultValue={defaultValueOption}
      disabled={disabled}
    >
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder={placeholder} />
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {options.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
        {children}
      </SelectV2.Menu>
    </StyledSelectRoot>
  );
}

export default Select;

const StyledSelectRoot = styled(SelectV2.Root)<{ disabled: boolean }>`
  pointer-events: ${({ disabled }) => disabled && 'none'};

  & svg {
    display: ${({ disabled }) => disabled && 'none'};
  }
`;
