import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';

export function useEditSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => updateSettingApi(newCabinData, id),
    onSuccess: () => {
      toast.success('Settings updated');
      queryClient.invalidateQueries({ queryKey: 'settings' });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSetting, isUpdating };
}
