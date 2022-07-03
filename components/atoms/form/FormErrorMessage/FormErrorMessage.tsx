import React from "react";

type Props = {
  children: string
  classes?: string[]
};

const FormErrorMessage = ({
  children,
  classes = ['mt-1'],
}: Props) => <p className={['text-red-500', 'text-xs', ...classes].join(' ')}>{children}</p>

export default FormErrorMessage
