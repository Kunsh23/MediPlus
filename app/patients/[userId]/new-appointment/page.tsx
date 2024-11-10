import Image from "next/image";
import Right_Img from "@/public/assets/images/appointment-img.png";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP Verification */}

      <section className="remove-scrollbar container h-full overflow-y-auto flex-1">
        <div className="sub-container max-w-[860px] mx-auto my-auto flex-1 flex-col py-10">
          <Image
            src="/assets/icons/MediPlus-Log.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10">
            © 2024 MediPlus
          </p>
        </div>
      </section>

      <Image
        src={Right_Img}
        height={1000}
        width={1000}
        alt="doctor"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
