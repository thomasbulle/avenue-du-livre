import { CheckedState } from "@radix-ui/react-checkbox";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export type CheckboxFormProps = {
  label: string;
  checked: boolean;
  onChange: (checked: CheckedState) => void;
};

const CheckboxForm = ({ label, checked, onChange }: CheckboxFormProps) => {
  return (
    <div className="flex gap-1">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      <Label>{label}</Label>
    </div>
  );
};

export default CheckboxForm;
