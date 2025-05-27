import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { formSchema } from "./Form";
import type { z } from "zod";

type SubmitedFormProps = {
    open: boolean
    setOpen: (open: boolean) => void;
    values: z.infer<typeof formSchema> | null;
}
export const SubmitedForm = ({ open, setOpen, values }: SubmitedFormProps) => {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">Your submited data</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="space-y-1 text-sm items-start">
                    {values &&
                        Object.entries(values).map(([key, value]) => (
                            <div key={key}>
                                <strong className="capitalize">{key}:</strong> {value as string}
                            </div>
                        ))}
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
