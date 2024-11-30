import Link from "next/link";

function Page() {
  return (
    <>
      <p>Invoices Page</p>
      <Link href="/dashboard/customers">customers</Link>
    </>
  );
}

export default Page;
