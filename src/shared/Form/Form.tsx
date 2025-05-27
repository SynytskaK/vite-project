"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { fields } from "../constants"
import { SubmitedForm } from "./SubmitedForm"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "../ThemeProvider/ThemeProvider"
import { Checkbox } from "@/components/ui/checkbox"

export const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    age: z.coerce.number().min(1, {
        message: "Age must be > 16.",
    }),
})

export const ProfileForm = () => {
    const { setTheme, theme } = useTheme()

    const [openDialog, setOpenDialog] = useState(false)
    const [submittedValues, setSubmittedValues] = useState<z.infer<typeof formSchema> | null>(null)
    const [checked, setChecked] = useState(false)
    const [checkErrorMessage, setCheckErrorMessage] = useState(false)

    const isDark = theme === "dark"

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            age: 0,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!checked) {
            setCheckErrorMessage(true);
            return
        }
        setOpenDialog(true);
        setSubmittedValues(values);
        form.reset()
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    {fields.map((fieldDef) => {
                        const error = form.formState.errors[fieldDef.name as keyof z.infer<typeof formSchema>]
                        return (
                            <FormField
                                key={fieldDef.name}
                                control={form.control}
                                name={fieldDef.name as keyof z.infer<typeof formSchema>}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{fieldDef.label}</FormLabel>
                                        <FormControl>
                                            <Input
                                                type={fieldDef.type}
                                                placeholder={fieldDef.placeholder}
                                                {...field}
                                                className="text-sm"
                                            />
                                        </FormControl>
                                        {error ? <FormMessage className="text-left text-[10px]" /> : <FormDescription className="text-left text-[10px] text-gray-400">{fieldDef.description}</FormDescription>
                                        }
                                    </FormItem>
                                )}
                            />
                        )
                    })}

                    <div className="flex flex-row items-center justify-between">
                        <div className="text-sm text-gray-400">Please accept terms and conditions</div>
                        <div className="flex flex-col items-end">
                            {checkErrorMessage && <p className="text-[8px] text-red-400">*Please submit terms</p>}
                            <Checkbox
                                checked={checked}
                                onCheckedChange={() => {
                                    setChecked(!checked);
                                    setCheckErrorMessage(false);
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <div className="text-sm"><strong>Toggle theme</strong></div>
                            <Switch
                                checked={isDark}
                                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                            />
                        </div>
                        <Button className='bg-blue-300' type="submit">Submit</Button>
                    </div>

                </form>
            </Form>
            {openDialog && submittedValues && (
                <SubmitedForm
                    open={openDialog}
                    setOpen={setOpenDialog}
                    values={submittedValues}
                />
            )}
        </>
    )
}
