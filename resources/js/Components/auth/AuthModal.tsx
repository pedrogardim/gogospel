import React from "react";
import { router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Icon } from "@/components/ui/icon";

import auth from "@/shared/assets/images/illustration/auth.png";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export const AuthModal = ({ onClose, open }: AuthModalProps) => {
  const { t } = useTranslation();

  const onLogin = () => {
    router.visit("/auth/login");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(a) => !a && onClose()}>
      <DialogContent>
        <DialogTitle>{t("auth.modal.title")}</DialogTitle>
        <DialogDescription>
          <div className="flex">
            <div className="flex flex-col w-[60%] gap-y-3">
              <span className="font-semibold">{t("auth.modal.text")}</span>
              {["connect", "serve", "mission", "grow"].map((item) => (
                <div className="flex" key={item}>
                  <Icon
                    name="check"
                    className="mr-1 text-indigo-500"
                    size={1}
                  />
                  <span className="flex-1">
                    {t(`auth.modal.items.${item}`)}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={auth}
              className="aspect-[1] mt-8 w-[40%] my-auto"
              alt="auth"
              height={200}
              width={200}
            />
          </div>

          <Button className="my-4" onClick={onLogin}>
            {t("auth.modal.button")}
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
