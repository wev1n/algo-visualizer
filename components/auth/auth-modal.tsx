"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";

export default function AuthModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden sm:max-w-[425px]">
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
