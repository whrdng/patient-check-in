import { Dispatch, SetStateAction } from "react";
import {
  Control,
  type FieldValues,
  type FormState,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormRegisterReturn,
  type UseFormWatch,
} from "react-hook-form";

type Register = UseFormRegister<FieldValues>;
type SetFormStep = Dispatch<SetStateAction<number>>;

export interface FormProps {
  register: Register;
  tailwind?: string;
  formState: FormState<FieldValues>;
  watch?: UseFormWatch<any>;
  getValues?: UseFormGetValues<any>;
}

export interface VisitForFormProps extends FormProps {
  tailwind?: string;
  register: Register;
}

export interface ComplaintProps extends FormProps {
  control: Control<any, any>;
}

export type TopNavProps = {
  setFormStep: SetFormStep;
  formStep: number;
  numSteps: number;
  tailwind?: string;
};

export type RadioItemProps = {
  label: string;
  name: string;
  registration: UseFormRegisterReturn<string>;
};

export type NextButtonProps = {
  tailwind?: string;
  isNextButtonActive: boolean;
  setFormStep: SetFormStep;
  numForms: number;
  formStep: number;
  getValueFns: any[];
  isValidMarkers: boolean[]
};

export type CheckListProps = {
  options: string[];
  name: string;
  control: Control;
  tailwind?: string;
  required?: boolean;
};
