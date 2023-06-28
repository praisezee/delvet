import { Toast,  ToastHeader } from 'react-bootstrap';
import useMainContext from '../hooks/useMainContext';

const Toasts = ({text,variant}) =>
{
  const {toast, setToast} = useMainContext()
  return (
  
    <Toast bg={variant} show={toast} delay={5000} autohide onClose={()=>setToast(false)}>
      <ToastHeader closeButton>
          <strong className='me-auto'>{ text }</strong>
      </ToastHeader>
    </Toast>
  )
}

export default Toasts
