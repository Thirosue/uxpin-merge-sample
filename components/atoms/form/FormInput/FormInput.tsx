import React from "react";
import Typography from "../../general/Typography/Typography"

type Props = {
  id: string
  type:
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
};

const FormInput = ({
  id,
  type = 'text',
}: Props) => <input
    id="email"
    type={type}
    className={'mt-1 w-full border-gray-300 block rounded-md focus:border-indigo-600'}
  />

export default FormInput
