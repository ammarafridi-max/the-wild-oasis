import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSetting } from './useEditSetting';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const { isLoading, error, settings } = useSettings();
  const { isUpdating, updateSetting } = useEditSetting();

  isLoading && <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings?.minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={settings?.maxBookingLength} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" defaultValue={settings?.maxGuestsPerBooking} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" defaultValue={settings?.breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
