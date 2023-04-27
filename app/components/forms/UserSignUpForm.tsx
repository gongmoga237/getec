import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Stack,
  Center,
} from "@chakra-ui/react";
import z from "zod";
import validator from "validator";

import { Form } from "~/utils/form";

export const schema = z.object({
  email: z.string().min(1).email(),
  firstname: z.string().min(1).max(50),
  lastname: z.string().min(1).max(50),
  password: z.string().min(3).max(50),
  telephone: z.string().refine(validator.isMobilePhone),
});

interface UserSignUpFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  action?: string;
}

export default function UserSignUpForm({
  onSubmit,
  action,
}: UserSignUpFormProps) {
  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      buttonComponent={Button}
      noValidate
      buttonLabel="Créer le compte"
      pendingButtonLabel="En cours de création"
      action={action}
    >
      {({ Field, register, Button }) => (
        <Stack spacing="4">
          <Field
            name="firstname"
            label="Nom"
            placeholder="Veuillez saisir votre nom"
          >
            {({ label, name, required, placeholder, errors }) => (
              <FormControl
                id={name}
                isRequired={required}
                isInvalid={errors && Boolean(errors[0])}
              >
                <FormLabel>{label}</FormLabel>
                <Input {...register(name)} placeholder={placeholder} />
                <FormErrorMessage>{errors && errors[0]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field
            name="lastname"
            label="Prénom"
            placeholder="Veuillez saisir votre prénom"
          >
            {({ label, name, required, placeholder, errors }) => (
              <FormControl
                id={name}
                isRequired={required}
                isInvalid={errors && Boolean(errors[0])}
              >
                <FormLabel>{label}</FormLabel>
                <Input {...register(name)} placeholder={placeholder} />
                <FormErrorMessage>{errors && errors[0]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field
            name="email"
            label="Adresse de messagerie électronique"
            placeholder="Messagerie électronique"
          >
            {({ label, name, required, placeholder, errors }) => (
              <FormControl
                id={name}
                isRequired={required}
                isInvalid={errors && Boolean(errors[0])}
              >
                <FormLabel>{label}</FormLabel>
                <Input
                  type="email"
                  {...register(name)}
                  autoComplete="username"
                  placeholder={placeholder}
                />
                <FormErrorMessage>{errors && errors[0]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field
            name="password"
            label="Mot de passe"
            placeholder="Mot de passe"
          >
            {({ label, name, required, placeholder, errors }) => (
              <FormControl
                id={name}
                isRequired={required}
                isInvalid={errors && Boolean(errors[0])}
              >
                <FormLabel>{label}</FormLabel>
                <Input
                  type="password"
                  {...register(name)}
                  autoComplete="current-password"
                  placeholder={placeholder}
                />
                <FormErrorMessage>{errors && errors[0]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field
            name="telephone"
            label="Numéro de téléphone"
            placeholder="Saisir votre numéro de téléphone."
            defaultValue="+237"
          >
            {({ label, name, required, placeholder, errors }) => (
              <FormControl
                id={name}
                isRequired={required}
                isInvalid={errors && Boolean(errors[0])}
              >
                <FormLabel>{label}</FormLabel>
                <Input
                  type="tel"
                  {...register(name)}
                  autoComplete="current-password"
                  placeholder={placeholder}
                  defaultValue="+237"
                />
                <FormErrorMessage>{errors && errors[0]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Center>
            {/* @ts-expect-error */}
            <Button type="submit" colorScheme="teal" maxW={300} />
          </Center>
        </Stack>
      )}
    </Form>
  );
}
