import { Alert, Snackbar } from '@mui/material';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
  message: string;
  open: boolean;
  type: NotificationType;
  onClose: () => void;
}

export default function Notification(props: NotificationProps) {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}>
      <Alert severity={props.type} onClose={props.onClose} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
}
