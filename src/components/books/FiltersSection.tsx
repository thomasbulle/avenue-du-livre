"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CheckboxForm from "./CheckboxForm";

const formSchema = z.object({
  genders: z.array(z.string()),
  publics: z.array(z.string()),
  ratings: z.array(z.number()),
});

const FiltersSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      genders: [],
      publics: [],
      ratings: [],
    },
  });

  function handleSubmitForm(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <aside className="max-sm:w-full w-1/4">
      <h3 className="font-bold text-center lg:text-start text-xl">Filtres</h3>

      <div>
        <Form {...form}>
          <form
            onChange={form.handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="genders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-1xl">Genre</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <CheckboxForm
                        label="Romance"
                        checked={field.value.includes("romance")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "romance"]
                              : field.value.filter((v) => v !== "romance")
                          )
                        }
                      />
                      <CheckboxForm
                        label="Fantastique"
                        checked={field.value.includes("fantastique")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "fantastique"]
                              : field.value.filter((v) => v !== "fantastique")
                          )
                        }
                      />
                      <CheckboxForm
                        label="Science-Fiction"
                        checked={field.value.includes("science-Fiction")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "science-Fiction"]
                              : field.value.filter(
                                  (v) => v !== "science-Fiction"
                                )
                          )
                        }
                      />
                      <CheckboxForm
                        label="Historique"
                        checked={field.value.includes("historique")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "historique"]
                              : field.value.filter((v) => v !== "historique")
                          )
                        }
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="publics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-1xl">Public</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <CheckboxForm
                        label="Enfant"
                        checked={field.value.includes("children")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "children"]
                              : field.value.filter((v) => v !== "children")
                          )
                        }
                      />
                      <CheckboxForm
                        label="Adulte"
                        checked={field.value.includes("adult")}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, "adult"]
                              : field.value.filter((v) => v !== "adult")
                          )
                        }
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ratings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-1xl">Public</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <CheckboxForm
                        label="⭐⭐⭐⭐⭐"
                        checked={field.value.includes(5)}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, 5]
                              : field.value.filter((v) => v !== 5)
                          )
                        }
                      />
                      <CheckboxForm
                        label="⭐⭐⭐⭐"
                        checked={field.value.includes(4)}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, 4]
                              : field.value.filter((v) => v !== 4)
                          )
                        }
                      />
                      <CheckboxForm
                        label="⭐⭐⭐"
                        checked={field.value.includes(3)}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, 3]
                              : field.value.filter((v) => v !== 3)
                          )
                        }
                      />
                      <CheckboxForm
                        label="⭐⭐"
                        checked={field.value.includes(2)}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, 2]
                              : field.value.filter((v) => v !== 2)
                          )
                        }
                      />
                      <CheckboxForm
                        label="⭐"
                        checked={field.value.includes(1)}
                        onChange={(isChecked) =>
                          field.onChange(
                            isChecked
                              ? [...field.value, 1]
                              : field.value.filter((v) => v !== 1)
                          )
                        }
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </aside>
  );
};

export default FiltersSection;
