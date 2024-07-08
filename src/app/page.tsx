import Image from "next/image";
import Link from "next/link";
import PatientForm from "./_components/forms/patientForm";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/logo.svg"
            alt="Logo CarePulse"
            width={161}
            height={32}
            priority
            className="object-contain w-fit h-10 mb-12"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/bg.png"
        alt="doctors"
        width={720}
        height={1024}
        className="side-img max-w-1/2"
      />
    </main>
  );
}
