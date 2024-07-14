"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Logo from "../../../../public/images/logo.png";
import { RoutesPath } from "@/enums";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import FooterLink from "./FooterLink";
import FooterColumnTitle from "./FooterColumnTitle";

const formSchema = z.object({
  email: z.string().email("Le format de l'adresse mail est incorrect"),
  message: z.string().min(2, {
    message: "Veuillez saisir au moins 2 caractères",
  }),
});

const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function handleSubmitForm(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <footer className="flex flex-col items-center gap-6 bg-secondary py-16 px-4 md:px-24">
      <section className="flex w-full flex-col sm:flex-row items-start max-w-[1440px] justify-between gap-y-[20px]">
        <div className="max-sm:w-full">
          <FooterColumnTitle>Plan du site</FooterColumnTitle>

          <ul>
            <FooterLink href={RoutesPath.HOME}>Accueil</FooterLink>
            <FooterLink href={RoutesPath.BOOKS}>Livres</FooterLink>
            <FooterLink href={RoutesPath.ABOUT}>A propos</FooterLink>
            <FooterLink href={RoutesPath.CONTACT}>Contact</FooterLink>
          </ul>
        </div>

        <div className="max-sm:w-full">
          <FooterColumnTitle>Suivez-nous</FooterColumnTitle>

          <ul>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
          </ul>
        </div>

        <div className="max-sm:w-full">
          <FooterColumnTitle>Contactez-nous</FooterColumnTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitForm)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        id="email"
                        placeholder="johndoe@domain.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Message ..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Envoyer</Button>
            </form>
          </Form>
        </div>
      </section>

      <section className="flex flex-col items-center gap-2">
        <Image src={Logo} alt="Logo Avenue du Livre" style={{ width: 150 }} />
        <p className="text-xs">
          &copy;2024. Réalisé par Thomas BULLE. Tous droits réservés.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
