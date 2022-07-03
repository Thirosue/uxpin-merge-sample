import React from "react";
import Typography from "../../Typography/Typography"

type Props = {
  children: string
  classes?: string[]
};

const FormLabel = ({
  children,
  classes = ['mt-1'],
}: Props) => <Typography variant={'body2'} classes={classes}>{children}</Typography>

export default FormLabel
