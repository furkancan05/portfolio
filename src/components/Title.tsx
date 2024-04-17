export default function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6 mt-20 mb-10">
      <p className="text-3xl font-bold whitespace-nowrap">{title}</p>
      <div className="w-full h-0.5 bg-primary"></div>
    </div>
  );
}
