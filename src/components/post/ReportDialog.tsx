import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ReportForm from "../ReportForm";

interface ReportDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  postId: string;
}

const ReportDialog: React.FC<ReportDialogProps> = ({
  isOpen,
  onOpenChange,
  postId,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Signaler le contenu</DialogTitle>
          <DialogDescription>
            indiquer la raison.
          </DialogDescription>
        </DialogHeader>

        <ReportForm postId={postId} />
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
