import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

export function useCreateCabin() {
  const { reset } = useForm();
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin created');
      queryClient.invalidateQueries({ queryKey: 'cabins' });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createCabin, isCreating };
}
