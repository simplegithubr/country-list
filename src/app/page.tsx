import Link from "next/link";



export default function Home() {
  return (
<div>
  <h1 className="bg-slate-500 items-start justify-center flex   p-6 text-white font-bold text-4xl ">Country List</h1>
  <nav className=" gap-6 flex flex-col  p-9">
  <Link className="font-bold text-3xl" href="/country/pakistan" >pakistan</Link>
  <Link className="font-bold text-3xl" href="/country/india">India</Link>
  <Link className="font-bold text-3xl" href="/country/korea">Korea</Link>
  <Link className="font-bold text-3xl" href="/country/japan">Japan</Link>
  <Link className="font-bold text-3xl" href="/country/england">England</Link>
  </nav>
</div>
  );
}
