export default function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-semibold text-white">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}
