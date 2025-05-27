import { ProfileForm } from "@/shared/Form/Form";

export const Settings = () => {
  return (
    <div className="flex-1 gap-6 flex-col flex items-center">
      <h1 className="text-2xl font-semibold">Settings</h1>
        <div className="max-w-sm w-full border border-blue-200 p-4 rounded-lg shadow-md">
          <ProfileForm />
      </div>
    </div>
  );
}